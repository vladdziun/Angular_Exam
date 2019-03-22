const controllers = require('./controllers.js');

module.exports = app => {
  app
    .get('/api/items', controllers.getAll)
    .get('/api/items/:id', controllers.getOne)
    .post('/api/items', controllers.create)
    .put('/api/items/:id', controllers.update)
    .delete('/api/items/:id', controllers.deleteOne)
    .delete('/api/items', controllers.deleteAll)
}