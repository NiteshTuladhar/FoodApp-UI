import React from 'react'
import { StyleSheet, Text,View, Image, ScrollView, Dimensions } from 'react-native'

const {width} = Dimensions.get("window");
const height = width * 100 /60;

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJ4FSkigT6WLLUjEw9l9cuQFes5UORC3O2Q&usqp=CAU',
    'https://image.shutterstock.com/image-vector/deluxe-king-size-burger-ads-260nw-1121447561.jpg'
]


const ImageCarousel = () => {
    return (
        <View style={styles.carouselContainer}>
            <ScrollView 
                pagingEnabled
                horizontal 
                showsHorizontalScrollIndicator = {false}
                style={styles.imageContainer}>
                {
                images.map((image, index)=>(
                    <Image 
                        key = {index}
                        source ={{ uri : image}}
                        style={styles.image}/>
                ))
                }
            </ScrollView>
            <View style={{flexDirection: 'row', position:'absolute',bottom: 0, alignSelf:'center'}}>
                {
                    images.map((i,k)=>(
                        <Text key={k} style={styles.pagingText}>⬤</Text>
                    ))
                }
            </View>
        </View>
    )
}

export default ImageCarousel;

const styles = StyleSheet.create({
    carouselContainer:{
        marginTop: 5,
    },
    imageContainer: {
        
    },
    image:{
        width: 390,
        height: 190,
        resizeMode: 'cover',
    },
    pagingText:{
        color: '#888', 
        margin:3
    },
    pagingActiveText: {
        color: 'white',
         margin:3
    },
})
