import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'
import resultRoutes from './routes/results.js'

const app = express()
const PORT = 5000
const url = 'http://mongodb://localhost:27017/rzn'
const classic = ['ClShi', 'ClSho', 'ClTan', 'ClTon', 'ClTor', ]
const curious = ['CuShi', 'CuSho', 'CuTan', 'CuTon', 'CuTor',]
const expert = ['ExShi', 'ExSho', 'ExTan', 'ExTon', 'ExTor', ]
const playful = ['PlShi', 'PlSho', 'PlTan', 'PlTon', 'PlTor', ]


const user = {
    name: 'meshkat',
    phoneNumber: '09021119991',
    result: 'ClShi',
}

const datetime = new Date().toString();


app.use(bodyParser.json())
app.use('/users', userRoutes)
app.use('/results', resultRoutes)

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})

app.get('/', (req, resp) => {
    console.log('jesus')
    resp.send('Hello from home page!')
})
