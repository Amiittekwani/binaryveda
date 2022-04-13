import React from 'react';
import styles from "./style"
import { Image, ScrollView, Text, 
    SafeAreaView, StatusBar, View, 
    TouchableOpacity, Switch } from 'react-native';


const App = () => (
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
            <View style= {{flexDirection: "row", marginTop: 40, alignItems: "stretch",flex: 1}}>
                <View style = {{flex: 0.5}}>
                <Image style ={styles.logo3} source = {require("../images/logo3.png")}/>
                </View>
                <View style= {{flex: 0.5,flexDirection: "row", justifyContent: "space-evenly"}}>
                <TouchableOpacity style = {{backgroundColor: "tomato", borderRadius: 100, height: 30, width: 30}}>
        <Image style = {styles.iconImage}source = {require("../images/profile1.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style = {styles.iconImage}source = {require("../images/plus.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style = {styles.iconImage}source = {require("../images/drawericon.png")}/>
        </TouchableOpacity>
                </View>
                
            </View>

            <View style = {{ height: 140, width:"100%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
            <TouchableOpacity>
        <Image style = {styles.icon2Image}source = {require("../images/upload.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style = {{marginTop : 20,height: 126, width: 127}}source = {require("../images/profile.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style = {styles.icon2Image}source = {require("../images/edit.png")}/>
        </TouchableOpacity>

            </View>
            <View style = {{height: 50, width: "100%"}}>
                <Text style = {{fontSize: 40, textAlign: "center", 
                textAlignVertical: "center", fontFamily: "BarlowCondensed-ExtraLight"}}>
                    John.doe
                </Text>

            </View>

            <View style = {{marginTop: 20, flexDirection: "row", justifyContent: "space-between", width: "87%"}}>
                 <Text style= {styles.dashboardtext}>
                     My dashboard
                 </Text>

                 <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={console.log("on")}/>
            </View>
            <View style= {{marginTop: 10,borderWidth: 1, width: "80%", alignSelf : "center", borderColor: "gray"}}/>

            <View style = {{ marginTop : 10,flexDirection: "row", width: "87%", justifyContent: "space-evenly"}}>
          
          <View>
              <Text style = {styles.numbers}>50</Text>
              <Text style= {styles.dashboardtext}>Followers</Text>
          </View>
          <View >
              <Text style = {styles.numbers}>25.0K</Text>
              <Text style= {styles.dashboardtext}>Artworks</Text>
          </View>
          <View>
              <Text style = {styles.numbers}>500</Text>
              <Text style= {styles.dashboardtext}>Exihibitions</Text>
          </View>
        </View>
     
      <View style= {{marginTop: 10,borderWidth: 1, width: "80%", alignSelf : "center", borderColor: "grey"}}/>
      
       <View style = {{ marginTop : 10,flexDirection: "row", width: "87%", justifyContent: "space-evenly"}}>
        <View style= {{flexDirection: "row"}}>
        <Image style = {styles.socialImage}source = {require("../images/heart.png")}/>
            <Text style = {styles.numbers2}>50</Text>
        </View>
        <View style= {{flexDirection: "row"}}>
        <Image style = {styles.socialImage}source = {require("../images/curser.png")}/>
            <Text style = {styles.numbers2}>100K</Text>
        </View>
        <View style= {{flexDirection: "row"}}>
        <Image style = {styles.socialImage}source = {require("../images/share.png")}/>
            <Text style = {styles.numbers2}>150</Text>
        </View>
      </View>

      <View style = {{flex: 1,margin: 20,height: 50, width: "90%", justifyContent: "space-evenly",
       backgroundColor: "black", flexDirection: "row"}}>
          <View style = {{backgroundColor: "blue ",height: 50, flex: 0.2,}}>
              <Text>Pallete</Text>
          </View>
          <View style = {{ flex: 0.2,height: 50, backgroundColor: "red"}}/>
          <View style = {{ flex: 0.2,height: 50, backgroundColor: "grey"}}/>
          <View style = {{flex: 0.2, height: 50, backgroundColor: "yellow"}}/>
          <View style = {{flex: 0.2, height: 50, backgroundColor: "green"}}/>
      </View>

      {/* <View style= {{height: 60, width: "100%", flexDirection: "row", justifyContent: "space-evenly"}}>
          <View>
          <Image style = {styles.socialImage}source = {require("../images/facebook.png")}/>
              <View
      style= {{marginTop : "10",borderWidth: 1, width: "100%", alignSelf : "center", color: "black"}}/>
          </View>
          <View>
          <Image style = {styles.socialImage}source = {require("../images/facebook.png")}/>
          </View>
          <View>
          <Image style = {styles.socialImage}source = {require("../images/facebook.png")}/>
          </View>

      </View> */}
      <View>
      <View style = {{flexDirection: "row"}}>
      <Image style = {styles.lastImage}source = {require("../images/bgimage.png")}/>
      <Image style = {styles.lastImage}source = {require("../images/bgimage.png")}/>
      </View>
      <View style = {{flexDirection: "row"}}>
      <Image style = {styles.lastImage}source = {require("../images/bgimage.png")}/>
      <Image style = {styles.lastImage}source = {require("../images/bgimage.png")}/>
      </View>
      <View style = {{flexDirection: "row"}}>
      <Image style = {styles.lastImage}source = {require("../images/bgimage.png")}/>
      <Image style = {styles.lastImage}source = {require("../images/bgimage.png")}/>
      </View>
      </View>
      
        </ScrollView>
        </SafeAreaView>
);

export default App;