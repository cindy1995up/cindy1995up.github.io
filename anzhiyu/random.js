var posts=["posts/hello-world1/","posts/hello-world2/","posts/（干货）副业卖考研虚拟资料，月入过万！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };