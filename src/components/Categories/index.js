import React,{useState,useMemo} from 'react';
import { View,Text,SafeAreaView, FlatList,TouchableOpacity} from 'react-native';
import {styles} from './styles'

const Categories = ({list,selectedCategorie,setSelectedCategorie}) =>{

    

    const renderItem = ({item,index}) =>{
        const selected = selectedCategorie === item;
        return ( 
                <TouchableOpacity 
                    onPress={() => setSelectedCategorie(item)}
                    style={[styles.itemContainer,selected ? styles.SelectedItemContainer : {},index === 0 ? {marginLeft:25} :0 ]}
                    >
                    <Text style={[styles.title, selected ? styles.selctedTitle : {} ]}>{item}</Text>
                </TouchableOpacity>
        );
    }

    return (
        <FlatList 
            data={list}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}



export default React.memo(Categories);