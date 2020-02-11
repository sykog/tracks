import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

const LoadingScreen = ({navigation}) => {

  const {tryLocalStorageSignin} = useContext(AuthContext);

  useEffect(() => {
    tryLocalStorageSignin();
  }, []);

  return null;
};

export default LoadingScreen;