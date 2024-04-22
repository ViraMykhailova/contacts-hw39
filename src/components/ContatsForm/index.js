import styles from './contactsForm.module.css'
function ContactsForm({formData,inputChange,addNewContact,hideContactForm}) {
    return (
        <div>
            <form onSubmit={addNewContact}>
                <input
                    placeholder='enter your full name'
                    className={styles.input}
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={inputChange}
                />
                <input
                    placeholder='enter your login'
                    className={styles.input}
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={inputChange}
                />
                <input
                    placeholder='enter your phone'
                    className={styles.input}
                    type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={inputChange}
                />
                <button type='submit' className={styles.addBtn}>Save</button>
                <button className={styles.closeBtn} onClick={hideContactForm}>Close</button>
            </form>
        </div>
    );
}

export default ContactsForm;
