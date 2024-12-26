// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL7Fuv1Sfck_7wX9yteURDBuf2Gi5YswU",
  authDomain: "primerproyecto-5cafc.firebaseapp.com",
  projectId: "primerproyecto-5cafc",
  storageBucket: "primerproyecto-5cafc.firebasestorage.app",
  messagingSenderId: "1076534468777",
  appId: "1:1076534468777:web:0597af821dce4e8bb3c9b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Ejemplo de cómo leer datos de Firebase
const positionRef = ref(database, 'position'); // Ruta 'position' en la base de datos
onValue(positionRef, (snapshot) => {
  const data = snapshot.val();
  if (data) {
    console.log('Datos de la posición:', data);
  } else {
    console.log('No se encontraron datos');
  }
});

export { database };