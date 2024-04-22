function ContactItem({contact,deleteContact}) {
    function handleDeleteContact () {
        deleteContact(contact.id)
    }
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.username}</td>
            <td>{contact.phone}</td>
            <td><button onClick={handleDeleteContact} className='delete-btn'>X</button></td>
        </tr>
    );
}

export default ContactItem;
