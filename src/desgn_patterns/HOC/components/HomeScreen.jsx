import React from "react";
import { Text, View } from "react-native";

const HomeScreen = ({themeMode}) =>{
    console.log("Theme : " , themeMode);
    
    return(
        <View style={{backgroundColor:themeMode.backgroundColor}}>
            <Text style={{color:themeMode.color}}>Welcome To HomeScreen</Text>
        </View>
    )
}

export default HomeScreen