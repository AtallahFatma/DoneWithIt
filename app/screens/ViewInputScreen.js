import React, { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

function ViewInputScreen() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = enteredGoal => {
        setCourseGoals(courseGoals => [...courseGoals, { key: Math.random().toString(), value: enteredGoal }]);
        console.log(courseGoals)
    }

    return (
        <FlatList style={styles.screen}
            ListHeaderComponent={<GoalInput addGoalHandler={addGoalHandler} />}
            data={courseGoals}
            ListEmptyComponent={<Text>Add items to list</Text>}
            keyExtractor={item => item.key}
            renderItem={({ item }) =>
                <GoalItem value={item.value} />}
        />
    );
}

// rnss  to create style const
const styles = StyleSheet.create({
    screen: {
        padding: 100
    }
})

export default ViewInputScreen;