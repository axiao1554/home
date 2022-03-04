/*!
 * 切换title特效
 */
var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        // $('[rel="icon"]').attr("href", "/uploads/favicon-32x32-next.ico");
        document.title = "(✿◡‿◡)喔唷，崩溃啦！";
        clearTimeout(titleTime)
    } else {
        // $('[rel="icon"]').attr("href", "/uploads/favicon-32x32-next.ico");
        document.title = "(●ˇ∀ˇ●)咦！又好了！" + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});

//回到顶部
$("#to_top").click(function() {
     $("html,body").animate({scrollTop:0}, 1000);
});
 $(document).scroll(function(){
    var scroll_top =  $(document).scrollTop();
    if(scroll_top > 800){
         $("#to_top").show();
    }else{
         $("#to_top").hide();
    }
});
//到达底部
$("#to_bottom").click(function() {
    $("html,body").animate({scrollTop:document.body.clientHeight + 'px'}, 1000);
});
 $(document).scroll(function(){
    var  scroll_top = $(document).scrollTop();
    if(scroll_top < 800){
        $("#to_bottom").show();
    }else{
         $("#to_bottom").hide();
    }
});

// 朕知道了
function hide_alert(){
    $(".app-notifier").hide(500);
}

// 投食
function pay(){
    $(".app-notifier").show(500);
}

// 订阅
function ding(){
    var ctrl=(navigator.userAgent.toLowerCase()).indexOf('mac')!=-1?'Command/Cmd': 'CTRL';
    if(document.all){
        window.external.addFavorite('http://home.axiao.vip', '阿小之家');
    }else if(window.sidebar){
        window.sidebar.addPanel('阿小之家', 'http://home.axiao.vip', "");
    }else{
        alert('您可以通过快捷键' + ctrl + ' + D 加入到收藏夹');
    }
}