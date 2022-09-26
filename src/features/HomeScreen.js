import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [focusSubject, setFocusSuject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where I'm going to build a timer</Text>
      ) : (
        <Text>I want to build an input for a subject</Text>
      )}
      <Button
        title="Go to Focus screen"
        onPress={() => navigation.navigate('Focus')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',

    padding: 50,
  },
});
export default HomeScreen;
