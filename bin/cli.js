import { roll } from "/lib/roll.js"

//minimist import and parsing 
const minimist = require("minimist")
const args = minimist(process.argv.slice(2))

//variables
const sides = args.sides;
const dice = args.dice
const rolls = args.rolls

const output = JSON.stringify(roll(sides, dice, rolls))