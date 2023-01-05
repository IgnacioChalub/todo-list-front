import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/"

export const loginRequest = (
    username, password, successCallback, errorCallback
) => {
   axios.post(BASE_URL + "user/login", {
       username: username,
       password: password
   }).then(res => {
        successCallback(res)
   }).catch(err => {
       errorCallback(err)
   })
}

export const registerRequest = (
    username, password, successCallback, errorCallback
) => {
    axios.post(BASE_URL + "user/signup", {
        username: username,
        password: password
    }).then(res => {
        successCallback(res)
    }).catch(err => {
        errorCallback(err)
    })
}