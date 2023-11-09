import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  FlatList,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
} from 'react-native';
import {useAddPostMutation,usePostsQuery} from '../services/postsApi'


function AddMessage({navigation}): JSX.Element {
  const [showAdd, setShowAdd] = React.useState<Boolean>(false);
  const [caption, setCaption] = React.useState<String>('');
  const [tags, setTags] = React.useState<String[]>([]);
  const [tag, setTag] = React.useState<String>('');

  const [addPost] = useAddPostMutation();
  const {data, refetch: refetchData, isLoading} = usePostsQuery();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: 'black', paddingLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 23}}>
        <TouchableWithoutFeedback onPress={()=>navigation.goBack()} accessible={false}>
          <Image
            //style={styles.image}
            source={require('../assets/back-arrow.png')}
          />
          </TouchableWithoutFeedback>
           <TouchableWithoutFeedback onPress={async()=>{ let post = {
              userName: "Test User",
        caption,
        tags,
        id:data.body.length+1,
        createdAt:new Date().toDateString(),
        comments:[]
      };
      await addPost(post).unwrap();navigation.navigate('Home')}} >
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text
              style={{
                color: 'white',
                backgroundColor: '#E88607',
                height:34,
                width: 80,
                borderRadius: 30,
                textAlign: 'center',
                fontFamily:'Inter-Bold',
                fontSize:16,
                textAlignVertical:'center'

              }}
            >
              Post
            </Text>
          </View>
          </TouchableWithoutFeedback>
        </View>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            color: 'white',
            fontSize: 15,
            lineHeight: 18,
            marginTop: 64,
          }}
        >
          Create
        </Text>
        <TextInput
          style={{color: 'white'}}
          placeholderTextColor="#3F4B63"
          onChangeText={(text) => {
            setCaption(text);
          }}
          value={caption}
          placeholder="What’s on your mind?"
        />
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            color: 'white',
            fontSize: 15,
            lineHeight: 18,
            marginTop: 64,
          }}
        >
          Add Tags
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 8}}>
            <TextInput
              style={{color: 'white', flexWrap: 'wrap'}}
              placeholderTextColor="#3F4B63"
              multiline={true}
              onFocus={() => {
                setShowAdd(true);
              }}
               onChangeText={(text)=>setTag(text)}
               value={tag}
              placeholder="Write tags"
            />
          </View>
          <TouchableWithoutFeedback onPress={()=>{tag?.length?setTags([...tags,tag]):null;setTag('')}} >
          <View style={{flexDirection: 'column', flex: 2}}>
          {showAdd? <Text
              style={{
                flex: 1,
                textAlign: 'right',
                color: 'white',
                textAlignVertical: 'center',
              }}
            >
              ADD
            </Text>:null}
           
          </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{flexDirection:'row'}}>
  {tags?.map((item,i)=>
 <Text key={i} style={{color:'white',backgroundColor:'#28395A',height:36,width:'auto',borderRadius:5,paddingHorizontal:7,marginTop:48,marginRight:10,paddingVertical:7
 ,alignSelf:'flex-start'}}>{item}</Text>)
  }
  </View>
        <Image
          style={{marginVertical: 36}}
          source={require('../assets/line.png')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddMessage;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 40,
    color: 'black',
    lineHeight: 50,
    textAlign: 'center',
    paddingTop: 50,
  },
  buttonContainer: {
    width: 150,
    alignSelf: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  separatorStyle: {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginLeft: 10,
    marginRight: 10,
  },
  spinnerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
