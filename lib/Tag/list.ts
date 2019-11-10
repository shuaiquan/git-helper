import { execSync } from 'child_process';

const TAG_LIST = 'git tag';

export function list(search?: string) {
    const cmdStr = search ? `${TAG_LIST} -l ${search}` : TAG_LIST;
    const tag = execSync(cmdStr, { encoding: 'utf8' }).toString().trim();
    return tag;
}
