import { execSync } from 'child_process';

// const BRANCH_LIST = 'git branch';
// const BRANCH_REG = /(?<=\s)\S+/g;

// export function list() {
//     const branchStr = execSync(BRANCH_LIST, { encoding: 'utf8' }).toString().trim();
//     const branchArr = branchStr.match(BRANCH_REG);
//     return branchArr;
// }

const BRANCH_CURRENT = 'git symbolic-ref --short -q HEAD'

export function current() {
    return execSync(BRANCH_CURRENT, { encoding: 'utf8' }).toString().trim();
}