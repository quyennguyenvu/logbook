async function daily() {
  const children = await app.vault
    .getAbstractFileByPath("Tracking/Daily")
    .children.sort((a, b) => {
      return a.basename < b.basename ? -1 : 1
    })

  const file = children.at(-2)

  let focusLines = []

  if (file) {
    const content = await app.vault.cachedRead(file)
    const match = content.match(/## 🎯 Next Up\n((?:- .*\n?)+)/)
    if (match) {
      focusLines = match[1]
        .trim()
        .split("\n")
        .reduce((acc, line) => {
          if (line.slice(2) !== "") {
            acc.push(line.slice(2))
          }
          return acc
        }, [])
    }
  }

  return focusLines
}

module.exports = daily
