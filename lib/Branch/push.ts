import { exec } from 'child_process';

const PUSH_BRANCH = 'git push origin';

export function push(branch: string, remoteBranch?: string) {
    const cmdStr = `${PUSH_BRANCH} ${branch}:${remoteBranch || branch}`;
    return new Promise((resolve: (value: string) => void, reject: (err: Error) => void) => {
        exec(cmdStr, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(branch);
            }
        });
    });
}
