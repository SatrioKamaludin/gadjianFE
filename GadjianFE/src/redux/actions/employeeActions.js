//Loads and stores data of employees from API
import Axios from 'axios';

export const getAllEmployee = () => {
    return (dispatch) => {
        Axios.get('https://randomuser.me/api/?results=28')
        .then((res) => {
            localStorage.setItem('employeeData', JSON.stringify(res.data.results));
            dispatch({
                 type: 'GETDATA',
                payload: res.data.results
            })
        }).catch((err) => console.log(err));
    }
}

export const noRefresh = (data) => {
    return {
        type: 'GETDATA',
        payload: data
    }
}