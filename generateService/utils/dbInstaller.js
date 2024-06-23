const { execSync } = require('child_process');

function installDatabaseDriver(db) {
  const dbDrivers = {
    mysql: 'mysql2',
    postgres: 'pg',
    sqlite: 'sqlite3',
    mongodb: 'mongodb',
  };

  const packageName = dbDrivers[db];
  if (packageName) {
    console.log(`Installing ${packageName}...`);
    execSync(`npm install ${packageName} --save`, { stdio: 'inherit' });
  }
}

module.exports = { installDatabaseDriver };
