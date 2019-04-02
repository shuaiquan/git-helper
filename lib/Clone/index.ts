import { exec } from 'child_process';

const GIT_CLONE = 'git clone';

interface CloneParams {
    name: string;
    url: string;
    branch?: string;
}
 
async function clone(params: CloneParams) {
    const {
        name,
        url,
        branch = 'master',
    } = params;

    return new Promise((resolve, reject) => {
        const cmdStr = `${GIT_CLONE} -b ${branch} ${url} ${name}`;
        exec(cmdStr, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    });
}

export default clone;