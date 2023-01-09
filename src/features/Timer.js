import react, { useState } from 'react';
import { Text, View, StyleSheet,Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/roundedbutton';
import { Color } from '../utils/Color';
import { spacing } from '../utils/sizes';

export const Timer = ({ focussubject , clearsubject, onTimerEnd  }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minute, setMinute] = useState(0.1);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
  ];

  const onEnd=(reset)=>{
   Vibration.vibrate(PATTERN);
   setProgress(1);
   setIsStarted(false);
   reset();
   onTimerEnd(focussubject);

  }
  

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minute}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.taskbar}>
          <Text style={styles.title}>Focusing on </Text>
          <Text style={styles.task}> {focussubject}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          progress={progress}
          color={Color.progressbar}
          style={{ height: spacing.sm }}
        />
      </View>
       <View style={styles.buttonmin}>
        <View style={styles.button}>
          <RoundedButton size={80} title="15" onPress={() => setMinute(15)} />
        </View>
        <View style={styles.button}>
          <RoundedButton size={80} title="20" onPress={() => setMinute(25)} />
        </View>
        <View style={styles.button}>
          <RoundedButton size={80} title="30" onPress={() => setMinute(30)} />
        </View>
      </View>
      <View style={styles.buttonwrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>

     

      <View style={styles.clear}>  <RoundedButton size={50} title="-" onPress={clearsubject} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonwrapper: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },

  taskbar: {
    padding: spacing.xxl,
  },
  title: {
    color: Color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: Color.white,
    textAlign: 'center',
  },
  button: {
    padding: 20,
    paddingTop: 0,
    fontSize: 5,
  },
  buttonmin: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:20
  },
  clear:{
    flex:0.3,
    justifyContent:'center',
    paddingBottom:40,
    textAlign:'center',
    paddingLeft:150
    

  }
});
