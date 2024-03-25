require("dotenv").config();
const express = require("express");
const cors = require('cors');
const adminRoute = require('./router/admin-router');
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const PORT = 5000;
const app = express();
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const corsOption = {
    origin: "http://localhost:3000",
    methods : "GET, POST, PUT,DELETE, PATCH,HEAD",
    credentials: true,

};
//middlewaree
//handle cors
app.use(cors(corsOption));

app.use(express.json());  /*now i can use json in this application. this line of coded asdd
express middleware that parses incoming request bodies with Json payloads. it is a important 
to place this before any routes that need to handle JSOn data in the req body. responsible for 
parsing jSON reqyests and it should be applied at the beginning of our middleware stack to enssure its av
available for all subsequent route handlers

*/
console.log(process.env.MONGODBURI)
app.use("/api/auth", authRoute);   //router used at /api/auth
app.use("/api/form", contactRoute );
app.use("/api/admin", adminRoute );
app.use(errorMiddleware);
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

})
