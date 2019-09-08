const secrets = {
    dbUri: process.env.DB_URI || 'mongodb://tg:1some2thing@ds217678.mlab.com:17678/gsp-api',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret };

//mongodb://tg:1some2thing@ds217678.mlab.com:17678/gsp-api

//mongodb://localhost/gspdb