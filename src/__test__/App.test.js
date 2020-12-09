import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot render', () => {
    const component = create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render the proper structure', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('.App')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('.bugs')).toHaveLength(1);
  })
})
