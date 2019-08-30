import { email, cap, number, noNumber, onlyDigit, float, integer, negative, genericPhoneNumber } from'../lib/regexpr';
import { expect } from 'chai';


let floatValue = [ "-0.2", "0.1", "123.1123"];
let notFloatValue = [ "1.text", "333/333"];
let emailValue = ["abcd@gmail.com", "adcdd.adfsdf@outlook.it"];
let notEmailValue = ["abd@gmail", "abdkdf.it", "adsdfs@bmds.i"];
let capValue = ["00333", "71033"];
let notCapValue = ["a1222", "dkslfd", "11122121221", "1234", "123", "12", "1"];
let numberValue = ["1", "0", "1222", "-1"];
let notNumberValue = ["da", "a", "adfsd", "sb", "-", "!%&"];
let integerValue = ["1", "0", "123", "1122334455"];
let notIntegerValue = ["a", "1a", "$", "ciao"];
let negativeValue = ["-1", "-1000", "-2323"];
let notNegativeValue = [ ...integerValue];
let phoneNumber = ["0881/558721", "02/5533233", "081/22339943"];
let notPhoneNumber = ["ab/332234", "aa/bbb", "080/adavds"];



describe('genericPhoneNumber regexpr', () => {

  phoneNumber.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(genericPhoneNumber.test(e)).to.equal(true);
      });
  });

  notPhoneNumber.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(genericPhoneNumber.test(e)).to.equal(false);
      });
  });
});

describe('negative regexpr', () => {

  negativeValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(negative.test(e)).to.equal(true);
      });
  });

  notNegativeValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(negative.test(e)).to.equal(false);
      });
  });
});

describe('integer regexpr', () => {

  integerValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(integer.test(e)).to.equal(true);
      });
  });

  notIntegerValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(integer.test(e)).to.equal(false);
      });
  });
});

describe('onlyDigit regexpr', () => {

  notNumberValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(onlyDigit.test(e)).to.equal(true);
      });
  });

  numberValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(onlyDigit.test(e)).to.equal(false);
      });
  });
});

describe('noNumber regexpr', () => {

  notNumberValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(noNumber.test(e)).to.equal(true);
      });
  });

  numberValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(noNumber.test(e)).to.equal(false);
      });
  });
});

describe('number regexpr', () => {

  numberValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(number.test(e)).to.equal(true);
      });
  });

  notNumberValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(number.test(e)).to.equal(false);
      });
  });
});

describe('cap regexpr', () => {

  capValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(cap.test(e)).to.equal(true);
      });
  });

  notCapValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(cap.test(e)).to.equal(false);
      });
  });
});

describe('email regexpr', () => {

  emailValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
          
        expect(email.test(e)).to.equal(true);
      });
  });

  notEmailValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
  
        expect(email.test(e)).to.equal(false);
      });
  });
});

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