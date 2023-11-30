import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { GetUser, GetUserbyId } from '../../../services/GetData';

import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';

const profilepage = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    GetUserbyId((data) => {
      setItem(data);
    }, 61);
  }, []);
  // buat id agar dinamis mengikuti user login

  return (
    <View style={styles.container}>
      {item.length > 0 &&
        item.map((data, i) => (
          <View key={i}>
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.214MOj7GG9JPL0prZf_FNAHaEK&pid=Api&P=0&h=180' }}
                style={{ width: '100%', height: '100%' }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  right: 0,
                  start: 0,
                  top: 36,
                  paddingHorizontal: 16,
                }}>
                {/* <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'white',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
            />
          </TouchableOpacity> */}
                <View></View>

                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.body}>
              <View style={{ height: 55 }}>
                <Image
                  style={styles.UserProfile}
                  source={{
                    uri: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
                  }}
                />
              </View>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{data.username}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', color: 'gray' }}>{data.lokasi}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 24 }}>{data.bio}</Text>
              <View style={{ borderTopWidth: 1, marginTop: 20, borderColor: 'gray' }}>
                <ScrollView style={{ minHeight: '100%' }}>
                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
                    <AntDesign
                      name="creditcard"
                      color="#e74c3c"
                      size={24}
                    />
                    <Text
                      style={{
                        marginStart: 16,
                        fontSize: 16,
                        fontWeight: '500',
                        lineHeight: 24,
                      }}>
                      payment details
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
                    <Entypo
                      name="users"
                      color="#e74c3c"
                      size={24}
                    />
                    <Text
                      style={{
                        marginStart: 16,
                        fontSize: 16,
                        fontWeight: '500',
                        lineHeight: 24,
                      }}>
                      History
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
                    <AntDesign
                      name="setting"
                      color="#e74c3c"
                      size={24}
                    />
                    <Text
                      style={{
                        marginStart: 16,
                        fontSize: 16,
                        fontWeight: '500',
                        lineHeight: 24,
                      }}>
                      Setting
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
                    <AntDesign
                      name="logout"
                      color="#e74c3c"
                      size={24}
                    />
                    <Link
                      onPress={() => AsyncStorage.removeItem('id')}
                      href="/signin/"
                      style={{
                        marginStart: 16,
                        fontSize: 16,
                        fontWeight: '500',
                        lineHeight: 24,
                      }}>
                      Log out
                    </Link>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

export default profilepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '25%',
  },
  body: {
    display: 'flex',
    paddingHorizontal: 16,
  },
  UserProfile: {
    width: 84,
    height: 84,
    borderRadius: 50,
    position: 'absolute',
    top: -35,
  },
});
