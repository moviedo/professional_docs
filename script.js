const Prince = require("prince")
const util 	 = require("util")
const fs 		 = require('fs');
const path 	 = require('path');


const resumeDir = './resumes';
const distDir = './dist';

function buildPdf() {
	fs.readdir('./resumes', (err, files) => {
		if (!err) {
			files.forEach(fileName => {
				Prince()
					.inputs(path.join(resumeDir, fileName))
					.output(path.join(distDir, `${fileName.split('.')[0]}.pdf`))
					.execute()
					.then(function () {
					}, function (error) {
						console.log("ERROR: ", util.inspect(error));
					});
			});
		}
	});
}

fs.mkdir(distDir, err => {
	if (!err || err.errno === -17) {
		buildPdf();
	} else
		console.log(err);
});
