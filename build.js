const fs = require("fs")
const showdown = require("showdown")
converter = new showdown.Converter()

let data = converter.makeHtml("# This is a file containing a __collection__ of books.")

fs.writeFile("dist/index.html", data, (err) => {
  if (err) console.log(err)
  else {
    console.log("File written successfully")
  }
})
