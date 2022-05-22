import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '.';

describe('<Header />', () => {
  it('should render correcly', () => {
    const {getByText, toJSON} = render(<Header />);

    expect(getByText(/bem vindo/i)).toBeTruthy();
    expect(getByText(/ash ketchum/i)).toBeTruthy();
    expect(getByText(/😄/i)).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });
});
