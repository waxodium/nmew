#!/usr/bin/env node
const fs = require("node:fs")
const os = require("node:os")
const reset = "\x1b[0m"
const red = "\x1b[31m"
const bold = "\x1b[1m"


const untildify = str => { 
    if (typeof str !== 'string') {  
        console.error(`[${red}${bold}nmew${reset}] Invalid Arguement! Try 'nmew --info'`)
        process.exit(1)
    } else if (typeof str === 'string') {
        return str.replace(/^~($|\/|\\)/, `${os.homedir()}$1`) 
    };
};

const info = `Usage 'nmew [FILE]'

Concatenate files to standard output as UTF-8. 
[FILE] argument accepts both absolute and relative 
file paths, and supports file path formats for 
both Unix-like (example: home/Alice/File.txt) 
and Windows operating (e.g., C:\\Users\\Bobby\\File.txt) systems.

# OPTIONS
    ,--info         Display this info looking thing
    ,--cat          Prints out an adorable little ASCII cat (^o~o^)


Why the heck is it named nmew?
> nmew ~ (n) Node.js (mew) A shorthand word of Meow.
Inspired by command: cat
cat goes Meow. So that gives off a similar relation
between nmew and cat :)
`
const cuteCat = [
    '',
    ' /\\_/\\',
    '( o.o )',
    ' > ^ <',
    '/     \\',
    '(#   #)',
    ' 2___2',
    '',
    ' Meowy!',
    '',
    ' His name is Owen',
    ''
].map(function (l) {
  return l;
});

async function paw(path) {
    const data = path;
    const parsed = untildify(data)

    try {
        if (parsed === "--info") {
            console.log(info)
        } else if (parsed === "--cat") {
            console.log(cuteCat.join('\n'));
        } else {
            const fileData = fs.readFileSync(parsed, 'utf8');
            console.log(fileData);
        }

    } catch (err) {
        if (err.code === "ENOENT") { console.error(`[${red}${bold}nmew${reset}] Path not found!`)}
    }

} 

const ManHowDoINameThis = process.argv[2]
paw(ManHowDoINameThis)
