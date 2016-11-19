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
        index = 0; // 当前目前显示nav部分第几个;

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

    url="http://rap.taobao.org/mockjsdata/10008/index.do";
    ajax(url,"GET",function(data){
    	var yResearch = JSON.parse(data).data.research;//研究动态数组
      var NewResearch=[];//限制字符串后的数组
      var ReTitle=[yResearch[0].title,yResearch[1].title,yResearch[2].title,yResearch[3].title,yResearch[4].title];
      //遍历研究动态的题目数组，限制题目字数，每个题目最多20字；
      var MapReTitle = ReTitle.map(function(item){
         var str_length = 0,
	         str_len = 0,
	         len=46;
         str_cut = new String();
         str_len = item.length;
         for(var i = 0;i<str_len;i++){
              a = item.charAt(i);
              str_length++;
            if(escape(a).length > 4){
               //中文字符的长度经编码之后大于4
               str_length++;
             }
             str_cut = str_cut.concat(a);
            if(str_length>=len){
               str_cut = str_cut.concat("...");
               return str_cut;
             }
        }
    //如果给定字符串小于指定长度，则返回源字符串；
            if(str_length<len){
             return  item;
        }
      });
      console.log( MapReTitle);
      //研究动态列表
    	for(var i=0;i<5;i++){
    		var Research=document.getElementById("yResearch");

    		var RUl=document.createElement("ul");
    		Research.appendChild(RUl);

    		var RLi=document.createElement("li");
    		RUl.appendChild(RLi);


    		var RLink=document.createElement("a");
    		RLi.appendChild(RLink);

    		var RText=document.createElement("p");
    		RText.innerHTML=MapReTitle[i]+"&nbsp;&nbsp;&nbsp;"+yResearch[i].date;
    		RLink.appendChild(RText);
    	}

      
    	var yTeach = JSON.parse(data).data.activity;//教学动态数据
       var TeTitle=[yTeach[0].title,yTeach[1].title,yTeach[2].title,yTeach[3].title,yTeach[4].title];
      //遍历研究动态的题目数组，限制题目字数，每个题目最多20字；
      var MapTeTitle = TeTitle.map(function(item,index,array){
         var str_length = 0;
	         str_len = 0,
	         len=46;
         str_cut = new String();
         str_len = item.length;
         for(var i = 0;i<str_len;i++){
              a = item.charAt(i);
              str_length++;
            if(escape(a).length > 4){
               //中文字符的长度经编码之后大于4
               str_length++;
             }
             str_cut = str_cut.concat(a);
            if(str_length>=len){
               str_cut = str_cut.concat("...");
               return str_cut;
             }
        }
    //如果给定字符串小于指定长度，则返回源字符串；
            if(str_length<len){
             return  item;
        }
      });
      //教学活动列表
    	for(var i=0;i<5;i++){
    		var Teach=document.getElementById("yTeach");

    		var TUl=document.createElement("ul");
    		Teach.appendChild(TUl);

    		var TLi=document.createElement("li");
    		TUl.appendChild(TLi);


    		var TLink=document.createElement("a");
    		TLi.appendChild(TLink);

    		var TText=document.createElement("p");
    		TText.innerHTML=TeTitle[i]+"&nbsp;&nbsp;&nbsp;"+yTeach[i].date;
    		TLink.appendChild(TText);

    	}
    	
    	//alert(yResearch.year);
    }, function(){
    	alert("请求不成功");
    }); 
});