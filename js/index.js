// 顶部导航
$('.kf').mouseover(function() {
    $(this).css('background', 'white')
        .children('.yc')
        .css('display', 'block');
    $('.kf div i').toggleClass('iconfont icon-jiantou2')
        .toggleClass('iconfont icon-jiantouxia');
}).mouseout(function() {
    $(this).css('background', '')
        .children('.yc')
        .css('display', 'none');
    $('.kf div i').toggleClass('iconfont icon-jiantou2')
        .toggleClass('iconfont icon-jiantouxia');
});
// 轮播图
// 记录当前图片的索引，默认 0
var index = 0;
var maxIndex = $('.lb img').length - 1;
// 下一张 
// 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
$('.point .right').click(function() {
    // 当前图图片
    $('.lb img')
        .eq(index)
        .hide();

    // 找到下一张图片，把索引记录

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }
    $('.lb img')
        .eq(index)
        .show();
    $('.point-two li')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
    if (index == 0) {
        $('#jinkou').css('background', '#b50709');
    } else if (index == 1) {
        $('#jinkou').css('background', '#213A41');
    }
});

$('.point-two li').click(function() {
    $(this).addClass('active')
        .siblings()
        .removeClass('active');
    $('.point .right').click();
});

// // 上一张
$('.point .left').click(function() {
    // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
    $('.lb img')
        .eq(index)
        .hide();

    // 找到上一张图片
    if (index > 0) {
        index--;
    } else {
        // 当前已经是第一张图片，要获取最后一张图片的索引
        index = maxIndex;
    }
    $('.lb img')
        .eq(index)
        .show();
    if (index == 0) {
        $('#jinkou').css('background', '#b50709');
    } else if (index == 1) {
        $('#jinkou').css('background', '#213A41');
    }
});


// 【功能4：自动轮播】
var flag = setInterval(function() {
    // 触发右侧按钮的点击事件
    $('.point .right').click();
}, 5000);

// // 【功能5：鼠标进入轮播区，停止轮播】
$('.menu-right').mouseover(function() {
    // 清除自动轮播的定时器
    clearInterval(flag);
    $('.point li').show();
});

// 【功能6：鼠标离开轮播区，启动轮播】
$('.menu-right').mouseout(function() {
    // $('.point li').hide();
    flag = setInterval(function() {
        // 触发右侧按钮的点击事件
        $('.point .right').click();
    }, 5000);
});
/* 二级菜单 */
$('.menu li').mouseenter(function() {
    var index = $(this).index();
    $('.menu-two')
        .css('display', 'block')
        .children()
        .eq(index)
        .css('display', 'block')
        .siblings()
        .css('display', 'none');
});
$('.menu-two').mouseleave(function() {
    $('.menu-two').hide();
});
$('#jinkou .w').mouseleave(function() {
    $('.menu-two').hide();
});
// 右侧按钮


$('.title-right').click(function() {
    $('.one .tab')
        .children()
        .eq(index)
        .hide(1200);

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }
    $('.one .tab')
        .children()
        .eq(index)
        .show(2400);
    $('.textone').text(index + 1);
});
$('.title-left').click(function() {
    $('.one .tab')
        .children()
        .eq(index)
        .hide(1200);

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }
    $('.one .tab')
        .children()
        .eq(index)
        .show(2400);
    $('.textone').text(index + 1);
});

// 固定导航
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 200) {
        $('.ggdh').show();
    } else {
        //  判断页面滚动出去的距离 = 0   隐藏电梯导航
        $('.ggdh').hide();
    }
    if (scrollTop >= $('#bigbox-five').offset().top) {
        $('.ggdh p:eq(3)')
            .addClass('bianse')
            .siblings()
            .removeClass('bianse');
    } else if (scrollTop >= $('#bigbox-three').offset().top) {
        $('.ggdh p:eq(2)')
            .addClass('bianse')
            .siblings()
            .removeClass('bianse');
    } else if (scrollTop >= $('#bigbox-two').offset().top) {
        $('.ggdh p:eq(1)')
            .addClass('bianse')
            .siblings()
            .removeClass('bianse');
    } else if (scrollTop >= $('.one .tab').offset().top) {
        $('.ggdh p:eq(0)')
            .addClass('bianse')
            .siblings()
            .removeClass('bianse');
    }
});

$('.ggdh p:eq(0)').click(function() {
    $('html,body').animate({
        scrollTop: Math.ceil($('.one .tab').offset().top)
    }, 200);
});

$('.ggdh p:eq(1)').click(function() {
    $('html,body').animate({
        scrollTop: Math.ceil($('#bigbox-two').offset().top)
    }, 200);
});

$('.ggdh p:eq(2)').click(function() {
    $('html,body').animate({
        scrollTop: Math.ceil($('#bigbox-three').offset().top)
    }, 200);
});
$('.ggdh p:eq(3)').click(function() {
    $('html,body').animate({
        scrollTop: Math.ceil($('#bigbox-five').offset().top)
    }, 200);
});

$('.ggdh p:eq(4)').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
});
// 二级菜单
$('#top-logo .top .wangye').mouseenter(function() {
    $('.websit').css('display', 'block');
});
$('.websit').mouseleave(function() {
    $('.websit').css('display', 'none');
});
// 样式
$('.l_picture').mouseenter(function() {
    $(this).css({
        'transform': 'scale(1.1, 1.1)',
        'transition': '1s linear',
        'box-shadow': '4px 4px 6px grey'
    })
});
$('.l_picture').mouseleave(function() {
    $(this).css({
        'transform': 'scale(1, 1)',
        'transition': '1s linear',
        'box-shadow': ''
    })
});
$('.z_picture dl').mouseleave(function() {
    $(this)
        .css({
            'background-color': '',
            'opacity': '1',
            'transition': 'background-color 1s linear'
        })
});
$('.r_picture dl:hover ').mouseleave(function() {
    $(this)
        .css({
            'background-color': '',
            'opacity': '1',
            'transition': 'background-color 1s linear'
        })
});
$('.zz_picture dl:hover').mouseleave(function() {
    $(this)
        .css({
            'background-color': '',
            'opacity': '1',
            'transition': 'background-color 1s linear'
        })
});
$('.zzz_picture dl:hover').mouseleave(function() {
    $(this)
        .css({
            'background-color': '',
            'opacity': '1',
            'transition': 'background-color 1s linear'
        })
});