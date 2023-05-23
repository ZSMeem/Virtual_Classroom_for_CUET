import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

/*cuet id theke vc-2*/
const firebaseConfig = {
  apiKey: "AIzaSyAzB07WHpNxPHqd0xX4ECc1z42bY12Bi6E",
  authDomain: "virtual-classroom2-7f884.firebaseapp.com",
  projectId: "virtual-classroom2-7f884",
  storageBucket: "virtual-classroom2-7f884.appspot.com",
  messagingSenderId: "415233311767",
  appId: "1:415233311767:web:6c9558b8337ea1fb174852"
};
/*cuet id theke vc*/
/*const firebaseConfig = {
  apiKey: "AIzaSyAeDAiZeizKuEtKhlPXlRwFxO4H7mD0yho",
  authDomain: "virtua-classroom.firebaseapp.com",
  projectId: "virtua-classroom",
  storageBucket: "virtua-classroom.appspot.com",
  messagingSenderId: "871745918677",
  appId: "1:871745918677:web:b8034ef0c7828953efb45c"
};*/
/*zsm id theke vc3*/
/*const firebaseConfig = {
  apiKey: "AIzaSyDK9rp-F8vvcKE1tTCF-OCorXyHGIwumlA",
  authDomain: "virtual-classroom3.firebaseapp.com",
  projectId: "virtual-classroom3",
  storageBucket: "virtual-classroom3.appspot.com",
  messagingSenderId: "711798521113",
  appId: "1:711798521113:web:fdc51e2107a0afcfacd988",
};*/
/*Tasnim meem vc4 */
/*const firebaseConfig = {
  apiKey: "AIzaSyB-F6KNUYG86waMnYSovS9SWDLK6W8auM0",
  authDomain: "virtal-classroom4.firebaseapp.com",
  projectId: "virtal-classroom4",
  storageBucket: "virtal-classroom4.appspot.com",
  messagingSenderId: "670121010874",
  appId: "1:670121010874:web:6ec8f47a5af7c2c683c483",
  measurementId: "G-K686W459FD"
};*/
/* the spectre vc4*/
/*const firebaseConfig = {
  apiKey: "AIzaSyBADN6YKO4bJbeUV5axGDEEVsOh1dAfRKE",
  authDomain: "virtual-classroom4.firebaseapp.com",
  projectId: "virtual-classroom4",
  storageBucket: "virtual-classroom4.appspot.com",
  messagingSenderId: "616481905308",
  appId: "1:616481905308:web:eb287656bb636eb5cdab59",
  measurementId: "G-8CWY2JQQPL"
};*/
/* v5 zerinxshaimaxmeem */
/*const firebaseConfig = {
  apiKey: "AIzaSyDF9fZsFR17xkglCRpJIrKwHnhtDsvAs4s",
  authDomain: "virtual-classroom5.firebaseapp.com",
  projectId: "virtual-classroom5",
  storageBucket: "virtual-classroom5.appspot.com",
  messagingSenderId: "120264742755",
  appId: "1:120264742755:web:93b55cb436afa084542556",
  measurementId: "G-0EH02H7ZC5"
};*/
/*despicalehim224 vc7 */
/*const firebaseConfig = {
  apiKey: "AIzaSyDW9yplw7bsZyYbEZCPy87a2b0p-qjw2fI",
  authDomain: "virtual-classroom7-f738c.firebaseapp.com",
  projectId: "virtual-classroom7-f738c",
  storageBucket: "virtual-classroom7-f738c.appspot.com",
  messagingSenderId: "845724775288",
  appId: "1:845724775288:web:9691ac1f4f9a1079f54e8d",
  measurementId: "G-5310PXEGSD"
};*/
/* tabiz faruk vc-8 */
/*const firebaseConfig = {
  apiKey: "AIzaSyCiuU4PNZXspd8JQjtusBW01JfXW5V5w3g",
  authDomain: "virtual-classroom8.firebaseapp.com",
  projectId: "virtual-classroom8",
  storageBucket: "virtual-classroom8.appspot.com",
  messagingSenderId: "1030731348986",
  appId: "1:1030731348986:web:45062a702c5cb4ecc1c243",
  measurementId: "G-MPH7J9VFEE"
};*/

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage};