var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  katzDeli[katzDeliLine.length + 1] = newname;
  return "Welcome, " + newname + ". You are number " + [katzDeliLine.length] + "in line.";
}