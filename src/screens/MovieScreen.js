import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Config from 'react-native-config';

import request from '../utils/request';
import LoadingView from '../components/Loading';

const IMAGE_CDN = Config.MOVIE_DB_IMAGE_CDN;

function MovieScreen({ navigation, route }) {
  const movieId = route.params?.movieId;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true)

  const getMovie = async () => {
    const res = await request(`movie/${movieId}`);
    setMovie(res.data)
    navigation.setOptions({ title: res.data.title })
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <LoadingView loading={loading}>
        {movie.poster_path && (
          <Image
            style={styles.image}
            source={{ uri: `${IMAGE_CDN}w500${movie.poster_path}` }}
          />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.desc}>{movie.overview}</Text>
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>Release Date</Text>
            <Text style={styles.listItemDesc}>{movie.release_date}</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>Status</Text>
            <Text style={styles.listItemDesc}>{movie.status}</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>Tagline</Text>
            <Text style={styles.listItemDesc}>{movie.tagline}</Text>
          </View>
        </View>
      </LoadingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#edf1f7',
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginVertical: 16,
  },
  content: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  title: {
    color: 'rgb(34, 43, 69)',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 8,
  },
  desc: {
    color: 'rgb(143, 155, 179)',
    lineHeight: 20,
    marginBottom: 16,
  },
  listItem: {
    padding: 4,
    borderTopWidth: 1,
    borderColor: 'rgb(143, 155, 179)',
  },
  listItemTitle: {
    color: 'rgb(34, 43, 69)',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  listItemDesc: {
    color: 'rgb(143, 155, 179)',
  },
})

export default MovieScreen;
