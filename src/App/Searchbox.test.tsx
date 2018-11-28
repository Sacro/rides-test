import 'jest-enzyme';

import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import SearchBox from './Searchbox';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<SearchBox />);
});

it('renders correctly', () => {
  const SearchboxComponent = mount(<SearchBox />);
  expect(SearchboxComponent).toMatchSnapshot();
});

describe('Acceptance Tests', () => {
  describe('AC1', () => {
    it('should have a Pick-up Location widget', () => {});
  });

  describe('AC2', () => {
    it('should have the correct placeholder text', () => {
      const SearchboxComponent = mount(<SearchBox />);
      expect(SearchboxComponent.find('input').props().placeholder).toBe(
        'city, airport, station, region and district...'
      );
    });
    1;
  });

  /*describe('AC3', () => {
    it('should apply a focus state', () => {
      const SearchboxComponent = mount(<SearchBox />);
      const input = SearchboxComponent.find('input');
      expect(input.props().frameBorder).toBe(3);
    });
  }); //*/
});
