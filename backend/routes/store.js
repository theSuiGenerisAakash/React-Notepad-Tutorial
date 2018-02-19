const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/store',
    handler: (request, response) => {
      const { payload: { notes } } = request;
      const promiseArr = [];
      notes.forEach((elem) => {
        promiseArr.push(Models.Books.upsert({
          userid: elem.id,
          title: elem.title,
          note: elem.note,
        }));
      });
      Promise.all(promiseArr).then(() => {
        response({
          promiseArr,
          statusCode: 201,
        });
      }).catch(err => console.log(err));
    },
  },
];
