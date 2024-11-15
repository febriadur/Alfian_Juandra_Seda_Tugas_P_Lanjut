import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh7g2365nYnQ-FMqIeelmm0ilU5zPfUCTgkD1lAKA4YDIrxSciQyp1vRw-V7XFaHxO7g2jx6vsli1B8skSVRigOx1lDSgK9ubiPGoHx0QD9yM-c2gs5uIaZ9SuxQfQpYShJdUsqV0-m2KDMpo9j2UlZuCGWPt0PzRTusjtnNMYGF9SXkjfdOyNhUOr/w380/GKL14_OVO%20-%20Koleksilogo.com.jpg",
              width: 100,
              height: 150,
            }}
          />
    
         
          <TextInput style={styles.inputtext1} placeholder="No Phonsel" />
          
          
          <TouchableOpacity style={styles.button1}onPress={()=>alert('Nomor Ponsel Yang Anda Masukan Salah,Silahkan Coba Kembali')}>
            <Text style={styles.text1}>Sig In</Text>
          </TouchableOpacity>
          <Text>OR</Text>
          <TouchableOpacity style={styles.button2}onPress={()=>alert('Anda Sudah Terdaftar Sebagi Pengguna OVO')}>
            <Text style={styles.text2}>Join Now</Text>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "purple",
  borderRadius:15,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{
  backgroundColor: "green",
  borderRadius:15,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},



 text1:{
   fontFamily:"Arial",
   fontSize:15,
   color:"white",
 },
 text2:{
  fontFamily:"Arial",
  fontSize:15,
  color:"white",
},

 inputtext1:{
  color:'White',
  borderRadius:5,
  borderWidth:1,
  fontSize:10,
  height:35,
  width:300,
  marginTop:10,
 },


})