import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import colors from '../config/colors';

function GoalInput({ addGoalHandler, modalVisible, setModalVisible }) {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    const onAddGoal = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal animationType="slide"
            transparent={false}
            visible={modalVisible}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color={"red"} onPress={setModalVisible.bind(this, false)} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={onAddGoal} disabled={!enteredGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: colors.black,
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;