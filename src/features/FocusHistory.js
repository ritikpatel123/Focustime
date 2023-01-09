import react ,{useState} from 'react';
import {View, Text, StyleSheet , FlatList} from 'react-native';
import {Color} from '../utils/Color';
import{spacing,fontSizes} from '../utils/sizes';



export const FocusHistory= ({history})=> {

if(!history || !history.length) return <Text style={styles.title}> We haven't focused on anything yet</Text>;

const renderItem =({item}) => <Text style={styles.item}>-{item}</Text>


return(
    <View style={styles.container}>
    <Text style={styles.title}> Things we've focused on : </Text>
    <FlatList
    data={history}
    renderItem={renderItem} 
    /> 
    </View>
 );

};

const styles=StyleSheet.create({
   container:{
 paddingTop:spacing.md,
 flex:1
   },

 item:{
    fontSize:fontSizes.md,
    color:Color.white,
    padding:spacing.md,
  },

 title: {
   color: Color.white,
   fontSize:fontSizes.md,
   padding:spacing.md,
   fontWeight:'bold' ,
 }
 
 });