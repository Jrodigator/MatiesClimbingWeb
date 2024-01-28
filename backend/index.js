const express = require('express')
const cors = require('cors');
const multer = require('multer');

const app = express();
// Set up Multer for file upload
const upload = multer({ dest: 'uploads/' });
const port = 3001;

const member_model = require('./memberModel');

// Enable CORS for all routes
app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next()
// });
app.use(express.json())


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
app.post('/member', upload.single('pop'), (req, res) => {
    const pop = req.file; // Uploaded file
    console.log(pop);

    // save the file to the filesystem

    const body = req.body;
    member_model.createMember(body)
    .then(response => {
        // create the pop model and save the metadata into that
        res.status(200).send(response);
    })
    .catch(error => {
        console.log(error);
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
    console.log(`Express server is running on port ${port}`);
})