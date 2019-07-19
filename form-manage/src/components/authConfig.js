import axios from 'axios';

 const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            authorization: `${token}`
        }, baseURL: "http://localhost:5000/api"
    });
};
export default axiosWithAuth;