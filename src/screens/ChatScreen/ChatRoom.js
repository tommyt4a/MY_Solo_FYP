import React from 'react';
import { Text, View, StyleSheet , Button , TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fire from './Fire'
import firebase from 'firebase';
import 'firebase/firestore';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import ChatList from './ChatList'

class ChatRoom extends React.Component{
    state={
        showmessages:[],
        username:'',
        useraccount:'',
        text:'',
        target:'',
        getdate:'',
    }


    get user() {
      const {useraccount} =this.props.route.params
      firebase.firestore().collection('user').doc(`${useraccount}`).get().then((doc)=>{
        if(doc.exists){
          
         this.setState({username: doc.get('displayname')})
         console.log(this.state.username)
 
        }
 
     })
        return {
          name: this.state.username,
          _id: useraccount,
        };
      }
   
      componentDidMount() {

        const {useraccount} =this.props.route.params
        firebase.firestore().collection('user').doc(`${useraccount}`).get().then((doc)=>{
          if(doc.exists){
            
           this.setState({username: doc.get('displayname')})
           console.log(this.state.username)
   
          }
   
       })


         const {chatroomid}=this.props.route.params
         firebase.firestore().collection('chatroom').doc(`${chatroomid}`).collection(`${chatroomid}`).orderBy('createat','desc')
         
    
    .onSnapshot(querySnapshot => {
      const message = [];
  
      querySnapshot.forEach(documentSnapshot => {
        message.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      
        this.setState({showmessages: message})
        
        
        
      })
         
      }

     
    gettime=()=>{
      var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({getdate: date + '/' + month + 
    + ' ' + hours + ':' + min + ':' + sec})
    console.log(this.state.getdate)
    
    }
    
    send=()=>{
      if(this.state.text===''){

      }else{
        this.gettime()
   
    
        const {chatroomid}=this.props.route.params
      console.log(this.state.text)
      firebase.firestore().collection('chatroom').doc(chatroomid).collection(chatroomid).doc().set({
        text: this.state.text,
        sendby: this.state.username,
        createat: this.state.getdate,
      })
      console.log(this.state.text)
      this.textInput1.clear()
      this.setState({text: ''})
      }
      
    }
    

    render(){
      const {target} = this.props.route.params
        return(
          <View>
            <View style={styles.goback}>
              <TouchableOpacity style={styles.gobackbutton} onPress={()=>this.props.navigation.navigate(ChatList)}>
                <Text>返回上一頁</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.toptop}>
              <Text>與 {target} 聊天</Text>

            </View>
            <ScrollView>
            <View style={styles.toppart}>
            <FlatList
            inverted={true}
            data={this.state.showmessages}
            renderItem ={({ item }) => (
              <View style={[(item.sendby==this.state.username)? styles.byme : styles.byother]}>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.name}>{item.sendby}</Text>
                <Text style={styles.time}>{item.createat}</Text>
                </View>
                
                <Text style={[(item.sendby==this.state.username)? styles.mytext : styles.othertext]}>{item.text}</Text>
                
              </View>
            )}
            />

            </View>

            </ScrollView>
           
            
            
           
          
           
           <View style={styles.bottompart}>
             <View style={styles.inputView} >
          <TextInput  
            ref={input => { this.textInput1 = input }}
            style={styles.inputText}
            placeholder="訊息..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({text:text})}
            
            />
            
        </View>
        <TouchableOpacity style={styles.pass} onPress={()=>this.send()}>
              <Text style={{}}>傳送</Text>
            </TouchableOpacity>
           </View>

          
          </View>
          

        
          
            
        )}
    
}

const styles = StyleSheet.create({
  mytext:{
    alignSelf:'flex-end',
    marginRight:5,
  },
  byother:{

    height: 50,
  },
  byme:{
    marginLeft:180,
    height: 50,
  },
  othertext:{
    marginLeft:5,
  },
  time:{
    marginLeft:20,
    fontSize:10,
  },
  name:{
    marginLeft:5,
    fontSize:10,
  },
  gobackbutton:{
   borderWidth:1 ,
   width:80,
   justifyContent:"center",
    alignItems:'center',
  },
  goback:{
    marginTop:40,
    marginLeft:10,
  },
  toptop:{
    
    height:50,
    justifyContent:"center",
    alignItems:'center',
  },
  bottompart:{
    height:50,
    flexDirection:'row',
  },
  toppart:{
    height:430,
  },
  pass:{
    width:72,
    height:50,
    
    borderColor:'red',
    borderWidth:1,
    backgroundColor:'white',
    justifyContent:"center",
    alignItems:'center',
  },
  inputText:{
    height:50,
    color:"#003f5c"
  },
  inputView:{
   
    
    width:"80%",
    backgroundColor:"white",
    borderColor:'red',
    borderWidth:1,
    
    height:50,
    
    justifyContent:"center",
    padding:20
  },

})

export default ChatRoom;