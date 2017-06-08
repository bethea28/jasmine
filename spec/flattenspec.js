// const expect = require('chai').expect
const flatten = require('../button')
// const request = require('supertest');
// const request = require('jasmine');
// import jasmine from 'jasmine'
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

// jasmine.onComplete(function(passed) {
//     if(passed) {
//         console.log('All specs have passed');
//     }
//     else {
//         console.log('At least one spec has failed');
//     }
// });



describe('flatten array will return a flat array with all null values removed', () => {
  it('flatten() can handle deeply nested arrays', () => {
    let result1 = flatten([0, 'string', [[2, 3], 'cake', 100, null, [[null]]], -2])
    let result2 = flatten([[[[[[[0, 2]]]]]], [[2, 3], 8, [[[[[[[[[[[[[[100, null]]]]]]]]]]]]]], [[[[[null]]]]]], -2, 44])

    expect(result1).toEqual([0, 'string', 2, 3, 'cake', 100, -2])
    expect(result2).toEqual([0, 2, 2, 3, 8, 100, -2, 44])

    // result1.onComplete(function(passed) {
    //     if(passed) {
    //         console.log('All specs have passed');
    //     }
    //     else {
    //         console.log('At least one spec has failed');
    //     }
    // });


  })
  //
  // it('flatten() can handle objects along with mixed datatypes ', () => {
  //   let result3 = flatten([{one: 'one'}, {two: 'two'}, [[[null]]]])
  //   let result4 = flatten([{one: 'one'}, 55, [[[['three']]]]])
  //
  //   expect(result3).toEqual(['one', 'two'])
  //   expect(result4).toEqual(['one', 55, 'three'])
  //
  // })
  //
  // it('flatten() can handle empty objects ', () => {
  //   let result5 = flatten([{}, {}])
  //   let result6 = flatten([[[]]])
  //
  //   expect(result5).toEqual([])
  //   expect(result6).toEqual([])
  //
  // })


})
