'use strict';

module.exports = function(Village) {
  Village.searchVillage = function(keyword, cb) {
    var pattern = new RegExp('.*' + keyword + '.*', 'i');
    let query = {
      where: {name: {like: pattern}},
    };
    Village.find(query, function(err, instance) {
      cb(null, instance);
    });
  };
  Village.remoteMethod(
    'searchVillage', {
      http: {
        path: '/searchVillage',
        verb: 'get',
      },
      accepts: {arg: 'keyword', type: 'string', http: {source: 'query'}},
      returns: {
        arg: 'results',
        type: 'object',
      },
    }
  );
};
