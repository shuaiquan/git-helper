# git-helper

## 使用
```
const { clone, rmGit, tag, branch } = require('@s7n/git-helper');
```

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

---

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

---

### `tag`
对标签的操作集合

### `tag.list`
列出标签
#### Example
```
tag.list();
// ['v1.0.1', 'v1.0.2', 'v2.0.1']

tag.list('v2.0.*')
// ['v2.0.1']
```

#### Param
```
list(tagSearch);

- tagSearch [string]: 模糊搜索。默认：不填，列出所有标签
```

#### Return
```
Array<string> : 标签数组
```


### `tag.create`
创建标签
#### Example
```
tag.create('v2.1.0')
// v2.1.0
```

#### Param
```
create(tag);

- tag (string): 标签名
```
注意：当前仅会创建一个轻量级标签（lightweight）

#### Return
```
tag (string): 创建的标签名
```

### `tag.delete`
删除本地标签
#### Example
```
tag.delete('v2.1.0')
// v2.1.0
```

#### Param
```
delete(tag);

- tag (string): 标签名
```

#### Return
```
tag (string): 删除的标签名
```

### `tag.deleteRemote`
删除远程标签
#### Example
```
tag.deleteRemote('v2.1.0')
// v2.1.0
```

#### Param
```
deleteRemote(tag);

- tag (string): 标签名
```

#### Return
```
tag (string): 删除的标签名
```

### `tag.push`
将某个标签推送到远程
#### Example
```
tag.push('v2.1.0')
// v2.1.0
```

#### Param
```
push(tag);

- tag (string): 标签名
```

#### Return
```
tag (string): 推送到远程的标签名
```

### `tag.pushAll`
将本地标签全部推送到远程
#### Example
```
tag.pushAll()
```

#### Param
无 (void)

#### Return
无 (void)

---

### `branch`
对分支的操作集合

### `branch.current`
列出标签
#### Example
```
branch.current();
// master
```

#### Param
void

#### Return
```
branch (string): 当前分支名
```


### `branch.create`
创建分支
#### Example
```
tag.create('new-branch1')
// new-branch1

tag.create('new-branch2', { checkout: true });
// new-branch2
```

#### Param
```
create(branch, [param]);

- branch (string): 分支名
- param :
    - checkout (boolean): 是否同时切换分支。默认： false
```


#### Return
```
branch (string): 分支名
```

### `branch.delete`
删除本地分支
#### Example
```
branch.delete('new-branch1')
// new-branch1
// equal to git branch -d new-branch1

branch.delete('new-branch2', { force: true});
// new-branch2
// equal to git branch -D new-branch2
```

#### Param
```
delete(branch, [param]);

- branch (string): 分支名
- param
    - force (boolean): 是否强制删除分支。默认: false
```

#### Return
```
branch (string): 删除的分支名
```

### `branch.deleteRemote`
删除远程分支
#### Example
```
branch.deleteRemote('new-branch1')
// new-branch1
```

#### Param
```
deleteRemote(branch);

- branch (string): 分支名
```

#### Return
```
branch (string): 删除的分支名
```

### `branch.push`
将当前分支推送到远程
#### Example
```
branch.push('new-branch1')
// new-branch1
```

#### Param
```
push(branch);

- branch (string): 推送到远程的分支名
```

#### Return
```
branch (string): 推送到远程的分支名
```
