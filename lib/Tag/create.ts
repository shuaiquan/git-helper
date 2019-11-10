import { execSync } from 'child_process';

const TAG_CREATE = 'git tag';

/**
 * 当前只支持打上轻量级标签
 * @param tag 标签名
 */
export function create(tag: string) {
    const cmdStr = `${TAG_CREATE} ${tag}`;
    execSync(cmdStr, { encoding: 'utf8' });
    return tag;
}
