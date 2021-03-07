
import firebase from 'firebase'

export const LOGIN = 'LOGIN'


export function login(useraccount){
    return { 
        type: LOGIN , 
        useraccount
    }
}
    
