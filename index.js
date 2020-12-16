const express = require("express");
const bodyParser = require("body-parser");
const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const swaggerOptions = {
    definition: {
        info: {
            title: 'Scheduler RESTful API',
            description: 'An API to Create or Schedule resource',
            version: '1.0',
            contact: {
                name: 'LexClass Members',
                email: 'almembers@lexclass.com',
                ur: 'lexclass.com'
            }
        }
    },
    apis: ['./src/restapi.js', './src/routes/*.js']
}
const swaggerDef = swaggerJSDOC(swaggerOptions);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDef));

/**
 * @swagger
 * /:
 *  get:
 *      description: "This is the root endpoint of our api"
 *      tags:
 *          - Root Endpoint
 *      responses:
 *          '200':
 *              description: 'Request is successful'
 *          '500':
 *              description: 'Request Failed'
 */
app.post('/scheduler/add',(req,res)=>{
    res.status(200).json({"status":"Ok"});
});

app.post('/scheduler/cancel/:id',(req,res)=>{
    res.status(200).json({"status":"cancel schedule Sucess","payload":{}});
});

app.listen( 3000, ()=>{
    console.log("App listening on port 3000");
});