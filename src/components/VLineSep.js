import React from 'react';
import AppStyles from '@styles/AppStyles';
import View from 'react-native';

const VLineSeparator = ({
  type,
  color: borderColor,
  style,
  thick,
  height
}) => {
  return (
    <View style={[
      AppStyles.vLineSeparator,
      {
        borderWidth: thick || 0.5,
        borderStyle: type || 'solid',
        ...(borderColor && { borderColor }),
        height: height || 10,
      },
      style
    ]} />
  );
};


export default VLineSeparator;