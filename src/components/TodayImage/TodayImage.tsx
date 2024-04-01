import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { PostImage, RootStackParams } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';


type PostImageNavigationProps = NativeStackNavigationProp<
RootStackParams, 
'Detail'
>;

const TodayImage: FC<PostImage> = ({date, title, hdurl, explanation}) => {
   
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail', {title, date, hdurl, explanation})
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: hdurl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title='View' onPress={handleViewPress}/>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginHorizontal:24,
        marginVertical: 16,
        borderRadius: 32,
        padding: 16
    },
    image: {
        width: '100%',
        height: 180,
        // borderWidth: 2,
        // borderColor: '#fff',
        borderRadius: 32,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
}) 


export default TodayImage;