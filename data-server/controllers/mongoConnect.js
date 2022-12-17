// 기본 연결코드
const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_URI_ATLAS =
  'mongodb+srv://soorin:soorin427!@cluster0.y2f7962.mongodb.net/?retryWrites=true&w=majority';

const uri = DB_URI_ATLAS;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
