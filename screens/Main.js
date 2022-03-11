import React, {useContext, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import GetJokeBtn from '../components/GetJokeBtn';
import {getJoke} from '../utils/functions';
import {JokeContext} from '../context/JokeContext';

const Main = () => {
  const {joke, setJoke} = useContext(JokeContext);
  useEffect(() => {
    const getData = async () => {
      setJoke(await getJoke());
    };
    getData();
  }, []);
  return (
    <View>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.joke}>{joke}</Text>
        <GetJokeBtn />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 15,
  },
  joke: {
    fontSize: 27,
    color: '#000',
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Main;
