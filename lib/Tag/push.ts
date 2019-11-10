import { exec } from 'child_process';

const PUSH_TAG = 'git push origin';
const PUSH_ALL_TAL = 'git push origin --tags';

export function push(tag: string) {
    const cmdStr = `${PUSH_TAG} ${tag}`;
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

export function pushAll() {
    return new Promise((resolve: (param: void) => void, reject: (err: Error) => void) => {
        exec(PUSH_ALL_TAL, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

