import "./ListContact.scss";
import Contact from "../../components/Contact/Contact";
import { NavLink } from 'react-router-dom';



function ListContact({ data, handleDelete }) {

    return (
        <div className="ListContact">
            <div className='rout'>
                <button><NavLink className={"link"} to="AddContact">Add new contact</NavLink></button>
            </div>
            <div className="wrapper-contact">
                <div className="title">
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Username</p>
                    </div>
                    <div>
                        <p>Phone</p>
                    </div>
                    <div className="actions">
                        <p>Actions</p>
                    </div>
                </div>
                {data.map(e => (
                    <Contact
                        key={e.id}
                        id={e.id}
                        userName={e.name}
                        surName={e.username}
                        phone={e.phone}
                        handleDelete={handleDelete}
                    />)
                )}
            </div>
        </div>
    )
}


export default ListContact;