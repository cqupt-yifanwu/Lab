require.config({
　　paths: {
　　  jquery:'YJ/jquery',
　　  yTime: 'YJ/yTime',
　　}
});
requirejs(['jquery','yTime'],function   ($,yTime) {
	//导航栏
    var MO = MO || {};
    // 滑动的nav
    (function(){
      var oNav = $('.nav'),
        oUl = oNav.find('ul'),
        oLi = oUl.find('li'),
        oA = oLi.find('a'),
        navAct = $('.nav-active'),
        index = 1; // 当前目前显示nav部分第几个;

      MO.setActive = function(index){
        $(oA[index]).addClass('nav-active');
      }
      MO.setActive(index);
      oA.hover(function(){
        $(oA[index]).removeClass('nav-active');
        $(this).addClass("nav-active");
      },function(){
        $(this).removeClass('nav-active');
        MO.setActive(index);
      })
    })();     
});