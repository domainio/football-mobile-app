import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import { View, Text } from 'react-native';

const AvatarTitle = ({ text, children, style }) => {
  const _text = (text || children);
  return (
    <Text style={[{ fontSize: 14, color: 'black' }, style]}>{_text}</Text>
  )
};

export default AvatarTitle;