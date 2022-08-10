
// type: movie,serie o episode
// t: title
// y: year 
const axios = require("axios"); 

const getMovie = async(req,res)=> {
    const {title, year, type} = req.query; 
    const BASEURL = "https://www.omdbapi.com/?i=tt3896198&apikey=32b0c60c&"
    try {
        if(type && (type !== "movie" || type !== "series" || type !== "episode")) throw new Error("Tipo de película inválido")
        if(year && year > 2022) throw new Error("Año inválido")
        let finalURL 
        if(title && year && type) {
            finalURL = `${BASEURL}t=${title}&y=${year}&type=${type}`
        } else if(title && year) {
            finalURL = `${BASEURL}t=${title}&y=${year}`
        } else if(title && type) {
            finalURL = `${BASEURL}t=${title}&type=${type}`
        } else {
            finalURL = `${BASEURL}t=${title}`
        }
        let response = await axios.get(finalURL); 
        let newReponse = {
            data: response.data,
            status: 200 
        }
        res.status(200).json(newReponse); 
    }catch(e) {
        res.status(500).json("Parámetro invalido")
    }
}

module.exports = getMovie; 