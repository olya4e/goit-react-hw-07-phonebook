import { ContactForm } from './ContactForm/ContactForm '
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter";
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading} from 'redux/selectors';
import css from './ContactForm/ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';

export const App = () => {
  const dispatch = useDispatch()
  // const { contacts, isLoading, error } = useSelector(getContacts)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  

 
  return (
    <div className={css.container}>
     
      <h1>Phonebook</h1>
       {/* {isLoading && <p>loading contacts ...</p>}
      {error && <p>{error}</p>}
      <p>{contacts && JSON.stringify(contacts, null, 2)}</p> */}
        <ContactForm/>
        <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress ...</b>}
        <ContactList /> 
      </div> 
    )
}
