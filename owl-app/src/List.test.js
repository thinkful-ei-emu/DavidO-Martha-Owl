import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PeopleList from './List.js';


describe('<List />', () =>{
  it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<PeopleList />, div);
    ReactDOM.unmountComponentAtNode(div);

  });
});

it('renders the UI as expected', () => {
  const snapshot = renderer
    .create(<PeopleList />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();  
});