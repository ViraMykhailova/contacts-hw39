import ContactItem from '../ContactItem';

import styles from './contacts.module.css';

function Contacts({contacts, deleteContact}) {

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>User Full Name</th>
                        <th>User Login</th>
                        <th>User Phone N</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map(contact => {
                    return (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        deleteContact={deleteContact}
                    />
                    )
                })
                }
                </tbody>
            </table>

        </div>
    );
}

export default Contacts;

