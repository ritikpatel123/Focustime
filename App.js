import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Color } from './src/utils/Color';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer';
import{FocusHistory} from './src/features/FocusHistory';

export default function App() {

 

  const [currentsubject, setCurrentsubject] = useState();
  const[history,setHistory]=useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentsubject ? (
        <View>
        <Focus addSubject={setCurrentsubject} />
        <FocusHistory history={history }/>
        </View>
      ) :
       (<Timer
        focussubject={currentsubject}
        onTimerEnd={(subject)=>{
          setHistory([...history, subject])
        }}
        clearsubject={()=>setCurrentsubject(null)}
        
        />
   ) }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Color.darkblue,
  },
  
});
