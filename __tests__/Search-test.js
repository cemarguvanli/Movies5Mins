
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Search from '../src/components/Search';

describe('Manually mocking functions', () => {
  it('renders correctly across screens', () => {
    const tree = renderer.create(<Search debounceTime={500} onChange={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});