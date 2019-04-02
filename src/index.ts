/*!
 * Module: src/index
 * Copyright: (C) Microsoft Corporation. All rights reserved.
 * Created: 2019-03-07 11:53
 * Author: New Future
 * Summary: Storage 操作封装
 */

/**
 * 配置项
 */
export const config = {
    /**
     * 日志对象
     */
    logger: console as {
        // tslint:disable-next-line: ban-types
        warn: Function;
        // tslint:disable-next-line: ban-types
        error: Function;
    },
};

/**
 * 读取storage
 * @param key 键
 * @template TResult 返回值类型
 * @template key 键值类型
 */
export function getStorage<TResult = unknown, TKey = string>(key: TKey): Promise<TResult> {
    return new Promise<TResult>((resolve, reject) => {
        wx.getStorage({
            fail: (res: any) => {
                config.logger && config.logger.warn(`wx.getStorage:${key}`, res);
                reject(res);
            },
            key,
            success: (res: { data: TResult | PromiseLike<TResult> | undefined }) => {
                resolve(res.data);
            },
        });
    });
}

/**
 * 写入取storage
 * @param key 键
 * @param data 值
 * @template TResult 返回值类型
 * @template key 键值类型
 */
export function setStorage<TData = unknown, TKey = string>(key: TKey, data: TData): Promise<wx.GeneralCallbackResult> {
    return new Promise<wx.GeneralCallbackResult>((resolve, reject) => {
        wx.setStorage({
            data,
            fail: (res: any) => {
                config.logger && config.logger.error(`wx.setStorage:${key}`, res);
                reject(res);
            },
            key,
            success: resolve,
        });
    });
}

declare const console: any;
// tslint:disable-next-line: no-namespace
declare namespace wx {
    export function getStorage(op: any): void;
    export function setStorage(op: any): void;
    export interface GeneralCallbackResult {
        errMsg: string;
    }
}
