const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('mongodb+srv://brendon:pass123@cluster0.9jxbsrv.mongodb.net/?retryWrites=true&w=majority')
      .then(client => {
        dbConnection = client.db();
        return cb();
      })
      .catch(err => {
        console.log(err);
        return cb(err);
      })
  },
  getDb: () => dbConnection
}