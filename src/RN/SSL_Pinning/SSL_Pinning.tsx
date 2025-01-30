/*
  1 . Install Package : npm install react-native-ssl-pinning
  2 . run following command to get certificate : openssl s_client -connect example.com:443 -showcerts
  3 . Copy from Begin_Certi TO End_Certi and create file in assets in android folder with .pem extension 
  4 .Below Code **As of now below is not working**
*/
import { Text, View } from "react-native"
import React, { useEffect } from "react";
import axios from "axios";
const SSL_Pinning = () =>{
  const fetchData = async () => {
    try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            timeout: 10000,
            sslPinning: {
              certs: ['jsonplaceholder'],
            },
          }as any);
    
          console.log('Response:', JSON.stringify(response.data , undefined , 4));
        } catch (error) {
          console.error('SSL Pinning Error:', error);
        }
      };

      useEffect(()=>{
        fetchData()
        return ()=>{
          console.log("Clean Up Called");
        }
      })
    return(
        <View>
          <Text style={{color:"#000"}}>SSL Pinning</Text>
        </View>
    )
}

export default SSL_Pinning