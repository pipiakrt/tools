const { exec } = require('child_process');

console.log("Start Tools!");

function run() {
    cmd = 'artillery quick --count 100 -n 100 https://www.xuonggombattrang.vn';

    try {
        exec(cmd, (err, stdout, stderr) => { run(); });
    } 
    catch (error) {
        console.log("error!");
        run();
    }
}

run();