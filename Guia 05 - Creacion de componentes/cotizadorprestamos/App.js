/**
* @format
  * @flow strict-local
*/
import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 StatusBar,
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
return(
 <>
 <StatusBar barStyle="light-content"/>
 <SafeAreaView style={styles.Header}>
 <Text style={styles.HeadApp}>Cotizador de Prestamos</Text>
 <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths} />
 </SafeAreaView>
 <View>
 <Text>Result</Text>
 </View>
 <View>
 <Text>Footer</Text>
 </View>
 </>
);
}
const styles = StyleSheet.create({
 Header:{
 backgroundColor:colors.PRIMARY_COLOR,
 height:200,
 borderBottomLeftRadius:30,
 borderBottomRightRadius:30,
 alignItems:'center'
 },
 HeadApp:{
   fontSize:25,
   fontWeight:'bold',
   color:'#fff',
   marginTop:15,
 },
})
