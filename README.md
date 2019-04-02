# @dragongate/miniprogram-storage

[![Build Status](https://travis-ci.com/MS-DG/miniprogram-storage.svg?branch=master)](https://travis-ci.com/MS-DG/miniprogram-storage)
[![npm version](https://badge.fury.io/js/%40dragongate%2Fminiprogram-storage.svg)](https://badge.fury.io/js/%40dragongate%2Fminiprogram-storage)

API

-   `config` 全局配置
    -   logger 日志配置
-   `getStorage<TResult = unknown, TKey = string>(key: TKey, defaultValue?: TResult): Promise<TResult>` 异步读取
-   `setStorage<TData = unknown, TKey = string>(key: TKey, data: TData): Promise<{errMsg: string;}>` 异步写入
-   `removeStorage<Tkey = string>(key: Tkey):Promise<{errMsg: string;}>` 异步删除
-   `clearStorage():Promise<{errMsg: string;}>` 异步清空

*   [ ] cache in memory
