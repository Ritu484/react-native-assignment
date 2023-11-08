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
} from 'react-native';
import MessageContainer from '../components/MessageContainer';
 import {usePostsQuery} from '../services/postsApi';
 import {PostModal} from '../data-modals/post.modal'


function Home({route,navigation}): JSX.Element {
   const [postList, setPostList] = React.useState<PostModal[] | null>(null);
     const {data, refetch: refetchData, isLoading} = usePostsQuery();

     React.useEffect(()=>{
      setPostList(data?.body)
    },[data])

  const ItemSeparator = () => <View style={styles.separatorStyle} />;

  return (
   
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row', marginTop: 23, marginLeft: 17}}>
          <Image
            //style={styles.image}
            source={require('../assets/profile-pic.png')}
          />

          <Text
            style={{
              color: 'white',
              flex: 1,
              textAlign: 'center',
            }}
          >
            hey
          </Text>
        </View>
        <Image
        style={{marginVertical:36}}
        source={require('../assets/line.png')}
      />
     
      
       <FlatList
              data={postList}
              renderItem={({item}) => (
                <MessageContainer
                userName={item.userName}
                caption={item.caption}
                tags={item.tags}
                isVerified={item.isVerified}
              />
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={ItemSeparator}
            />
             <TouchableWithoutFeedback onPress={()=>{navigation.navigate('AddMessage')}} accessible={false}>
              <Image
        style={{position:'absolute',bottom:16,right:16}}
        source={require('../assets/plus-sign.png')}
      />
      </TouchableWithoutFeedback>
            </View>
  );
}

export default Home;

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
