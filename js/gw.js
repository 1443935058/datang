/**
 * Created by Administrator on 2018/2/8 0008.
 */
$(function(){
    //banner图的播放
    (function(){
        var cli=$(".wrap .main .videoWrapBox "),
            show=$(".main .mask"),
            hh=$(window).height(),
            show1=$(".main .video-pop"),
            num=1,
            close=$(".main .close");
        show.css({height:hh});
        cli.click(function(){
            show.css("display","block");
            show1.css("display","block");
        });
        close.click(function(){
            show.css("display","none");
            show1.css("display","none");
        })
    })();
    //小banner图
    (function(){
        var len=$(".wrap .main .news .slideBox ul li").length;
        var index=0;
        $(".wrap .main .news .hd li").click(function(){
            index=$(this).index();
            kk=$(this).index();
            $(".wrap .main .news .slideBox ul").stop(true).animate({left:-600*index},1000);
            $(".wrap .main .news .hd li").removeClass("on").eq(index).addClass("on");
        });

        var fa=true;
        function lunbo(){
            if(fa==true){
                fa=false;
                index++;
                if(index>len-1){
                    index=0;
                }
                $(".wrap .main .news .hd li").removeClass("on").eq(index).addClass("on");
                $(".wrap .main .news .slideBox ul").stop().animate({left:-600*index},1000,function(){
                    fa=true;   //回调函数
                });
            }
        }
        timer=setInterval(lunbo,2000);
        $(".wrap .main .news .slideBox").hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(lunbo,2000);
        })
    })();
    //上部滚动
    (function(){
        var len=$(".wrap .main .news .hjgs .slide  li").length;
        var hei=$(".wrap .main .news .hjgs .slide li").height();
        var index=0;
        function top(){
            index++;
            if(index>len-1){
                index=1;
                $(".wrap .main .news .hjgs .slide ul").css({top:0});
            }
            $(".wrap .main .news .hjgs .slide ul").stop().animate({top: -(hei* index)},1500);
        }
        var timer=setInterval(top,1500);
        $(".wrap .main .news .hjgs .slide").hover(function(){
            clearInterval(timer)
        },function(){
            timer=setInterval(top,1500)
        })
    })();

    //上部滚动 show hide
    (function(){
        var clic=$(".wrap .main .news .slide-news .hdd li "),
            show=$(".wrap .main .news .slide-news .bdd ul"),
            index=0;
        clic.hover(function(){
            index=$(this).index();
            show.stop().eq(index).fadeIn().siblings().fadeOut()
        })

    })();
//    展开
    (function(){
        //console.log($(".rightbar").css("right"));
        //console.log($(".rightbar .btn-close").css("background"))
        $(".qq").click(function(){
            if($(".rightbar").css("right")=="0px"){
                $(".rightbar").animate({right:-200},300);
                $(".qq").removeClass("btn-close cc");
                $(".qq").addClass("cc")
            }else{
                $(".rightbar").animate({right:0},300);
                $(".qq").removeClass("btn-close cc");
                $(".qq").addClass("btn-close")
            }
        })
    })();
//    门派
    (function(){
        $(".wrap .main .menpai .tab-wrap .tab-all a").click(function(){
            $(this).addClass("on").siblings().removeClass("on")
        });
    })();
    (function(){
        var img=$(".wrap .main .menpai .mpSlide .bd li .person"),
            tr=$(".wrap .main .menpai .mpSlide .bd li .txt-1 "),
            content=$(".wrap .main .menpai .mpSlide .bd li"),
            len=$(".wrap .main .menpai .mpSlide .bd li").length,
            line=$(".wrap .main .menpai .tab-wrap .tab-all .tab-item"),
            index= 0,
            m=0;

        //左侧
        line.click(function(){
            index=$(this).index();//获取line-one的索引
                content.hide().eq(index/2).show();
                //content.eq(index).find(".coo,.txt-1").removeClass("fadeInRight fadeInLeft").addClass("");
                content.eq(index/2).find(".coo").addClass("animated "+"bounceInRight");
                content.eq(index/2).find(".txt-1").addClass("animated "+"bounceInLeft");
        });
    })();

//    播放器
    (function(){
        var cli=$(".wrap .main .vision li"),
            show=$(".main .mask"),
            hh=$(window).height(),
            show1=$(".main .video-pop"),
            num,
            close=$(".main .close");
        show.css({height:hh});
        console.log(cli.length);
        cli.click(function(){
            show.css("display","block");
            show1.css("display","block");
            num=$(this).index()+1;
            $(".get").attr('src','music/da'+num+'.mp4');

        });
        close.click(function(){
            show.css("display","none");
            show1.css("display","none");
            $(".get").attr('src','music/da1.mp4');
        })
    })();
});