var arr=[0,0,0,1,1,1,0];
/*function checkInput(shot) {
    let reg = /^[1-7]$/;
    if (shot.match(reg)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}*/



while(true){
    let shot = prompt();
    //checkInput(shot);
    console.log(shot);
    if (shot !== 'q')
    {
        if (arr[shot - 1]===1){
            alert('Damaged!');
        }
        else
        {
        alert('Not Damaged!');
        }
    }
    else
    {
        break;
    }
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
