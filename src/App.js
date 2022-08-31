import './App.scss';
import { useState, useEffect } from 'react';
import ListContact from "./pages/ListContact/ListContact";
import AddContact from "./pages/AddContact/AddContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <Route path="/" element={<ListContact handleDelete={handleDelete} data={contact} />} />
            <Route path="AddContact" element={<AddContact onAdd={onAdd}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
