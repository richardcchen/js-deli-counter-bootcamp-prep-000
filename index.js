var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  katzDeli[katzDeliLine] = newname;
  return "Welcome, " + newname + ". You are number " + [katzDeliLine + 1] + " in line.";
}