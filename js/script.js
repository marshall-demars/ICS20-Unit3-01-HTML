// Created by: Marshall
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const baseA = parseFloat(document.getElementById('a-base-of-trapezoid').value)
  const baseB = parseFloat(document.getElementById('b-base-of-trapezoid').value)
  const height = parseFloat(document.getElementById('height-of-trapezoid').value)

  // process
  const area = [(baseA + baseB) / 2] * height

   // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}