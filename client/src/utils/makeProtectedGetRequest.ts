import axios from 'axios'; 
export async function makeProtectedGetRequest(apiToCall:string, token:string){ 
    const data = await axios.get(apiToCall, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }); 
    return data; 
}