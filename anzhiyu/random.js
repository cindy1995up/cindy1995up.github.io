var posts=["posts/【副业】“小红书种草、闲鱼店开花”—单账号月入1w+/","posts/【副业】卖考研虚拟资料，月入过万！/","posts/【副业】小红书3大热门领域爆款创作中不为人知的套路/","posts/【副业】抖音代打电话项目，日入￥500+/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };