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

/*  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })*/

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