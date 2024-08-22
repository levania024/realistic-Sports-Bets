console.log('Realistic Sports Bets')


let bank = 100

const players = [
    { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williams" },
    { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
    { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
    { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
    { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
    { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
    { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
    { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
    { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
    { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
    { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
    { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
    { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
    { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
    { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
    { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
    { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
    { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
    { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
    { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

// NOTE function looping over the players array and returning team member from team 1
function drawTeam1() {
    let teamNum1 = ''
    players.forEach((member) => {
        if (member.teamNumber == "1") {
            teamNum1 += member.emoji
        }
    })

    const team1Container = document.getElementById('team1');
    team1Container.innerHTML = teamNum1;
}

// NOTE function looping over the players array and returning team member from team 2
function drawTeam2() {
    let teamNum2 = ''
    players.forEach((member) => {
        if (member.teamNumber == '2') {
            teamNum2 += member.emoji
        }
    })

    const team2Container = document.getElementById('team2');
    team2Container.innerText = teamNum2
}


// NOTE function looping over the players array and returning team member random team member 
function teamMemberRD() {
    players.forEach((member) => {
        let randomTeamMB = Math.ceil(Math.random() * 2)
        member.teamNumber = randomTeamMB
    })

    drawTeam1()
    drawTeam2()
}


// NOTE calculation of the won bet.
function betBtn() {
    let bankM = 0

    players.forEach((member) => {
        bankM += member.teamNumber * member.skill
    })

    console.log('won', bankM);
    const teamScore = document.getElementById('Amount');
    teamScore.innerText = bankM

    // return bankM
}


