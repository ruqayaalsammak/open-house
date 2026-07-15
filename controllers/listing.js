const Listing = require('../models/listing')
// const mongoose = require('mongoose')

const showNewForm =(req, res) => {
    res.render('listing/new.ejs')
}

const create = async (req, res) => {
    console.log(req.session)
    res.send(req.body)
}

module.exports = {
    showNewForm,
    create,
}