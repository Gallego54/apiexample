const express = require('express')
const cors = require ('cors')

const app = express();

app.set('port', process.env.port || 1000);

app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/index.router.js'));


app.listen(app.get('port'), () => console.log(`LISTEN ON PORT ${app.get('port')}`))