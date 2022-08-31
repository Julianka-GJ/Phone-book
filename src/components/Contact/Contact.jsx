import "./Contact.scss";

function Contact(props) {

    const removeContact = (event) => {
        let itemId = event.target.id;
        props.handleDelete(itemId);
    }

    return (
        <div className="contact">
            <div className="name">
                <p>{props.userName}</p>
            </div>
            <div className="surname">
                <p>{props.surName}</p>
            </div>
            <div className="phone">
                <p>{props.phone}</p>
            </div>
            <div className="actions">
                <button type="button">Phone</button> 
                <button onClick={removeContact} type="button" id={props.id}>Delete</button>
            </div>
        </div>
    )
}

export default Contact;