import React,{useEffect, useState} from 'react';
import { View,Text,SafeAreaView, FlatList} from 'react-native';
import {styles} from './styles'
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import jasonFile from './attractions.json';
import Card from './Card';
import categ from './categories.json'

const Home = ({navigation}) =>{

    const [selectedCategorie,setSelectedCategorie] = useState('All') 
    const [data,setData] = useState([])

    useEffect(()=>{
        setData(jasonFile);
    },[])

    useEffect(() =>{
        if(selectedCategorie === ALL){
            setData(jasonFile);
        }else{
            const filtredList = jasonFile?.filter(item => item?.categories?.includes(selectedCategorie))
            setData(filtredList)
        }
    },[selectedCategorie])

    const renderItem = ({item,index}) =>{
        return (
            <Card onPress={() => navigation.navigate('AttractionDetails',{item})} item={item} index={index}/>
        );
    }

    const ALL = 'All'

    const headerComponent = () =>{
        return(
            <>
                <Title name={"Where do"} style={[styles.firstTitle,styles.list]}/>
                <Title name={"Where do you want to go?"} style={styles.list}/>
                <Title name={"Explore Attractions"} style={[styles.subtitle,styles.list]}/>
                <Categories 
                    selectedCategorie={selectedCategorie}  
                    setSelectedCategorie={setSelectedCategorie} 
                    list={[ALL,...categ]}
                />
                
            </>
        );
    }
    


    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={styles.container}> 
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={renderItem}
                    ListHeaderComponent={headerComponent}
                    ListHeaderComponentStyle={styles.header}
                    ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                    
                />
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Home);