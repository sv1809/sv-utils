import chai from 'chai';
import objectUtils from '../src/object-utils';

const assert = chai.assert;

describe('Object utils', () => {
    let testObject = {};

    beforeEach((done) => {
        testObject = {
            prop1: {
                prop1_3: {
                    prop1_3_1: '1.3.1'
                }
            }
        }
        done();
    });

    describe('findProperty', () => {
        it('it should return when find property', (done) => {
            const res = objectUtils.findProperty(testObject, 'prop1.prop1_3.prop1_3_1');
            assert.equal(res, '1.3.1');
            done();
        });
    })
})