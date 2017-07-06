import '../static/css/common.css';
import '../static/icons/style.css';

import flexbox from './util/flexbox';

// 定义页面rem的font-size
flexbox();
window.onresize = flexbox;

export default {
  name: 'app',
};
