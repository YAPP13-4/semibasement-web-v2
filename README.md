# semibasement-web-v2
[![DeepScan grade](https://deepscan.io/api/teams/3276/projects/4823/branches/38461/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3276&pid=4823&bid=38461)
![Build Status](https://travis-ci.org/YAPP13-4/semibasement-web-v2.svg?branch=develop)

[![Greenkeeper badge](https://badges.greenkeeper.io/YAPP13-4/semibasement-web-v2.svg)](https://greenkeeper.io/)

semibasement 의 새로운 버전

> react, redux, typescript

## Dev Enviroment

- VS Code
- macOS
- npm 6.7.0
- yarn 1.13.0

## Configuration

### VScode 설정 (settings.json)

```json
// ...
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
]
```

## Install

```sh
yarn install
```

## Command Script

### Dev

```sh
yarn dev
```

### Start

```sh
yarn start
```

### Build

```sh
yarn build
```
