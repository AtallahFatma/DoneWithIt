import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

function ViewInputScreen() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = enteredGoal => {
        setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: enteredGoal }]);
    }

    const deleteGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goalId !== goal.id)
        })
    }

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <GoalInput addGoalHandler={addGoalHandler} />
                        <Button title="Add new goal" />
                    </>}
                data={courseGoals}
                ListEmptyComponent={<Text>Add items to list</Text>}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <GoalItem value={item.value} id={item.id} onDelete={deleteGoalHandler} />}
            />
        </SafeAreaView>
    );
}

// rnss  to create style const
const styles = StyleSheet.create({
    screen: {
        padding: 200,
        backgroundColor: 'pink',
        marginVertical: StatusBar.currentHeight || 70,
    }
})

export default ViewInputScreen;