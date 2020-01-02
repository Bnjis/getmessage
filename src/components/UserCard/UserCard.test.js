import React from 'react';
import { shallow } from 'enzyme';

import UserCard from './index.js';

describe('UserCard component tests', ()=> {
	const initialProps = {
		'first_name': 'Benjamin',
		'last_name': 'Lienart',
		'seePrivate': true
	};

	const wrapper = shallow(<UserCard {...initialProps} />);

	it('should contain an image', ()=> {
		expect(wrapper.find('img')).toHaveLength(1)
	});

	it('should have .info div with text "Benjamin Lienart"', ()=> {
		expect(wrapper.find('.infos').text()).toEqual('Benjamin Lienart')
	});
});
