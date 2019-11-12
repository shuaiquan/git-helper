import { exec } from 'child_process';

const PUSH_BRANCH = 'git push origin';

/**
 * 将本地分支推送到远程分支 branch
 * @param branch 远程分支
 */
export function push(branch: string) {
    const cmdStr = `${PUSH_BRANCH} ${branch}`;
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
