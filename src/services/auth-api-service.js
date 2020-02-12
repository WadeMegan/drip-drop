import config from '../config'
import 'whatwg-fetch'; //for safari

const AuthApiService = {
    postLogin({user_name, password}){
        return fetch(`${config.API_ENDPOINT}/auth/login`,{
            method: 'POST',
            body: JSON.stringify({
                'email':`${user_name}`, 
                'password':`${password}`
            }),    
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res=>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    postUser(user){
        return fetch(`${config.API_ENDPOINT}/users`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res=>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
}

export default AuthApiService