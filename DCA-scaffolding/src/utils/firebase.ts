import {firebaseConfig} from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs
  } from "firebase/firestore";

export const addUsuario = async (usuario: any)=>{
    console.log(usuario);
    
    try {
        const where = collection(db, "Usuarios");
        await addDoc(where, usuario);
        console.log("se añadió con éxito");
    } catch (error) {
        console.error(error);
    }
}

export const arregloUsuario = async ()=>{
    try {
        const querySnapshot = await getDocs(collection(db, "Usuarios"));
        const arreglo: any = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          arreglo.push({id:doc.id,...data})
        });  
        return arreglo
    } catch (error) {
        console.error(error)
    }
}

export default { addUsuario, arregloUsuario }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);