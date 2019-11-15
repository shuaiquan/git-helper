import { deleteDir } from './helper';

async function rmGit(destUrl: string) {
    return new Promise((resolve: (valur: string) => void, reject: (err: Error) => void) => {
        try {
            deleteDir(`${destUrl}/.git`);
            resolve(destUrl);
        } catch (err) {
            reject(err);
        }
    });
}

export default rmGit;