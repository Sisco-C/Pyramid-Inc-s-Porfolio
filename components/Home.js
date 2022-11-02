import * as React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, fontWeight, Button, onPressLearnMore, Alert, TouchableOpacity, TextInput, ViewBase, Touchable } from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from 'expo-font';
import { MaterialIcons, SimpleLineIcons, EvilIcons, Foundation, AntDesign, MaterialCommunityIcons, FontAwesome5, Fontisto, Feather, FontAwesome, } from '@expo/vector-icons';

// import { StockChartComponent } from '@syncfusion/ej2-react-charts';
import { Chart, Area, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'



import { Ionicons } from '@expo/vector-icons';


export default Home = () => {
  const [loaded] = useFonts({
    PlusJakartaSans: require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });



  return (

    <View style={styles.container}>




      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/Round.png')}
          />



          <View>
            <Text style={{ fontWeight: '700', fontSize: 17, }}> Portfolio</Text>

          </View>
          <Image
            source={require('../assets/images/challenge.png')}
          />

        </View>
      </SafeAreaView>

      <View style={styles.mainWrapper} />
      <View>
        <Text style={{
          fontSize: 14, fontWeight: '400', color: '#707070', marginLeft: 20, marginTop: -46
        }}> Portfolio balance</Text>
      </View>
      <Text style={{
        fontSize: 30, fontWeight: '600', color: '#111111', marginLeft: 20, marginTop: -26
      }}>$38,552.62</Text>
      <Text style={{
        fontSize: 14, fontWeight: '400', color: '#00FF7F', marginLeft: 20,
      }}>+$1,439.58(3.88%)</Text>
      <Chart
        style={{ height: 350, width: 400 }}
        data={[
          { x: -2, y: 15 },
          { x: -1, y: 10 },
          { x: 0, y: 12 },
          { x: 1, y: 7 },
          { x: 2, y: 6 },
          { x: 3, y: 8 },
          { x: 4, y: 10 },
          { x: 5, y: 8 },
          { x: 6, y: 12 },
          { x: 7, y: 14 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 10, y: 18 },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: -2, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
        <HorizontalAxis tickCount={5} />
        <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } } }} />
        <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
      </Chart>
      <View style={styles.subWrapper}>
        <Text style={{
          fontSize: 14, fontWeight: '400', color: '#707070'
        }} >1H</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#111111' }}>1D</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#707070' }}>1W</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#707070' }}>1M</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#707070' }}>1Y</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#707070' }}>All</Text>

      </View>
      <View style={styles.midWrapper}>
        <TouchableOpacity style={{
          marginLeft: 12, backgroundColor: 'black', borderRadius: 100, width: 77, height: 20, alignItems: 'center'
        }}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#F5F5F5', borderRadius: 100, width: 77, height: 20, alignItems: 'center', marginLeft: 5
        }}>
          <Text style={{ color: '#111111', fontSize: 14, fontWeight: '600' }}>Arts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#F5F5F5', borderRadius: 100, width: 77, height: 20, alignItems: 'center', marginLeft: 5
        }}>
          <Text style={{ color: '#111111', fontSize: 14, fontWeight: '600' }}>Crypto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#F5F5F5', borderRadius: 100, width: 77, height: 20, alignItems: 'center', marginLeft: 5
        }}>
          <Text style={{ color: '#111111', fontSize: 14, fontWeight: '600' }}>Stocks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#F5F5F5', borderRadius: 100, width: 77, height: 20, alignItems: 'center', marginLeft: 5
        }}>
          <Text style={{ color: '#111111', fontSize: 14, fontWeight: '600' }}>Estate</Text>
        </TouchableOpacity>


      </View>
      <TouchableOpacity style={{
        borderWidth: 1, marginRight: 12, marginLeft: 12, borderColor: '#CFCFCF', flexDirection: 'row',
        justifyContent: 'space-between',
        height: 58, borderRadius: 10, flexDirection: 'row', alignItems: 'center',
        marginTop: 23
      }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#707070', marginLeft: 17, }}>Invested in assets</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', marginRight: 14, color: '#111111' }}>$38,650.31</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginLeft: 12, borderColor: '#CFCFCF', alignItems: 'center', alignContent: 'space-around', flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1, marginRight: 12, height: 58, borderRadius: 10, flexDirection: 'row', marginTop: 7
      }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#707070', marginLeft: 17, }}>Cash Balance</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', marginRight: 14, color: '#111111' }}>$650.31</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        marginLeft: 12, marginTop: 7, borderColor: '#CFCFCF', backgroundColor: '#F5F5F5',
        borderWidth: 1, marginRight: 12, height: 58, borderRadius: 10, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'
      }}>
        <Ionicons name='ellipse' size={22} style={{ marginLeft: -270 }} />
        <Text style={{ fontSize: 16, fontWeight: '600', marginLeft: 12, color: '#111111' }}>Account Details</Text>
      </TouchableOpacity>
      <View style={styles.footerWrapper}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={26} color={'black'} style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="search" size={26} color={'black'} style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={30} color={'black'} style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="bell" size={30} color={'black'} style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="egg-outline" size={26} color={'black'} style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.line}></View>

    </View>

  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: 'white'

  },


  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    width: 414,
    height: 88,
    marginVertical: 45,
  },
  midWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 20,
    width: 372.5,
    marginRight: 12,
    marginLeft: 12,
  },
  subWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 20,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 41.5,
    marginRight: 44.5

  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    width: 414,
    height: 83,
    marginRight: 12,
    marginLeft: 12,
  },


  mainWrapper: {
    backgroundColor: '#FDFDFD',
    width: 428,
    height: 829,
    top: 114,
    borderTopWidth: 1,
    borderTopColor: '#CED5DC',
    position: 'absolute',
  },




  line: {
    width: 134,
    height: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: -15,
    borderRadius: 10,
  },


});
