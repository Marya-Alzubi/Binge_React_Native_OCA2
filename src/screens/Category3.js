import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {dataCat3} from '../utils/data-cat3';
import Footer from '../components/Footer';

const {width} = Dimensions.get('window');



const listToMatrix = (list, elementsPerSubArray) => {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}


const MovieItem = ({movie, navigation}) => (
    <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate('Movie', {movie})}>
        <Image source={{uri: movie.image}} style={styles.movieItemImage} />
        <Text style={[styles.textWhite, styles.title]}>{movie.title}</Text>
        <View style={[styles.flexRow, styles.flexEnd]}>
            <Text style={[styles.textWhite, styles.imdb]}>IMDb</Text>
            <Text style={[styles.textWhite, styles.imdbScore]}>{movie.imdbScore}</Text>
            <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
        </View>
    </TouchableOpacity>
);

const Category3 = ({navigation }) => (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Comedy</Text>
        </View>
        <ScrollView style={styles.movieItemContainer}>
            {listToMatrix(dataCat3, 2).map((movieRow, i) => (
                <View key={`movie-row-${i}`} style={styles.movieItemRow}>
                    {movieRow.map((movie, j) => (
                        <MovieItem key={`movie-item-${i}-${j}`} {...{movie, navigation}} />
                    ))}
                </View>
            ))}
        </ScrollView>
        <Footer trailer={''} />
    </View>
);

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#000'},
    topContainer: {paddingHorizontal: 25, paddingTop: 20, paddingBottom: 15, justifyContent: 'center', alignItems: 'flex-end'},
    avatarText: {fontFamily: 'Inter_600SemiBold', color: '#ffffff'},
    headerContainer: {paddingHorizontal: 25},
    headerText: {fontFamily: 'Oswald_600SemiBold', fontSize: 32, color: '#fff',margin: "auto" , textAlign: 'center' , paddingTop : 20},
    headerBtnContainer: {flexDirection: 'row'},
    headerBtn: {marginRight: 15, marginVertical: 5},
    headerBtnText: {fontFamily: 'Inter_600SemiBold', fontSize: 12},
    headerBtnActive: {color: '#000000'},
    headerBtnInactive: {color: '#00000040'},
    movieItemContainer: {flex: 1},
    movieItemRow: {flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', paddingVertical: 5},
    movieItemImage: {width: (width - 60) / 2, height: width - 150, borderRadius: 5, overflow: 'hidden'},
    textWhite: {color: '#ffffff'},
    title: {fontFamily: 'Oswald_600SemiBold', fontSize: 15, textTransform: 'uppercase', lineHeight: 20, marginTop: 10   , paddingTop:10},
    flexRow: {flexDirection: 'row', marginBottom: 15},
    flexEnd: {alignItems: 'flex-end',},
    imdbScore: {fontFamily: 'Inter_600SemiBold', fontSize: 16 , marginTop: -5},
    imdbScoreOverall: {fontFamily: 'Inter_600SemiBold', fontSize: 15, color: '#ffffff80'},
    imdb: {fontFamily: 'Oswald_600SemiBold', fontSize: 15, marginLeft: 0,  marginRight: 10, color: '#ffba00'},
});

export default Category3;
