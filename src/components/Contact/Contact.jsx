import "./Contact.scss";
import { useState } from 'react';
import Modal from "../Modal/Modal";
import { Link } from 'react-router-dom';

function Contact(props) {

    const [openModal, setOpenModal] = useState(false);

    const removeContact = (event) => {
        let itemId = event.target.id;
        props.handleDelete(itemId);
    }

    const editContact = (event) => {
        let itemId = event.target.id;
        props.onEditContact(itemId);
    }

    return (
        <div className="contact">
            <div className="contact-colum">
                <p>{props.userName}</p>
            </div>
            <div className="contact-colum">
                <p>{props.surName}</p>
            </div>
            <div className="contact-colum">
                <p>{props.phone}</p>
            </div>
            <div className="contact-colum actions">
                <button type="button" name="edit"><Link className="link" to="EditContact" id={props.id} onClick={editContact}>Edit</Link></button>
                <button onClick={() => {
                    setOpenModal(true);
                }} type="button" id={props.id} name="delete">Delete</button>
                <Modal
                    idContact={props.id}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    modalText={"Are you sure you want to delete the contact?"}
                    removeContact={removeContact} />
            </div>
        </div>
    )
}

export default Contact;