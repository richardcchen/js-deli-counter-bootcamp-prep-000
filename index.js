var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  console.log(katzDeliLine);
  katzDeli[katzDeliLine] = newname;
  return "Welcome, " + newname + ". You are number " + [katzDeliLine + 1] + " in line.";
}