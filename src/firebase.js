import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCFQYJpRIGOAEYRSMZHhViKPscckdPILkY",
authDomain: "blogapp-c8626.firebaseapp.com",
projectId: "blogapp-c8626",
storageBucket: "blogapp-c8626.appspot.com",
messagingSenderId: "440942738867",
appId: "1:440942738867:web:43079b9fd31eb69f919fc6",
measurementId: "G-5FTE916PKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;