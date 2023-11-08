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

// import {usePostsQuery} from './src/services/postsApi';
// import {AddPost} from './src/components/addPost';
// import DeleteItem from './src/components/deletePost';
// import {PAGE_LENGTH} from './src/constants'
// import { PostModal } from './src/models/post.model';

function AddMessage(): JSX.Element {
  //   const [currentPage, setCurrentPage] = React.useState<number>(PAGE_LENGTH);
  //   const [showAdd, setShowAdd] = React.useState<Boolean>(true);
  //   const [postList, setPostList] = React.useState<PostModal[] | null>(null);
  //   const {data, refetch: refetchData, isLoading} = usePostsQuery(currentPage);

  //   React.useEffect(()=>{
  //     setPostList(data)
  //   },[data])

  //   const fetchMore = async () => {
  //     if (isLoading) return;
  //     setCurrentPage(currentPage + PAGE_LENGTH);
  //     refetchData();
  //   };

  const ItemSeparator = () => <View style={styles.separatorStyle} />;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: 'black',paddingLeft: 17}}>
        <View style={{flexDirection: 'row', marginTop: 23}}>
          <Image
            //style={styles.image}
            source={require('../assets/back-arrow.png')}
          />
<View style={{flex:1,alignItems:'flex-end'}}>
<Text
            style={{
              color: 'white',
              backgroundColor: '#E88607',
              width:80,
              borderRadius:30,
              textAlign: 'center',
            }}
          >
            hey
          </Text>
</View>
         </View>
         <Text style={{fontFamily:'inter',color:'white',fontWeight:700,fontSize:15,lineHeight:18,marginTop:64}}>Create</Text> 
         <TextInput
        style={{color:'white'}}
        placeholderTextColor='white'
       // onChangeText={onChangeNumber}
       // value={number}
        placeholder="What’s on your mind?"
     
      />  
       <Text style={{fontFamily:'inter',color:'white',fontWeight:700,fontSize:15,lineHeight:18,marginTop:64}}>Add Tags</Text> 
         <TextInput
        style={{color:'white'}}
        placeholderTextColor='white'
       // onChangeText={onChangeNumber}
       // value={number}
        placeholder="Write tags"
     
      />  
        <Image
          style={{marginVertical: 36}}
          source={require('../assets/line.png')}
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
