const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const API_KEY = 'd9a6cfbbc2a9cca5c383a30d003bf3b2';

app.use(cors());
app.use(express.static('public'));

app.get('/search/:query', async (req, res) => {
    try {
        const query = req.params.query;
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv`, {
            params: {
                api_key: API_KEY,
                query: query
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
