import './App.scss';
import { useState, useEffect } from 'react';
import ListContact from "./pages/ListContact/ListContact";
import AddContact from "./pages/AddContact/AddContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditContact from './pages/EditContact/EditContact';

function App() {

  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [items, setItems] = useState({
    id: null,
    userName: null,
    surName: null,
    phone: null,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (contact) => {
          setIsLoaded(true);
          setContact(contact);
          console.log(contact)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, [])

  const handleDelete = (id) => {
    let searchContact = contact.find(el => el.id == id);
    setContact(contact.filter(e => e !== searchContact));
  };

  const onAdd = (userName, surName, phone) => {
    let newContact = {
      id: Date.now(),
      name: userName,
      username: surName,
      phone: phone
    }

    setItems(contact.push(newContact))
  };

  const onEditContact = (e) => {
    let searchContact = contact.find(el => el.id == e);

    setItems({
      id: searchContact.id,
      name: searchContact.name,
      username: searchContact.username,
      phone: searchContact.phone
    })
  };

  const saveEdit = (idElem, userName, surName, phone) => {
    let searchContact = contact.find(el => el.id == idElem);

    searchContact.name = userName;
    searchContact.username = surName;
    searchContact.phone = phone;
    console.log(searchContact);

    setItems(searchContact)
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <BrowserRouter>
        <div className="App">
          <h1>Phone book</h1>
          <Routes>
            <Route path="/" element={<ListContact handleDelete={handleDelete} data={contact} onEditContact={onEditContact} />} />
            <Route path="AddContact" element={<AddContact onAdd={onAdd} />} />
            <Route path="EditContact" element={<EditContact setItems={setItems} items={items} saveEdit={saveEdit} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
