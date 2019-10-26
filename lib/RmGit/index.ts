import rimraf = require('rimraf');

async function rmGit(destUrl: string) {
    return new Promise((resolve: (valur: string) => void, reject: (err: Error) => void) => {
        rimraf(`${destUrl}/.git`, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(destUrl);
            }
        });
    });
}

export default rmGit;