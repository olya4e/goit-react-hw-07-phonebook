import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css'
export const ContactItem = ({ id, name, number,}) => {
    
    const dispatch = useDispatch()
      
     const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
    }
    
    return (
       <>
        <li className={css.item}>
        <span>{name}</span>
        <span>{number}</span>
                <button className={css.deleteBtn} onClick={()=>onDeleteContact(id) } type="button">Delete</button>
        </li>  
        </> 

    )
}

ContactItem.propTypes = {
    
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
   
}