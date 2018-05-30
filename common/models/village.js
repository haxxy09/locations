'use strict';

module.exports = function(Village) {
  Village.searchVillage = function(keyword, cb) {
    let query = {
      where: {name: keyword}
    };
    Village.find(query, function(err, instance) {
      cb(null, instance);
    });
  };
  Village.remoteMethod(
    'searchVillage', {
      http: {
        path: '/searchVillage',
        verb: 'get'
      },
      accepts: {arg: 'keyword', type: 'string', http: {source: 'query'}},
      returns: {
        arg: 'name',
        type: 'object'
      }
    }
  );
};
