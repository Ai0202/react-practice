import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  // shallowは子コンポーネントだけ(孫は除く)をレンダー
    const wrapper = shallow(<App />)
    // expect(wrapper).toBeTruthy();
    // expect(wrapper).toBeFalsy();

});
