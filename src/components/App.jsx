import { Component } from "react"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import styles from './App.module.css'
import ContactForm from "./ContactForm/ContactForm"
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    filter: '',
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  }

  onAddContact = (contact) => {
    const name = contact.name.toLowerCase().trim();

    const isExists = this.state.contacts.some(item => item.name.toLocaleLowerCase() === name)
    if (isExists) {
      toast.error(`${name} is alredy in contacts`);
    } else {
      this.setState({contacts: [...this.state.contacts, contact]})
    }
  }

  onRemoveContact = (id) => {
    const idx = this.state.contacts.findIndex((item) => item.id === id);

    const contacts = this.state.contacts;
    contacts.splice(idx, 1);

    this.setState({ contacts: contacts });
  }

  onFilterChange = e => {
    const userSearchString = e.target.value.toLowerCase();
    this.setState({filter: userSearchString}) 
  }

  getFilteredConstacts = () => {
     return this.state.contacts.filter(({name}) => {
        return name.toLowerCase().includes(this.state.filter)
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.phonebook}>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2 className={styles.contacts}>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} filterValue={this.state.filter} />
        <ContactList contacts={this.getFilteredConstacts()} onRemoveContact={this.onRemoveContact} />
        <Toaster position="top-right" />
      </div>
    )
  }
};
