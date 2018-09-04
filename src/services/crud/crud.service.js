// Initializes the `crud` service on path `/crud`
const createService = require('feathers-mongodb');
const hooks = require('./crud.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/crud', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('crud');

  mongoClient.then(db => {
    service.Model = db.collection('crud');
  });

  service.hooks(hooks);
};
