import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseApiKey, firebaseProjectId } from './config';

firebase.initializeApp({
  apiKey: firebaseApiKey,
  authDomain: `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectId}.firebaseio.com`,
  projectId: firebaseProjectId,
  storageBucket: `${firebaseProjectId}.appspot.com`,
})

const auth = firebase.auth()
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export { auth, db }