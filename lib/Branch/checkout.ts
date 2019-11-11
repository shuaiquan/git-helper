import { execSync } from 'child_process';


const BRANCH_CHECKOUT = 'git checkout';

interface CreateParam {
    checkout: boolean;
}

export function checkout(branch: string) {
    const cmdStr = `${BRANCH_CHECKOUT} ${branch}`;
    execSync(cmdStr, { encoding: 'utf8' });
    return branch;
}