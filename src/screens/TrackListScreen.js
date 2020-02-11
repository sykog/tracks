import React, {useContext} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {NavigationEvents} from "react-navigation";
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {

  const {state, fetchTracks} = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks}/>

      <FlatList data={state} keyExtractor={item => {item._id}} renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {id: item._id})}>
            <ListItem chevron title={item.name}/>
          </TouchableOpacity>
        );
      }}/>

      <Button title="Track Details" onPress={() => navigation.navigate('TrackDetail')}/>
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

const styles = StyleSheet.create({});

export default TrackListScreen;