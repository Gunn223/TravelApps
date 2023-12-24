import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Entypo, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { GetUser, GetUserbyId } from '../../../services/GetData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';

const profilepage = () => {
  const [item, setItem] = useState([]);
  const [reloadData, setReloadData] = useState(true);

  // Fungsi untuk memuat data
  const loadData = async () => {
    try {
      await GetUserbyId((data) => {
        setItem(data || []);
      });
    } catch (error) {
      console.log('Err from load data profile Page', error);
    }
  };

  // Panggil loadData saat komponen pertama kali dimount dan setiap kali 'reloadData' berubah
  useEffect(() => {
    if (reloadData) {
      loadData();
      // Setelah loadData dipanggil, atur kembali reloadData menjadi false
      setReloadData(false);
    }
    setReloadData(true);
  }, [reloadData]);
  console.log(reloadData);
  return (
    <View style={styles.container}>
      {item.length > 0 &&
        item.map((data, i) => (
          <View key={i}>
            <View style={styles.header}>
              <Image
                source={{
                  uri:
                    data.sampul_bg ||
                    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
                }}
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
                <View></View>

                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => router.replace('/updateUser/Index')}>
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
                    uri:
                      data && data.image_profile
                        ? data.image_profile
                        : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
                  }}
                />
              </View>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{data.username}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', color: 'gray' }}>{data.lokasi}</Text>
              <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 24 }}>{data.bio}</Text>
              <View style={{ borderTopWidth: 1, marginTop: 20, borderColor: 'gray' }}>
                <ScrollView style={{ minHeight: '100%' }}>
                  {/* <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
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
                  </TouchableOpacity> */}
                  <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}
                    onPress={() => router.replace('/(tabs)/home/History')}>
                    <FontAwesome
                      name="history"
                      size={24}
                      color="#e74c3c"
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
                  <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}
                    onPress={() => router.replace('/(tabs)/home/Setting')}>
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
                      onPress={() => {
                        AsyncStorage.removeItem('id'), AsyncStorage.removeItem('token');
                      }}
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
