import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import ChatRoom from './components/ChatRoom';

describe('App component tests', ()=> {
	const wrapper = shallow(<App />);

	it('should have a ChatRoom component', ()=> {
		expect(wrapper.find(ChatRoom)).toHaveLength(1);
	});
});