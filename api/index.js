const axios = require('axios');
const base64 = require('node-base64-image');

module.exports = (req, res) => {
    async function pic() {
        axios({
                method: "get",
                url: "https://api.github.com/users/cachecleanerjeet",
                headers: { "User-Agent": "Tuhin", "Authorization": "Bearer " + process.env.GH_TOKEN }
            })
            .then(async function(response) {
                res.setHeader("Content-Type", "image/png")
                res.setHeader("Cache-Control", "s-maxage=1000, stale-while-revalidate")
                res.send(await base64.encode(response.data.avatar_url))
            })
            .catch(function(error) {
                res.json("Sorry that's an " + error)
            })
    }
    pic()
}