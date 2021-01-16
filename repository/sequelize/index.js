const Sequelize = require('sequelize');
const options =  Sequelize.options;
const url = 'arn:aws:rds:ap-south-1:173479838717:db:hackathon';
const options =  {
host: url,
dailect: 'mssql',
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
const config =  {
    user: 'avihack',
    password: 'hack123'
}
const sequelize = new Sequelize(config, options);
const user  = Sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allownull: false
    }
})

module.exports = user;
// test connection
sequelize.authenticate().then(()=> {
    cconsole.log('done successfully')
}).catch(()=> {
    console.log('error in connection');
})
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

