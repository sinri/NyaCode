/**
 * Turn any char to one or two chars
 */
let HiaCode=function(){
    return {
        encode:function(input){
            let ascii_input=encodeURIComponent(input);
            let result="";
            for(let i=0;i<ascii_input.length;i++){
                result+=this.encodeChar(ascii_input[i]);
            }
            return result;
        },
        decode:function(output){
            let result="";
            let temp=null;
            for(let i=0;i<output.length;i++){
                if(temp!==null){
                    temp+=output[i];
                    result+=this.decodeChar(temp);
                    temp=null;
                }else{
                    if(output[i]=='0'){
                        temp="0";
                    }else{
                        result+=this.decodeChar(output[i]);
                    }
                }
            }
            return decodeURIComponent(result);
        },
        encodeChar:function(char){
            switch (char){
                case "A": return "a";
                case "B": return "b";
                case "C": return "c";
                case "D": return "d";
                case "E": return "e";
                case "F": return "f";
                case "G": return "g";
                case "H": return "h";
                case "I": return "i";
                case "J": return "j";
                case "K": return "k";
                case "L": return "l";
                case "M": return "m";
                case "N": return "n";
                case "O": return "o";
                case "P": return "p";
                case "Q": return "q";
                case "R": return "r";
                case "S": return "s";
                case "T": return "t";
                case "U": return "u";
                case "V": return "v";
                case "W": return "w";
                case "X": return "x";
                case "Y": return "y";
                case "Z": return "z";
                case "0": return "A";
                case "1": return "B";
                case "2": return "C";
                case "3": return "D";
                case "4": return "E";
                case "5": return "F";
                case "6": return "G";
                case "7": return "H";
                case "8": return "I";
                case "9": return "J";
                case "a": return "1";
                case "b": return "2";
                case "c": return "3";
                case "d": return "4";
                case "e": return "5";
                case "f": return "6";
                case "g": return "7";
                case "h": return "8";
                case "i": return "9";
                case "j": return "K";
                case "k": return "L";
                case "l": return "M";
                case "m": return "N";
                case "n": return "O";
                case "o": return "P";
                case "p": return "Q";
                case "q": return "R";
                case "r": return "S";
                case "s": return "T";
                case "t": return "U";
                case "u": return "V";
                case "v": return "W";
                case "w": return "X";
                case "x": return "Y";
                case "y": return "Z";
                case "z": return ".";
                case "!": return "01";
                case "'": return "02";
                case "(": return "03";
                case ")": return "04";
                case "*": return "05";
                case "-": return "06";
                case ".": return "07";
                case "_": return "08";
                case "~": return "09";
                case "%": return "00";
                default:
                    return " ";
            }
        },
        decodeChar:function(char){
            switch(char){
                case "a": return "A";
                case "b": return "B";
                case "c": return "C";
                case "d": return "D";
                case "e": return "E";
                case "f": return "F";
                case "g": return "G";
                case "h": return "H";
                case "i": return "I";
                case "j": return "J";
                case "k": return "K";
                case "l": return "L";
                case "m": return "M";
                case "n": return "N";
                case "o": return "O";
                case "p": return "P";
                case "q": return "Q";
                case "r": return "R";
                case "s": return "S";
                case "t": return "T";
                case "u": return "U";
                case "v": return "V";
                case "w": return "W";
                case "x": return "X";
                case "y": return "Y";
                case "z": return "Z";
                case "A": return "0";
                case "B": return "1";
                case "C": return "2";
                case "D": return "3";
                case "E": return "4";
                case "F": return "5";
                case "G": return "6";
                case "H": return "7";
                case "I": return "8";
                case "J": return "9";
                case "1": return "a";
                case "2": return "b";
                case "3": return "c";
                case "4": return "d";
                case "5": return "e";
                case "6": return "f";
                case "7": return "g";
                case "8": return "h";
                case "9": return "i";
                case "K": return "j";
                case "L": return "k";
                case "M": return "l";
                case "N": return "m";
                case "O": return "n";
                case "P": return "o";
                case "Q": return "p";
                case "R": return "q";
                case "S": return "r";
                case "T": return "s";
                case "U": return "t";
                case "V": return "u";
                case "W": return "v";
                case "X": return "w";
                case "Y": return "x";
                case "Z": return "y";
                case ".": return "z";
                case "01": return "!";
                case "02": return "'";
                case "03": return "(";
                case "04": return ")";
                case "05": return "*";
                case "06": return "-";
                case "07": return ".";
                case "08": return "_";
                case "09": return "~";
                case "00": return "%";
                default:
                    return " ";
            }
        }
    }
}

module.exports = HiaCode;