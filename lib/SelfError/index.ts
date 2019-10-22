const SELF_ERROR = {
    DEST_EXIST: (dest?: string) => `destination path '${dest}' already exists and is not an empty directory`,
    REPO_NOTFOUND: (url: string) => `repository '${url}' not found`,
    PROJECT_NOT_MATCH: (url: string) => `unable to match project name from ${url}. please ensure it is a git repository from github`
}

export default SELF_ERROR;
