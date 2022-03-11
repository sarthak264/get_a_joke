import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {getJoke} from '../utils/functions';
import {JokeContext} from '../context/JokeContext';

const GetJokeBtn = () => {
  const {setJoke} = useContext(JokeContext);
  return (
    <TouchableWithoutFeedback
      style={styles.button}
      onPress={() => {
        const getData = async () => {
          setJoke(await getJoke());
        };
        getData();
      }}>
      <Text style={styles.text}>TELL ME A JOKE</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 30,
    fontFamily: 'Anton-Regular',
    fontSize: 26,
    fontWeight: '400',
    color: '#000',
    letterSpacing: 1,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default GetJokeBtn;
