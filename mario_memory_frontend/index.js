// http://localhost:3000/tiles


let timer = document.getElementById("counter")
const boardDiv = document.getElementById("memory_board")
let flipped_tiles = []
let tiles_won = []
let thisMakesTheTimerRun;


welcomeScreen()

function welcomeScreen() {
    document.querySelector("body").style.backgroundImage="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuxf-7BI2GLqxIHHKWw0lvvAjZDGVyIDMpb3vdeU-8e2C-SLbww&s)"
    const inst = document.getElementById("instructions")
    inst.innerText= "Welcome to Mario Memory Game! Flip over the tiles to reveal an image underneath. Match up two identical images as fast as you can to get to the leaderboard!"
    
    tiles_won = []
    
    const playButton = document.createElement("button")
    playButton.className="button"
    playButton.innerHTML = "Lets-a Go!  "
    boardDiv.append(playButton)
    
    
    playButton.addEventListener("click", (evt) =>{
        playGame()
        
        function countdown(minutes) {
            let seconds = 0;
            function tick() {
                seconds++ ;
                timer.innerText = seconds;
                if( seconds > 0 ) {
                   thisMakesTheTimerRun = setTimeout(tick, 1000)
                }
            }
            tick();
        }
        countdown()
    })
    
}

function playGame() {
    boardDiv.innerHTML= "";
    document.querySelector("body").style.backgroundImage="url(https://i.pinimg.com/originals/e8/73/05/e873055fa952c28fac6d846c19312118.jpg)"
    fetch("http://localhost:3000/tiles")
    .then(r => r.json())
    .then((tilesArr) => {
    tilesArr.forEach((tile) => {
        viewTile(tile)
    })
    
})}


function viewTile(tile){
    const tileDiv = document.createElement("div")
    tileDiv.className="tile"
    let tileImg = document.createElement("img")
    tileImg.src = tile.image
    tileImg.classList = ("image", "hidden")
    tileDiv.append(tileImg)
    

    boardDiv.append(tileDiv)  
    
    tileDiv.addEventListener("click", bringToFront)
    
    function bringToFront() {
        
        this.firstElementChild.className="show"
        
        if (this.firstElementChild.className="show") {flipped_tiles.push(this.firstElementChild)}
        
    
        if (flipped_tiles.length === 2 &&
            flipped_tiles[0].src === flipped_tiles[1].src) {
                tiles_won.push(flipped_tiles[0], flipped_tiles[1])
                tiles_won.forEach((tile) => {tileImg.className="show"}) 
                if (tiles_won.length === 18) {
                    window.clearTimeout(thisMakesTheTimerRun)
                    addNewScore()
                }
                flipped_tiles = []
                console.log("match");
            }
            else if(flipped_tiles.length < 2){
                tileImg.className="show"
                } else if(flipped_tiles.length > 2 &&
                    flipped_tiles[0].src != flipped_tiles[1].src) {
                        flipped_tiles.forEach((tileImg) => {tileImg.className="hidden"})
                        flipped_tiles = []
            }

           
    }
    
                
}

function addNewScore(){
   
    boardDiv.innerHTML="";
    document.querySelector("body").style.backgroundImage="url(https://nsmbhd.net/file/3372/NSMBW%20Background%20Thing.png)"
    let allScores = document.getElementById("scores")

    let lbContainer = document.querySelector(".lb_container")

    let scoreContainer = document.querySelector(".scores_container")
    let addScoreForm = document.querySelector(".add_form")
        addScoreForm.className="form"
    
    scoreContainer.append(addScoreForm)
    boardDiv.append(scoreContainer)
    viewAllScores()
    

    
    addScoreForm.addEventListener("submit", (evt) => {
        evt.preventDefault()
        
        let timeStopped = counter.innerText
        let name = evt.target.name.value
        let number = (200 - parseInt(timeStopped))
        let level = 1
        
        
        
        fetch("http://localhost:3000/scores", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                name: name,
                number: number,
                Level_id: level
            })
        })
        .then(r => r.json())
            .then((newScore) => {
                let newlyCreated = document.createElement("li")
                newlyCreated.innerHTML = `Name: ${newScore.name} Score: ${newScore.number}`
                newlyCreated.className="scores"
                allScoresDiv.append(newlyCreated)
                evt.target.reset()
            }) 
        })
        
        
    let allScoresDiv = document.createElement("div")
    allScoresDiv.className="scoreboard"
    allScoresDiv.innerText="High Scores"
    
    
    function viewAllScores() {
        adaptor.getAllScores()
        .then((scores) => {
            scores.forEach((score) => {
                let eachScore = document.createElement("li")
                eachScore.className="scores"
            eachScore.innerText= `Name: ${score.name} Score: ${score.number}`
            allScoresDiv.append(eachScore)
            lbContainer.append(allScoresDiv)
            boardDiv.append(lbContainer)


            let newButton = document.createElement("button")
                newButton.innerText="80s-afy"
                newButton.className="delete_button"

                eachScore.append(newButton)

                newButton.addEventListener("click", (event) => {
                    let newName = (`${score.name.slice(0,3).toUpperCase()}`)
                    

                    eachScore.innerText = score.name = newName

                fetch(`http://localhost:3000/scores/${score.id}`, {
                  method: "PATCH",
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                     name: newName
                  })
                })
                }) 

                


            let deleteButton = document.createElement("button")
                deleteButton.innerText = "Delete"
                deleteButton.className = "delete_button"
            eachScore.append(deleteButton)
            deleteButton.addEventListener("click", (event) => {
                fetch(`http://localhost:3000/scores/${score.id}`, {
                  method: "DELETE"
                })
                .then(r => r.json())
                .then((res) => {
                  eachScore.remove()
                })
            })
    
            })
             
        })
    }
    

}




























