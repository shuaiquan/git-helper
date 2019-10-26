# git-helper

## API

### `clone`
拉取远程仓库

#### Example
```
clone(https://github.com/facebook/react.git)

clone(https://github.com/facebook/react.git, { name: 'my-react-project' });
```

#### Param
```
clone(url, [param]);

- url: git 地址
- param
    - [name]: 对 clone 到本地项目的重命名（默认：git repo 名称）
    - [dest]: 保存本地路径（默认：当前文件夹）
    - [branch]: 拉取的分支（默认：master）
```
#### Return
```
destUrl (string): clone 下来项目的绝对路径
```

### `rmGit`
删除指定文件夹下的 `.git` 目录

#### Example
```
rmGit('/User/name/react-project');
```

#### Param
```
rmGit(destUrl);

- destUrl: 文件目录
```

#### Return
```
destUrl (string): 文件目录
```
