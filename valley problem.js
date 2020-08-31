// vally problem

function countingValleys(n, s) {
     const min = 2;
     const max = 1000000;
     let isInValley = false;
     let valleys = 0;
     s = (typeof s === "string") ? s.split('') : s;
 
     if (s.length >= min
          && s.length <= max
          && n === parseInt(n, 0)
          && n >= min
          && n <= max 
          && n === s.length) {
          
          s.map(steps => ((steps === "U") ? 1 : -1))
               .reduce((prev, next) => {
                    if (prev < 0 && !isInValley) {
                         isInValley = true;
                    }
                    if ((prev + next) === 0 && isInValley) {
                         valleys++;
                         isInValley = false;
                    }

                    return prev + next;    
               });
     } 
     
     return valleys; 
}