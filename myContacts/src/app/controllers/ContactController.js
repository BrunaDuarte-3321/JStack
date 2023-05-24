const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os serviços

    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.send(404).json({ error: 'Contact not found' });
    }
    response.json(contact);
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.send(404).json({ error: 'Contatc not found' });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
