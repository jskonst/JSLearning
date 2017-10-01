var area=[0,0,0,1,1,1,0];
var shotCount = 0;
var damageCount = 0;
//var shotMap = [1,2,3,4,5,6,7];

/*function checkShot(arr, elem) {
    return arr.find((i) => i === elem) != -1;
}*/

function checkInput(num) {
    let reg = /^[1-7]$|q/;
    if (num.match(reg))
    {
        //if (checkShot(shotMap, num) !== -1)
        //{
            return true;
        //}
        //else
        //{
          //  alert ('U')
        //}
    }
    else
    {
        alert ('Incorrect input!');
        return false;
    }
}


function checkShipState(num) {
    if (num < 3)
    {
        return false;
    }
    else
    {
        return true;
    }
}

while(true){
    var shot;
    do {
    var shot = prompt("Use numbers from 1 to 7 to shoot");
    } while (checkInput(shot) !== true)
    if (shot !== 'q')
    {
        ++shotCount;

        if (area[shot - 1]===1){
            ++damageCount;
            if (checkShipState(damageCount) !== true)
            {
                alert ('Ship damaged!');
            }
            else
            {
                alert ('Ship destroyed!');
                console.log('shot: %d. Ship destroyed for %d shots',+shot,shotCount);
                break;
            }
        }
        else
        {
        alert('Off target!');
        }
    }
    else
    {
        break;
    }
    console.log("shot: %d, shotCount: %d",+shot,shotCount);
}
// var arr=[5,6,7,8,9];
// for (var i in arr){
// //     console.log(i)
//     console.log(arr[i]);

// }
// let j=0;
// while( j <10){
//  console.log(j);
// j++;
// }
