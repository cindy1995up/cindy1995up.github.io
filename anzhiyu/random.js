var posts=["douyindaidadianhua.html","kaoyanxuniziliao.html","shengcai-dongyangyadianshang-shopee-bentu-dian.html","shengcai-xianxiashitidian-huodongcehua.html","xiaohongshu-xianyu.html","xiaohongshusandaremen.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };