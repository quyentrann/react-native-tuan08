import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-web'

const Shop = ({ navigation }) => {
    const [shops, setShops] = useState(
        [
            {
            "path": "https://res.cloudinary.com/dsvx8aorm/image/upload/v1698736026/Image_y1zlsk.png",
            "name": "Kitanda Espresso & Acai-U District",
            "status": true,
            "deliverytime": "5-10 minutes",
            "address": "1121 NE 45 St",
            "id": "1"
            },
            {
            "path": "https://res.cloudinary.com/dsvx8aorm/image/upload/v1698736027/Image1_s6pc4n.png",
            "name": "Jewel Box Cafe",
            "status": false,
            "deliverytime": "10-15 minutes",
            "address": "1145 GE 54 St",
            "id": "2"
            },
            {
            "path": "https://res.cloudinary.com/dsvx8aorm/image/upload/v1698736027/Image2_ddgnql.png",
            "name": "Javasti Cafe",
            "status": false,
            "deliverytime": "15-20 minutes",
            "address": "1167 GE 54 St",
            "id": "3"
            },
            {
            "path": "https://res.cloudinary.com/dsvx8aorm/image/upload/v1698736028/Image3_zyoog5.png",
            "name": "Nguyen Lengend",
            "status": false,
            "deliverytime": "15-20 minutes",
            "address": "HCM city",
            "id": "4"
            }
        ]
    )

    useEffect(() => {
        let apiGetDataShops = async () => {
            let data = await axios.get("https://6549d7a4e182221f8d51f7c3.mockapi.io/api/lap07/shop")
            setShops(data.data);
        }
        apiGetDataShops()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle-outline' size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: '20px', marginRight: '30px' }}
                >
                    Shops Near Me
                </Text>
                <Ionicons name='search' size={30} />
            </View>
            <ScrollView style={{width : '100%', height : '90%'}}>
                {
                    shops.map((shop, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Drink", {shopID : shop.id})}>
                            <View style={styles.viewShop} key={index}>
                                <Image source={{uri : shop.path}} style={{width : '100%', height : '100px', borderRadius : '10px'}}/>
                                <View style={styles.viewStatus}>
                                    <View style={styles.flexRowBetween}>
                                        {
                                            shop.status
                                            ? <Ionicons name='checkmark-outline' size={25} style={{width : '20%', color : 'green'}}/>
                                            : <Ionicons name='lock-closed-outline' size={25} style={{width : '20%', color : 'red'}}/>
                                        }
                                        <Text 
                                        style={{
                                            width : '80%',fontSize : '15px',
                                            color : shop.status ? "green" : "red"
                                        }}>
                                            {shop.status ? "Accepting Orders" : "Tempory Unavailable"}
                                        </Text>
                                    </View>
                                    <View style={styles.flexRowBetweenMinutes}>
                                        <Ionicons name='time-outline' size={25} style={{width : '20%', color : 'green'}}/>
                                        <Text style={{width : '100%',fontSize : '15px', color : 'red'}}>{shop.deliverytime}</Text>
                                    </View>
                                    <Ionicons name='map-outline' size={25} style={{width : '10%', color : 'green'}}/>
                                </View>
                                <Text 
                                style={{fontSize : '18px', fontWeight : 'bold', marginLeft : '10px'}}>
                                    {shop.name}
                                </Text>
                                <Text 
                                style={{fontSize : '15px', fontWeight : 'bold', color : "rgba(188,193,202,1)", marginLeft : '10px'}}>
                                    {shop.address}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20px',
        backgroundColor : 'rgba(188,193,202,0.3)',
    },
    flexRowBetween : {
        width : '50%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(188,193,202,0.3)',
    },
    flexRowBetweenMinutes : {
        width : '35%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(188,193,202,0.3)',
        marginHorizontal : '5px'
    },
    viewHeader: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnBack: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewShop : {
        width: '100%',
        height : '190px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius : '10px',
        marginVertical : '10px',
        backgroundColor : 'white'
    },
    viewStatus : {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})