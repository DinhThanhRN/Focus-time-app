import React, {useState} from 'react';
import {StyleSheet, Text, View, Vibration, Platform} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import KeepAwake from 'react-native-keep-awake';
import {Countdown} from '../../components/Countdown';
import RoundedButton from '../../components/RoundedButton';
import {colors} from '../../utils/colors';
import {spacing} from '../../utils/sizes';
import {Timing} from './Timing';

const DEAULT_TIME = 0.1;
const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
  KeepAwake.activate();
  const [minutes, setMinutes] = useState(DEAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const onProgress = progress => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };
  const changeTime = min => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{paddingTop: spacing.xxl}}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar color="#5e84e2" style={{height: 10}} progress={progress} />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            size={100}
            onSummit={() => setIsStarted(true)}
          />
        ) : (
          <RoundedButton
            title="pause"
            size={100}
            onSummit={() => setIsStarted(false)}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={50} title="-" onSummit={() => clearSubject()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject: {
    paddingBottom: 16,
    paddingLeft: 16,
  },
});

export default Timer;
