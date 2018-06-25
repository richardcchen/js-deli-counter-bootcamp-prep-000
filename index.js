var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  katzDeli[katzDeliLine + 1] = newname;
  return "Welcome, " + newname + ". You are number " + [katzDeliLine + 1] + " in line.";
}