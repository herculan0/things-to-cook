const itemBuilder = require('../controllers/itemController');

module.exports = app => {
  app
    .route('/items')
    .get(itemBuilder.list_all_items)
    .post(itemBuilder.create_a_item);

  app
    .route('/items/:itemId')
    .get(itemBuilder.read_a_item)
    .put(itemBuilder.update_a_item)
    .delete(itemBuilder.delete_a_item);
};
