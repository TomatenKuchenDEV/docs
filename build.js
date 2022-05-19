const fs = require("fs")
const marky = require("@npmcorp/marky-markdown")

let data = marky("# This is a file containing a __collection__ of books.")

fs.writeFile("dist/index.html", data, (err) => {
  if (err) console.log(err)
  else {
    console.log("File written successfully")
  }
})
