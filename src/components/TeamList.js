import * as React from 'react';
import { Text, View, FlatList, TouchableNativeFeedback, Image } from 'react-native';
import ScreenNames from '@constants/ScreenNames';
import NavService from '@services/NavService';
import Avatar from '@components/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

let counter = 0;

const TeamList = ({ teamList }) => {
  console.log('TeamList: ', teamList)
  return (
    <View >
      <FlatList
        data={teamList}
        renderItem={({ item, index, separators }) => renderItem({ item })}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
};

const renderItem = ({ item }) => {
  counter = counter + 1;
  const onPressItem = () => {
    NavService.navigate(ScreenNames.Details, { team: item });
  }
  return (
    <TouchableNativeFeedback
      onPress={onPressItem}
    >
      <View style={{ height: 70, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding: 15 }}>      
      <View style={{flexDirection: 'row'}}>
        <Avatar
          imageUrl={counter < 10 ? item.crestUrl : ''} 
          name={item.name}
        />
        <View style={{  justifyContent: 'center',paddingLeft:15 }}>
          <Text style={{ color:'black' }}>{item.name}</Text>
          <Text style={{ color:'gray' }}>{item.area.name}</Text>
        </View>
        </View>
        <Icon name="chevron-right" size={30} color={'lightgray'} />
      </View>
    </TouchableNativeFeedback>
  )
}

export default TeamList;