import config from '../config'

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
}

export default AuthApiService