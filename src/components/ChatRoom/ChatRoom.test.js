import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ChatRoom from './index.js';
import CreateMessage from '../CreateMessage';
import ListMessage from '../ListMessage';



describe('ChatRoom component tests', ()=> {
	const wrapper = shallow(<ChatRoom />);

	it('should have a ListMessage component', ()=> {
		expect(wrapper.find(ListMessage)).toHaveLength(1)
	});

	it('should have a CreateMessage component', ()=> {
		expect(wrapper.find(CreateMessage)).toHaveLength(1)
	});

});
