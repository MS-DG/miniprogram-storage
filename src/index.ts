/*!
 * Module: src/index
 * Copyright: (C) Microsoft Corporation. All rights reserved.
 * Created: 2019-03-07 11:53
 * Author: New Future
 * Summary: Storage 操作封装
 */

/**
 * 全局配置项
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
 * 异步读取storage
 * @param key 键
 * @param defaultValue 默认值
 * @template TResult 返回值类型
 * @template Tkey 键值类型
 */
export function getStorage<TResult = unknown, TKey extends string = string>(
    key: TKey,
    defaultValue?: TResult,
): Promise<TResult> {
    const hasDefault = arguments.length > 1;
    return new Promise<TResult>((resolve, reject) => {
        wx.getStorage({
            fail: (res: any) => {
                config.logger && config.logger.warn(`wx.getStorage:${key}`, res);
                if (hasDefault) {
                    resolve(defaultValue);
                } else {
                    reject(res);
                }
            },
            key,
            success: (res: { data: TResult | PromiseLike<TResult> | undefined }) => {
                resolve(res.data);
            },
        });
    });
}

/**
 * 异步写入取storage
 * @param key 键
 * @param data 值
 * @template TResult 返回值类型
 * @template Tkey 键值类型
 */
export function setStorage<TData = unknown, TKey extends string = string>(
    key: TKey,
    data: TData,
): Promise<wx.GeneralCallbackResult> {
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

/**
 * 异步删除storage
 * @param key 键
 * @template Tkey 键值类型
 */
export function removeStorage<Tkey extends string = string>(
    key: Tkey,
): Promise<wx.GeneralCallbackResult> {
    return new Promise<wx.GeneralCallbackResult>((resolve, reject) => {
        wx.removeStorage({
            fail: (res: any) => {
                config.logger && config.logger.error(`wx.setStorage:${key}`, res);
                reject(res);
            },
            key,
            success: resolve,
        });
    });
}
/**
 * 异步清空storage
 */
export function clearStorage(): Promise<wx.GeneralCallbackResult> {
    return new Promise<wx.GeneralCallbackResult>((resolve, reject) => {
        wx.clearStorage({
            fail: (res: any) => {
                config.logger && config.logger.error("wx.clearStorage:", res);
                reject(res);
            },
            success: resolve,
        });
    });
}

declare const console: any;
// tslint:disable-next-line: no-namespace
declare namespace wx {
    function getStorage(op: any): void;
    function setStorage(op: any): void;
    function removeStorage(op: any): void;
    function clearStorage(op: any): void;
    interface GeneralCallbackResult {
        errMsg: string;
    }
}

enum KEYS {
    a = "x",
}

removeStorage<KEYS>(KEYS.a);
