import React, {Component} from 'react'
import { render } from 'react-dom'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from './action/index'

export class main extends Component{
    componentDidMount(){
        this.props.fetchUser()
    }
    render(){
        const{currentUser} = this.props
        return(
            <View>
                <Text>aaa</Text>
            </View>

    )
}
}
const mapStateToProps = (store) =>({
    currentUser: store.userState.currentUser
})
  
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(null,mapDispatchProps)(main);