import { execSync } from 'child_process';

const BRANCH_LIST = 'git branch';
const separator = /\s/;

export function list() {
    const tagStr = execSync(BRANCH_LIST, { encoding: 'utf8' }).toString().trim();
    const tagArr = tagStr.split(separator)
    return tagArr;
}
