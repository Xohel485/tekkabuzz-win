import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMLHaEh1TE44AsVuyoKbuxsxdxTppm6dM",
  authDomain: "tekkabuzz-in.firebaseapp.com",
  databaseURL: "https://tekkabuzz-in-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tekkabuzz-in",
  storageBucket: "tekkabuzz-in.firebasestorage.app",
  messagingSenderId: "132333789092",
  appId: "1:132333789092:web:055159040ed77489986b31"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const ADMIN_UID = "LbgMjlHItiMToyx4ZZj91E0LKbe2";
