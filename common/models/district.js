'use strict';

module.exports = function(District) {
  // District.validatesUniquenessOf("name");
  District.searchDistrict = function(keyword, cb) {
    // var pattern = new RegExp('.*' + keyword + '.*', 'i');
    let query = {
      where: {
        or: [
          {keywords: {inq: [keyword]}},
          {name: keyword}
        ]
      }
    };
    District.find(query, function(err, instance) {
      // var response = "result" + instance.name;
      cb(null, instance);
      // console.log(response);
    });
  };
  District.remoteMethod(
    'searchDistrict', {
      http: {
        path: '/searchDistrict',
        verb: 'get'
      },
      accepts: {arg: 'keyword', type: 'string', http: {source: 'query'}},
      returns: {
        arg: 'results',
        type: 'object'
      }
    }
  );
};
