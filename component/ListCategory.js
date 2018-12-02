import React from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity
    } from 'react-native';
import { withNavigation } from 'react-navigation';
class ListCategory extends React.Component{
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Danh sachs danh muc</Text>
        
      </View>
    );
  }
}

export default withNavigation(ListCategory);
