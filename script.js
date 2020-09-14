const fs = require('fs');

const nunjucks = require('nunjucks');
const convertHTMLToPDF = require('pdf-puppeteer');


const resumeDir = './resumes';
const distDir = './dist';

function buildPdf() {
	const html = nunjucks.render(`${resumeDir}/frontend.html`, require('./data/frontend.json'));
	convertHTMLToPDF(html, pdf => fs.writeFileSync(`${distDir}/frontend.pdf`, pdf), {margin: {
		top: '20mm',
		right: '20mm',
		bottom: '20mm',
		left: '20mm',
	}});

// fs.readFile(`${resumeDir}/frontend.html`, 'utf8', (err,template) => {
//   if (!err) {
// 		const html = nunjucks.render(template);
// 		convertHTMLToPDF(html, pdf => fs.writeFileSync(`${distDir}/frontend.pdf`, pdf), {margin: {
// 			top: '20mm',
// 			right: '20mm',
// 			bottom: '20mm',
// 			left: '20mm',
// 		}});
//   }
//   console.log(err);
// });

}

fs.mkdir(distDir, err => {
	if (!err || err.errno === -17) {
		buildPdf();
	} else
		console.log(err);
});
