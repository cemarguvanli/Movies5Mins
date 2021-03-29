import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';

const ColWidth = Dimensions.get('screen').width / 3;
const IMAGE_CDN = Config.MOVIE_DB_IMAGE_CDN;

const MovieItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      style={styles.item}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{ uri: `${IMAGE_CDN}w500${item.poster_path}` }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc} numberOfLines={8}>{item.overview}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  imageWrapper: {
    marginRight: 8,
  },
  image: {
    width: ColWidth - 16,
    minHeight: 200,
    resizeMode: 'cover',
  },
  content: {
    width: (ColWidth * 2) - 16
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
  },
});

export default MovieItem;
