const express = require('express')
const app = express()
const port = 3001

const member_model = require('./memberModel');

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next()
});


app.get('/', (req, res) => {
    member_model.getAllMembers()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// get member data
app.post('/member/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    member_model.getMember(id, body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// save a member
app.post('/member', (req, res) => {
    member_model.createMember(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// update member details
app.put("/member/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    member_model.updateMember(id, body)
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((error) => {
        res.status(500).send(error);
    })
})


app.listen(port, () => {
    console.log(`App running on port ${port}`);
})