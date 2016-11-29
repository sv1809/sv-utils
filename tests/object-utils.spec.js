import chai from 'chai';
import { objectUtils } from '../src/index';

const assert = chai.assert;

describe('Object utils', () => {
    let testObject = {};

    beforeEach((done) => {
        testObject = {
            prop1: {
                prop1_1: null,
                prop1_3: {
                    prop1_3_1: '1.3.1'
                }
            }
        }
        done();
    });

    describe('findProperty', () => {

        it('it should return value when find property', (done) => {
            const res = objectUtils.findProperty(testObject, 'prop1.prop1_3.prop1_3_1');
            assert.equal(res, '1.3.1');
            done();
        });

        it('it should return bull when find property with null value', (done) => {
            const res = objectUtils.findProperty(testObject, 'prop1.prop1_1');
            assert.equal(res, null);
            done();
        });

        it('it should return undefined when can\'t find property', (done) => {
            const res = objectUtils.findProperty(testObject, 'prop1.prop');
            assert.equal(res, undefined);
            done();
        });

        it('it should return undefined when object is null', (done) => {
            const res = objectUtils.findProperty(null, 'prop1.prop');
            assert.equal(res, undefined);
            done();
        });

        it('it should return undefined when object is undefined', (done) => {
            const res = objectUtils.findProperty(undefined, 'prop1.prop');
            assert.equal(res, undefined);
            done();
        });

        it('it should return undefined when property is null', (done) => {
            const res = objectUtils.findProperty(testObject, null);
            assert.equal(res, undefined);
            done();
        });

        it('it should return undefined when property is undefined', (done) => {
            const res = objectUtils.findProperty(testObject, undefined);
            assert.equal(res, undefined);
            done();
        });

    })

})