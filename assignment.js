//answer-1
function feetToMile(feet){
    var mile="Please Enter Positive Or 0 Value";
    if(feet<0){
        console.log("Distance can't be a negative number")
    }
    else{
        mile=feet/5280;
    }
    return mile;
}
var feetToMileResult=feetToMile(1);
console.log("feet: =",feetToMileResult,"Mile. ");
//answer-2
function woodCalculator(chair,table,bed,){
    var perChairWood=1;
    var perTableWood=3;//Cubic
    var perBedWood =5; //Cubic
    var totalWood="When You Give Three Value in Parameter. I'm Calculate You Wood then Tell You How Much Need Wood ";
    if(chair<0 || table<0 ||bed<0){
        console.log("Please Enter Positive Or 0 Number")
    }
    else if (chair==null || table===null ||bed===null){
        console.log("Please Enter three value")

    }
    else{
        totalWood=perChairWood*chair+table*perTableWood+bed*perBedWood;
    }
    return totalWood;
}
var totalNeedWood=woodCalculator(0,0,0);
console.log("Your Total Need Wood =",totalNeedWood,"Cubic foot");
//answer-3
function brickCalculator(brick){
    var perFloorBrick="Don't Need ";//gloabal
    if(brick<0){
      console.log("Enter a Positive Or 0 Flooer Number. I'm Tell You How Much Brick Need")
    }
    else if(brick<=1 || brick<=10 ) {
      perFloorBrick=brick*15*1000;
 }
    else if(brick<=11 || brick<=20){
        var firstFloorRange=150000;
        var nthFloor=brick-10;
        perFloorBrick=(12*1000*nthFloor)+firstFloorRange;

 }
    else{
        var secoudFloorRange=270000;
        var nthFloor=brick-20;
        var infityFloor=10*1000;
      perFloorBrick=(infityFloor*nthFloor)+secoudFloorRange;
 }
 return perFloorBrick;
}

var totalNeedBrick=brickCalculator(10);
console.log("Total Floor Need =",totalNeedBrick,"Brick");
totalNeedBrick=brickCalculator(20);
console.log("Total Floor Need =",totalNeedBrick,"Brick");
totalNeedBrick=brickCalculator(21);
console.log("Total Floor Need =",totalNeedBrick,"Brick");
//answer-4
function tinyFriend(name){
    var friendName=name;
   for(var i=0;i<name.length;i++){
       friendName=name[i];
    if(friendName.length<name.length){
       var tinyFriendName=friendName;
    }
   }   
    return tinyFriendName;
}
var tinyFriendNameResult =tinyFriend(["shakil","r","programming"]);
console.log(tinyFriendNameResult);