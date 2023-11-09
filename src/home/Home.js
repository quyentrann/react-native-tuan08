import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImages}>
        <Text style={{fontSize : 25, fontWeight : 'bold'}}>Welcome to Cafe world</Text>
        <Image source={require("../../assets/imageHome/Image.png")} 
        style={{width : "80%", height : 100, borderRadius : 15}}/>
        <Image source={require("../../assets/imageHome/Image1.png")} 
        style={{width : "80%", height : 100, borderRadius : 15}}/>
        <Image source={require("../../assets/imageHome/Image2.png")} 
        style={{width : "80%", height : 100, borderRadius : 15}}/>
      </View>
      <TouchableOpacity style={styles.btnStarted} onPress={() => navigation.navigate("Shop")}>
        <Text style={{fontSize : 20, fontWeight : 'bold', color : 'white'}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height  :'100%',
        display  :'flex',
        flexDirection : 'column',
        justifyContent  :'space-around',
        alignItems  :'center'
    },
    viewImages : {
        width : '100%',
        height : '70%',
        display  :'flex',
        flexDirection : 'column',
        justifyContent  :'space-between',
        alignItems  :'center'
    },
    btnStarted : {
        width : '80%',
        height : 60,
        display  :'flex',
        flexDirection : 'row',
        justifyContent  :'center',
        alignItems  :'center',
        backgroundColor : '#00BDD6',
        borderRadius : 15
    }
})