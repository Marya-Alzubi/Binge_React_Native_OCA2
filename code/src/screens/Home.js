import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { dataCat1 } from '../utils/data-cat1';
import { dataCat2 } from '../utils/data-cat2';
import { dataCat3 } from '../utils/data-cat3';
import { dataCat4 } from '../utils/data-cat4';
import Footer from '../components/Footer';

const {width} = Dimensions.get('window');


const Home = ({navigation, category1, category2, category3, category4 }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>BINGE</Text>
    </View>
    <ScrollView style={styles.movieItemContainer}>
        <>
        <View  style={styles.categoryNameContainer} >
        <Text style={styles.categoryName}> Top Movies </Text>
        <Text style={styles.seeMoreButton}  onPress={() => navigation.navigate('Category1', {category1})}  >See All</Text>
        </View>
        <FlatList
            style={{marginBottom: 30}}
            horizontal={true}
            data={dataCat1}
            renderItem={({item }) => {
                return(
                    <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('Category1') }>
                        <Image source={{uri: item.image}} style={{height: 300, width: 200,  borderRadius: 10 }}  />
                        <View>
                            <Text style={[styles.textWhite, styles.title]}>{item.title}</Text>
                            <View style={[styles.flexRow, styles.flexEnd]}>
                                <Text style={[styles.textWhite, styles.imdb]}>IMDb</Text>
                                <Text style={[styles.textWhite, styles.imdbScore]}>{item.imdbScore}</Text>
                                <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </>
        <>
        <View  style={styles.categoryNameContainer} >
        <Text style={styles.categoryName}> Action </Text>
        <Text style={styles.seeMoreButton} onPress={() => navigation.navigate('Category2', {category2})}  >See All</Text>
        </View>
        <FlatList
            style={{marginBottom: 30}}
            horizontal={true}
            data={dataCat2}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity style={{marginRight: 20}}  onPress={() => navigation.navigate('Category2')} >
                        <Image source={{uri: item.image}} style={{height: 300, width: 200,  borderRadius: 10 }}  />
                        <View>
                            <Text style={[styles.textWhite, styles.title]}>{item.title}</Text>
                            <View style={[styles.flexRow, styles.flexEnd]}>
                                <Text style={[styles.textWhite, styles.imdb]}>IMDb</Text>
                                <Text style={[styles.textWhite, styles.imdbScore]}>{item.imdbScore}</Text>
                                <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </>
        <>
        <View  style={styles.categoryNameContainer} >
        <Text style={styles.categoryName}> Comedy </Text>
        <Text style={styles.seeMoreButton} onPress={() => navigation.navigate('Category3', {category3})}  >See All</Text>
        </View>
        <FlatList
            style={{marginBottom: 30}}
            horizontal={true}
            data={dataCat3}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity style={{marginRight: 20}}  onPress={() => navigation.navigate('Category3')} >
                        <Image source={{uri: item.image}} style={{height: 300, width: 200,  borderRadius: 10 }}  />
                        <View>
                            <Text style={[styles.textWhite, styles.title]}>{item.title}</Text>
                            <View style={[styles.flexRow, styles.flexEnd]}>
                                <Text style={[styles.textWhite, styles.imdb]}>IMDb</Text>
                                <Text style={[styles.textWhite, styles.imdbScore]}>{item.imdbScore}</Text>
                                <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </>
        <>
        <View  style={styles.categoryNameContainer} >
        <Text style={styles.categoryName}> Trend </Text>
        <Text style={styles.seeMoreButton} onPress={() => navigation.navigate('Category4', {category4})}  >See All</Text>
        </View>
        <FlatList
            style={{marginBottom: 30}}
            horizontal={true}
            data={dataCat4}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity style={{marginRight: 20}}  onPress={() => navigation.navigate('Category4')} >
                        <Image source={{uri: item.image}} style={{height: 300, width: 200,  borderRadius: 10 }}  />
                        <View>
                            <Text style={[styles.textWhite, styles.title]}>{item.title}</Text>
                            <View style={[styles.flexRow, styles.flexEnd]}>
                                <Text style={[styles.textWhite, styles.imdb]}>IMDb</Text>
                                <Text style={[styles.textWhite, styles.imdbScore]}>{item.imdbScore}</Text>
                                <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </>
    </ScrollView>

    <Footer trailer={''} />
  </View>
);

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#000', padding: 10 },
    headerContainer: { borderBottomColor: 'white', borderBottomWidth: 1,marginBottom: 20},
    headerText: {fontFamily: 'Bangers_400Regular', fontSize: 62, color: '#fff', margin: "auto" , textAlign: 'center' , padding : 15 ,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        textShadowColor: '#007FFF', },
    movieItemContainer: {flex: 1},
    seeMoreButton:{fontFamily: 'Bangers_400Regular',color: 'white', fontSize: 25, textAlign: 'center', backgroundColor: "#007FFF", borderRadius: 50 ,  paddingHorizontal: 20 },
    textWhite: {color: '#fff'},
    flexRow: {flexDirection: 'row'},
    flexEnd: {alignItems: 'flex-end',},
    imdbScore: {fontFamily: 'Inter_600SemiBold', fontSize: 15},
    imdbScoreOverall: {fontFamily: 'Inter_600SemiBold', fontSize: 15, color: '#ffffff80'},
    imdb: {fontFamily: 'Oswald_600SemiBold', fontSize: 15, marginRight: 5, color: '#ffba00'},
    title: {fontFamily: 'Oswald_600SemiBold', fontSize: 15, textTransform: 'uppercase', lineHeight: 15, marginTop: 5 , marginBottom: 7 , paddingTop: 20 },
    categoryNameContainer: {  display:"flex" , flexDirection: "row", justifyContent: "space-between", marginVertical: 30 },
    categoryName: {color: 'white', fontSize: 30,fontFamily:'Oswald_600SemiBold' ,fontWeight: 'bold', paddingTop: 9 },
});

export default Home;
