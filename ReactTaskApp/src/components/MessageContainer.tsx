import * as React from 'react';
import {StyleSheet, Text, Dimensions, View, Alert, Image} from 'react-native';
import {useDeletePostMutation} from '../services/postsApi';

const MessageContainer = ({userName,caption,tags=[],isVerified}) => {
  
  return (
    <View style={{marginLeft:22,marginTop:24}}>
     <View style={{flexDirection:'row'}}>
<Text style={{fontFamily:'inter',color:'white',fontWeight:700,fontSize:15,lineHeight:18}}>{userName}</Text>
<Image
        style={{marginLeft:16}}
        source={require('../assets/verified-img.png')}
      />
     </View>
     <Text style={{fontFamily:'inter',color:'white',fontWeight:300,fontSize:15,lineHeight:18,marginTop:32}}>I just finished reading a great book! What are you reading right now?</Text>
  <View style={{flexDirection:'row'}}>
  {tags.map((item,i)=>
 <Text key={i} style={{color:'white',backgroundColor:'#28395A',height:36,width:'auto',borderRadius:5,paddingHorizontal:7,marginTop:48,marginRight:10,paddingVertical:7
 ,alignSelf:'flex-start'}}>{item}</Text>)
  }
  </View>

   
  
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontStyle: 'italic',
    fontSize: 20,
    color: 'black',
    padding: 5,
    alignSelf: 'center',
  },
  viewStyleSheet: {
    margin: 5,
    backgroundColor: '#D0CFD3',
    borderRadius: 10,
  },
  buttonContainer:{
    width: 100,
    alignSelf: 'center',
    marginBottom: 20,
    paddingTop: 20,
  }
});
export default MessageContainer;
