import React, { FC } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { PostImage as PostImageTypes, RootStackParams  } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';



type PostImageNavigationProps = NativeStackNavigationProp<
RootStackParams, 
'Detail'
>;


const PostImage: FC<PostImageTypes> = ({title, date, hdurl, explanation}) => {

    const {navigate} = useNavigation<PostImageNavigationProps>()

    const handleViewPress = () => {
        navigate('Detail', {title, date, hdurl, explanation})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title='View' onPress={handleViewPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 20,
        marginBottom:12,
        padding: 16
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12
    },
    date: {
        color: '#fff'
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
})




export default PostImage;