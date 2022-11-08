import axios from 'axios';

export async function getData(url) {
    return axios.get(url).then(function (response) {
        if (response.data) {
            return response.data;
        } else {
            return false;
        }
    }).catch(function (error) {
        console.log(error.message)
        return false;
    });
}
