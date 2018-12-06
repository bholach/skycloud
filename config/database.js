const dbURL = "mongodb://tejash:skycloud4$@ds038888.mlab.com:38888/skycloud/";
//mongodb://<dbuser>:<dbpassword>@ds038888.mlab.com:38888/skycloud
module.exports = {
    //database: 'mongodb://brad:brad@ds121190.mlab.com:21190/meanauthapp',   //prod
    database: dbURL,    //dev
    secret: 'sticket'
  };
