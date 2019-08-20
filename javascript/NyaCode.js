let NyaCode=function(){
    return {
        encode:function(input){
            let ascii_input=encodeURIComponent(input);
            let random=parseInt(Math.random()*26+65,10);
            let result=String.fromCharCode(random);
            for(let i=0;i<ascii_input.length;i++){
                let p=this.encodeRoman(ascii_input[i].charCodeAt(0),random);
                result+=String.fromCharCode(p);
                console.log(i,ascii_input[i],ascii_input[i].charCodeAt(0),p,String.fromCharCode(p));
            }
            return result;
        },
        decode:function(output){
            let random=output.charCodeAt(0);
            let result="";
            for(let i=1;i<output.length;i++){
                let q=this.decodeRoman(output[i].charCodeAt(0),random);
                result+=String.fromCharCode(q);
                console.log(i,output[i],output[i].charCodeAt(0),q,String.fromCharCode(q));
            }
            return decodeURIComponent(result);
        },
        encodeRoman:function(val,key){
            if(val+key<=126){
                return val+key;
            }else{
                return val+key-126+31;
            }
        },
        decodeRoman:function(val,key){
            if(val-key>=32){
                return val-key;
            }else{
                return val-key+126-31;
            }
        }
    }
};

module.exports = NyaCode;