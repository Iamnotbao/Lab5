import React, { useState, useEffect } from "react";
import Styles from './Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

const [data, setData] = useState([])

const Service_Details = () => {
    async function Details() {
        const value =await AsyncStorage.getItem('token');
        console.log(value)
        useEffect(() => {
           await fetch('https://kami-backend-5rs0.onrender.com/services/{id}')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((d) => {
                    setData(d)
                })
                .catch((error)=> {
                    console.error('Error fetching data:', error);
                }
                )
        }
        )
    }
    return(
        
    );
};
export default Service_Details;