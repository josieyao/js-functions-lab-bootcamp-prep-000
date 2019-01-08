// write your code below!
/*describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })*/
  
function happyHolidays(){
return "Happy holidays!"
}



function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

 function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

 function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
 }

function shout(string) {
  return string.toUpperCase()
}