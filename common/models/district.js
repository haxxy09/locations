'use strict';

module.exports = function(District) {
  // District.validatesUniquenessOf("name");
  District.getName = function(keyword, cb) {
    District.find(keyword, function(err, instance) {
      var response = "result" + instance.name;
      cb(null, response);
      console.log(response);
    });
  };
  District.remoteMethod(
    'getName', {
      http: {
        path: '/getname',
        verb: 'get'
      },
      accepts: {arg: 'keyword', type: 'string', http: {source: 'query'}},
      returns: {
        arg: 'name',
        type: 'string'
      }
    }
  );
};
