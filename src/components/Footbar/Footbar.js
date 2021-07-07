import React from 'react';

import classes from './Footbar.module.css';
import ContactInfo from './ContactInfo/ContactInfo';

const contact = [
    { method: 'Cell:', content: '(240)706-3005'},
    { method: 'Email:', content: 'chineseamericanparents@gmail.com'}
]

const footbar = (props) => (
    <footer className={classes.Footbar}>
        <div className={classes.Contact}>
            {contact.map(cont => (
                <ContactInfo 
                    key={cont.label}
                    method={cont.method}
                    content={cont.content} />
            ))}
        </div>
        <div className={classes.Copyright}>
            <p>&copy; 2021 CAPA-FC</p>
        </div>
    </footer>
)

export default footbar;