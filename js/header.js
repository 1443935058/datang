/**
 * Created by Administrator on 2018/11/5 0005.
 */
$(function(){
    $("#header").load("header.html");
    //吸顶盒
    $(window).scroll(function(){
        if($(window).scrollTop()>55){
            $(".topnav").addClass("on")
        }else {
            $(".topnav").removeClass("on")
        }
    });

//   选项卡和轮播图
    (function(){
        var len=$(".slideTxtBox .bd .item").length;
        var index=0;
        var cli=$(".slideTxtBox .hd ul li");
        var show= $(".slideTxtBox .bd .item");
        //选项卡的封装
        function lunbo(len,index,cli,show,on){
            cli.mouseover(function(){
                index=$(this).index();
//        $(this).addClass("col").siblings().removeClass("col");
                cli.removeClass(on).eq(index).addClass(on);
                show.stop().hide().eq(index).stop().show();
            });
        }

        lunbo(len,index,cli,show,"on");

    })();
    //    滑动轮播图封装
    (function(){
      var cli1=$(".bd .item1 .list span"),
          width=$(".bd .item1 ul li").width(),
          show1=$(".bd .item1 ul"),
          cli2=$(".bd .item2 .list span"),
          show2=$(".bd .item2 ul"),
          cli3=$(".bd .item3 .list span"),
          show3=$(".bd .item3 ul"),
          cli4=$(".bd .item4 .list span"),
          show4=$(".bd .item4 ul"),
          cli5=$(".bd .item5 .list span"),
          show5=$(".bd .item5 ul");
        function slide(cli,show,on){
            cli.click(function(){
                index=$(this).index();
                show.animate({left:-index*width});
                cli.removeClass(on).eq(index).addClass(on)
            });
        }
        slide(cli1,show1,"on");
        slide(cli2,show2,"on");
        slide(cli3,show3,"on");
        slide(cli4,show4,"on");
        slide(cli5,show5,"on");
    })();


//   职业展示动画1
    (function(){
        var cli=$(".part3 .cores_navs .cores_nav"),
            index=0,
            len=$(".part3 .cores_navs .cores_nav").length,
            show=$(".part3 .cores .core");
        function lunbo(len,index,cli,show,on){
            cli.click(function(){
                index=$(this).index();
//        $(this).addClass("col").siblings().removeClass("col");
                cli.removeClass(on).eq(index).addClass(on);
                show.removeClass(on).eq(index).addClass(on);
                //show.stop().hide().eq(index).stop().show();
            });
        }
        lunbo(len,index,cli,show,"on")
    })();

    //   职业展示动画2
    (function(){
        var cli1=$(".core_lx .core_text_sels div"),
            index=0,
            len=$(".core_lx .core_text_sels div"),
            show1=$(".core_lx .core_pic img"),
            cli2=$(".core_bhy .core_text_sels div"),
            show2=$(".core_bhy .core_pic img"),
            cli3=$(".core_wm .core_text_sels div"),
            show3=$(".core_wm .core_pic img")
        function lunbo(len,index,cli,show,on,off){
            cli.click(function(){
                index=$(this).index();
//        $(this).addClass("col").siblings().removeClass("col");
                cli.removeClass(on).eq(index).addClass(on);
                show.addClass(off).eq(index).removeClass(off);
                //show.stop().hide().eq(index).stop().show();
            });
        }
        lunbo(len,index,cli1,show1,"on","off");
        lunbo(len,index,cli2,show2,"on","off");
        lunbo(len,index,cli3,show3,"on","off");
    })();

//    视频播放
    (function(){
        $(".playbtnxx").click(function(){
            console.log(1);
            $(".Layer").css({"opacity":"0.9","z-index":"100"});
            //$(".pop").css({"opacity":"1","z-index":"100"});
            $('video').trigger('play');
        });

        $(".pop_close").click(function(){
            console.log(1);
            $(".Layer").css({"opacity":"0","z-index":"-1"});

            $('video').trigger('pause');
            $('video').get(0).currentTime=0;
        })
    })();

//   返回顶部
    (function(){
        $(".foot .top").click(function(){
            $("body,html").animate({scrollTop:0},600);
        })
    })()
});