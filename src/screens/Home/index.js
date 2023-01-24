import React from 'react';
import { View,Text,SafeAreaView} from 'react-native';
import {styles} from './styles'
import Title from '../../components/Title';

const Home = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <Title name={"Home screen"}/>
            <Title />
        </SafeAreaView>
    );
}

export default React.memo(Home);