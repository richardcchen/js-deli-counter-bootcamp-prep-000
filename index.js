var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  //console.log(katzDeliLine);
  katzDeliLine.push(newname);
  return "Welcome, " + newname + ". You are number " + [katzDeliLine.length] + " in line.";
}

function nowServing(katzDeliLine){
//console.log(katzDeliLine);
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!";
  } else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  
    
}