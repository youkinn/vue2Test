/* 测试*/
const test = {
  getSwiperList: '/mock/getSwiperList',
  getUserInfo: '/mock/getDemoData',
  getNewsList: '/mock/getNewsList',
  getNewsDetail: '/mock/getNewsDetail',
  getGameList: '/mock/getGameList',
};

/* 临时环境*/
const temp = {
  getSwiperList: '/api/getSwiperList',
  getNewsList: '/api/getNewsList',
  getNewsDetail: '/api/getNewsDetail',
  getGameList: '/api/getGameList',
};

/* 生产环境*/
const production = {
  doLogin: '/User/Login/login', // 登陆
  getSwiperList: '/Game/Index/get_banner_ad', // 轮播列表
  getGameList: '/Game/Index/get_game_list', // 游戏列表
  getNewsList: '/News/Index/get_news_list', // 资讯列表
  getNewsDetail: '/News/Index/get_news_info', // 资讯详情
  getNewsRelated: '/News/Index/get_unite_news', // 相关资讯
  getNewsCommentList: '/News/NewsComment/get_comment_list', // 资讯评论列表
};
export const apiType = 1; // 当前环境
export const apiTypeArr = [test, production, null, null, temp]; // 数字对应的url
export const TEST_URL = `http://${location.hostname}:8002`; // 测试环境域名与端口（基本上是ip地址）
export const PRODUCTION_URL = 'http://interface.lly800.com'; // 生产环境实际端口
export const Handle = false; // 测试环境的url  手机上访问不到loclhost路径 模拟数据 可能要实时更改

/**
 * 获取当前URL（域名与端口）
 *
 * @returns
 */
function getRunningURL() {
  let url = '';
  switch (apiType) {
    case 0:
      url = TEST_URL;
      break;
    case 1:
      url = PRODUCTION_URL;
      break;
    case 4:
      url = TEST_URL;
      break;
    default:
      url = PRODUCTION_URL;
      break;
  }
  if (Handle) {
    url = Handle;
  }
  return url;
}

export const RUNNING_URL = getRunningURL(); // 真正运行的URL
