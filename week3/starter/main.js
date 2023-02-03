const fs = require("fs");

const table = require("table");

const args = process.argv.slice(2);

if (!args.length) {
    throw new Error("Expected a filename input");
}


fs.readFile(args[0], (err, data) => {
    if (err) {
        throw "No file found" + err;
    }
    let json = JSON.parse(data.toString());
    let statsAfter2000 = json.filter(stats => stats.year > 2000);

    const avgLossess = averageLosses(json);
    const avgLossAfter2000 = averageLosses(statsAfter2000);
    const avgWins = averageWins(json);
    const avgWinsAfter2000 = averageWins(statsAfter2000);

    let bigTen = json.filter(stats => stats.conference === "Big Ten")
    let smallWLP = bigTen[0].winLossPercent;
    let bigWLP = bigTen[0].winLossPercent;

    for(const stats of bigTen){
        const wlp = stats.winLossPercent;
        smallWLP = Math.min(smallWLP, wlp);
        bigWLP = Math.max(bigWLP, wlp);
    }

    console.log(table.table([
        ["Average Lossess", Math.round(avgLossess)],
        ["Average Lossess After 2000", Math.round(avgLossAfter2000)],
        ["Smallest WLP", smallWLP],
        ["Largest WLP", bigWLP],
        ["Average Wins", Math.round(avgWins)],
        ["Average Wins After 2000", Math.round(avgWinsAfter2000)]
    ]));

})


function averageWins(data) {
    const winCount = data.map(stats => stats.wins);
    let sum = 0;
    for(const wins of winCount){
        sum += wins;
    }
    return sum / data.length;
}

function averageLosses(data){
    const lossCount = data.map(stats => stats.losses);
    let sum = 0;
    for(const loss of lossCount){
        sum += loss;
    }
    return sum / data.length;
}
