import React from 'react';
import { Text, View, Button } from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'
import global from '../../../global'


function add(){
    foo++;

}

class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={{}}>
                <Button title="AAAAAA" onPress={add()}>
                    
                </Button>
                <Text>{add()}</Text>
            </View>
        )
    }
}

export default ProfileScreen;