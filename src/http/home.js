import axios from './http';
import { apiType, apiTypeArr } from '../config';

/**
 * 获取banner的轮播图
 *
 * @export
 * @param {number} page 页码
 * @param {any} limit 每页返回数据条数
 * @param {any} type 类型
 * @param {any} nologin 是否需要登陆
 * @returns
 */
export function getSwiperList(page, limit, type, nologin) {
  return axios.get(apiTypeArr[apiType].getSwiperList, {
    params: {
      page,
      limit,
      type,
      nologin,
    },
  });
}

export function getGameList() {}
