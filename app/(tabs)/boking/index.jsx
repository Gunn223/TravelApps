import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { GetDestination } from '../../../services/GetData';

const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await GetDestination();
        if (data && data.length > 0) {
          setData(data);
        }
      } catch (error) {
        console.log('err destination get data', error);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
        <ScrollView style={styles.scrollContainer}>
          {data.length > 0 &&
            data.map((item, index) => (
              <View
                key={index}
                style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.cardImage}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  {/* <Text style={{ marginHorizontal: 5, borderBlockColor: 'black', height: 20 }}>|</Text> */}
                  <Text style={styles.cardTitle}>{item.date}</Text>
                </View>
                <Link
                  href={`/detail?id=${item.id_destination}`}
                  style={styles.detailButton}>
                  <Text style={styles.detailText}>Detail Paket</Text>
                </Link>
              </View>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    margin: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDate: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  detailButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  scrollContainer: {
    borderRadius: 20,
  },
});
