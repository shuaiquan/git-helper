# git-helper

## API

### `clone`
拉取远程仓库
```
- url: git 地址
- name: 重命名
- dest: 保存本地路径（默认：当前文件夹）
- branch: 拉取的分支（默认：master）
```

### `rmGit`
删除指定文件夹下的 `.git` 目录
```
- destUrl: 文件目录
```