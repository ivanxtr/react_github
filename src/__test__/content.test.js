import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from '../components/content';

Enzyme.configure({ adapter: new Adapter() });

const mockData = [
  {
    "title": "one"
  },
  {
    "title": "two"
  },
  {
    "title": "three"
  }
]

describe('Conten Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot render', () => {
    const component = create(<Content />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render the proper content', () => {
    const wrapper = mount(<Content data={mockData} />)
    expect(wrapper.find('.bugs')).toHaveLength(1);
    expect(wrapper.find('.item')).toHaveLength(3);
    expect(wrapper.find('.item').at(0).text()).toBe("one");
    expect(wrapper.find('.item').at(1).text()).toBe("two");
    expect(wrapper.find('.item').at(2).text()).toBe("three");
  })
})
