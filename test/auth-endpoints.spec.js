const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe.only('Auth endpoints', () => {
  let db;

  const { testUsers } = helpers.makeArticlesFixtures;
  const testUser = testUsers[0];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy() );

  before('cleanup', () => helpers.cleanTables() );

  afterEach('cleanup', () => helpers.cleanTables() );

  describe('POST /api/auth/login', () => {
    beforeEach('insertUsers', () => helpers.seedUsers(db, testUsers));

    it('has a test');
  });


});