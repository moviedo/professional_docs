
const { mkdir, readdir, writeFile } = require('fs/promises')
const nunjucks = require('nunjucks')
const convertHTMLToPDF = require('pdf-puppeteer')

const dataDir = './data'
const distDir = './dist'
const PuppeteerOptions = Object.freeze({
  margin: {
    top: '20mm',
    right: '20mm',
    bottom: '20mm',
    left: '20mm'
  }
})

async function buildPdf () {
  try {
    const files = await readdir(dataDir)
    files.forEach(fileName => {
      const name = fileName.split('.')[0]
      const html = nunjucks.render('resume.html', require(`./data/${fileName}`))

      convertHTMLToPDF(
        html,
        async (pdf) => {
          await writeFile(`${distDir}/${name}.pdf`, pdf)
        },
        PuppeteerOptions
      )
    })
  } catch (e) {
    console.log(`Error in buildPdf: ${e}`)
  }
}

async function main () {
  try {
    await mkdir(distDir, { recursive: true })
    buildPdf()
  } catch (e) {
    console.log(`Error in main: ${e}`)
  }
}

main()
