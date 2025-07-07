async function weekly(tp) {
  children = ""
  Array.from(Array(5).keys()).map((i) => {
    date = tp.date.weekday("YYYY-MM-DD", i + 1, tp.file.title, "YYYY-[W]W")
    children += `#### ${date}\n`
    children += `![[${date}#^today-tasks]]\n`
  })
  return children
}

module.exports = weekly
