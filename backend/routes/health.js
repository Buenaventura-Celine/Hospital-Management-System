//tatawagin yung built in na router
const router = require('express').Router()

//kunin yung model 
let Health = require('../models/health.model')

//yung nakalagay sa parenthesis ayun yung pupuntahan na url
router.route('/').get((req, res) => {
    //hahanapin lahat tapos ibabalik yung promise - query
    Health.find()
        .then(health => res.json(health))
        .catch(err => res.status(400).json('Error : ' + err))
})

//magaadd ng health declaration
router.route('/add').post((req, res) => {
    const fullname = req.body.fullname
    const temperature = req.body.temperature
    const email = req.body.email
    const phonenumber = req.body.phonenumber

    //instanstiation yan nung model na ginawa tapos isusupply lang yung mga data
    const newHealthDeclaration = new Health({
        fullname, temperature, email, phonenumber
    })

    //para masave sa database
    newHealthDeclaration.save()
        .then(health => res.json('New record added'))
        .catch(err => res.status(400).json('Error : ' + err))
})

module.exports = router;