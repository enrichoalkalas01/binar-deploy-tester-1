const Express = require('express')
const Cors = require('cors')
const App = Express()
const Dotenv = require('dotenv')
const Morgan = require('morgan')

const PORT = process.env.PORT || 7777

App.use(Morgan('dev'))

App.listen(PORT, () => { console.log(`Server running in port : ${ PORT }`) })


let DataPassing = []

for ( let i = 0; i < 25; i++ ) {
    DataPassing[i] = {
        title: 'Product Title Number : ' + i,
        excerpt: 'ini adalah product excerpt ' + i + '...',
        price: Math.random(1000, 10000) * i
    }
}

App.get('/', (req, res) => {
    res.status(200).send({
        message: `Successfull to get data`,
        results: DataPassing
    })
})