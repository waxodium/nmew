# Usage
    nmew [FILE]
It's that simple. `nmew` concatenate files to standard output as **UTF-8**. The __[FILE]__ argument accepts both absolute and relative file paths, and supports file path formats for both Unix-like (example: `/home/Alice/File.txt`) and Windows operating (e.g., `C:\Users\Bobby\File.txt`) systems.

# Installation
    npm install -g nmew

# About
Why nmew should be recognized among Node.js beginners?

Because it demonstrates core CLI and Node.js concepts by presenting them in a clear, block-by-block format that makes each part easy to read and understand. Featuring: 
* Shebang for Node.js scripts
* Node.js core modules `node:fs, node:os`
* Basic terminal styling with Node.js
* Arguement handling
* String replacement with Regex
* Modular error handling
* Conditional CLI behavior
* Async Function Usage
* Command-Line Arguments `process.argv[2]`

# Features
Display the description and the lore of nmew.
    
    nmew --info

Prints out an adorable little ASCII cat

    nmew --cat

# Credits
As this is an experimental project, I would like to respectfully acknowledge that the modular part of the code, `const untildify`, is adapted from the [30secondsofcode.org](https://www.30secondsofcode.org/js/s/convert-to-absolute-path/) article and modified for use in the current binary.

Link to credited NPM registry
[30-seconds-of-code#untildify](https://www.npmjs.com/package/30-seconds-of-code#untildify)
