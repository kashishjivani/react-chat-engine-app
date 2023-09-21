const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // return res.json({ username: username, secret: username });
    try {
        const r = await axios.put("https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "PRIVATE-KEY": "7f1342aa-4e08-4bff-a1a3-2d3594d5fcaa" } }
        );
        return res.status(r.status).json(r.data);
    }
    catch (e) {
        console.log("e",e);
    if (e && e.response && e.response.status && e.response.data)
        return res.status(e?.response?.status).json(e?.response?.data);
    else
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3001);
