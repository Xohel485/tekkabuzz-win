import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, type Database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMLHaEh1TE44AsVuyoKbuxsxdxTppm6dM",
  authDomain: "tekkabuzz-in.firebaseapp.com",
  databaseURL: "https://tekkabuzz-in-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tekkabuzz-in",
  storageBucket: "tekkabuzz-in.firebasestorage.app",
  messagingSenderId: "132333789092",
  appId: "1:132333789092:web:055159040ed77489986b31"
};

let _app: FirebaseApp | null = null;
let _db: Database | null = null;

function getApp(): FirebaseApp {
  if (!_app) {
    _app = initializeApp(firebaseConfig);
  }
  return _app;
}

export function getDb(): Database {
  if (!_db) {
    _db = getDatabase(getApp());
  }
  return _db;
}

// Keep backwards-compatible exports (lazy getters)
export const app = new Proxy({} as FirebaseApp, {
  get(_, prop) { return (getApp() as any)[prop]; }
});
export const db = new Proxy({} as Database, {
  get(_, prop) { return (getDb() as any)[prop]; }
});

export const ADMIN_UID = "LbgMjlHItiMToyx4ZZj91E0LKbe2";
