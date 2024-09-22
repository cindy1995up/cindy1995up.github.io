var posts=["/hello-world/","/hello-world1/","/hello-world2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };