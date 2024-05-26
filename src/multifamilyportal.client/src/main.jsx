import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import COMPONENTS from '../Components/componentMapper'
import axios from 'axios';

let axiosInstance;

const axiosBaseConfig = {
    baseURL: import.meta.env.REACT_APP_API_URL,
    timeout: 1000 * 20,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

export const getAxios = () => {
    if (axiosInstance) {
        return axiosInstance;
    }

    axiosInstance = axios.create(axiosBaseConfig);

    return axiosInstance;
};



const hostname = window.location.hostname;

async function getData() {
    try {
        return await axios.get('/getConfig', {
            params: {
                host: hostname
            }
        })
    }
    catch (e) {
        return e.response;
    }
}

const data = await getData();
console.log("Data: ", data);
const theme = data.data[0].themeName;
const SelectedComponent = COMPONENTS[theme];

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SelectedComponent />
    </React.StrictMode>
);
