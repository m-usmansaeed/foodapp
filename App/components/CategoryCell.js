import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Constents = require('../constents');

export default CategoryCell = ({ item }) => {
    return (
        <View style={[styles.categoryCell, {
            backgroundColor: item.selected ? Constents.COLOR.primary : Constents.COLOR.white,
            marginLeft: item.id == 1 ? 20 : 0
        }]}>
            <Image style={styles.categoryImage} source={item.image} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <View
                style={[styles.categorySelectContainer, {
                    backgroundColor: item.selected ? Constents.COLOR.white : Constents.COLOR.secondary
                }]}>
                <FeatherIcon style={styles.categorySelectIcon} name='chevron-right' size={12}
                    color={item.selected ? Constents.COLOR.black : Constents.COLOR.white} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    categoryCell: {
        marginRight: 20,
        borderRadius: 20,

    },
    categoryImage: {
        height: 60,
        width: 60,
        marginTop: 25,
        marginHorizontal: 22,
        alignContent: 'center'
    },
    categoryTitle: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 14
    },
    categorySelectContainer: {
        width: 26,
        height: 26,
        borderRadius: 13,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    categorySelectIcon: {
        alignSelf: 'center'
    }

});