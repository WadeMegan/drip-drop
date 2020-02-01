import config from '../config'

const PlantApiService = {
    getAllPlants(){
        return fetch(`${config.API_ENDPOINT}/plants`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    getUsersPlants(userId){
        return fetch(`${config.API_ENDPOINT}/reminders/users/${userId}`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    },
    postNewReminder(plantId,userId){

        //adds one day to current day, so sms reminders start the next day
        const newDate = new Date(new Date().getTime()+(1*24*60*60*1000)).toISOString().split('T')[0]

        return fetch(`${config.API_ENDPOINT}/reminders`,{
            method: 'POST',
            body: JSON.stringify({
                'plant_id':plantId,
                'user_id':userId,
                'remind_on':newDate
            }),
            headers: {
                "content-type":"application/json"
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    }, 
    deleteReminder(plantId,userId){

        return fetch(`${config.API_ENDPOINT}/reminders/plants/${plantId}/users/${userId}`,{
            method: 'DELETE'
        })

            .then(res =>
                (!res.ok)
                    ? res.json().then(e=>Promise.reject(e))
                    : res.json()
            )
    }, 

}

export default PlantApiService