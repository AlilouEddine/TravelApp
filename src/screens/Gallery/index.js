import React from 'react';
import { View,Text,SafeAreaView} from 'react-native';
import {styles} from './styles'

const Gallery = () =>{

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={styles.container}> 
                <Text>test</Text>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Gallery);