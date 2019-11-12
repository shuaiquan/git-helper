import { exec, execSync } from 'child_process';
import { current } from './list';

const BRANCH_DELETE = 'git branch';
const BRANCH_DELETE_REMOTE = 'git push origin :';

interface DeleteParam {
    force: boolean;
}

export function deleteBranch(branch: string, param: DeleteParam = { force: false }) {
    const currentBranch = current();
    if (currentBranch === branch) {
        throw new Error('please don\'t delete current branch');
    }
    const forceOption = param.force ? '-D' : '-d';
    const cmdStr = `${BRANCH_DELETE} ${forceOption} ${branch}`;
    execSync(cmdStr, { encoding: 'utf8' });
    return branch;
}

export function deleteRemoteBranch(branch: string) {
    const cmdStr = `${BRANCH_DELETE_REMOTE}${branch}`;
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
