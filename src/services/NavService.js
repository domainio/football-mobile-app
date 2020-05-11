import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

const _navigationRef = React.createRef();

const navigate = (name, params) => {
  _navigationRef.current?.navigate(name, params);
}

const reset = (routes) => {
  _navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes
    })
  );
}

export default {
  navigate,
  reset,
  NavigationRef: _navigationRef,
};