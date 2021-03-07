import React from 'react';
import { Text, View, Button } from 'react-native';
import SignupScreen from '../LoginScreen/SignupScreen'

import { connect } from 'react-redux';




class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={{}}>
                
                    
                
                <Text></Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { userloginaccount } = state
    return { userloginaccount }
  };

  export default connect(mapStateToProps)(ProfileScreen);