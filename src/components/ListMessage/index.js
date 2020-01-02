import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard';

import './style.scss';

/*
**	Liste des message d'une room, une room est un channel créer entre une ou plusieurs personnes avec un ID unique, des membre des des messages.  
**  @sendMessage : Function => fonction premettant l'envoi de message au composant parent
**	@placeholer : String => Affiche le placeholer du champ input
*/


class ListMessages extends Component{

	constructor(props) {
		super();

		this.state = {
			roomID: props.room.ID ? props.room.ID : "0",
			roomUsers: props.room.users,
			roomMessages:props.room.messages,
			key: 0
		}
		
	}
 
	componentWillReceiveProps(props) {
		// On rafraichis l'état à l'update des props
		if(this.state.roomID !== props.room.ID) {
			this.setState({
				roomID: props.room.ID
			});
		}
		
		if(this.state.roomUsers.length < props.room.users.length) {
			this.setState({
				roomUsers: props.room.users,
			});
		}

		if(this.state.roomMessages.length < props.room.messages.length) {
			this.setState({
				roomMessages:props.room.messages
			});
		}
		
	}
	componentDidUpdate() {
		// On met le scroll en bas à l'update
		this.scrollBottom();
	}

	getUserByID = (id) => {
		// Retourne le prénom + nom du user en fonction de l'id, si c'est l'utilisateur courant, retourne "Vous";

		if(id === 1) {
			return "Vous";
		}

		const {roomUsers} = this.state;
		
		for (let i=0; i < roomUsers.length; i++) {
			
			if (roomUsers[i].id == id) {
				return roomUsers[i].first_name +' '+ roomUsers[i].last_name;
			}
		}
	}

	scrollBottom = () => {
		const messagesList = document.querySelector('.list--messages--wrapper');
		messagesList.scrollTop = messagesList.scrollHeight;
	}

	render() {
		
		const {roomID, roomUsers, roomMessages} = this.state
		return (
			<div className="list--messages--wrapper" id={roomID}>
				<div className="list--users">
					{
						roomUsers.map((user, index) => (
							<UserCard key={user.id} first_name={user.first_name} last_name={user.last_name} seePrivate={user.see_private} />
						))
					}
				</div>
				<div className="list--messages">
					{
						roomMessages.map((message, index) => (
							<div className={`item--message ${message.is_private ? 'private' : ''} ${message.user_id === 1 ? 'user--message' : ''}`} key={index}>
								<span>{this.getUserByID(message.user_id)} : </span>
								{message.message}
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

ListMessages.propTypes = {
  room: PropTypes.object.isRequired, 
};

export default ListMessages;