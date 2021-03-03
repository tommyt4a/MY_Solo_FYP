
import firebase from 'firebase'

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({ currentUser: snapshot.data()})
            }
            else{
                console.log('does not exist')
            }
        })
    })
}