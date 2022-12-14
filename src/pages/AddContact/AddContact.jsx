import "./AddContact.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from "../../components/Popup/Popup";

function AddContact(props) {

    const [userName, setUserName] = useState("");
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");

    const [visible, setVisible] = useState(true);
    const [openPop, setOpenPop] = useState({
        add: false,
        required: false,
    });

    const { add, required } = openPop;

    const handleFirstNameChange = event => setUserName(event.target.value);
    const handleSurNameChange = event => setSurName(event.target.value);
    const handlePhoneChange = event => setPhone(event.target.value);

    const saveContact = () => {
        if (userName && surName && (phone.length > 5)) {
            props.onAdd(userName, surName, phone);
            setUserName("");
            setSurName("");
            setPhone("");
            setOpenPop({ add: true });
        }

        else {
            setOpenPop({ required: true });
        }
    };

    const clearInput = () => {
        setUserName("");
        setSurName("");
        setPhone("");
    };

    return (
        <div>
            <div className='block-contact'>
                <button><Link className="link" to="/">Back to contact list</Link></button>
            </div>
            {visible && <form className="AddForm">
                <h1>Add new contact</h1>
                <p>Name</p>
                <input
                    type="text"
                    name="firstName"
                    value={userName || ""}
                    onChange={handleFirstNameChange}
                    required />
                <p>Username</p>
                <input
                    type="text"
                    name="surName"
                    onChange={handleSurNameChange}
                    value={surName || ""}
                    required />
                <p>Phone</p>
                <input
                    type="number"
                    name="phone"
                    onChange={handlePhoneChange}
                    value={phone || ""}
                    required />
                <div className="save">
                    <button onClick={clearInput} type="button">??ancel</button>
                    <button onClick={saveContact} type="button">Save</button>
                </div>
                {add && <Popup
                    popUpText={"Adding completed successfully"}
                    setOpenPop={setOpenPop} />}
                {required && <Popup
                    popUpText={"All fields are required"}
                    setOpenPop={setOpenPop} />}
            </form>}
        </div>
    )
}

export default AddContact;