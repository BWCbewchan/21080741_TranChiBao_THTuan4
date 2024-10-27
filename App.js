import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import  axios  from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const [categoryAPI, SetcategoryAPI] = useState([]);
  const [locationAPI, SetlocationAPI] = useState([]);
  const [category, Setcategory] = useState([
    { name: 'resort', image: require('./assets/imgs/resort.png') },
    { name: 'Homestay', image: require('./assets/imgs/homestay.png') },
    { name: 'Hotel', image: require('./assets/imgs/hotel.png') },
    { name: 'Lodge', image: require('./assets/imgs/lodge.png') },
    { name: 'Villa', image: require('./assets/imgs/villa.png') },
    { name: 'Apartement', image: require('./assets/imgs/apartment.png') },
    { name: 'Hostel', image: require('./assets/imgs/hostel.png') },
    { name: 'See all', image: require('./assets/imgs/seeall.png') },
  ]);

  const [location, setLocation] = useState([
    {
      image:
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4dbc7f633fd20d1a34b6405b5059c5d0',
    },
    {
      image:
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2364f03e5953c3509940407143e7a765',
    },
    {
      image:
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e78fe10ddd40a80be0d68b137e907541',
    },
    {
      image:
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e82917ff6b605b9eaac2b0682f3f5750',
    },
    {
      image:
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/37e0a23c3f291d8c6ceb1243ec5daef9',
    },
    {
      image:
        'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/37e0a23c3f291d8c6ceb1243ec5daef9',
    },
  ]);
  useEffect(() => {
    axios.get(
        'https://6459b1e995624ceb21edb04a.mockapi.io/api/tranchibao/category'
      )
      .then((response) => SetcategoryAPI(response.data))
      .catch((error) => console.error(error));
      axios.get(
        'https://6459b1e995624ceb21edb04a.mockapi.io/api/tranchibao/locations'
      )
      .then((response) => SetlocationAPI(response.data))
      .catch((error) => console.error(error));
  }, []);

  // const getCategory = async() =>{
  //     // const res = await fetch('https://6459b1e995624ceb21edb04a.mockapi.io/api/tranchibao/categorys')
  //     // SetcategoryAPI(res.data)
  // }

  const getlocationAPI = async () => {
    const res = await fetch(
      'https://6459b1e995624ceb21edb04a.mockapi.io/api/tranchibao/locations'
    );
    SetlocationAPI(res.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: '#5958b2' }}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={require('./assets/imgs/logoicon.png')}
            />
            <TextInput
              placeholder="Search place..."
              style={{
                backgroundColor: 'white',
                height: 40,
                width: '250px',
                borderRadius: 5,
                color: 'gray',
                padding: 10,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingBottom: 20,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: '50%',
                }}
                source={require('./assets/imgs/personicon.png')}
              />
              <View style={{}}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  Wellcome!
                </Text>
                <Text style={{ color: 'white' }}>Donna stroupe</Text>
              </View>
            </View>

            <Image
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
                borderRadius: '50%',
              }}
              source={require('./assets/imgs/ringicon.png')}
            />
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Category</Text>
          <FlatList
            data={categoryAPI}
            numColumns={4}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    marginRight: 10,
                    borderRadius: '50%',
                    padding: 10,
                  }}
                  source={{uri:item.image}}
                />

                <Text style={{}}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            Popular Destination
          </Text>
          <FlatList
            data={location}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{}}>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    marginRight: 20,
                    padding: 20,
                    borderRadius: 20,
                  }}
                  source={{uri:item.image}}
                />
              </View>
            )}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Rencommended</Text>
          <FlatList
            data={location.slice(3, 5)}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{}}>
                <Image
                  style={{
                    width: 140,
                    height: 140,
                    marginRight: 20,
                    padding: 20,
                    borderRadius: 20,
                  }}
                  source={{uri:item.image}}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: '#5958b2',
          padding: 30,
          flexDirection: 'row',
        }}>
        <View style={{}}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginRight: 40,
            }}
            source={require('./assets/imgs/homeicon.png')}
          />
          <Text style={{ color: 'white' }}>Home</Text>
        </View>
        <View style={{}}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginRight: 40,
            }}
            source={require('./assets/imgs/exploreicon.png')}
          />
          <Text style={{ color: 'white' }}>Explore</Text>
        </View>
        <View style={{}}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginRight: 40,
            }}
            source={require('./assets/imgs/searchicon.png')}
          />
          <Text style={{ color: 'white' }}>Search</Text>
        </View>
        <View style={{}}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginRight: 40,
            }}
            source={require('./assets/imgs/profileicon.png')}
          />
          <Text style={{ color: 'white' }}>profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
