require.config({
　　paths: {
　　  jquery:'YJ/jquery',
　　  yTime: 'YJ/yTime',
      Ajax:'YJ/Ajax',
　　}
});
requirejs(['jquery','yTime','Ajax'],function   ($,yTime,Ajax) {

    //导航栏
    var MO = MO || {};
    // 滑动的nav
    (function(){
      var oNav = $('.nav'),
        oUl = oNav.find('ul'),
        oLi = oUl.find('li'),
        oA = oLi.find('a'),
        navAct = $('.nav-active'),
        index = 7; // 当前目前显示nav部分第几个;

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

    url="http://rap.taobao.org/mockjsdata/10008/previous/listPrevious.do";
    ajax(url, 'GET', function (data){
    var yDetail = JSON.parse(data).data;
    var len=yDetail.length;
    var Content=document.getElementById("yContent");
    	// 添加每年的成员信息
    	for(var i=len-1;i<len;i--){
    	// var Content=document.getElementById("yContent");
    	var Member=document.createElement("div");
    	Member.className="yOldMem";
    	Content.appendChild(Member);

    	
    	var Year=document.createElement("div");
    	Year.className="yYear";
    	Year.innerHTML=yDetail[i].year+"年成员";
    	Member.appendChild(Year);

    	var LinkMore=document.createElement("a");
    	LinkMore.className="yMore";
    	LinkMore.innerHTML="more";
        LinkMore.setAttribute('href',"yOldMemberDetail.html?dc=" + yDetail[i].year  + "");
    	Year.appendChild(LinkMore);

    	var Message=document.createElement("div");
    	Message.className="yMemText";
    	Message.innerHTML="感谢以下成员在"+yDetail[i].year+"年对实验室做出的贡献："+yDetail[i].member+"望再各自行业继续发展，再接再厉。";
    	Member.appendChild(Message);
        /*var html += "<div class='yOldMem'>" +
        "<div class='yYear'>"+yDetail[i].year+"年成员"+
        "<a href='yOldMemberDetail.html" + "?dc=" + yDetail[i].year + "' class='yMore'>more</a>"+
        "</div>"+
        "<div class='yMemText'>"+"感谢以下成员在"+yDetail[i].year+"年对实验室做出的贡献："+yDetail[i].member+"望再各自行业继续发展，再接再厉。"+
        "</div>"+
        "</div>"*/
         Member.appendChild(Message);                       
    }
    // Content.innerHTML = html;
},

    function(){
    	alert("	请求不成功");
    });
});

