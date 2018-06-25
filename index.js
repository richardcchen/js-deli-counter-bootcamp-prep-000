var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  console.log(katzDeliLine);
  katzDeliLine.push(newname);
  return "Welcome, " + newname + ". You are number " + [katzDeliLine.length] + " in line.";
}

function nowServing(){
  if (katzDeli.length > 0){
    return "There is nobody waiting to be served!";
  } else{
    return katzDeli.shift();
  }
  
    
}