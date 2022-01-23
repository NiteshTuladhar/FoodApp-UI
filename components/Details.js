import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,Image, FlatList, ScrollView} from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import Constants from 'expo-constants'
import { getFoodDetails } from '../redux/actions/foodActions';
import AppLoader from './AppLoader';


const Details = ({ route, navigation }) => {
    const { item } = route.params;

    const dispatch = useDispatch()

    const popularFoodDetails = useSelector(state => state.foodDetails)
    const { loading, success, foodDetails } = popularFoodDetails

    useEffect(() => {

        dispatch(getFoodDetails(item.id));
    
    }, [])

    const renderIngredientsItem = ({item}) => {
        return (
            <View style={styles.ingredientItemWrapper}>
                <Image source={{uri: (`http://192.168.1.14:8000${item.image}`)}} style={[styles.ingredientImage,
                    
                ]} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {
                loading? 
                    <AppLoader />
                    :

                    <ScrollView>

                                    {/*Header*/}
                                    <SafeAreaView>
                                        <View style={styles.headerWrapper}>
                                                <TouchableOpacity onPress={()=> navigation.goBack()}>
                                                    <View style={styles.headerLeft}>
                                                        <Feather name='chevron-left' size={12} color={colors.textDark}/>
                                                    </View>
                                                </TouchableOpacity>

                                                <View style={styles.headerRight}>
                                                    <MaterialCommunityIcons name='star' size={12} color='white'/>
                                                </View>
                                        </View>  
                                    </SafeAreaView>

                        

                        {/*Title */}
                        <View style={styles.titleWrapper}>
                                <Text style={styles.title}>{foodDetails.title}</Text>
                        </View>

                        {/*Price */}
                        <View style={styles.priceWrapper}>
                            <Text style={styles.priceText}>$ {foodDetails.price}</Text>
                        </View>

                        {/*Pizza Info */}
                        <View style={styles.infoWrapper}>
                            <View style={styles.infoLeftWrapper}>
                                <View style={styles.infoItemWrapper}>
                                    <Text style={styles.infoitemTitle}>Size</Text>
                                    <Text style={styles.infoitemText}>
                                        {foodDetails.sizeName} {foodDetails.sizeNumber}"</Text>
                                </View>

                                <View style={styles.infoItemWrapper}>
                                    <Text style={styles.infoitemTitle}>Crust</Text>
                                    <Text style={styles.infoitemText}>
                                        {foodDetails.crust}</Text>
                                </View>

                                <View style={styles.infoItemWrapper}>
                                    <Text style={styles.infoitemTitle}>Delivery in</Text>
                                    <Text style={styles.infoitemText}>
                                        {foodDetails.deliveryTime} min</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={{ uri: (`http://192.168.1.14:8000${foodDetails.images}`) }}  style={styles.itemImage}/>
                            </View>
                        </View>

                        
                        <View style={styles.ingredientsWrapper}>
                            <Text style={styles.ingredientsTitle}>Ingredients</Text>
                            <View style={styles.ingredientsListWrapper}>
                                <FlatList
                                    data={foodDetails.ingredients}
                                    renderItem={renderIngredientsItem}
                                    keyExtractor={item => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>

                        {/* Place and order*/}
                        <TouchableOpacity onPress={()=>alert("Your order has been placed.")}>
                                <View style={styles.orderWrapper}>
                                    <Text style={styles.orderText}>Place an order</Text>
                                
                                </View>
                        </TouchableOpacity>
                    </ScrollView>
            }
           
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft:{
        borderColor: colors.textDark,
        borderWidth:2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight:{
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth:2,
    },
    titleWrapper:{
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title:{
        fontFamily: 'Montserrat Bold',
        fontSize: 32,
        color: colors.textDark,
        width: '50%',

    },
    priceWrapper:{
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText:{
        color: colors.price,
        fontFamily: 'Montserrat Semi-Bold',
        fontSize: 32,
    },

   
    infoWrapper:{
        marginTop:-20,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper:{
        paddingLeft: 20,
    },
    infoItemWrapper:{
       marginBottom: 20,

    },
    infoitemTitle:{
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
        color: colors.textLight
    },
    infoitemText:{
        fontFamily: 'Montserrat Semi-Bold',
        fontSize: 18,
        color: colors.textDark,
    },
    itemImage:{
        resizeMode: 'contain',
        marginLeft: 50,
        height: 300,
        width: 300,
    },
    ingredientsWrapper:{
        marginTop: -20,
    },
    ingredientsTitle:{
        paddingHorizontal: 20,
        fontFamily: 'Montserrat Semi-Bold',
        fontSize: 16,
        color: colors.textDark
    },
    ingredientsListWrapper:{
        paddingVertical: 20,

    },
    ingredientItemWrapper:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage:{
        resizeMode: 'contain',
        width: 100,
        height: 100
    },
    orderWrapper:{
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderText:{
        fontFamily: 'Montserrat Semi-Bold',
        fontSize: 14,
        marginRight: 10,
        color: colors.textDark
    },
    
})
