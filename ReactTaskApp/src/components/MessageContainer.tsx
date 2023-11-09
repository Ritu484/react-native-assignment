import React, {useState} from 'react';
import {StyleSheet, Text, Dimensions, View, Alert, Image} from 'react-native';
import {useDeletePostMutation} from '../services/postsApi';

const MessageContainer = ({userName, caption, tags = [], isVerified}) => {
  const [showText, setShowText] = useState<Boolean>(false);
  return (
    <View style={{marginLeft: 22, marginTop: 16}}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            color: 'white',
            fontSize: 15,
            lineHeight: 18,
          }}
        >
          {userName}
        </Text>
        {isVerified ? (
          <Image
            style={{marginLeft: 16}}
            source={require('../assets/verified-img.png')}
          />
        ) : null}
      </View>
      <Text
        onPress={() => {
          setShowText(true);
        }}
        style={{
         fontFamily: 'Inter-Light',
          color: '#A6B6D6',
         // fontWeight: 300,
          fontSize: 15,
          lineHeight: 18,
          marginTop: 16,
        }}
      >
        {caption.length > 220 && !showText
          ? caption.substr(0, 220) + '...Read More'
          : caption}
      </Text>
      <View style={{flexDirection: 'row'}}>
        {tags.map((item, i) => (
          <Text
            key={i}
            style={{
              fontFamily: 'Inter-Light',
              fontSize: 14,
              color: '#CFD7E7',
              backgroundColor: '#28395A',
              height: 36,
              width: 'auto',
              borderRadius: 5,
              paddingHorizontal: 7,
              marginTop: 36,
              marginRight: 16,
              paddingVertical: 7,
              alignSelf: 'flex-start',
            }}
          >
            {item}
          </Text>
        ))}
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
  buttonContainer: {
    width: 100,
    alignSelf: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
});
export default MessageContainer;
