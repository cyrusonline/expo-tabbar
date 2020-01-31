import React from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'

const PostScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Post Screen</Text>
            <Button title="back" onPress={()=>{props.navigation.goBack()}}/>
        </View>
    )
}

export default PostScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });