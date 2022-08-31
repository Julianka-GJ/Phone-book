import "./AddContact.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddContact(props) {

    const [userName, setUserName] = useState("");
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");

    const [visible, setVisible] = useState(true);

    const handleFirstNameChange = event => setUserName(event.target.value);
    const handleSurNameChange = event => setSurName(event.target.value);
    const handlePhoneChange = event => setPhone(event.target.value);

    const saveContact = () => {
        if (userName && surName && (phone.length > 10)) {
            props.onAdd(userName, surName, phone);
            setVisible(false);
        }
    };

    const clearInput = () => {
        setUserName("");
        setSurName("");
        setPhone("");
    };


    return (
        <div>
            <div className='back-contact'>
                <button><Link className="link" to="/">Back to contact list</Link></button>
            </div>
            {visible && <form className="AddForm">
                <h1>Add new contact</h1>
                <p>Name</p>
                <input
                    type="text"
                    name="firstName"
                    value={userName}
                    onChange={handleFirstNameChange}
                    required />
                <p>Username</p>
                <input
                    type="text"
                    name="surName"
                    onChange={handleSurNameChange}
                    value={surName}
                    required />
                <p>Phone</p>
                <input
                    type="number"
                    name="phone"
                    onChange={handlePhoneChange}
                    value={phone}
                    required />
                <div className="save">
                    <button onClick={clearInput} type="button">Сancel</button>
                    <button onClick={saveContact} type="button">Save</button>
                </div>
            </form>}
        </div>
    )
}

export default AddContact;