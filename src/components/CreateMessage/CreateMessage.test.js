import React from 'react';
import { shallow, mount  } from 'enzyme';

// import axios from 'axios';
import CreateMessage from './index.js';

describe('CreateMessage component tests', ()=> {

	const initialProps = {
		sendMessage: () => {},
		placeholder: 'placeholder',
	};

	const wrapper = shallow(<CreateMessage  {...initialProps} />);

	it('should have inputs for message and privacy', ()=> {
		expect(wrapper.find('input').at(0)).toHaveLength(1)
		expect(wrapper.find('input').at(1)).toHaveLength(1)
	});


	it('Should capture message onChange', function(){
		const component = mount(<CreateMessage {...initialProps} />);
		const input = component.find('input').at(0);
		input.instance().value = 'hello';
		input.simulate('change');
		expect(component.state().message).toEqual('hello');
	})

	it('Should capture privacy onChange', function(){
		const component = mount(<CreateMessage {...initialProps}/>);
		const input = component.find('input').at(1);
		input.instance().checked = true;
		input.simulate('change');
		expect(component.state().isPrivate).toEqual(true);
	})


	it('Should send Error when message is empty', function(){
		const component = mount(<CreateMessage {...initialProps}/>);
		component.simulate('submit');
		expect(component.state().hasError).toEqual(true);
	})

});
