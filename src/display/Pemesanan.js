import React from "react";
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
const Pemesanan = ({navigation}) => {
    const [text, handleText] = React.useState({ 
        awal: '',
        akhir: '',
        layanan: '',
        tanggal: '',
        jam:'',
        orang:'',
    });

    const getText = (nameVar) => {
        return (val) => {
          handleText({ ...text, [nameVar]: val });
          console.log(text);
        }
      }

    return(
        <ScrollView style={styles.scrollView}>
            <SafeAreaView style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.header}>Kapalzy</Text>
                    <View style={styles.group}>
                        <Text style={styles.title}>Pelabuhan Awal</Text>
                        <View style={styles.search}>
                            <Icon style={styles.icon} name="ship" size={20} color='#283593'/>
                            <TextInput
                                style={styles.input} onChangeText={getText('awal')}
                                value={text.awal} placeholder="Pilih Pelabuhan Awal"
                                />
                        </View>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.title}>Pelabuhan Tujuan</Text>
                        <View style={styles.search}>
                            <Icon style={styles.icon} name="anchor" size={20} color='#283593'/>
                            <TextInput
                                style={styles.input} onChangeText={getText('akhir')}
                                value={text.akhir} placeholder="Pilih Pelabuhan Tujuan"
                                />
                        </View>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.title}>Kelas Layanan</Text>
                        <View style={styles.search}>
                            <Icon style={styles.icon} name="chalkboard-teacher" size={20} color='#283593'/>
                            <TextInput
                                style={styles.input} onChangeText={getText('layanan')}
                                value={text.layanan} placeholder="Pilih Layanan"
                                />
                        </View>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.title}>Tanggal Masuk Pelabuhan</Text>
                        <View style={styles.search}>
                            <Icon style={styles.icon} name="calendar-alt" size={20} color='#283593'/>
                            <TextInput
                                style={styles.input} onChangeText={getText('tanggal')}
                                value={text.tanggal} placeholder="Pilih Tanggal Masuk"
                                />
                        </View>
                    </View>
                    <View style={styles.group}>
                        <Text style={styles.title}>Jam Masuk Pelabuhan</Text>
                        <View style={styles.search}>
                            <Icon style={styles.icon} name="clock" size={20} color='#283593'/>
                            <TextInput
                                style={styles.input} onChangeText={getText('jam')}
                                value={text.jam} placeholder="Pilih Jam Masuk"
                                />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Detail', {text})}>
                        <Text style={styles.buttonText}>Cari Jadwal!</Text>
                    </TouchableOpacity>
                </View>
              <Text style={styles.copyright}>Muhammad Faqih - 119140012</Text>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: '#f18534',
    },
    header: {
      color: '#283593',
      fontSize: 50,
      fontWeight: 'bold',
      letterSpacing: 5,
      textAlign: 'center',
      marginBottom: 30,
      fontFamily: 'serif',    
    },
    main: {
      margin: 40,  
      marginTop: 70,  
      backgroundColor: '#fff',
      borderRadius: 40,
      paddingVertical: 40,
      paddingHorizontal: 20,
      marginVertical: 100,
    },
    group: {
      marginBottom: 30,
    },
    search: {
      marginLeft:15,    
      flexDirection: 'row', 
      justifyContent: 'center',   
      alignItems: 'center',
    },
    iconcalendar: {
      paddingRight: 5,
    },
    title: {
      marginLeft: 10,
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#e84f1f',
    },
    input: {
      borderWidth: 1,
      borderColor: '#283593',
      borderRadius: 50,
      color: '#283593',
      marginHorizontal: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      height: 40,
      width: 250,
      flex: 1,
    },
    button: {
      backgroundColor: '#283593',
      borderRadius: 40,
      marginHorizontal: 50,
      paddingVertical: 5,
      elevation: 2,
    },
    buttonText: {
      color: '#f18534',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
    copyright: {
      color: '#fff',
      textAlign: 'center',
      marginTop: 50,
    },
  });
export default Pemesanan;