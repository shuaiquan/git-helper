import { execSync } from 'child_process';

const TAG_LIST = 'git tag';
const separator = /\s/;

export function list(search?: string) {
    const cmdStr = search ? `${TAG_LIST} -l ${search}` : TAG_LIST;
    const tagStr = execSync(cmdStr, { encoding: 'utf8' }).toString().trim();
    const tagArr = tagStr.split(separator)
    return tagArr;
}
