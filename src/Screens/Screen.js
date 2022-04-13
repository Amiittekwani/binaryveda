import { View, Text, Image, ScrollView,
   TouchableOpacity,  StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./style"
import { useNavigation } from '@react-navigation/native';


export default function Screen() {
  const navigation = useNavigation();
  return (
    
          
    <SafeAreaView style = {{    
      height:'100%',
      width:'100%',}}>

      
  
      <StatusBar translucent={true}/>
        
      <ScrollView vertical = {true} 
      style = {{
      }}
      contentContainerStyle = {{
        alignItems:'center'
      }}
      >
      <View style ={{height: 115, width: "100%"}}>
      <Image style = {styles.logoimage} 
      source = {require("../images/logo.png")}
        />
      </View>
      <View style = {{height: 362, width: "100%"}}>
      <Image style = {styles.bgimage} 
      source = {require("../images/bgimage.png")}
        />
      </View>
      <View style = {{height: 79, width: "100%"}}>
        <Text style = {styles.text0}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>
      </View>
      <View style ={{flex: 1,flexDirection: "row", justifyContent: "center"}}>
      <TouchableOpacity  onPress = {() => navigation.navigate('Screen2')} style = {styles.bregister}>
        <View style = {{flexDirection: "row"}}>
        <Image style = {styles.arrowimage} source = {require("../images/arrow.png")}/>
          <Text style ={styles.registerText}>register</Text> 
        </View>
           
          </TouchableOpacity>
          <Text style = {styles.register1Text}>me as a collecter</Text>
       
      </View>
      <View style = {{marginTop: 20}}>
      <TouchableOpacity >
        <View style = {{flexDirection: "row"}}>
        <Image style = {styles.arrowimage} source = {require("../images/arrow2.png")}/>
          <Text style ={styles.trackText}>track my application</Text> 
        </View>
           
          </TouchableOpacity>
      </View>
      <View>
        <Image style = {styles.image2} source = {require("../images/man.png")} />
        <Text style = {styles.textHeading}>
        Lorem ipsum dolor
        </Text>
        <Text style ={styles.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
        <Image style = {styles.image2} source = {require("../images/atom.png")} />
        <Text style = {styles.textHeading}>
        Lorem ipsum dolor
        </Text>
        <Text style ={styles.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
        <Image style = {styles.image2} source = {require("../images/star.png")} />
        <Text style = {styles.textHeading}>
        Lorem ipsum dolor
        </Text>
        <Text style ={styles.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
        <Image style = {styles.image2} source = {require("../images/mouse.png")} />
        <Text style = {styles.textHeading}>
        Lorem ipsum dolor
        </Text>
        <Text style ={styles.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Text>
      </View>

      <View style = {{
        position:'relative',
        marginTop : 20,
        bottom:0,
        zIndex:3,
        marginHorizontal:'15%',
        alignSelf:'center',
        marginBottom:'3%',
        flex:1,
        justifyContent: 'space-evenly',
        flexDirection:'row'
       }}>
        <TouchableOpacity>
        <Image style = {styles.social1Image}source = {require("../images/facebook.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image  style = {styles.social1Image} source = {require("../images/instagram.png")}/>
        </TouchableOpacity>
        
      </View>

      <View
      style= {{borderWidth: 1, width: "80%", alignSelf : "center", color: "grey"}}/>
      
      <View style = {{height: 296, width: "100%", color: "black", marginTop: 20}}>
       <Image style= {styles.logo2} source = {require("../images/logo2.png")}/>

       <View style= {{flexDirection: "row", justifyContent: 'space-evenly'}}>
         <View style = {{}}>
        <TouchableOpacity>
          <Text style = {styles.endText}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style = {styles.endText}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style = {styles.endText}>Raech ss</Text>
        </TouchableOpacity>
         </View>

         <View>
         <TouchableOpacity>
          <Text style = {styles.endText}>Affiliations</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style = {styles.endText}>Disclaimers</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style = {styles.endText}>Privacy Policy</Text>
        </TouchableOpacity>
         </View>
       </View>
       <View style= {{ marginTop: 20,borderWidth: 1, width: "80%", alignSelf : "center", color: "grey"}}/>
       <View style ={{ marginTop: 20,flexDirection: "row", justifyContent: "center"}}>
         <Image style = {{height: 25, width: 25, marginRight: 10}} source = {require("../images/c.png")}/>
         <Text style ={{fontSize: 16, fontFamily:"BarlowCondensed-Light" ,color: "black"}}>Content Copyright Reserved</Text>
       </View>
      </View>
  
    
    </ScrollView> 
    </SafeAreaView>
      
       
      
   
  )
}