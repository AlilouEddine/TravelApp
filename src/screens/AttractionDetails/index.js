import React from 'react';
import { View,Text,SafeAreaView} from 'react-native';
import {styles} from './styles'

const AttractionDetails = ({route}) =>{
    
    const {item} = route.params || {} ;
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={styles.container}> 
                <Text style={{color:'#000'}}>{item.name}</Text>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(AttractionDetails);