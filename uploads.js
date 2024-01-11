const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up storage for uploaded videos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Store uploaded video
app.post('/upload', upload.single('video'), (req, res) => {
    res.json({ message: 'Video uploaded successfully.' });
});

// Store subtitles data
app.post('/subtitles', (req, res) => {
    const { videoFileName, subtitles } = req.body;

    // Create subtitles file
    const subtitlesData = subtitles.map(subtitle => `${subtitle.timestamp.toFixed(2)} - ${subtitle.text}`).join('\n');
    const subtitlesFileName = `subtitles_${videoFileName.replace(/\.[^/.]+$/, "")}.txt`;

    fs.writeFileSync(`uploads/${subtitlesFileName}`, subtitlesData);
                                                                                                        <script src="D:/Full-Stack Developer Evaluation Task/server.js"></script>const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up storage for uploaded videos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

// Store uploaded video
app.post('/upload', upload.single('video'), (req, res) => {
    res.json({ message: 'Video uploaded successfully.' });
});

// Store subtitles data
app.post('/subtitles', (req, res) => {
    const { videoFileName, subtitles } = req.body;

    // Create subtitles file
    const subtitlesData = subtitles.map(subtitle => `${subtitle.timestamp.toFixed(2)} - ${subtitle.text}`).join('\n');
    const subtitlesFileName = `subtitles_${videoFileName.replace(/\.[^/.]+$/, "")}.txt`;

    fs.writeFileSync(`uploads/${subtitlesFileName}`, subtitlesData);

    res.json({ message: 'Subtitles added successfully.' });
});

// Retrieve subtitles file
app.get('/subtitles/:videoFileName', (req, res) => {
    const videoFileName = req.params.videoFileName;
    const subtitlesFileName = `subtitles_${videoFileName.replace(/\.[^/.]+$/, "")}.txt`;

    try {
        const subtitlesData = fs.readFileSync(`uploads/${subtitlesFileName}`, 'utf-8');
        res.send(subtitlesData);
    } catch (error) {
        res.status(404).json({ error: 'Subtitles not found.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

    res.json({ message: 'Subtitles added successfully.' });
});

// Retrieve subtitles file
app.get('/subtitles/:videoFileName', (req, res) => {
    const videoFileName = req.params.videoFileName;
    const subtitlesFileName = `subtitles_${videoFileName.replace(/\.[^/.]+$/, "")}.txt`;

    try {
        const subtitlesData = fs.readFileSync(`uploads/${subtitlesFileName}`, 'utf-8');
        res.send(subtitlesData);
    } catch (error) {
        res.status(404).json({ error: 'Subtitles not found.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
