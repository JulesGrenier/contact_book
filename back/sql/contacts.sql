CREATE TABLE contacts
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255),
    contact_avatar TEXT,
    note TEXT
)