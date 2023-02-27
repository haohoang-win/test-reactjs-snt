import axios from '../utils/axiosCustomize';

const Login = () => {
    let dataLogin = {
        grant_type: 'client_credentials',
        client_id: 'v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ',
        client_secret: '91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H'
    }
    return axios.post('/oauth2/token', dataLogin);
}

const getAllAnimal = (page, name) => {
    return axios.get(`/animals?page=${page}&&${name ? `name=${name}` : ''}`);
}

const getAnimalById = (id) => {
    return axios.get(`/animals/${id}`);
}

export { Login, getAllAnimal, getAnimalById }
