import React from 'react';
import { View,Text,SafeAreaView} from 'react-native';
import {styles} from './styles'

const Title = ({name,style}) =>{
    return (
       <Text style={[styles.title,style]}>{name}</Text>
    );
}

Title.defaultProps = {
    name : 'Default'
}

export default React.memo(Title);