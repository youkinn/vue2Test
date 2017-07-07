// import LoadData from '../../../common/loaddata/LoadData';
export default {
  data() {
    return {
      games: {},
    };
  },
  created() {
    // TODO 也是不清不楚
    // this.games = new LoadData(Vue.ClientUrl.getGameList, {
    //   type: 4,
    //   page:1,
    //   nologin: 1,
    //   limit: 8
    // });
    // this.getGameList();
  },
  methods: {
    getGameList() {
      // TODO 动作不清不楚
      // this.games.getList(this);
    },
  },
};
