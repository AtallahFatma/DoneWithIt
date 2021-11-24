import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

function GoalItem({ onDelete, value, id }) {
    return (
        <TouchableOpacity onPress={onDelete.bind(this, id)}>
            <View style={styles.listItem}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
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