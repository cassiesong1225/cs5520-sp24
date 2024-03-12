import { collection, addDoc,deleteDoc,doc,getDocs } from "firebase/firestore";
import { database } from "./firebaseSetup";
export async function writeToDB(data, col, docID, subCol) {
    try {
        if (docID) {
            await addDoc(collection(database, col, docID, subCol), data);
        } else {
            await addDoc(collection(database, "goals"), data);
        }
    }
    catch (err) { console.log("Error adding document: ", err); }
}


export async function deleteFromDB(id) { 
    try { await deleteDoc(doc(database, "goals",id)); }
    catch (err) {
        console.log("Error deleting document: ", err);
    }
}

export async function getAllDocs(path) {
  try {
    const querySnapshot = await getDocs(collection(database, path));
    let newArray = [];
    querySnapshot.forEach((doc) => {
      newArray.push(doc.data());
      console.log(doc.data());
    });
    return newArray;
  } catch (err) {
    console.log(err);
  }
}


