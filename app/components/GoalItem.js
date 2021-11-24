import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Text>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: colors.lightGrey,
        borderColor: colors.black,
        borderWidth: 1
    }
})

export default GoalItem;