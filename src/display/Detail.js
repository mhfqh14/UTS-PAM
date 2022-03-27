import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { JADWAL, PELABUHAN, LAYANAN} from "../database/db";

const Detail = ({ route, navigation }) => {
  const data = route.params.text;
  const labuhId = PELABUHAN.find(item => item.pelabuhan_nama === data.awal).pelabuhan_kode;
  const dockId = PELABUHAN.find(item => item.pelabuhan_nama === data.akhir).pelabuhan_kode;
  const layananId = LAYANAN.find(item => item.nama_layanan === data.layanan).jenis_layanan;
  const listPelabuhan = JADWAL.filter(item =>
    item.kode_pelabuhan_awal === labuhId &&
    item.kode_pelabuhan_tujuan === dockId &&
    item.jenis_layanan === layananId &&
    item.tanggal_berangkat === data.tanggal);
  console.log(listPelabuhan);

  return (
    <>
      <StatusBar barStyle="hidden"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavigation}>
          <View style={styles.back}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Beranda')}>
              <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.search}>Hasil Tiket</Text>
        </View>
        <FlatList
          data={listPelabuhan}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity style={styles.Details}>
                <View style={styles.port}>
                  <Text style={styles.text}>
                    {PELABUHAN.find(theItem => theItem.pelabuhan_kode === item.kode_pelabuhan_awal).pelabuhan_nama}
                  </Text>
                  <Text style={styles.text}>
                    {PELABUHAN.find(theItem => theItem.pelabuhan_kode === item.kode_pelabuhan_tujuan).pelabuhan_nama}
                  </Text>
                </View>
                <View style={styles.time}>
                  <View style={styles.layanan}>
                    <Text style={styles.text}>
                      {LAYANAN.find(theItem => theItem.jenis_layanan === item.jenis_layanan).nama_layanan}
                    </Text>
                  </View>
                  <Text style={styles.text}>
                    {item.tanggal_berangkat}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.jadwal_id}
        >

        </FlatList>

        <Text style={styles.copyright}>Muhammad Faqih - 119140012</Text>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: '#f18534',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  button: {
    backgroundColor: '#ff3d00',
    borderRadius: 40,
    elevation: 2,
    marginTop: 40,
    marginHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 40,
  },
  search: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  card: {
    marginHorizontal: 30,
  },
  Details: {
    backgroundColor: '#f18534',
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 10,
  },
  port: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  layanan: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  copyright: {
    color: '#283593',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});


export default Detail;