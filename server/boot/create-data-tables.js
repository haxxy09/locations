'use strict';
module.exports = function(app) {
  app.dataSources.db.automigrate('Zone', function(err) {
    if (err) throw err;

    app.models.Zone.create([
      {'name': 'South East'},
      {'name': 'South West'},
      {'name': 'Central East'},
      {'name': 'Central West'},
      {'name': 'North'}], function(err, Zone) {
      if (err) throw err;
      console.log('Models created: \n', Zone);
    });
  });
  app.dataSources.db.automigrate('District', function(err) {
    if (err) throw err;
    app.models.District.create([
      {'name': 'Balaka', 'keywords': ['BLK'], 'zoneId': 1},
      {'name': 'Chikhwawa', 'keywords': ['CK'], 'zoneId': 2},
      {'name': 'Blantyre', 'keywords': ['rural',
        'urban', 'city', 'BT'], 'zoneId': 2},
      {'name': 'Chiradzulu', 'keywords': ['CZ'], 'zoneId': 2},
      {'name': 'Dedza', 'keywords': ['DZ'], 'zoneId': 4},
      {'name': 'Dowa', 'keywords': ['DA'], 'zoneId': 3},
      {'name': 'Likoma', 'keywords': ['LA'], 'zoneId': 5},
      {'name': 'Kasungu', 'keywords': ['KU'], 'zoneId': 3},
      {'name': 'Machinga', 'keywords': ['MHG'], 'zoneId': 1},
      {'name': 'Chitipa', 'keywords': ['CP'], 'zoneId': 5},
      {'name': 'Karonga', 'keywords': ['KA'], 'zoneId': 5},
      {'name': 'Lilongwe',
        'keywords': ['rural', 'urban', 'city', 'LL'], 'zoneId': 4},
      {'name': 'Mwanza', 'keywords': ['MN'], 'zoneId': 2},
      {'name': 'Mulanje', 'keywords': ['MJ'], 'zoneId': 1},
      {'name': 'Neno', 'keywords': ['NN'], 'zoneId': 2},
      {'name': 'Mchinji', 'keywords': ['MC'], 'zoneId': 4},
      {'name': 'Nkhata Bay', 'keywords': ['NB'], 'zoneId': 5},
      {'name': 'Nkhotakota', 'keywords': ['KK'], 'zoneId': 3},
      {'name': 'Nsanje', 'keywords': ['NE'], 'zoneId': 2},
      {'name': 'Phalombe', 'keywords': ['PE'], 'zoneId': 1},
      {'name': 'Mangochi', 'keywords': ['MH'], 'zoneId': 1},
      {'name': 'Salima', 'keywords': ['SA'], 'zoneId': 3},
      {'name': 'Ntcheu', 'keywords': ['NU'], 'zoneId': 4},
      {'name': 'Thyolo', 'keywords': ['TO'], 'zoneId': 2},
      {'name': 'Zomba', 'keywords': ['ZA', 'Municipality'], 'zoneId': 1},
      {'name': 'Ntchisi', 'keywords': ['NS'], 'zoneId': 3},
      {'name': 'Mzimba', 'keywords': ['MZ'], 'zoneId': 5},
      {'name': 'Rumphi', 'keywords': ['RU'], 'zoneId': 5}],
       function(err, District) {
         if (err) throw err;
         console.log('models created: \n', District);
       });
  });
  app.dataSources.db.automigrate('TA', function(err) {
    if (err) throw err;
    app.models.TA.create([
      {'name': 'Machinjiri', 'districtId': 3, 'zoneId': 2},
      {'name': 'Makanjira', 'districtId': 21, 'zoneId': 1},
      {'name': 'Tambo', 'districtId': 19, 'zoneId': 2},
      {'name': 'Nthezemu', 'districtId': 27, 'zoneId': 5},
      {'name': 'Kachindamoto', 'districtId': 5, 'zoneId': 4},
      {'name': 'Machinjiri', 'districtId': 4, 'zoneId': 2}], function(err, TA) {
      if (err) throw err;
      console.log('models created: \n', TA);
    });
  });
  app.dataSources.db.automigrate('Village', function(err) {
    if (err) throw err;
    app.models.Village.create([
      {'name': 'Makhetha', 'taId': 1},
      {'name': 'Madulira', 'taId': 1},
      {'name': 'Mkandala', 'taId': 3},
      {'name': 'Bengo', 'taId': 6},
      {'name': 'Bembeke', 'taId': 5},
      {'name': 'Kanjanga', 'taId': 4}], function(err, Village) {
      if (err) throw err;
      console.log('models created: \n', Village);
    });
  });
};
