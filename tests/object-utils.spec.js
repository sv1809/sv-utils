import chai from "chai";
import { objectUtils } from "../src/index";

const assert = chai.assert;

describe("Object utils", () => {
    let testObject = {};

    beforeEach((done) => {
        testObject = {
            prop1: {
                prop1_1: null,
                prop1_3: {
                    prop1_3_1: "1.3.1"
                },
                prop1_4: [{
                    prop1: "1"
                }, {
                    prop1: "2"
                }, [{
                    prop1: "1"
                }], 1]
            }
        };
        done();
    });

    describe("getValue", () => {

        it("it should return value when find property", (done) => {
            const res = objectUtils.getValue(testObject, "prop1.prop1_3.prop1_3_1");
            assert.equal(res, "1.3.1");
            done();
        });

        it("it should return bull when find property with null value", (done) => {
            const res = objectUtils.getValue(testObject, "prop1.prop1_1");
            assert.equal(res, null);
            done();
        });

        it("it should return undefined when can't find property", (done) => {
            const res = objectUtils.getValue(testObject, "prop1.prop.prop3");
            assert.equal(res, undefined);
            done();
        });

        it("it should return undefined when object is null", (done) => {
            const res = objectUtils.getValue(null, "prop1.prop");
            assert.equal(res, undefined);
            done();
        });

        it("it should return undefined when object is undefined", (done) => {
            const res = objectUtils.getValue(undefined, "prop1.prop");
            assert.equal(res, undefined);
            done();
        });

        it("it should return object when property is null", (done) => {
            const res = objectUtils.getValue(testObject, null);
            assert.equal(res, testObject);
            done();
        });

        it("it should return object when property is undefined", (done) => {
            const res = objectUtils.getValue(testObject, undefined);
            assert.equal(res, testObject);
            done();
        });

        it("it should return value when property with array", (done) => {
            const res = objectUtils.getValue(testObject, "prop1.prop1_4[1].prop1");
            assert.equal(res, "2");
            done();
        });

        it("it should return value when property is array element", (done) => {
            const res = objectUtils.getValue(testObject, "prop1.prop1_4[3]");
            assert.equal(res, 1);
            done();
        });

    });

    describe("setValue", () => {

        it("it should set object property", done => {
            const property = "prop1.prop1_1";
            const newValue = 5;
            const obj = {
                prop1: {
                    prop1_1: 2
                }
            };
            const expected = {
                prop1: {
                    prop1_1: 5
                }
            };
            const res = objectUtils.setValue(obj, property, newValue);
            assert.equal(JSON.stringify(res), JSON.stringify(expected));
            done();
        });

        it("it should set object property in array of objects", done => {
            const property = "[0].prop1";
            const newValue = { prop2: 5 };
            const obj = [
                {
                    prop1: {
                        prop1_1: 2
                    }
                },
                {
                    prop1: 2
                },
            ];
            const expected = [
                {
                    prop1: {
                        prop2: 5
                    }
                },
                {
                    prop1: 2
                },
            ];
            const res = objectUtils.setValue(obj, property, newValue);
            assert.equal(JSON.stringify(res), JSON.stringify(expected));
            done();
        });

        it("it should set object property in array", done => {
            const property = "prop1.prop1_1[0]";
            const newValue = 5;
            const obj = {
                prop1: {
                    prop1_1: [2, 4]
                }
            };
            const expected = {
                prop1: {
                    prop1_1: [5, 4]
                }
            };
            const res = objectUtils.setValue(obj, property, newValue);
            assert.equal(JSON.stringify(res), JSON.stringify(expected));
            done();
        });

        it("it should create object property if not exist", done => {
            const property = "prop1.prop1_1.prop1_1_1.prop1_1_1_1";
            const newValue = 5;
            const obj = {
                prop2: {
                    prop2_1: 2
                }
            };
            const expected = {
                prop2: {
                    prop2_1: 2
                },
                prop1: {
                    prop1_1: {
                        prop1_1_1: {
                            prop1_1_1_1: 5
                        }
                    }
                },
            };
            const res = objectUtils.setValue(obj, property, newValue);
            assert.equal(JSON.stringify(res), JSON.stringify(expected));
            done();
        });

        it("it should set object property in object array", done => {
            const property = "prop1.prop1_1[0].arrProp1.arrProp1_1";
            const newValue = 5;
            const obj = {
                prop1: {
                    prop1_1: [{
                        arrProp1: {
                            arrProp1_1: 2
                        }
                    }, 4]
                }
            };
            const expected = {
                prop1: {
                    prop1_1: [{
                        arrProp1: {
                            arrProp1_1: 5
                        }
                    }, 4]
                }
            };
            const res = objectUtils.setValue(obj, property, newValue);
            assert.equal(JSON.stringify(res), JSON.stringify(expected));
            done();
        });

    });

});