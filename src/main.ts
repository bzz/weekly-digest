import { WeeklyDigest } from './weekly-digest'
import * as getLongMonth from "weekly-digest/src/markdown/getLongMonth"

const argc = process.argv.splice(2)

if (argc.length != 1) {
    console.error(`Invalid number of arguments ${argc}`)
    process.exit(1)
}

const repository = argc[0]

const digest = new WeeklyDigest(repository)

let headDateObject = digest.to.toObject()
let tailDateObject = digest.from.toObject()
let title = `Weekly Digest for ${repository} (${tailDateObject.date} ${getLongMonth(tailDateObject.months)}, ${tailDateObject.years} - ${headDateObject.date} ${getLongMonth(headDateObject.months)}, ${headDateObject.years})`
console.log(title)

let promise = digest.getMarkdown();
promise
    .then((result) =>  console.log("Done."))
    .catch((err) => console.log(`Failed, ${err}`))