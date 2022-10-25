import { ContactForm } from './ContactForm/ContactForm '
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter";
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading} from 'redux/selectors';
import css from './ContactForm/ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';

export const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
 
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress ...</b>}
        <ContactList /> 
      </div> 
    )
}
