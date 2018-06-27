'use strict';
const server = require('../../server/server.js');

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
  Village.possibleVillages = function(keyword, cb) {
    var pattern = new RegExp('.*' + keyword + '.*', 'i');
    let query = {
      where: {name: {like: pattern}},
    };
    Village.find(query, function(err, instance) {
      const ids = instance.map(ta => ta.taId);
      server.models.Village
      .find({where: {id: {inq: ids}}}, function(err, villages) {
        cb(null, villages);
      });
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
  Village.remoteMethod(
    'possibleVillages', {
      http: {
        path: '/possibleVillages',
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
