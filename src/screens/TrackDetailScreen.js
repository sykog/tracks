import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import MapView, {Polyline} from "react-native-maps";
import {Context as TrackContext} from '../context/TrackContext';

const TrackDetailScreen = ({navigation}) => {

  const {state} = useContext(TrackContext);
  const id = navigation.getParam('id');

  const track = state.find(track => track._id === id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text h2>{track.name}</Text>

      <MapView style={styles.map} initialRegion={{
        longitudeDelta: 0.01, latitudeDelta: 0.01, ...initialCoords
      }}>
        <Polyline coordinates={track.locations.map(location => location.coords)}/>
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;