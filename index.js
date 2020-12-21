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

/**
     * @swagger
     * /auth/login:
     *  post:
     *      description: "Logs in a registered user and returns a token"
     *      tags:
     *          - Auth Routines
     *      parameters:
     *          - name: reqBody
     *            description: 'The body of the request in json format consisting of username and password'
     *            in: body
     *            schema:
     *               type: object
     *               properties:
     *                   username:
     *                      type: string
     *                   password:
     *                      type: string
     *               required:
     *                   - username
     *                   - password
     *      responses:
     *          '200':
     *              description: 'Request is successful'
     *          '500':
     *              description: 'Request Failed'
     */

     //for create
     app.post('/auth/login',(req,res)=>{
        res.status(200).json({"status":"Login successfully"});
        console.log(JSON.stringify(req.body));
    });
      
//job docs
/**
     * @swagger
     * /schedulerjobs/{id}:
     *  get:
     *      description: "Fetches a single schedule job"
     *      tags:
     *          - Single Schedule Job Route
     *      parameters:
     *          - name: id
     *            type: string
     *            description: 'The id of the schedule job to fetch'
     *            in: path
     *            required: true
     *          - name: x-token
     *            type: string
     *            description: 'A token given to us by the server after a successful authentication'
     *            in: header
     *            required: true
    
     *      responses:
     *          '200':
     *              description: 'Request is successful'
     *          '401':
     *              description: 'Unathorised, token required'
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
     *          - Get all schedule Route
     *      parameters:
     *          - name: x-token
     *            type: string
     *            description: 'A token given to us by the server after a successful authentication'
     *            in: header
     *            required: true
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
     *          - Add New schedule Route
     *      parameters:
     *          - name: x-token
     *            type: string
     *            description: 'A token given to us by the server after a successful authentication'
     *            in: header
     *            required: true
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
     *          - Cancel A Schedule Route
     *      parameters:
     *          - name: id
     *            type: string
     *            description: 'The id of the schedule'
     *            in: path
     *            required: true
     *          - name: x-token
     *            type: string
     *            description: 'A token given to us by the server after a successful authentication'
     *            in: header
     *            required: true
     *          
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