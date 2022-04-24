import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CategoryCell from "../components/CategoryCell";
import PopularCell from '../components/PopularCell';

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

const Constents = require('../constents');


function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/images/profile.png')}
                style={styles.header.profileImage} />
            <FeatherIcon name='menu' size={24} />
        </View>
    );
}

function TitleView() {
    return (
        <View style={styles.titlesContainer}>
            <Text style={styles.titlesContainer.subtitle}>Food</Text>
            <Text style={styles.titlesContainer.title}>Delivery</Text>
        </View>
    );
}

function SearchView() {
    return (
        <View style={styles.searchView}>
            <FeatherIcon name='search' size={16} color={Constents.COLOR.textDark} />
            <View style={styles.searchView.textContainer}>
                <Text style={styles.text}>Search...</Text>
            </View>
        </View>
    );
}

function CatogriesView() {
    return (
        <View style={styles.catogriesContainer}>
            <Text style={styles.catogriesContainer.title}>Categories</Text>
            <View style={styles.catogriesContainer.listContainer}>
                <FlatList data={categoriesData}
                    renderItem={item => CategoryCell(item)}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>

        </View>
    );
}

function PopularView() {

    return (
        <View style={styles.popularContainer}>
            <Text style={styles.popularContainer.title}>Popular</Text>
            {popularData.map((item, index) => {
                return <PopularCell key={index} item={item}/>
            })}

        </View>
    )
}

function HomeScreen(props) {
    return (
        <View style={styles.mainView}>
            <SafeAreaView>
                <Header />
                <TitleView />
                <SearchView />
                <CatogriesView />
                <PopularView />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1
    },

    header: {
        flexDirection: 'row', // horizontal
        justifyContent: 'space-between', // horizontal
        alignItems: 'center', // virtical
        paddingHorizontal: 20,
        marginTop: 20,

        profileImage: {
            height: 40,
            width: 40,
            borderRadius: 20
        },
    },

    titlesContainer: {
        marginTop: 30,
        paddingHorizontal: 20,

        subtitle: {
            fontFamily: Constents.FONTS.MontserratRegular,
            fontSize: 16,
            color: Constents.COLOR.textDark
        },
        title: {
            marginTop: 5,
            fontFamily: Constents.FONTS.MontserratBold,
            fontSize: 32,
            color: Constents.COLOR.textDark
        },
    },

    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20,

        textContainer: {
            flex: 1,
            marginLeft: 10,
            borderBottomColor: Constents.COLOR.textLight,
            borderBottomWidth: 1
        },
        text: {
            fontFamily: Constents.FONTS.MontserratSemiBold,
            fontSize: 14,
            color: Constents.COLOR.textLight,
            marginBottom: 5
        },
    },

    catogriesContainer: {
        marginTop: 30,

        title: {
            fontFamily: Constents.FONTS.MontserratBold,
            fontSize: 16,
            paddingHorizontal: 20
        },

        listContainer: {
            paddingTop: 15,
            paddingBottom: 15,
        }

    },

    popularContainer: {
        paddingHorizontal: 20,

        title: {
            fontFamily: Constents.FONTS.MontserratBold,
            fontSize: 16,
        }
    }


})

export default HomeScreen;