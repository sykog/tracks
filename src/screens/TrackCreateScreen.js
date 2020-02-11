import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, withNavigationFocus} from "react-navigation";
import {Text} from 'react-native-elements'
import {Context as LocationContext} from '../context/LocationContext';
import Map from '../components/Map';
import {FontAwesome} from '@expo/vector-icons';
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
//import '../_mockLocation';

const TrackCreateScreen = ({isFocused}) => {

  const {state: {recording}, addLocation} = useContext(LocationContext);
  const callback = useCallback(location => {
    addLocation(location, recording);
  }, [recording]);
  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Map/>
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm/>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20}></FontAwesome>
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);