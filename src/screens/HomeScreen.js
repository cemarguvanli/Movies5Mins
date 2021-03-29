import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import LoadingView from '../components/Loading';
import MovieItem from '../components/MovieItem';

import Search from '../components/Search';
import request from '../utils/request';


const HomeScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [movies, setMovies] = useState({ results: [], page: 1, total_pages: 1, total_results: null });

  const searchMovies = async (query) => {
    setIsSearching(true);
    const res = await request('search/movie', {
      params: { query }
    });

    console.log(res, 'list');

    if (!res.errors) {
      setIsSearching(false);
      setMovies(res.data)
      return;
    }
    setIsSearching(false);
  };

  const onChange = (searchValue) => {
    if (searchValue) {
      return searchMovies(searchValue);
    }
    setMovies({ results: [], page: 1, total_pages: 1, total_results: null })
  }

  const renderItem = ({ item }) => {
    return <MovieItem item={item} onPress={() => navigation.navigate('Details', { movieId: item.id })} />
  }

  return (
    <View style={styles.main}>
      <Search
        debounceTime={500}
        onChange={onChange}
      />
      <LoadingView loading={isSearching}>
        <FlatList
          data={movies.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={1}
        />
      </LoadingView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;