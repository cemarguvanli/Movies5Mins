import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { CloseIcon } from './Icons';

import useDebounce from '../hooks/useDebounce';

const Search = ({
  value, onChange, debounceTime
}) => {
  const [searchInputFocussed, setSearchInputFocussed] = useState(false);
  const [searchValue, setSearchValue] = useState(value || '');

  const focusTextInput = useCallback(() => setSearchInputFocussed(true), []);
  const blurTextInput = useCallback(() => setSearchInputFocussed(false), []);
  const handleClearSearch = useCallback(() => setSearchValue(''), []);

  useDebounce(searchValue, (val) => onChange(val), debounceTime);

  return (
    <View style={styles.searchInputWrapper}>
      <TextInput
        autoCorrect={false}
        autoCompleteType='off'
        placeholder="Search movies..."
        value={searchValue}
        onChangeText={(val) => setSearchValue(val)}
        onFocus={focusTextInput}
        onBlur={blurTextInput}
        style={styles.searchInputStyle}
        placeholderTextColor="#8E8E93"
      />
      {(searchInputFocussed && searchValue.length > 0) && (
        <TouchableOpacity style={styles.closeIconWrapper} onPress={handleClearSearch}>
          <CloseIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputStyle: {
    fontSize: 16,
    fontWeight: '400',
    height: 50,
    letterSpacing: 0.5,
    paddingHorizontal: 24,
    paddingVertical: 10,
    paddingRight: 36,
    borderRadius: 12,
    width: '100%',
    backgroundColor: 'rgba(142,142,147,0.12)'
  },
  searchInputWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 10,
    marginBottom: 32,
  },
  closeIconWrapper: {
    position: 'absolute',
    right: 28,
    top: 18
  },
});

export default Search;