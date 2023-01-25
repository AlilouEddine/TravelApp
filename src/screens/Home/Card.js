import React from 'react';
import { View,Text,StyleSheet,Dimensions, Image,TouchableOpacity} from 'react-native';
import Title from '../../components/Title';

const Card = ({item,index,onPress}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,index%2 === 0 ? styles.first : 0]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:item.images[0]}}/>
            </View>
            <Title name={item.name} style={styles.name}/>
            <View style={styles.countryContainer}>
                <View>
                    <Image style={styles.locationIcon} source={require('./location.png')}/>
                </View>
                <Text style={styles.countryText}>{item.country}</Text>
            </View>
        </TouchableOpacity>
    );
}

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"#E2E2E2",
        borderRadius:10,
        padding:5,
        width:(width-60)/2,
        marginBottom:10,
    },
    first:{
        marginRight:10,
        marginLeft:25,
    },
    image:{
        width:'100%',
        height:120,
        borderRadius:10,
    },
    name:{
        color:'#000',
        fontSize:14,
        marginVertical:8,
    },
    locationIcon:{
        width:20,
        height:20,
        marginRight:5,
        tintColor : 'rgba(0,0,0,0.5)',
    },
    countryContainer:{
        flexDirection:'row',
        alignItems:'center'

    },
    countryText:{
        color:'rgba(0,0,0,0.5)'
    }
});

export default React.memo(Card);