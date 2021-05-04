const { test, expect } = require('@jest/globals')
const encoder = require('./romanNumeralsEncoder')

test("Outputs 2-digit positive integers as their respective Roman Numerals", () => {
    expect(encoder(1)).toEqual("I")
} )
