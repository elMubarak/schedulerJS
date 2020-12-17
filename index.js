const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDOC = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDef));
//docs for root
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
//root endpoint
app.get('/',(req,res)=>{res.status(200).json({"Message":"Success"},)
});
//job docs
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
    //for jobbs
    app.get('/schedulerjobs/:id',(req,res)=>{
    res.status(200).json({"status":"single schedule"});
});

//active docts
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


//for active
app.get('/scheduler/active', (req, res) => {
    res.status(200).json({OK: true})
    console.log(JSON.stringify('All active schedules fetched'));
});

//create docs
/**
     * @swagger
     * /scheduler/add/:
     *  post:
     *      description: "Create a schedule "
     *      tags:
     *          - Add New schedule
     *      parameters:
     *          - name: Body 
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              properties:
     *                  date:
     *                      type: string
     *                      example: yy-mm-dd
     *                  time:
     *                      type: string
     *                      example: hh:mm:ss
     *                  callbackUrl:
     *                      type: string
     *                      example: https://shamskhalil.ngrok.io/scheduler
     *                  metadata:
     *                      type: object         
     *      responses:
     *          '200':
     *              description: 'Request is successful'
     *          '500':
     *              description: 'Request Failed'
     */

//for create
app.post('/scheduler/add',(req,res)=>{
    res.status(200).json({"status":"Ok"});
    console.log(JSON.stringify(req.body));
});
  //cancel docs
/**
     * @swagger
     * /scheduler/cancel{id}:
     *  put:
     *      description: "Cancel a schedule by it's ID "
     *      tags:
     *          - Cancel A Schedule
     *      parameters:
     *          - name: id
     *            type: string
     *            description: 'The id of the schedule'
     *            in: path
     *            required: true
     *      responses:
     *          '200':
     *              description: 'Request is successful'
     *          '500':
     *              description: 'Request Failed'
     */

//for cancel
    app.put('/scheduler/cancel/:id',(req,res)=>{
        res.status(200).json({"status":"cancel schedule Sucess",payload:{}},);
    });
  

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});