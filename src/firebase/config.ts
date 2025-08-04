// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { ContactForm } from "../types/contact";
// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://contact-form-ae9f8-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const ContactReferenceInDB = ref(database, "ContactForm");

export function saveForm(user: ContactForm) {
    push(ContactReferenceInDB, user);
} 