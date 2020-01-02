import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ListMessage from './index.js';
import UserCard from '../UserCard';

describe('ListMessage component tests', ()=> {
	const initialProps = {
		"room" : {
			"IS": "1234",
			"users": [
				{
				"id": 1,
				"first_name": "Westbrooke",
				"last_name": "Heape",
				"email": "wheape0@hibu.com",
				"see_private": false
				}, {
				"id": 2,
				"first_name": "Melloney",
				"last_name": "Liebermann",
				"email": "mliebermann1@samsung.com",
				"see_private": false
				}
			],
			"messages": [
				{
				  "_id": "5e04ed2c75f39c1fdd46b765",
				  "is_private": false,
				  "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et felis ut risus euismod luctus non a ipsum. Vivamus nec dolor eget eros hendrerit tincidunt sed in dolor. Ut vel sem purus. Vestibulum faucibus placerat auctor. Quisque mattis elementum neque at ultrices. Quisque sollicitudin accumsan lacinia. Proin pharetra, ",
				  "user_id": 5
				},
				{
				  "_id": "5e04ed2cdf58b03b1b6740da",
				   "is_private": false,
				  "message": "Duis blandit sed enim quis cursus. Sed dignissim ligula quis odio dapibus commodo",
				  "user_id": 1
				}
			  ]
		}
	};

	const wrapper = shallow(<ListMessage {...initialProps} />);

	it('should have 2 UserCard component', ()=> {
		expect(wrapper.find('.list--users').find(UserCard)).toHaveLength(2)
	});

	it('should have 2 Messages with class item--message', () => {
		expect(wrapper.find('.list--messages .item--message')).toHaveLength(2)
	});

	

});
