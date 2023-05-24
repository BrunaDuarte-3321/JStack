const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Bruna',
    email: 'bruna@mail.com',
    phone: '123123',
    catogory_id: v4(),

  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@mail.com',
    phone: '123123',
    catogory_id: v4(),

  },
  {
    id: v4(),
    name: 'Bruna',
    email: 'bruna@mail.com',
    phone: '123123',
    catogory_id: v4(),

  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const contactFromId = contacts.find((contact) => contact.id === id);
      resolve(contactFromId);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
