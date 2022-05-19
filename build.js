const fs = require("fs")
const showdown = require("showdown")
converter = new showdown.Converter({ghCompatibleHeaderId: true, parseImgDimensions: true, strikethrough: true, tables: true, tablesHeaderId: true, tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true, underline: true, metadata: true})

fs.readFile("./template.html", "utf8", (err, template) => {
  if (err) throw err

  fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    console.log("Current directory filenames:", files)

    files.filter(file => file.endsWith(".md")).forEach(file => {
      console.log(file)
      fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err

        fs.writeFile("dist/" + file.replace(".md", "") + ".html", template.replace("{CONTENT}", converter.makeHtml(data)), err => {
          if (err) throw err
          console.log("File " + file + " written successfully")
        })
        console.log(converter.getMetadata())
      })
    })
  })
})
