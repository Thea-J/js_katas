//Task: Given a positive integer, the encoder function should output the corresponding roman numeral in string format

//Plan:
// 1) Define a dictionary stating each Roman Numeral symbol and its corresponding value
// 2) Define a recursive function, that makes reference to the above dictionary, that systematically subtracts the highest value from the given integer that has a symbol
// 3) Append each value found into a solution string 
// example: 2008 is passed. 2008-1000 >= 0, append "M" into solution string, 1008-1000>=0, append "M" into solution string, 8-5 >= 0, append "V" into solution string, 
//          3-1>=0, append "I" into solution string, 2-1>=0, append "I" into solution string, 1-1=0, append "I" into solution string & end execution, Return "MMVIII"

// Edge cases: 0 is passed, cases where more than 3 identical symbols in a row (One less than 5... 4 = IV, 40 & 400. One less than 10 ... 9 = IX, 90 & 900)

function encoder(int) {
    let solutionString = "";
    let numeralDictionary = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }

    if (int === 0 ){
        return solutionString
    }
    else if (int > 0){
        for (const key in numeralDictionary){
            if (int - parseInt(key) >= 0){
                int = int - parseInt(key);
                solutionString = solutionString.concat(numeralDictionary[key])
                if (int === 0) {        
                    return solutionString;
                }
            }
        }
    }
}

// encoder(1);
module.exports = encoder;