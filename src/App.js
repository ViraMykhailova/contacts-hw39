import {useState, useEffect} from 'react';
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContatsForm";

import './App.css';

function App() {
  const [contacts,setContacts] = useState([]);
  const [loading, setLoading]= useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
      id:'',
      name:'',
      username:'',
      phone:'',
  });

  useEffect(()=> {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
         return res.json();
    }).then(data => {
      setContacts(data);
      setLoading(false);
    });
  }, []);

  if(loading) {
      return <span> Data is loading ...</span>
  }
  function deleteContact(id) {
      setContacts(contacts.filter(contact => contact.id !== id));
  }
  function showContactForm () {
      setShowForm(true);
  }
  function hideContactForm () {
      setShowForm(false);
      if(formData){
          setFormData({
              id:'',
              name:'',
              username:'',
              phone:'',
          });
      }
  }
  const inputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
  };

  const addNewContact =(e)=> {
      e.preventDefault();

      if(formData.name !== ''&& formData.username !== ''&& formData.phone !=='') {
          const id = Math.random();
          const newData = {...formData,id};

          console.log('Дані з форми:', newData);

          setContacts([...contacts, newData]);
          setFormData({
              id:'',
              name:'',
              username:'',
              phone:'',
          });
          setShowForm(false);
      }
  }

  return (
      <div className='main-wrapper'>
          <Contacts
            contacts={contacts}
            deleteContact={deleteContact}
          />
          <button onClick={()=> showContactForm()} className='add-contact-btn'>Add new contact
          </button>
          {showForm && <ContactsForm
              formData={formData}
              inputChange={inputChange}
              addNewContact={addNewContact}
              hideContactForm={hideContactForm}
          />}
      </div>
  );
}
export default App;
