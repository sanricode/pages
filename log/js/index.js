var page00 = '<div class="page00 contents"><img src="/gallery_artworks/00.jpg" alt=""></div>';
var page01 = '<div class="page01 contents"><img src="/gallery_artworks/01.jpg" alt=""></div>';
var page02 = '<div class="page02 contents"><img src="/gallery_artworks/00.jpg" alt=""></div>';
var page03 = '<div class="page03 contents"><img src="/gallery_artworks/01.jpg" alt=""></div>';
var page04 = '<div class="page04 contents"><img src="/gallery_artworks/00.jpg" alt=""></div>';
var page05 = '<div class="page05 contents"><img src="/gallery_artworks/01.jpg" alt=""></div>';
var page06 = '<div class="page06 contents"><img src="/gallery_artworks/00.jpg" alt=""></div>';
var page07 = '<div class="page07 contents"><img src="/gallery_artworks/01.jpg" alt=""></div>';
var page08 = '<div class="page08 contents"><img src="/gallery_artworks/00.jpg" alt=""></div>';
var page09 = '<div class="page09 contents"><img src="/gallery_artworks/01.jpg" alt=""></div>';
var page10 = '<div class="page10 contents"><img src="/gallery_artworks/00.jpg" alt=""></div>';

var router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/page00/',
      component: {
        template: page00}
    },
    {
      path: '/page01/',
      component: {
        template: page01
      }
    },
    {
      path: '/page02/',
      component: {
        template: page02
      }
    },
    {
      path: '/page03/',
      component: {
        template: page03
      }
    },
    {
      path: '/page04/',
      component: {
        template: page04
      }
    },
    {
      path: '/page05/',
      component: {
        template: page05
      }
    },
    {
      path: '/page06/',
      component: {
        template: page06
      }
    },
    {
      path: '/page07/',
      component: {
        template: page07
      }
    },
    {
      path: '/page08/',
      component: {
        template: page08
      }
    },
    {
      path: '/page09/',
      component: {
        template: page09
      }
    },
    {
      path: '/page10/',
      component: {
        template: page10
      }
    }
  ]
});

var app = new Vue({
  el: '#app',
  router: router,
  data: {
    isActive: false
  },
  methods: {
    toggleSwitch () {
      this.isActive = !this.isActive
    }
  }
}).$mount('#app');
