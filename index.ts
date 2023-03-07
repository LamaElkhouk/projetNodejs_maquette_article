import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import router from './src/routes'


mongoose.connect(`mongodb://root:root@localhost:27017/mydb`).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error(err);
    });

    
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
    });
    
    mongoose.connection.on('error', err => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
    });

dotenv.config();

const port = 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/",router)

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});