import rimraf = require('rimraf');

async function  rmGit(url: string) {
    return new Promise((resolve, reject) => {
        rimraf(`${url}/.git`, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export default rmGit;