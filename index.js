var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  console.log(katzDeliLine);
  katzDeliLine.push(newname);
  return "Welcome, " + newname + ". You are number " + [katzDeliLine.length + 2] + " in line.";
}