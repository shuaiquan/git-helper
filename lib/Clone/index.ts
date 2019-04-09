import { exec } from 'child_process';
import * as path from 'path';

const GIT_CLONE = 'git clone';
const DEFUALT_DEST = './';
const MASTER_BRANCH = 'master';


interface CloneParams {
    url: string;
    name: string;
    dest?: string;
    branch?: string;
}
 
async function clone(params: CloneParams) {
    const {
        url,
        dest = DEFUALT_DEST,
        name,
        branch = MASTER_BRANCH,
    } = params;

    return new Promise((resolve: (value: string) => void, reject) => {
        const destUrl = path.resolve(process.cwd(), dest);
        exec(`cd ${destUrl}`, (err) => {
            if (err) {
                reject(err);
            }
            resolve(destUrl);
        });
    }).then((destUrl) => {
        return new Promise((resolve, reject) => {
            const cmdStr = `${GIT_CLONE} -b ${branch} ${url} ${name}`;
            exec(cmdStr, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(path.resolve(destUrl, `./${name}`));
                }
            });
        })
    });
}

export default clone;