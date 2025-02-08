const app = require('./app');
const connectDatabase = require('./config/database');


const dotenv = require('dotenv');

// Handle Uncaught exceptions
process.on('uncaughtException',err =>{
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught Exception');
   
    process.exit(1);
    
    
})


dotenv.config({ path: __dirname + '/config/config.env' });

connectDatabase();

const server = app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})



// handle unhandled promise rejection
process.on('unhandledRejection',err =>{
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(()=>{
        process.exit(1);
    });
    
});

module.exports = app; // Exporting app instead of running a server


