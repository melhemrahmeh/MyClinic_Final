
export default class APIService {
    
    static async UpdatePatient(article_id, body, token) {

     const resp = await fetch(`http://127.0.0.1:8000/api/patient/${patient_id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        })
        return await resp.json()


    }

    static async InsertPatient(body, token) {

      const resp = await fetch('http://127.0.0.1:8000/api/patient/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        })
        return await resp.json()

    }

    static DeletePatient(article_id, token) {

      return fetch(`http://127.0.0.1:8000/api/patient/${patient_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })

    }

    static async LoginUser(body) {

      const resp = await fetch('http://127.0.0.1:8000/auth/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()

    }


    static async RegisterUser(body) {

      const resp = await fetch('http://127.0.0.1:8000/api/users/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()

    }


}