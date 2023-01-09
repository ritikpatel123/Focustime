import react , {useState} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/roundedbutton';
import { spacing }from '../utils/sizes';


export const Focus = ({addSubject})=>{

  const [subject,setSubject]= useState(null)


  
  return(
   <View style={styles.container}>
   <View style={styles.inputcontainer}>
      <TextInput style={styles.textinput}  onChangeText= {setSubject} label="what would you like to focus on ?"/>
           <View style={styles.button}>
           <RoundedButton title="+" size={50}  onPress={()=>addSubject(subject)}/>
           </View>
      </View>
  </View>
);
}

const styles = StyleSheet.create({

container :{

},

textinput:{
 flex:1,
 marginRight: spacing.sm
},
button:{
  justifyContent:'center'
},
inputcontainer:{
  flexDirection:'row',
  padding:spacing.lg,
  justifyContent:'top' ,
  
}


});