import { exec } from 'child_process';
import * as path from 'path';
import SELF_ERROR from '../SelfError';

const GIT_CLONE = 'git clone';
const DEFUALT_DEST = './';
const MASTER_BRANCH = 'master';

const PROJECT_NAME_RE = /(?<=\/)[^\/]*(?=\.git)/g;

interface CloneParams {
    name: string;
    dest: string;
    branch: string;
}

async function clone(url: string, params: Partial<CloneParams> = {}) {
    const {
        name,
        dest = DEFUALT_DEST,
        branch = MASTER_BRANCH,
    } = params;

    const urlName = url.match(PROJECT_NAME_RE);
    if (!urlName && !name) {
        return Promise.reject(new Error(SELF_ERROR.PROJECT_NOT_MATCH(url)));
    }

    return new Promise((resolve: (value: string) => void, reject) => {
        const destUrl = path.resolve(process.cwd(), dest);
        exec(`cd ${destUrl}`, (err) => {
            if (err) {
                reject(err);
            }
            resolve(destUrl);
        });
    }).then((destUrl) => {
        const projectName = name || urlName![0];
        return new Promise((resolve, reject) => {
            const cmdStr = `${GIT_CLONE} -b ${branch} ${url} ${projectName}`;
            exec(cmdStr, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(path.resolve(destUrl, `./${projectName}`));
                }
            });
        })
    });
}

export default clone;