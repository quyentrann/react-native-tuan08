import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const Order = ({ route, navigation }) => {
    const [orders, setOrders] = useState([
        {
            "path": "https://www.thespruceeats.com/thmb/48wEw5d9xwXRxyozxakJO59waKI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cafeconleche-56fcf86e5f9b586195b73dbf.JPG",
            "name": "Milk Coffee",
            "prices": 97,
            "quantity": 1,
            "shopID": "1",
            "id": "1"
        },
        {
            "path": "https://superpower.vn/uploads/details/2021/06/images/113.png",
            "name": "Coffee",
            "prices": 50,
            "quantity": 1,
            "shopID": "1",
            "id": "2"
        },
        {
            "path": "https://cms.vietnamcoracle.com/wp-content/uploads/2023/08/VC-Cofee-draft-3-title-final-scaled.jpg",
            "name": "Salt Coffee",
            "prices": 57,
            "quantity": 1,
            "shopID": "1",
            "id": "3"
        },
        {
            "path": "https://chefjob.vn/wp-content/uploads/2020/07/cappuccino-cafe-cua-y.jpg",
            "name": "Capuchino",
            "prices": 70,
            "quantity": 1,
            "shopID": "1",
            "id": "4"
        }
    ])

    const [total, setTotal] = useState(0)
    const [deliveryPrices, setDeliveryPrices] = useState(25)
    useEffect(() => {
        setOrders(route.params.orders)
        setTotal(route.params.orders.reduce((total, order) => total + (order.quantity * order.prices), 0))
    }, [JSON.stringify(route.params.orders)])
    return (
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle-outline' size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: '20px', marginRight: '30px' }}
                >
                    Your orders
                </Text>
                <Ionicons name='search' size={30} />
            </View>
            <View style={{ ...styles.viewTotal, backgroundColor: '#00BDD6' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>CAFE DELIVERY</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>${deliveryPrices}</Text>
            </View>
            <View style={{ ...styles.viewTotal, backgroundColor: '#8353E2' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>CAFE</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>${total}</Text>
            </View>
            <ScrollView style={{ width: '100%' }}>
                {
                    // route.params.shopID
                    orders.map(order => (
                        <View style={styles.viewContentDrink}>
                            <View style={styles.viewImageNamePrices}>
                                <Image source={{ uri: order.path }} resizeMode='stretch' style={{ width: 80, height: 80, borderRadius: 10 }} />
                                <View style={styles.viewNamePrices}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{order.name}</Text>
                                    <Text style={{ fontSize: 15, color: '#565E6C' }}>${order.prices}</Text>
                                </View>
                            </View>
                            <View style={styles.viewQuantity}>
                                <TouchableOpacity>
                                    <Ionicons name='remove-circle' size={25} style={{ color: 'green' }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{order.quantity}</Text>
                                <TouchableOpacity>
                                    <Ionicons name='add-circle' size={25} style={{ color: 'green' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <TouchableOpacity style={styles.btnGoToCart} onPress={() => navigation.navigate("Order", { orders: drinks.filter(drink => drink.quantity > 0) })}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>PAY NOW</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20px',
        backgroundColor: 'rgba(188,193,202,0.3)',
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
    viewTotal: {
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    viewContentDrink: {
        width: '100%',
        height: '85px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth : 1,
        borderColor : 'black',
        marginVertical : 10,
        borderRadius : 10
    },
    viewImageNamePrices : {
        width: '70%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewNamePrices : {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical : 5,
        marginLeft : 10
    },
    viewQuantity : {
        width: '30%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnGoToCart : {
        width: '100%',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#EFB034',
        borderRadius : 10,
        marginVertical : 20
    }
})