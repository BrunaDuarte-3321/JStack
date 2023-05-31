const CatogoryRepository = require('../repositories/CatogoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CatogoryRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CatogoryRepository.findById(id);

    if (!category) {
      return response.send(400).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.send(400).json({ error: 'Name is required' });
    }

    const categoryExist = await CatogoryRepository.findByName(name);

    if (categoryExist) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const category = await CatogoryRepository.create({
      name,
    });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExist = await CatogoryRepository.findById(id);

    if (!categoryExist) {
      return response.send(404).json({ error: 'Category not found' });
    }

    const categoryName = await CatogoryRepository.findByName(name);

    if (categoryName && categoryName.id !== id) {
      return response.send(400).json({ error: 'This name is already in use' });
    }

    const category = await CatogoryRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CatogoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
