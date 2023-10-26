import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const profilepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/bgProfile.jpg')}
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
          <TouchableOpacity
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
          </TouchableOpacity>

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
              uri: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
            }}
          />
        </View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Profile</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: 'gray' }}>Lokasi</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 24 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, impedit!
        </Text>
        <View style={{ borderTopWidth: 1, marginTop: 20, borderColor: 'gray' }}>
          <ScrollView>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
              <AntDesign
                name="creditcard"
                color="blue"
                size={24}
              />
              <Text style={{ marginStart: 16, fontSize: 16, fontWeight: '500', lineHeight: 24 }}>payment details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
              <FontAwesome5
                name="shield-virus"
                color="blue"
                size={24}
              />
              <Text style={{ marginStart: 16, fontSize: 16, fontWeight:'500', lineHeight: 24 }}>Covid Advisor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
              <Entypo
                name="users"
                color="blue"
                size={24}
              />
              <Text style={{ marginStart: 16, fontSize: 16, fontWeight:'500', lineHeight: 24 }}>Refelar Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
              <AntDesign
                name="setting"
                color="blue"
                size={24}
              />
              <Text style={{ marginStart: 16, fontSize: 16, fontWeight:'500', lineHeight: 24 }}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingVertical: 16 }}>
              <AntDesign
                name="logout"
                color="blue"
                size={24}
              />
              <Text style={{ marginStart: 16, fontSize: 16, fontWeight:'500', lineHeight: 24 }}>Log out</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
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
