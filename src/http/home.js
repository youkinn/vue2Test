import ajax from './http';
import { apiType, apiTypeArr } from '../config';

/**
 * 获取banner的轮播图
 *
 * @export
 * @param {number} page 页码
 * @param {number} limit 每页返回数据条数
 * @param {number} type 类型
 * @param {number} nologin 是否需要登陆
 * @returns
 */
export function getSwiperList(page, limit = 8, type = 4, nologin = 1) {
  return ajax({
    url: apiTypeArr[apiType].getSwiperList,
    method: 'get',
    params: {
      page,
      limit,
      type,
      nologin,
    },
  });
}

export function getGameList() {}
