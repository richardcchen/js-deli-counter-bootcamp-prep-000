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

function currentLine(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "The line is currently empty."
  } else {
    var linelength = katzDeliLine.length;
    var newarray = []
    for (let i = 1; i < linelength-1; i++){
      newarray[i] = i + ". " + katzDeliLine[i-1] + ","
    }
    newarray[linelength-1] = linelength + ". " + katzDeliLine[linelength-1]
  }
  return newarray;
  
}