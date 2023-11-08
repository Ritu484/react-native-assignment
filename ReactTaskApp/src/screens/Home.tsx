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
// import {AddPost} from './src/components/addPost';
// import DeleteItem from './src/components/deletePost';
// import {PAGE_LENGTH} from './src/constants'
// import { PostModal } from './src/models/post.model';

function Home(): JSX.Element {
  //   const [currentPage, setCurrentPage] = React.useState<number>(PAGE_LENGTH);
  //   const [showAdd, setShowAdd] = React.useState<Boolean>(true);
  const [postList, setPostList] = React.useState<PostModal[] | null>(null);
     const {data, refetch: refetchData, isLoading} = usePostsQuery();

     React.useEffect(()=>{
      setPostList(data?.body)
    },[data])

  const ItemSeparator = () => <View style={styles.separatorStyle} />;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row', marginTop: 23, marginLeft: 17}}>
          <Image
            //style={styles.image}
            source={require('../assets/profile-pic.png')}
          />

          <Text
            style={{
              color: 'white',
             // backgroundColor: 'red',
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
        {/* <View>
          <MessageContainer
            userName="Alice Martha"
            caption="test"
            tags="tag1"
            isVerified={true}
          />
        </View> */}
      
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
            //  onEndReached={fetchMore}
            // onEndReachedThreshold ={.5}
            />
              <Image
        style={{position:'absolute',bottom:16,right:16}}
        source={require('../assets/plus-sign.png')}
      />
        {/* {isLoading && (
        <ActivityIndicator
          size="large"
          color="#240E6C"
          style={styles.spinnerStyle}
        />
      )} 
        {!showAdd && <AddPost setShowAdd={setShowAdd} />}
        {showAdd && data && (
          <>
            <Text style={styles.headerStyle}>RTK Query</Text>
            {showAdd && (
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => setShowAdd(!showAdd)}
                  title={showAdd ? 'Add New Item' : 'Submit'}
                  color="#240E6C"
                />
              </View>
            )}
            <FlatList
              data={postList}
              renderItem={({item}) => (
                <DeleteItem title={item.title} userId={item.userId} />
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={ItemSeparator}
              onEndReached={fetchMore}
             onEndReachedThreshold ={.5}
            />
          </>
        )} */}
      </View>
    </TouchableWithoutFeedback>
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
