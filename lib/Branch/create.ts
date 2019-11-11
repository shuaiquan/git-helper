import { execSync } from 'child_process';
import { checkout } from './checkout';


const BRANCH_CREATE = 'git branch';

interface CreateParam {
    checkout: boolean;
}

export function create(branch: string, param: CreateParam = { checkout: false }) {
    const cmdStr = `${BRANCH_CREATE} ${branch}`;
    execSync(cmdStr, { encoding: 'utf8' });
    if (param.checkout) {
        return checkout(branch);
    }
    return branch;
}