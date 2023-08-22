const axios = require("axios");

const getHighline = async function (req, res, next){
    try {
        const url = "http://localhost:8000/highline";
        const highline = await axios.get(url);
        res.status(200).json({
            msg:"get highline successfully",
            data:{
                message: highline.data,
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getHighline};