import React  from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard/Dashboard';
import InputValues from '../Input/InputValues'
import List from '../Output/List';

let wrapped ;


it('shows a InputValues component ',()=>{
    
    wrapped = shallow(<Dashboard />)
    expect(wrapped.find(InputValues).length).toEqual(1);
})

it('shows a InputValues component ',()=>{
     wrapped = shallow(<InputValues />)

    expect(wrapped.find(List).length).toEqual(1);
})