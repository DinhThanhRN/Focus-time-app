import React from 'react';
import {StyleSheet, View} from 'react-native';

import RoundedButton from '../../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onSummit={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onSummit={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onSummit={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
