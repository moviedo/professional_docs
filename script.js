const fs = require('fs');

const nunjucks = require('nunjucks');
const convertHTMLToPDF = require('pdf-puppeteer');


const dataDir = './data';
const distDir = './dist';
const options = {
	margin: {
		top: '20mm',
		right: '20mm',
		bottom: '20mm',
		left: '20mm',
	}
};

function buildPdf() {
	fs.readdir(dataDir, (err, files) => {
		if (!err) {
			files.forEach(fileName => {
				const name = fileName.split('.')[0];
				const html = nunjucks.render('resume.html', require(`./data/${fileName}`));

				convertHTMLToPDF(html, pdf => fs.writeFileSync(`${distDir}/${name}.pdf`, pdf), options);
			});
		} else
			console.log('ERROR: ', err);
	});
}

fs.mkdir(distDir, err => {
	if (!err || err.errno === -17) {
		buildPdf();
	} else
		console.log(err);
});
