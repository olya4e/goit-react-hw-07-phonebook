import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';
import {getContacts, getFilter} from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

export const ContactList = () => {
    const {contacts:{items}} = useSelector(getContacts)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const getFilterContacts = () => {
        if (!filter) {
            return items
        }
        const normalaizedFilter = filter.toLowerCase();

        return items.filter(({ name }) => {
            const normalaizedName = name.toLowerCase();
            const result = normalaizedName.includes(normalaizedFilter);
            return result;
    });
    }
    
     const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }
        return (
    <ul className={css.list}>
        {items.length>0  && getFilterContacts().map((contact) => 
        {
            return <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.phone} onDelete={onDeleteContact}/>
        }
        )}
    </ul>
)
    
}

