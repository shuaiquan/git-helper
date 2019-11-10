import { exec, execSync } from 'child_process';

const TAG_DELETE = 'git tag -d';
const TAG_DELETE_REMOTE = 'git push origin :refs/tags/';

export function deleteTag(tag: string) {
    const cmdStr = `${TAG_DELETE} ${tag}`;
    execSync(cmdStr, { encoding: 'utf8' });
    return tag;
}

export function deleteRomoteTag(tag: string) {
    const cmdStr = `${TAG_DELETE_REMOTE}${tag}`;
    return new Promise((resolve: (value: string) => void, reject: (err: Error) => void) => {
        exec(cmdStr, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(tag);
            }
        });
    });
}
