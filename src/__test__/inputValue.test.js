import React  from 'react';
import { mount} from 'enzyme';
import InputValues from '../Input/InputValues';

let wrapped;
beforeEach(
    ()=>{
         wrapped = mount(<InputValues />)
    }
);
afterEach(
    ()=>{
        wrapped.unmount();
    }
);

it('has a input and button  ',()=>{
    
    expect(wrapped.find('input').length).toEqual(2);
    expect(wrapped.find('button').length).toEqual(1);
    expect(wrapped.find('form').length).toEqual(1);
})

//  it('when form is submitted , input area get emptied   ',()=>{
   
//  wrapped.find('input').simulate('change',{
//    target:{ value: '1'}
//  })
// wrapped.update();
//  expect(wrapped.find('input').prop('value')).toEqual('1')
//  })   
//      it('when form is submitted , input area is emptied',()=>{ 
//         wrapped.find('input').simulate('change',{
//             target:{ value: '1'}
//           })
//          wrapped.find('form').simulate('submit');
//      wrapped.update();
//      expect(wrapped.find('input')).prop('value').toEqual(' ')}
   
//  )

