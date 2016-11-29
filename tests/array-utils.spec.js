import chai from 'chai';
import { arrayUtils } from '../src/index';

const assert = chai.assert;

describe('Array utils', () => {
    let testArray = [];

    beforeEach((done) => {
        testArray = [];
        for(let i = 0; i < 10; i++) {
            testArray.push({
                id: i,
                value: 'value' + i
            })
        }
        done();
    });

    describe('getIndexByProperty', () => {

        it('it should return 2 for id 2', (done) => {
            const res = arrayUtils.getIndexByProperty(testArray, 2, 'id');
            assert.equal(res, 2);
            done();
        });

        it('it should return 2 for 2', (done) => {
            testArray = [];
            for(let i = 0; i < 10; i++) {
                testArray.push(i)
            }
            const res = arrayUtils.getIndexByProperty(testArray, 2);
            assert.equal(res, 2);
            done();
        });

        it('it should return undefined if first argument not araay', (done) => {
            const res = arrayUtils.getIndexByProperty(3, 2, 'id');
            assert.equal(res, undefined);
            done();
        });

        it('it should return -1 if element not in array', (done) => {
            const res = arrayUtils.getIndexByProperty(testArray, null, 'id');
            assert.equal(res, -1);
            done();
        });

    })

    describe('getElementByProperty', () => {

        it('it should return { id: 2, value: \'value2\' } for id 2', (done) => {
            var res = arrayUtils.getElementByProperty(testArray, 2, 'id');
            assert.equal(res.id, 2);
            assert.equal(res.value, 'value2');
            done();
        });

        it('it should return 2 for 2', (done) => {
            testArray = [];
            for(let i = 0; i < 10; i++) {
                testArray.push(i)
            }
            const res = arrayUtils.getElementByProperty(testArray, 2);
            assert.equal(res, 2);
            done();
        });

        it('it should return undefined if first argument not araay', (done) => {
            const res = arrayUtils.getElementByProperty(3, 2, 'id');
            assert.equal(res, undefined);
            done();
        });

        it('it should return undefined if element not in array', (done) => {
            const res = arrayUtils.getElementByProperty(testArray, null, 'id');
            assert.equal(res, undefined);
            done();
        });

    })

})