const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const swaggerOptions = {
    definition: {
        info: {
            title: 'Scheduler RESTful API',
            description: 'An API to Create schedules',
            version: '1.0',
            contact: {
                name: 'shamskhalil',
                email: 'shamskhalil@gmail.com'
            }
        }
    },
    apis: ['./index.js']
}
const swaggerDef = swaggerJSDOC(swaggerOptions);

server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDef));

/**
     * @swagger
     * /schedulerjobs/{id}:
     *  get:
     *      description: "Fetches a single schedule"
     *      tags:
     *          - get single schedule
     *      parameters:
     *          - name: id
     *            type: string
     *            description: 'The id of the schedule'
     *            in: path
     *            required: true
     *          
    
     *      responses:
     *          '200':
     *              description: 'Request is successful'
     *          
     *          '500':
     *              description: 'Request Failed'
     */
server.get('/schedulerjobs/:id',(req,res)=>{
    res.status(200).json({"status":"single schedule"});
});


/**
     * @swagger
     * /scheduler/active/:
     *  get:
     *      description: "Gets all active schedules "
     *      tags:
     *          - get all schedule
     *      responses:
     *          '200':
     *              description: 'Request is successful'
     *          '500':
     *              description: 'Request Failed'
     */



server.get('/scheduler/active', (req, res) => {
    res.status(200).json({OK: true})
    console.log(JSON.stringify('All active schedules fetched'));
});


server.listen(3000, () => {
    console.log('Server listening on port 3000');
});


