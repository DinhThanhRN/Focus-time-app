import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              backgroundColor: colors.white,
              flex: 1,
              marginRight: spacing.md,
              borderRadius: 5,
            }}
            onSubmitEditing={({nativeEvent}) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton size={50} title="+" onSummit={addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Focus;
