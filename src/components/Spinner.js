import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  return (
    <ActivityIndicator
      {...props}
    />
  );
};

export default Spinner;