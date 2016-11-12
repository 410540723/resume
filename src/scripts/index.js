//js的入口文件
var Swiper=require('./components/swiper/swiper-3.3.1.min');
// var swiper=new Swiper('.swiper-container');
var SwiperAnimate=require('./components/swiper/swiper.animate1.0.2.min');
 var mySwiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  })  
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');

module.exports = $;


$('#myIScroll').hide();

$('#enter').tap(function(){
    $('#kill').css('color','red');
    $('.swiper-container').hide();
    $('#myIScroll').show();
    var img=["img/1b.jpg","img/53fd8e1d1b56b.jpg","img/16154012_Shwu.png","img/182419144.jpg","img/Foundation-10-5.jpg","img/logo-swiper.png","img/23.jpg"];
    var ul='';
    var nr='';

    var dv1='';
    var dv2='';
    $.post('http://410540723.applinzi.com/www/mock/skill.php',{},function(data){
    	
    	pos=data.indexOf("<");
	     dataStr=data.substring(0,pos);
	     objData=JSON.parse(dataStr);
	    
        for(var i=0;i<objData.length;i++){
          ul=document.createElement('ul');
          $('#scroller').append(ul);
          nr=document.createElement('li');
          $(ul).append(nr);

          dv1=document.createElement('div');
          dv1.className='dv1';
          dv1.innerHTML='<img class="ig1" src="'+img[i]+'">'
          $(nr).append(dv1);
           dv2=document.createElement('div');
          dv2.className='dv2';
          dv2.innerHTML=objData[i].level+"<br>"+objData[i].name+objData[i].category+"<br>"+"使用时间:"+objData[i].time;
          $(nr).append(dv2);
        }
        var IScroll=require('./components/iscroll/iscroll');
        var myScroll;
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    })
    $('#kill').tap(function(){
      $('#xiangmu').css('color','#ffffff');
      $('#wode').css('color','#ffffff');
      $('#jingli').css('color','#ffffff');

      $(this).css('color','red');
       $('#scroller')[0].innerHTML="";
       $.post('http://410540723.applinzi.com/www/mock/skill.php',{},function(data){
       	pos=data.indexOf("<");
	     dataStr=data.substring(0,pos);
	     objData=JSON.parse(dataStr);
	    
        for(var i=0;i<objData.length;i++){
          ul=document.createElement('ul');
          $('#scroller').append(ul);
          nr=document.createElement('li');
          $(ul).append(nr);
		
          dv1=document.createElement('div');
          dv1.className='dv1';
          dv1.innerHTML='<img class="ig1" src="'+img[i]+'">'
          $(nr).append(dv1);
           dv2=document.createElement('div');
          dv2.className='dv2';
          dv2.innerHTML=objData[i].level+"<br>"+objData[i].name+objData[i].category+"<br>"+"使用时间:"+objData[i].time;
          $(nr).append(dv2);
        }
        var IScroll=require('./components/iscroll/iscroll');
        var myScroll;
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      })
    })
    
    $('#jingli').tap(function(){
      $('#xiangmu').css('color','#ffffff');
      $('#wode').css('color','#ffffff');
      $('#kill').css('color','#ffffff');
      $(this).css('color','red');
       $('#scroller')[0].innerHTML="";
       $.post('http://410540723.applinzi.com/www/mock/work.php',{},function(data){
      	pos=data.indexOf("<");
	     dataStr=data.substring(0,pos);
	     objData=JSON.parse(dataStr);	
         var igg2=document.createElement('img');
         igg2.src='img/o_1b0unq81g1b0q16ng1p21tm1qvi45.png';
         igg2.className='scroller_ig2';
         $('#scroller').append(igg2);
         var igg1=document.createElement('img');
         igg1.src='img/o_1b0unvlsc5f2ooqgv3c598f159.png';
         igg1.className='scroller_ig1';
         $('#scroller').append(igg1);
         var dvv1=document.createElement('div');
          dvv1.innerHTML='工作经历';
          dvv1.className='scroller_sp1';
          $('#scroller').append(dvv1);
          var dvv4=document.createElement('div');
           dvv4.className='scroller_sp4'
          $('#scroller').append(dvv4);
          var dvv2;
          var dvv3;
        for(var i=0;i<objData.length;i++){
          dvv2=document.createElement('div');
          dvv2.className='scroller_sp2';
          dvv3=document.createElement('div');
          dvv3.className='scroller_sp3';

          dvv2.innerHTML=objData[i].time;
          dvv3.innerHTML=objData[i].name+"，担任职位是"+objData[i].posts+",主要做的项目有"+objData[i].projects;
                $(dvv4).append(dvv2);
                 $(dvv4).append(dvv3);     
        }
        var IScroll=require('./components/iscroll/iscroll');
        var myScroll;
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      })
    })
    $('#xiangmu').tap(function(){
       $('#kill').css('color','#ffffff');
      $('#wode').css('color','#ffffff');
      $('#jingli').css('color','#ffffff');
      $(this).css('color','red');

       $('#scroller')[0].innerHTML="";
       $.post('http://410540723.applinzi.com/www/mock/project.php',{},function(data){
      	
      	pos=data.indexOf("<");
	     dataStr=data.substring(0,pos);
	     objData=JSON.parse(dataStr);
	     console.log(objData);
         var igg2=document.createElement('img');
         igg2.src='img/o_1b0unq81g1b0q16ng1p21tm1qvi45.png';
         igg2.className='scroller_ig2';
         $('#scroller').append(igg2);
         var igg3=document.createElement('img');
         igg3.src='img/o_1b0unvlsc5f2ooqgv3c598f159.png';
         igg3.className='scroller_ig3';
         $('#scroller').append(igg3);
         var dvv5=document.createElement('div');
          dvv5.innerHTML='我的项目';
          dvv5.className='scroller_sp5';
          $('#scroller').append(dvv5);
          var dvv8=document.createElement('div');
           dvv8.className='scroller_sp8'
          $('#scroller').append(dvv8);
          var dvv6;
          var dvv7;
        for(var i=0;i<objData.length;i++){
          dvv6=document.createElement('div');
          dvv6.className='scroller_sp6';
          dvv7=document.createElement('div');
          dvv7.className='scroller_sp7';

          dvv6.innerHTML=objData[i].category;
          dvv7.innerHTML=objData[i].name+"，方式是"+objData[i].description+",主要实现的功能有"+objData[i].detail;
                $(dvv8).append(dvv6);
                 $(dvv8).append(dvv7);     
        }
        var IScroll=require('./components/iscroll/iscroll');
        var myScroll;
        myScroll = new IScroll('#wrapper', { mouseWheel: true });
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      })
    })
    $('#wode').tap(function(){
       $('#kill').css('color','#ffffff');
      $('#xiangmu').css('color','#ffffff');
      $('#jingli').css('color','#ffffff');
      $(this).css('color','red');

      $('#scroller')[0].innerHTML="";
      var ddv1=document.createElement('div');
       ddv1.className='ddv1'
      ddv1.innerHTML='十分感谢你能可以阅读我的简历';  
      $('#scroller').append(ddv1);
     
      var ddv2=document.createElement('div');
      ddv2.className='ddv2'
      ddv2.innerHTML='如果可以赶紧联系我吧';  
      $('#scroller').append(ddv2);
    })


})

$('#header_bt1').click(function(){
	
	
	captureImage();
})

$('#header_bt2').click(function(){
	
	
	galleryImgs();
})


// 扩展API加载完毕后调用onPlusReady回调函数 
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API 
function onPlusReady() {
	console.log("plusready");
}
// 拍照
function captureImage(){
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	console.log("Resolution: "+res+", Format: "+fmt);
	cmr.captureImage( function( path ){
			alert( "Capture image success: " + path );  
		},
		function( error ) {
			alert( "Capture image failed: " + error.message );
		},
		{resolution:res,format:fmt}
	);
}

function galleryImgs(){
	// 从相册中选择图片
	console.log("从相册中选择多张图片:");
    plus.gallery.pick( function(e){
    	for(var i in e.files){
	    	console.log(e.files[i]);
    	}
    }, function ( e ) {
    	console.log( "取消选择图片" );
    },{filter:"image",multiple:true});
}