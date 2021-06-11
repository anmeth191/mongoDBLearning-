const assert = require('assert');
const Student = require('../src/student');

describe("Create first String" , ()=>{
    it("save student" , ()=>{
        const jason = new Student({name:'Jason'});
        jason.save();
    })
})