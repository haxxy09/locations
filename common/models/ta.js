'use strict';
const server = require('../../server/server.js');

module.exports = function(Ta) {
  Ta.possibleDistricts = function(keyword, cb) {
    var pattern = new RegExp('.*' + keyword + '.*', 'i');
    let query = {
      where: {name: {like: pattern}},
    };
    Ta.find(query, function(err, instance) {
      const ids = instance.map(ta => ta.districtId);
      server.models.District.find({where: {id: {inq: ids}}}, function(err, districts) {
        cb(null, districts);
      });
    });
  };
  Ta.possibleVillages = function(keyword, cb) {
    var pattern = new RegExp('.*' + keyword + '.*', 'i');
    let query = {
      where: {name: {like: pattern}},
    };
    Ta.find(query, function(err, instance) {
      const ids = instance.map(ta => ta.id);
      server.models.Village
      .find({where: {id: {inq: ids}}}, function(err, villages) {
        cb(null, villages);
      });
    });
  };
  Ta.searchTa = function(keyword, cb) {
    var pattern = new RegExp('.*' + keyword + '.*', 'i');
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
        type: 'array',
      },
    }
  );
  Ta.remoteMethod(
    'possibleDistricts', {
      http: {
        path: '/possibleDistricts',
        verb: 'get',
      },
      accepts: {arg: 'keyword', type: 'string', http: {source: 'query'}},
      returns: {
        arg: 'results',
        type: 'object',
      },
    }
  );
  Ta.remoteMethod(
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
