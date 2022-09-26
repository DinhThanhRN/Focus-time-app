import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {fontSizes} from '../../utils/sizes';
import RoundedButton from '../../components/RoundedButton';

const HistoryItem = ({item, index}) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};
export const FocusHistory = ({focusHistory, onClear}) => {
  return (
    <>
      <SafeAreaView style={{flex: 0.5, alignItems: 'center'}}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>

            <FlatList
              style={{flex: 1}}
              contentContainerStyle={{flex: 1, alignItems: 'center'}}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View>
              <RoundedButton
                title="Clear"
                size={75}
                style={styles.clearButton}
                onSummit={onClear}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: status => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },
  clearButton: {
    alignSelf: 'center',
    marginBottom: 20,
  },
});
