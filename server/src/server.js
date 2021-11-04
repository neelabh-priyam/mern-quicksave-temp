const express = require("express");
const cors = require("cors");
const path = require("path");

const { getUser, getUsers } = require("./getUser");
const setUser = require("./setUsers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/auth/login", (req, res) => {
    res.json({
        sucess: true,
        msg: "you have attempted to login",
        credentials: {
            email: req.body.email || null,
            password: req.body.password || null,
        },
    });
});

app.post("/api/auth/register", async (req, res) => {
    const response = await setUser(req.body);

    res.json({
        sucess: true,
        msg: "you have attempted to register",
        response,
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        sucess: true,
        msg: "you have attempted to get some infomation",
        info: {
            name: "mern-quicksave",
            type: "mern application",
            author: "neelabh priyam jha",
            deployment: "heroku",
            siteMap: [
                "/api/auth/login",
                "/api/auth/register",
                "/api/info",
                "/api/users",
            ],
        },
    });
});

app.post("/api/user", async (req, res) => {
    const response = await getUser(req.body.email);

    res.json({
        sucess: true,
        msg: "you have attempted to get user",
        response,
    });
});
app.get("/api/users", async (req, res) => {
    const response = await getUsers();

    res.json({
        sucess: true,
        msg: "you have attempted to get users",
        response,
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../client/build")));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
