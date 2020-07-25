import React from 'react'

const ImagePreview = props => {
  return (
    <div className="p-media__thumb" onClick={() => {}}>
      <img src={props.path} alt="アイキャッチ画像" />
    </div>
  )
}

export default ImagePreview