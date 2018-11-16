/**
 * Created by Administrator on 2018/11/12 0012.
 */
$(function(){
    $("#header").load("header.html");
     var global=global||{};

    //江湖动效
    (function(){
        var disX=0;
        var disY=0;
        var move=0;
        var pos=0;
        var page=0;
        var flag=true;
        var timer=null;
        $(".jianghu .swiper-wrapper").mousedown(function(ev){
            clearTimeout(timer);
            disX=ev.pageX;
            $(document).mousemove(function(ev){
                var move=ev.pageX-disX;
                //console.log(flag,move);
                if(flag){
                    flag=false;

                    if(move<0){
                        page++;
                        if(page>7){
                            page=7
                        }
                        console.log(page);
                            $(".jianghu .swiper-wrapper").animate({"left":-914*page});
                        console.log(flag);
                    }
                    if(move>0){
                        page--;
                        if(page<0){
                            page=0
                        }
                        $(".jianghu .swiper-wrapper").animate({"left":-914*page});
                    }
                    var timer=setTimeout(function(){
                        flag=true
                    },500);
                }

            });
            $(document).mouseup(function(){
                $(document).off();

            //$(document).off("mousemove")
            })
            //document.onmouseup=function(){
            //    document.onmousemove=null;
            //}
        });

        $(".jianghu .jh_prev").click(function(){
            page--;
            if(page<0){
                page=0
            }
            $(".jianghu .swiper-wrapper").animate({"left":-914*page});
        });

        $(".jianghu .jh_next").click(function(){
            page++;
            if(page>7){
                page=7
            }
            $(".jianghu .swiper-wrapper").animate({"left":-914*page});
        })
    })();

//    人设动效
    (function(){
        $(".rs_next").click(function(){
            $(".renshe .swiper-wrapper").animate({left:-151},function(){
                $(".renshe .swiper-wrapper").find("li").eq(0).appendTo($(".renshe .swiper-wrapper"));
                $(".renshe .swiper-wrapper").css({"left":0})
            });
        });


        $(".rs_prev").click(function(){
            $(".renshe .swiper-wrapper").find("li:last").prependTo($(".renshe .swiper-wrapper"));
            $(".renshe .swiper-wrapper").css({left:-151});
            $(".renshe .swiper-wrapper").animate({"left":"0"})
        })

    })();


//    战斗动效
    (function(){
        $(".zhandou ul li").click(function(){
            $(this).addClass("on").siblings().removeClass("on")
        })
    })();

//    视屏播放
    (function(){
        var cli=document.querySelectorAll(".zhandou .play_btn");
        console.log(cli.length);
        for (var i = 0; i < cli.length; i++) {
            cli[i].index=i;
            cli[i].onclick=function(){
                console.log(1);
                $("#pop_video").addClass("on");
                var num=this.index+1;
                console.log(num);
                $(".videoty").attr("src","music/da"+num+".mp4")
            };
        }



        $("#pop_video .close").click(function(){
            $("#pop_video").removeClass("on");
            $(".videoty").attr("src","")
        })
    })();


//    战场动效
    (function(){
        var index=0;
        $(".zhanchang .zc_prev").click(function(){
            index--;
            $(".zhanchang .box").each(function(i){
                $(".box").eq(i).css({transform:"rotateX("+index*90+"deg)",
                    transitionDelay: 0.25*i+"s"
                })
            })
        });
        //var index=0;
        $(".zhanchang .zc_next").click(function(){
            index++;
            $(".zhanchang .box").each(function(i){
                //依次选中集合元素的索引
                $(".box").eq(i).css({transform:"rotateX("+index*90+"deg)",
                    transitionDelay: 0.25*i+"s"
                })
            })
        })
    })();



    //点击事件
    (function(){
        var page=0;
        var len=$(".nav_b").length;
        var timer=null;
        var timer1=null;
        //console.log(len);
        $(".nav_b").click(function(){
            console.log(1);
            page=$(this).index();
            $(".page").eq(page).addClass("on").siblings().removeClass('on');
            $(this).addClass('on').siblings().removeClass('on')
        });

        function moveDown(){
            var right=function(){
                //clearTimeout(timer);
                    $(".page").eq(page).addClass("on").siblings().removeClass('on');
                    $(".nav_b").eq(page).addClass('on').siblings().removeClass('on');
                timer=setTimeout(function(){
                    fa=1;
                },2000);

            };
            var fa=1;
            function scrDown(){
                if(fa==1){
                    fa=0;
                    if(page>len-1){
                        page=len-1;
                    }
                    right();
                    page++;
                }
            }
            var scrol=function(e){
                e=e||window.event;
                if(e.wheelDelta){
                    if(e.wheelDelta<0){
                        scrDown();
                    }
                }else{
                    if(e.detail>0){
                        scrDown();
                    }
                }
            };

            function addEvent(ele, type, listener) {
                if (ele.addEventListener) {
                    ele.addEventListener(type, listener);
                } else {
                    ele.attachEvent("on" + type, listener);
                }
            }
            addEvent(window, "mousewheel", scrol);
            addEvent(window, "DOMMouseScroll", scrol);
        }



        $(window).scroll(function(){
            var top=$(window).scrollTop();
            console.log($(window).scrollTop());
            if(top>=244){
                $(".content").addClass("on");
                //setTimeout(function(){
                    moveDown();
                //},2000)
            }

        });
    })();

    //滚轮事件
    (function(){


    })()



});


//
//$(".ind01_right").click(function(){
//    $("#ind01_tp1:not(:animated)").animate({left:-160},function(){
//        $("#ind01_tp1").find("li").eq(0).appendTo($("#ind01_tp1"));
//        $("#ind01_tp1").css({'left':0})
//    });
//});
//$(".ind01_left").click(function(){
//    $("#ind01_tp1").find("li:last").prependTo($("#ind01_tp1"));
//    $("#ind01_tp1").css({left:-160});
//    $("#ind01_tp1").stop().animate({left:0});
//});
