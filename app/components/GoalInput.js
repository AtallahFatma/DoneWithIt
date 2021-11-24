import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import colors from '../config/colors';

function GoalInput({ addGoalHandler }) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD" onPress={() => addGoalHandler(enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: colors.black,
        borderWidth: 1,
        padding: 10
    }
})

export default GoalInput;