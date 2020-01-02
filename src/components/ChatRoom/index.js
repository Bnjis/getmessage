import React, { useState } from 'react';
import axios from 'axios';

import CreateMessage from '../CreateMessage';
import ListMessage from '../ListMessage';

/*
**	Composant room regroupant la liste de messages ainsi que le formulaire pour en poster de nouveaux. Ce composant est aussi charger de la gestion / récuparation des données de la room
*/

const Room = (props) => {
	const [room_id, setRoom_id] = useState(props.roomID);
	const [users, setUsers] = useState([]);
	const [messages, setMessages] = useState([]);

	/*
	si call API : 
	
	if(props.roomID) {
		axios.get('urlTOGO') 
		.then( response => {
			console.log(response);
		});
	} else {
		axios.post('urlCREATEROOM') 
		.then( response => {
			setRoom_id(response.data.id)
		});
	}

	*/

	// Si les states sont vides, on charge des données
	if(!users.length && !messages.length) {
		axios.get('/data/room.json') //Remplacement par des donnée figé mais on peut imaginer un call API d'une ROOMID dans les props
		.then(response => {
			setRoom_id(response.data.id);
			setUsers(response.data.users);
			setMessages(response.data.messages);
		});
	}

	// Génère une _id de type Object ID (comme mongodb)
	let objectId = function () {
		var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
		return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
			return (Math.random() * 16 | 0).toString(16);
		}).toLowerCase();
	};

	/*
		Fonction pour ajouter un message. 
		@message => String : Valeur du message
		@is_private => Bool : si le message est privé ou non
	*/

	const addNewMessage = (message, is_private) => {
		const newMessage = {
			'_id': objectId, 
			'is_private': is_private,
			'message': message,
			'user_id': 1
		}
		setMessages([...messages, newMessage]);
	}

	//Objet Room
	const room = {
		'ID': room_id,
		'users': users,
		'messages': messages
	}

	return (
		<div className="chat-wrapper">
			<ListMessage  room={room} />
			<CreateMessage sendMessage={(event, value, is_private) => {addNewMessage(value, is_private)}} placeholder="Entrez votre message"/>
		</div>
	);
}

export default Room;
