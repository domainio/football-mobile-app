import * as React from 'react';
import { CommonActions } from '@react-navigation/native';
import ScreenNames from '@constants/ScreenNames';

const _navigationRef = React.createRef();

const navigate = (name, params) => {
  _navigationRef.current?.navigate(name, params);
}

const reset = (routes) => {
  _navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: ScreenNames.Home},
      ],
    })
  );
}

export default {
  navigate,
  reset,
  NavigationRef: _navigationRef,
};