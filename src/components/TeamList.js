import * as React from 'react';
import { Text, View, FlatList, TouchableNativeFeedback, Image, AppState } from 'react-native';
import ScreenNames from '@constants/ScreenNames';
import NavService from '@services/NavService';
import Avatar from '@components/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '@styles/AppStyles';

const TeamList = ({ teamList }) => {
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
  const onPressItem = () => {
    NavService.navigate(ScreenNames.Details, { team: item });
  }
  return (
    <TouchableNativeFeedback 
      onPress={onPressItem}
    >
      <View style={AppStyles.teamListItemContainer}>      
      <View style={{flexDirection: 'row'}}>
        <Avatar
          imageUrl={item.crestUrl} 
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