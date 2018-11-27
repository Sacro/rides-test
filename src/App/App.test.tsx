import 'jest-enzyme';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});

describe('Acceptance Tests', () => {
  describe('AC1', () => {
    it('should have a Pick-up Location widget', () => {});
  });
});
