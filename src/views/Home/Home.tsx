import React, { useEffect, useState } from 'react';
import { StyleSheet, View }           from 'react-native';
import { format, sub }                from 'date-fns';
import Header                         from '../../components/Header';
import fechApi                        from '../../utils/fech';
import TodayImage                     from '../../components/TodayImage';
import { PostImage }                  from '../../types';
import LastFiveDaysImages             from '../../components/LastFiveDaysImages';


const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

    useEffect(() =>{
        const loadTodayImage = async () => {
            try {
                const todayImageRespose = await fechApi();
                setTodaysImage(todayImageRespose)
                
            } catch (error) {
                console.error(error)
                setTodaysImage({});
            }
        };

        //Para traerme el array de 5 objetos.

        const loadLast5DaysImages = async () =>{
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                //Esto es para substraer los 5 dias a la fecha de hoy, es decir, resta 5 dias atras/
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

                const lastFiveDaysImagesResponse = await fechApi(
                    `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
                );

                setLastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.error(error);
            }
        };

        loadTodayImage().catch(null);
        loadLast5DaysImages().catch(null)
    }, []);

    // console.log(todaysImage);

    return(
        <View style={styles.container}>
            <Header />
            <TodayImage {...todaysImage}/>
            <LastFiveDaysImages PostImage={lastFiveDaysImages}/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7, 26, 93, 255)',
    }
})



export default Home;