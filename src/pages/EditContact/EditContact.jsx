import "./EditContact.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from "../../components/Popup/Popup";


function EditContact({ items, saveEdit }) {

    const [userName, setUserName] = useState(items.name);
    const [surName, setSurName] = useState(items.username);
    const [phone, setPhone] = useState(items.phone);

    const handleFirstNameChange = event => setUserName(event.target.value);
    const handleSurNameChange = event => setSurName(event.target.value);
    const handlePhoneChange = event => setPhone(event.target.value);

    const [openPop, setOpenPop] = useState({
        add: false,
        required: false,
    });

    const { add, required } = openPop;

    const saveEditContact = (event) => {
        let itemId = event.target.id;
        if (userName && surName && phone) {
            saveEdit(itemId, userName, surName, phone);
            setOpenPop({ add: true });
        }

        else {
            setOpenPop({ required: true });
        }
    };

    return (
        <div>
            <div className='block-contact'>
                <button><Link className="link" to="/">Back to contact list</Link></button>
            </div>
            <form className="AddForm">
                <h1>Edit Contact</h1>
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
                    type="text"
                    name="phone"
                    onChange={handlePhoneChange}
                    value={phone}
                    required />
                <div className="save">
                    <button id={items.id} type="button" onClick={saveEditContact}>Save</button>
                </div>
                {add && <Popup
                    popUpText={"Adding completed successfully"}
                    setOpenPop={setOpenPop} />}
                {required && <Popup
                    popUpText={"All fields are required"}
                    setOpenPop={setOpenPop} />}
            </form>
        </div>
    )
}

export default EditContact;