import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.righContainer}>
                <Image source={require('../../assets/logo/nasa-logo-1.png')} style={styles.image}/>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 20,
        color: '#ffff',
        fontWeight: 'bold'
    },
    righContainer: {
        flex:1,
        alignItems: 'flex-end',
        padding: 5
    },
    image: {
        width: 70,
        height:60
    }
})


export default Header