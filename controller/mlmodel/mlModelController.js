const axios = require("axios");
const cheerio = require("cheerio");

const predict = (req, res, next) => {
    console.log(req);
    const URL = 'http://127.0.0.1:8000/predict'
    axios({
    proxy: false,
    url: URL,
    method: 'post',
    data: req.body

    }).then(res2 => {
            const htmlData = res2.data
            console.log("htmlData ", htmlData);
            // const $ = cheerio.load(htmlData)
            // const articles = []

            res.send(htmlData);
    });
}

module.exports = {
    predict
}