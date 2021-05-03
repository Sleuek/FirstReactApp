const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: "postgres://eahivsnedazetb:a6cf01a1dcf3339c13d099626b0b789db07bd7cbc157a8bf2db998ffcd6e95a0@ec2-54-74-14-109.eu-west-1.compute.amazonaws.com:5432/ddvrgpron6ak4t",
  ssl: {
      rejectUnauthorized: false
  }
});

module.exports = pool;
