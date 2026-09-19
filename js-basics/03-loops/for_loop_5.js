// print the pattern of star 

// * * * *
// * * * *
// * * * *
// * * * *

let n = 4;

for(let i = 1; i<=4; i++){
    let row = "";
    for(j = 1; j<=n; j++){
        row += "* ";
    }
    console.log(row);
}