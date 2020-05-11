import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import { View, Text } from 'react-native';

const AvatarSubTitle = ({ text, children, style, color, ...rest }) => {
  const _text = (text || children);
  return (
    <Text
      style={[
        { fontSize: 14, color: 'gray' },//AppStyles.label,
        style,
        (color && { color })
      ]}
      {...rest}
    >{_text}</Text>
  )
};

export default AvatarSubTitle;