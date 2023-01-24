import React from 'react';
import { View,Text,SafeAreaView} from 'react-native';
import {styles} from './styles'

const Title = (props) =>{
    return (
       <Text style={styles.title}>{props.name}</Text>
    );
}

Title.defaultProps = {
    name : 'Default'
}

export default React.memo(Title);