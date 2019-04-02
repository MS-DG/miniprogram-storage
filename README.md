# @dragongate/miniprogram-storage

[![Build Status](https://travis-ci.com/MS-DG/miniprogram-storage.svg?branch=master)](https://travis-ci.com/MS-DG/miniprogram-storage)
[![npm version](https://badge.fury.io/js/%40dragongate%2Fminiprogram-storage.svg)](https://badge.fury.io/js/%40dragongate%2Fminiprogram-storage)

API

-   `config` logger
-   `getStorage<TResult = unknown, TKey = string>(key: TKey): Promise<TResult>`
-   `setStorage<TData = unknown, TKey = string>(key: TKey, data: TData): Promise<{errMsg: string;}>`

Todo

* [ ] cache in memory
