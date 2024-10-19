var posts=["douyindaidadianhua.html","shengcai-dongyangyadianshang-shopee-bentu-dian.html","kaoyanxuniziliao.html","shengcai-xianxiashitidian-huodongcehua.html","xiaohongshu-xianyu.html","xiaohongshusandaremen.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };