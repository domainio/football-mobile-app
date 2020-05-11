import * as React from 'react';
import AppStyles from '@styles/AppStyles';
import {View} from 'react-native';

const VSpaceSeparator = ({ height }) => {
  return (
    <View style={[
      AppStyles.vSpaceSeparator,
      height && { height: height }
    ]}
    />
  );
};

export default VSpaceSeparator;