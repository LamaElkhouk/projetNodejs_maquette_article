//import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import router from './src/routes'


/*mongoose.connect('mongodb://localhost:27017/my_db').then(()=>{
    console.log("mongo db connect")
}).catch(()=>{
    console.error("error ")
});
*/
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