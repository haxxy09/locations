'use strict';

module.exports = function(Ta) {
  Ta.searchTa = function(keyword, cb) {
    var pattern = new RegExp('.*'+keyword+'.*', "i");
    let query = {
      where: {name: {like: pattern}},
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
