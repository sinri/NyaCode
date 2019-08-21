/**
 * Turn any char to two chars pair
 */
let NyaCode=function(){
    return {
        dict:"-ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz.",
        encode:function(input){
            let ascii_input=encodeURIComponent(input);
            let result="";
            for(let i=0;i<ascii_input.length;i++){
                let x=ascii_input.charCodeAt(i);
                let c1=this.dict[(x&0b11000000)>>6];
                let c2=this.dict[(x&0b00111111)];
                result+=c1;
                result+=c2;
            }
            return result;
        },
        decode:function(output){
            let result="";
            for(let i=0;i<output.length-1;i+=2){
                $h=this.dict.indexOf(output[i]);
                $l=this.dict.indexOf(output[i+1]);
                $x =$h<<6 | $l;
                result+=String.fromCharCode($x);
            }
            return decodeURIComponent(result);
        }
    }
}

module.exports = NyaCode;