import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emt-lab-02-backend.herokuapp.com/api',
    headers: {
        "Access-Control-Allow-Headers" : "*"
    }
})

export default instance;
