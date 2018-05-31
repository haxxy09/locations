module.exports = function(app) {
  app.dataSources.db.automigrate('District', function(err) {
    if (err) throw err;
    app.models.District.create([
      {'name': 'Balaka', 'keywords': ['BLK'], 'zoneId': 1},
      {'name': 'Chikhwawa', 'zoneId': 3},
      {'name': 'Blantyre', 'keywords': ['rural', 'urban', 'city'], 'zoneId': 3},
      {'name': 'Chiradzulu', 'zoneId': 3},
      {'name': 'Dedza', 'zoneId': 4},
      {'name': 'Dowa', 'zoneId': 2},
      {'name': 'Likoma', 'zoneId': 5},
      {'name': 'Kasungu', 'zoneId': 2},
      {'name': 'Machinga', 'zoneId': 1},
      {'name': 'Chitipa', 'zoneId': 5},
      {'name': 'Karonga', 'zoneId': 5},
      {'name': 'Lilongwe', 'keywords': ['rural', 'urban', 'city', 'LL'], 'zoneId': 4},
      {'name': 'Mwanza', 'keywords': ['MN'], 'zoneId': 3},
      {'name': 'Mulanje', 'keywords': ['MJ'], 'zoneId': 1},
      {'name': 'Neno', 'zoneId': 3},
      {'name': 'Mchinji', 'zoneId': 4},
      {'name': 'Nkhata Bay', 'zoneId': 5},
      {'name': 'Nkhotakota', 'zoneId': 2},
      {'name': 'Nsanje', 'zoneId': 3},
      {'name': 'Phalombe', 'zoneId': 1},
      {'name': 'Mangochi', 'zoneId': 1},
      {'name': 'Salima', 'zoneId': 2},
      {'name': 'Ntcheu', 'zoneId': 4},
      {'name': 'Thyolo', 'zoneId': 3},
      {'name': 'Zomba', 'zoneId': 1},
      {'name': 'Ntchisi', 'zoneId': 2},
      {'name': 'Mzimba', 'zoneId': 5},
      {'name': 'Rumphi', 'zoneId': 5}], function(err, District) {
      if (err) throw err;

      console.log('models created: \n', District);
    });
  });
  app.dataSources.db.automigrate('Zone', function(err) {
    if (err) throw err;

    app.models.Zone.create([
      {'name': 'South East'},
      {'name': 'South West'},
      {'name': 'Central East'},
      {'name': 'Central West'},
      {'name': 'North'}
      ], function(err, Zone) {
      if (err) throw err;
      console.log('Models created: \n', Zone);
    });
  });
};
