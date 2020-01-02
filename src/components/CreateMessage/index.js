import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/*
**	Formulaire permettant la création de message.  
**  @sendMessage : Function => fonction premettant l'envoi de message au composant parent
**	@placeholer : String => Affiche le placeholer du champ input
*/

class CreateMessage extends Component{
	input = React.createRef();
	checkbox = React.createRef();

	constructor(props) {
		super(props);

		this.state = {message: '', isPrivate: false, hasError: false};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		// Focus automatique à l'update du composant.
		this.input.current.focus();
	}
	
	// Set le state en fonction de l'input qui trigger le change.
	handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({[name]:value});
	  }

	handleSubmit(event) {
		event.preventDefault();

		// Si le message n'est pas vide
		if(this.state.message !== '') {
			// on envoi l'event, la valeurs et la valeur de la checkbox
			this.props.sendMessage(event, this.state.message, this.state.isPrivate);
			this.setState({message: '', hasError: false});
		} else {
			// sinon one lance une erreur
			this.setState({hasError: true});
		}
	}

	render() {
		const { placeholder } = this.props;
		const { hasError } = this.state; 
		return (
		<form className="message--form" onSubmit={this.handleSubmit}>
			<input type="text" name="message" placeholder={placeholder} autoComplete="off" ref={this.input} value={this.state.message} onChange={this.handleChange} className={`${hasError ? 'error' : ''}`}/>
			<div className="message--privacy">
				<span htmlFor="privacy">Rendre les messages privés (restreints à certains utilisateurs)</span>
				<label className="switch" htmlFor="privacy">
					<input type="checkbox" id="privacy" name="isPrivate" ref={this.checkbox} onChange={this.handleChange} />
					<span className="switcher"/>
				</label>
			</div>
			<button type="submit">
				Envoyer
			</button>
		</form>
		);
	}

}

CreateMessage.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default CreateMessage;