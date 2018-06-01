'use strict';

module.exports = function(Ta) {
  Ta.searchTa = function(keyword, cb) {
    let query = {
      where: {name: keyword},
    };
    Ta.find(query, function(err, instance) {
      cb(null, instance);
    });
  };
  Ta.remoteMethod(
    'searchTa', {
      http: {
        path: '/searchTa',
        verb: 'get',
      },
      accepts: {arg: 'keyword', type: 'string', http: {source: 'query'}},
      returns: {
        arg: 'name',
        type: 'object',
      },
    }
  );
};
