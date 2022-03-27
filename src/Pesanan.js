import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

const Pesanan = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#f18534'}}>
            <Text style={styles.teks}>Riwayat Pesanan</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    teks:{
        color:"#283593",
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'serif',
        marginTop:15,
    },
});

export default Pesanan;