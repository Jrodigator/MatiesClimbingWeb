const express = require('express')
const cors = require('cors');
const multer = require('multer');
const { getCurrentFormattedDate, getFilename } = require('./utils');
const memberModel = require('./memberModel');
const popModel = require('./popModel');

const app = express();
// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../pop/'); // Set the destination folder
  },
  filename: function (req, file, cb) {
    // create the filename to save the pop as
    const name = req.body.name;
    const surname = req.body.surname;
    const filename = getFilename(name, surname);
    cb(null, filename); // Set the filename
  }
});
const upload = multer({ storage: storage });
const port = 3001;


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
    memberModel.getAllMembers()
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
    memberModel.getMember(id, body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// save a member
app.post('/member', upload.single('pop'), (req, res) => {
    const currentDateFormatted = getCurrentFormattedDate();
    const membershipType = req.body.membership_type;
    const paymentType = req.body.paymentType;
    // the file is automatically saved to disk at ../pop/<date>-<name>-<surname>
    
    // if they want to pay with student account then we don't save the file
    let filename = ""
    let filepath = "";
    console.log(membershipType)
    console.log(paymentType)
    if (membershipType === "STUDENT" && paymentType === "studentAccount") {
        filename = req.body.student_number;
        filepath = "student-account"
    } else {
        filepath = req.file.path;
        const name = req.body.name;
        const surname = req.body.surname;
        filename = getFilename(name, surname);
    }

    const body = req.body;
    memberModel.createMember(body, filepath, filename, currentDateFormatted)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        // TODO : delete the file probably
        console.log(error);
        res.status(500).send(error);
    })
})

// update member details
app.put("/member/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    memberModel.updateMember(id, body)
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