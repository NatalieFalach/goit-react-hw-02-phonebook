import { Component } from "react";
import { nanoid } from "nanoid";
import styles from './ContactForm.module.css';

import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  } 
  static propTypes = {
    onAddContact:PropTypes.func.isRequired 
  };

  numberId = nanoid();
  nameId = nanoid();

  onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ id: nanoid(), ...this.state })
    this.setState({name: '', number: ''});
  }

  render() {
    return (
      <form className={styles.form}onSubmit={this.onSubmit}>
        <label htmlFor={this.nameId}>Name</label>
         <input
            id={this.nameId}
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        <label className={styles.phoneLabel} htmlFor={this.numberId}>Telephone</label>
        <input
            id={this.numberId}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onInputChange}
          />
        <button className={styles.btnSubmit}type="submit">Add contact</button>
        </form>
      )
  }
}