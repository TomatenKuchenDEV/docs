const fs = require("fs")
const showdown = require("showdown")
converter = new showdown.Converter()

fs.readdir(__dirname, (err, files) => {
  if (err) return console.log(err)
  console.log("Current directory filenames:", files)

  files.filter(file => file.endsWith(".md")).forEach(file => {
    console.log(file)
    fs.readFile(file, "utf8", (err, data) => {
      if (err) return console.log("Error while reading file content: ", err)
      console.log(data)

      fs.writeFile("dist/" + file.replace(".md", "") + ".html", converter.makeHtml(data), (err) => {
        if (err) return console.log(err)
        console.log("File " + file + "written successfully")
      })
    })
  })
})
