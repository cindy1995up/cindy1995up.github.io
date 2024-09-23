var posts=["posts/（干货）副业卖考研虚拟资料，月入过万！/","posts/(干货)抖音代打电话项目，日入￥500+/","posts/（干货）某红书3大热门领域爆款创作中不为人知的套路/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };