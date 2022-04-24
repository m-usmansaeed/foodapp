import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Constents = require('../constents');

export default PopularCell = (props) => {
    // const { id, title, image, weight, rating, price } = props;
    console.log(props.id);

    return (
        <View style={[styles.card, { marginTop: props.id == 1 ? 10 : 20 }]}>
            <View>
                <View>
                    <View style={styles.weeksTopContainer}>
                        <MaterialCommunityIcons name='crown' size={12}
                            color={Constents.COLOR.primary} />
                        <Text style={styles.text}>Top of the week</Text>
                    </View>
                    <View style={styles.titles}>
                        <Text style={styles.itemName}>{props.title}</Text>
                        <Text style={styles.itemWeight}>Weight {props.weight}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Constents.COLOR.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20
    },
    weeksTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 14
    },
    titles: {
        backgroundColor: Constents.COLOR.secondary
    },
    itemName: {
        fontFamily: Constents.FONTS.MontserratSemiBold,
        fontSize: 14,
        color: Constents.COLOR.black
    },
    itemWeight: {

    }
});