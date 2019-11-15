import * as fs from 'fs';
import * as path from 'path';

export function deleteDir(dir: string) {
    const files = fs.readdirSync(dir, { encoding: 'utf8' });
    files.forEach(fileName => {
        const filePath = path.resolve(dir, fileName);
        if (fs.statSync(filePath).isDirectory()) {
            deleteDir(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    });
    fs.rmdirSync(dir);
}