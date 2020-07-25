import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'
import { storage } from '../../firebase/index'
import IconButton from '@material-ui/core/IconButton'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import { useDispatch } from 'react-redux'
import { showLoadingAction, hideLoadingAction } from '../../reducks/loading/actions'
import { ImagePreview } from './index'


const useStyles = makeStyles({
  icon: {
    marginRight: 8,
    height: 48,
    width: 48,
  }
})

const ImageArea = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const images = props.images

  const uploadImage = useCallback(e => {
    dispatch(showLoadingAction("uploading..."))
    
    const file = e.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });

    // Generate random 16 digits strings
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('')

    const uploadRef = storage.ref('images').child(fileName)
    const uploadTask = uploadRef.put(blob)

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const newImage = { id: fileName, path: downloadURL };
        props.setImages((prevState => [...prevState, newImage]))
        dispatch(hideLoadingAction())
      })
    }).catch(() => {
      dispatch(hideLoadingAction())
    }, [props.setImages])
  })

  return (
    <div>
      <div className="p-grid__list-images">
        {images.length > 0 && (
          images.map(image => <ImagePreview id={image.id} path={image.path} key={image.id} />)
        )}
      </div>
      <div className="u-text-right">
        <span>商品画像を登録をする</span>
        <IconButton className={classes.icon}>
          <label>
            <AddPhotoAlternateIcon />
            <input 
              className="u-display-none" 
              type="file" 
              id="image" 
              onChange={e => uploadImage(e)} />
          </label>
        </IconButton>
      </div>
    </div>
  )
};

export default ImageArea