const crud = require('./crud/crud.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(crud);
};
