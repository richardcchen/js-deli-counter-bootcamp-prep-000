var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  katzDeli[katzDeliLine.length + 1] = newname;
  return [katzDeliLine.length + 1];
}