import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../components/searchComponent.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Search Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot render', () => {
    const component = create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render the proper structure', () => {
    const wrapper = mount(<Search />)
    expect(wrapper.find('input')).toHaveLength(1);
  })
})
