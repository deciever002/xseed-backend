const mongoose = require('mongoose');
//create a connection with remote db
async function connectDb(){
    try {
        await mongoose.connect(process.env.CONNECTION_STRING,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Connected to mongo db");
    } catch (error) {
        handleError(error);
    }
}

connectDb();
