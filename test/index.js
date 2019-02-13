/**
 *** npm i -g promises-aplus-tests
 **/
const { exec } = require("child_process");
exec("promises-aplus-tests ./src/index.js", (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});
