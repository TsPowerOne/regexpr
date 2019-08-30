import { float } from'../lib/regexpr';
import { expect } from 'chai';


let floatValue = [ "-0.2", "0.1", "123.1123"];
let notFloatValue = [ "1.text", "333/333"];

describe('float regexpr', () => {

    floatValue.forEach(e=>{
        it(`if ${e} should return true`, () => {
            
          expect(float.test(e)).to.equal(true);
        });
    });
 
    notFloatValue.forEach(e=>{
        it(`if ${e} should return false`, () => {
    
          expect(float.test(e)).to.equal(false);
        });
    });
});