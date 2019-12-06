function getAllScores(){
    return fetch("http://localhost:3000/scores").then(r=> r.json())
}


const adaptor = {
    // second get all scores is referring to function definition on line1
    // getAllScores: getAllScores can be refractor-ed down to
    getAllScores
}