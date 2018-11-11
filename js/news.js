/**
 * Created by Administrator on 2018/11/9 0009.
 */
$(function(){
    //引入头部
    $("#head1").load("header.html");
    $("#footer").load("footer.html");

    (function(){
       $.ajax({
           url:"https://www.easy-mock.com/mock/5bdab059f1739457034b931e/example/datang",
           type:"get",
           data:{},
           async:true,
           dataType:"json"
       }).done(function(result){
           console.log(result);
           console.log(result[0].data);
           var connent=result[0].data;
           var lin=result[0].data.length;
           //console.log(lin);
           //console.log(connent[0].title);
           var str="";
           for (var i = 0; i <lin; i++) {
               var model=$(".model").html();
               //console.log(model);
               str+=model.replace("{title}",connent[i].title).
                   replace("{con1}",connent[i].con1).
                   replace("{data}",connent[i].data).
                   replace("{con}",connent[i].con);

               $("#container").html(str)
           }
       })
    })();

    (function(){
        var page=0;
        $(".tabs-box ul li").click(function(){
           page=$(this).index();
            $.ajax({
                url:"https://www.easy-mock.com/mock/5bdab059f1739457034b931e/example/datang",
                type:"get",
                data:{},
                async:true,
                dataType:"json"
            }).done(function(result){
                //console.log(result);
                //console.log(result[page].data);
                var connent=result[page].data;
                var lin=result[0].data.length;
                //console.log(lin);
                //console.log(connent[0].title);
                var str="";
                for (var i = 0; i <lin; i++) {
                    var model=$(".model").html();
                    //console.log(model);
                    str+=model.replace("{title}",connent[i].title).
                    replace("{con1}",connent[i].con1).
                    replace("{data}",connent[i].data).
                    replace("{con}",connent[i].con);

                    $("#container").html(str)
                }


            });

            $(".tabs-box ul li").removeClass("current").eq(page).addClass("current");
        })
    })()
});