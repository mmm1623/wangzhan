// 登陆功能
function People(username, pwd, phonenumber) {
    this.username = username;
    this.pwd = pwd;
    this.phonenumber = phonenumber;
}

//初始化一些用户登录信息
var zs = new People('zs', '123', '15298989809');
var ls = new People('ls', '456', '1231313123');
var people_ary = [zs, ls];


//抽象一个函数，用来实现判断用户是否存在
function has_people(username) {
    //如果flag = true，当前用户是存在的
    //如果flag = false， 当前用户不存在
    var flag = true;

    for (var i = 0; i < people_ary.length; i++) {
        if (people_ary[i].username == username) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }

    return flag;
}


//抽象一个函数，用来实现判断当前用户是否登录成功
function islogin(username, pwd) {
    //如果为true,登录成功
    //false   登录失败
    var flag = true;

    for (var i = 0; i < people_ary.length; i++) {

        if (people_ary[i].username == username && people_ary[i].pwd == pwd) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }

    return flag;
}


//抽象一个函数，用来实现注册功能
function isregist(People) {

    //注册成功
    var flag = true;

    if (has_people(People.username)) {
        //用户存在
        flag = false;
    } else {
        //用户不存在，可以注册
        people_ary[people_ary.length] = People;
        flag = true;
    }

    return flag;
}


//开始执行程序
(function() {
    var username = prompt('请输入用户名');
    var pwd = prompt('请输入密码');
    if (has_people(username)) {
        //用户存在，判断是否登录成功
        if (islogin(username, pwd)) {
            //登录成功
            alert('恭喜，登录成功!');
        } else {
            alert('用户名或密码错误，登录失败!');
        }

    } else {
        //用户不存在,提示用户是否要注册
        if (confirm('您输入的用户名不存在，是否要注册？')) {
            //要注册,让用户填写信息
            var username = prompt('请输入用户名');
            var pwd = prompt('请输入登录密码');
            var phonenumber = prompt('请输入联系电话');

            var p1 = new People(username, pwd, phonenumber);

            //判断当前对象是否已存在
            if (isregist(p1)) {
                //注册成功
                alert('恭喜注册成功,可以直接等录使用');
                console.log(people_ary);
            } else {
                alert('用户已存在，注册失败');
            }

        } else {
            //不注册
            alert('不注册，那你走吧...');
        }
    }
})();

// 随机整数

// 求 1 到 10之间的随机整数
// Math.floor(Math.random()*max + min);
// console.log(Math.floor(Math.random()*10+1));


//求 20 到 50 之间的随机整数



//Math.floor(Math.random()*(max-min+1)+min);

//获取任意两个之间的随机整数
function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// 1,10
var num = get_random(20, 50);
console.log(num);


// 随机生成颜色
var div = document.getElementById('mydiv');

function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var r = get_random(0, 255);
var g = get_random(0, 255);
var b = get_random(0, 255);
var str = 'rgb(' + r + ',' + g + ',' + b + ')';
//给div 设置背景颜色
div.style.backgroundColor = str;

// tab切换
// 1. 获取一组li
var lis = document.querySelectorAll('.tab-control li');
// 2. 获取一组div显示项
var divs = document.querySelectorAll('.tab-content-item');
// 3. for循环遍历给每一个li注册一个点击事件，给每一个li添加一个index属性，表示li的下标
for (var i = 0; i < lis.length; i++) {
    // 3.1 给每一个li添加一个index属性
    lis[i].index = i;
    // 3.2 注册事件
    lis[i].onmouseenter = function() {
        // this 当前触发的li，
        // alert(this.index);
        // 4. 在事件处理程序中，① 切换li  ② 切换div
        // 4.1 循环遍历去掉所有li 和 所有div的类名active
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
            divs[j].className = 'tab-content-item';
        }
        // 4.2 给当前点击的li添加类名active
        this.className = 'active';
        // 4.3 获取当前点击的li的下标
        var num = this.index;
        // 找到对应的div项，显示
        divs[num].className = 'tab-content-item active';

    };
}

// 百度输入框智能提示
var words = ['阿里巴巴', '阿凡达', '李连杰', '李小龙', '阿里山', '王五', '王阳明', '李明', '阿芳', '王子'];

// 1. 获取输入框元素
var txt = document.querySelector('#txt');
// 2. 获取ul元素
var ul = document.querySelector('#list');
// 3. 给输入框注册oninput事件
txt.oninput = function() {
    // 3.1 清空ul
    ul.innerHTML = '';
    // 4. 获取输入框中输入的关键词
    var v = this.value;
    // 4.1 判断是否为空，若为空，则不再向下执行
    if (v == '') {
        return;
    }
    // 5. 循环遍历数据，检测每一个数据中是否包含了关键词。
    for (var i = 0; i < words.length; i++) {
        // 6. 若包含的关键字，则取出来，创建一个li元素，把内容放到li中，li追加到ul中
        if (words[i].indexOf(v) != -1) {
            // 创建li
            var li = document.createElement('li');
            // 设置li的内容
            li.innerText = words[i];
            // 追加到ul中
            ul.appendChild(li);
        }
    };

};

// 放大镜效果
// 【准备工作】
// 1.获取左侧盒子
var _leftBox = document.querySelector('#_leftBox');
// 2.获取左侧盒子中的小黄盒子
var _tool = document.querySelector('#_tool');
// 3.获取右侧盒子
var _rightBox = document.querySelector('#_rightBox');
// 4.获取右侧盒子的大图
var bigImg = document.querySelector('#_rightBox img');


// 【功能1：鼠标进入左侧盒子，显示小黄盒子和右侧大盒子。设置类名】
_leftBox.onmouseenter = function() {
        // 显示小黄
        _tool.className = 'tool active';
        // 显示右侧大盒子
        _rightBox.className = 'rightBox active';

    }
    // 【功能2：鼠标离开左侧盒子，隐藏小黄盒子和右侧大盒子】
_leftBox.onmouseleave = function() {
    // 隐藏小黄
    _tool.className = 'tool';
    // 隐藏右侧大盒子
    _rightBox.className = 'rightBox';

}

// 【功能3：鼠标在左侧盒子中移动时，小黄盒子和右侧大盒子里的大图片跟着按照比例关系移动】

// 1. 给左侧盒子注册鼠标移动事件 onmousemove
_leftBox.onmousemove = function(e) {
    // 2. 获取鼠标相对于左侧盒子元素的坐标（事件对象.offsetX/Y）
    var x = e.clientX - this.offsetLeft - _tool.offsetWidth / 2;
    var y = e.clientY - this.offsetTop - _tool.offsetHeight / 2;
    // 2.1 检测最小范围
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    // 2.2 检测最大范围
    if (x > _leftBox.offsetWidth - _tool.offsetWidth) {
        x = _leftBox.offsetWidth - _tool.offsetWidth;
    }
    if (y > _leftBox.offsetHeight - _tool.offsetHeight) {
        y = _leftBox.offsetHeight - _tool.offsetHeight;
    }

    // 3. 把获取的坐标x和y赋值给小黄盒子样式的left和top值
    _tool.style.left = x + 'px';
    _tool.style.top = y + 'px';

    // 4.把求出的x和y以-2倍计算赋值给右侧大图的left和top值
    bigImg.style.left = -2 * x + 'px';
    bigImg.style.top = -2 * y + 'px';
};

// 倒计时

/*
  功能：计算两个日期的时间差
  参数：
    s 表示开始的时间  Date类型对象
    e 表示结束的实际  Date类型对象
  返回值：返回一个对象 xiaoShi、fenZhong、miao
*/
function getDiff(s, e) {
    // 1. 开始的时间
    var start = s;
    // 2. 结束的时间
    var end = e;
    // 3. 结束的时间-开始的时间    总毫秒的差
    var temp = end - start;
    // 4. 换算
    var hour = parseInt(temp / 1000 / 60 / 60); // 小时
    hour = hour < 10 ? '0' + hour : hour;
    var minute = parseInt(temp / 1000 / 60 % 60); // 分钟
    minute = minute < 10 ? '0' + minute : minute;
    var seconds = parseInt(temp / 1000 % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds; // 秒

    // return [hour,minute,seconds];
    // 若要返回多个值，可以使用对象或数组包装好要返回的数据。 建议使用对象。
    return { xiaoShi: hour, fenZhong: minute, miao: seconds };
};

// 用户定义时的开始时间对象
var s = new Date();
// 用户定义的结束时间对象
var e = new Date('2018/9/19 19:0:0');
// 计算两个日期时间差
var o = getDiff(s, e);


// 1. 获取三个div元素
var divs = document.querySelectorAll('div');
// 2. 把计算好的时间差的时分秒分别赋值给3个div的内容
divs[0].innerText = o.xiaoShi;
divs[1].innerText = o.fenZhong;
divs[2].innerText = o.miao;

// 3.产生一个定时器
var num = setInterval(function() {
    // 3.1 重新计算
    // 用户定义时的开始时间对象
    var s = new Date();
    // 用户定义的结束时间对象
    var e = new Date('2018/9/19 19:0:0');
    // 计算两个日期时间差
    var o = getDiff(s, e);
    // 3.2 重新赋值
    divs[0].innerText = o.xiaoShi;
    divs[1].innerText = o.fenZhong;
    divs[2].innerText = o.miao;

    // 3.3 若到达时间后，则停止定时器
    if (o.xiaoShi == '00' && o.fenZhong == '00' && o.miao == '00') {
        // 清除定时器
        clearInterval(num);
    }
}, 1000);

// 轮播图

// 动画

// 缓冲运动：10 9  8  7  4  3  1
/*
  功能：动画
  参数：
    element 要运动的元素  元素对象
    targetValue 目标值    数字
    speed 速度（步长）    数字
*/
function move(element, targetValue) {
    // 3.1 清除旧的定时器
    clearInterval(element.num);
    // 4. 时间控制：产生一个定时器
    element.num = setInterval(function() {
        // 4.1 获取div原有的left值
        var v = element.offsetLeft;
        // 4.1.1 判断是否到达目标
        if (v == targetValue) {
            // 4.1.2 清除定时器
            clearInterval(element.num);
            // 4.1.2 结束本次函数的执行
            return;
        }
        // 4.2 在原有基础上+speed或-speed
        // 缓冲运动的公式：(目标值-原有值)/基数
        // (100 - 0) / 10       10
        // (100- 10) / 10       9
        // (100 - 19) / 10      8.1
        // .....

        // 缓冲的公式
        var speed = (targetValue - v) / 10;
        // 检测方向
        if (targetValue > v) {
            speed = Math.ceil(speed);
        } else {
            speed = Math.floor(speed);
        }
        //设置物体的位置
        element.style.left = v + speed + 'px';


    }, 10);
};
//【准备工作-获取元素】
var list = document.querySelector('#list'); // ul
var banner = document.querySelector('#banner'); // 轮播区
var btnLeft = document.querySelector('#btnLeft'); // 左侧按钮
var btnRight = document.querySelector('#btnRight'); // 右侧按钮
var links = document.querySelectorAll('.control a'); // 一组小点点按钮
var control = document.querySelector('.control'); // 一组小点点按钮的父元素
var index = 0; // 定义一个变量，标识当前显示哪个轮播项。默认为0


//【功能1：点击右侧按钮实现轮播】
// 1. 给右侧按钮注册点击事件
btnRight.onclick = function() {
    // 1.0 判断当前的索引是否是0，若是0，则ul的left的值必须从0开始
    if (index == 0) {
        list.style.left = 0 + 'px';
    }
    // 1.1 在++之前更改当前显示项对应的a元素的样式，去掉active类名
    links[index].className = '';
    // 2. index++
    index++;

    // 3. 计算运动的目标值
    var v = index * -790;
    // 4. 让ul动画到目标值
    move(list, v);
    // 4.1 在++之后更改显示项对应的a元素的样式，加active类名
    // 4.2 判断是否等于7，设置index为0
    if (index == 7) {
        index = 0;
    }
    links[index].className = 'active';

};


//【功能2：点击左侧按钮实现轮播】
// 1. 给左侧按钮注册事件
btnLeft.onclick = function() {
    // 2. 在--之前把当前显示项对应a元素样式去掉active类名
    links[index].className = '';
    // 3. index--
    index--;
    // 4. 检测index的范围，若小于0,则先把索引设置为6。然后设置ul的left值为-5530px
    if (index < 0) {
        index = 6;
        list.style.left = '-5530px';
    }
    // 5. 计算ul运动的目标值
    var v = index * -790;
    // 6. 让ul动画到目标值
    move(list, v);
    // 7. 在--之后把当前显示项对应a元素样式加上active类名
    links[index].className = 'active';
};



//【功能3：点击小点点按钮实现轮播】
var $links = $('.point li');
// 1. 给每一个li元素添加一个属性num表示该元素在这一组中的位置
for (var i = 0; i < $links.length; i++) {
    links[i].num = i;
}
// 2. 给类名为control的div注册点击事件（事件委托）
$('.point-two').click(function(e) {
    // 3. 通过事件对象获取target最先触发的元素
    var t = e.target;
    // 4. 通过nodeName判断是否是A
    if (t.nodeName == 'LI') {
        // 5. 若是A
        // 5.1 当前显示的轮播项的对应的a元素要去掉active类名
        links[index].className = '';
        // 5.2 通过点击的当前a元素num属性获取要切换到哪一项赋值给index
        index = t.num;
        // 5.3 计算ul的运动的目标值
        var v = index * -790;
        // 5.4 让ul动画到目标值
        move(list, v);
        // 5.5 切换项对应的a元素要加上active类名
        links[index].className = 'active';
    }

});


// 【功能4：自动轮播】
var flag = setInterval(function() {
    // 触发右侧按钮的点击事件
    btnRight.onclick();
}, 5000);


// 【功能5：鼠标进入轮播区，停止轮播】
banner.onmouseenter = function() {
    // 清除自动轮播的定时器
    clearInterval(flag);
};

// 【功能6：鼠标离开轮播区，启动轮播】
banner.onmouseleave = function() {
    flag = setInterval(function() {
        // 触发右侧按钮的点击事件
        btnRight.onclick();
    }, 5000);
};


// jquery
// 淘宝精品
$('#center > li:first').siblings().hide();
// 1. 找到left中所有li注册事件 mouseover
$('#left > li').mouseover(function() {
    // 2. 在鼠标经过left中的li的时候，获取当前li的索引，根据索引找到对应图片的li，显示，兄弟元素隐藏

    // 获取当前li的索引
    var index = $(this).index();

    $('#center li')
        .eq(index)
        .show()
        .siblings()
        .hide();
});

// 3. 找到right中所有li注册事件 mouseover
$('#right > li').mouseover(function() {
    // 4. 在鼠标经过right中的li的时候，获取当前li的索引 + left中li的个数，根据索引找到对应图片的li，显示，兄弟元素隐藏

    // 找到当前li的索引
    var index = $(this).index();
    //
    index = index + $('#left > li').length;

    $('#center > li')
        .eq(index)
        .show()
        .siblings()
        .hide();
});

// tab栏切换
// 1. 给所有的标题li注册事件，mouseover
$('.wrapper > .tab > .tab-item').mouseover(function() {
    // 2. 鼠标经过li的时候，让当前li 具有active类样式，其它li移除active类样式
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');

    // 3. 找到当前li的索引，根据索引找到对应的详细内容的div，添加类样式selected，其它的div移除类样式selected
    var index = $(this).index();

    $('.products > .main')
        .eq(index)
        .addClass('selected')
        .siblings()
        .removeClass('selected');
});

// 固定导航头
// 1. 当页面滚动的时候，获取页面滚动出去的距离
$(window).scroll(function() {
    // 获取页面滚动出去的距离
    var scrollTop = $(window).scrollTop();
    //    当滚动出去的距离 > 0  让header添加上fixed样式，让回到顶部按钮显示
    if (scrollTop > 0) {
        $('#top').addClass('fixed');
        $('#totop').show();
    } else {
        //    当滚动出去的距离 = 0  让header移除fixed样式，让回到顶部按钮隐藏
        $('#top').removeClass('fixed');
        $('#totop').hide();
    }
});

// 2. 点击回到顶部按钮，让文档以动画的方式回到顶部
$('#totop').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
});

// 轮播图
// 记录当前图片的索引，默认 0
var index = 0;

// 找到最大的图片的索引
var maxIndex = $('.slider li').length - 1;
// 下一张 
// 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
$('.arrow-right').click(function() {
    // 当前图图片
    $('.slider li')
        .eq(index)
        .fadeOut();

    // 找到下一张图片，把索引记录

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }
    $('.slider li')
        .eq(index)
        .fadeIn();
});


// 上一张
$('.arrow-left').click(function() {
    // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
    $('.slider li')
        .eq(index)
        .fadeOut();

    // 找到上一张图片
    if (index > 0) {
        index--;
    } else {
        // 当前已经是第一张图片，要获取最后一张图片的索引
        index = maxIndex;
    }
    $('.slider li')
        .eq(index)
        .fadeIn();
});

// 电梯导航
// 1. 当页面滚动的时候，获取页面滚动出去的距离
$(window).scroll(function() {
    // 获取页面滚动出去的距离
    var scrollTop = $(window).scrollTop();
    //  判断页面滚动出去的距离 > 0   显示电梯导航
    if (scrollTop > 0) {
        $('.subnav').show();
    } else {
        //  判断页面滚动出去的距离 = 0   隐藏电梯导航
        $('.subnav').hide();
    }


    //                        120
    // 一层  100  二层  200   三层 300 

    // 3. 当页面滚动的时候，获取每一个楼层在文档中纵坐标
    //  如果页面滚动出去的距离 > 对应楼层在文档中纵坐标
    //  让电梯导航对应的项高亮显示，其它项取消高亮显示
    if (scrollTop >= $('.mei').offset().top) {
        // 四楼
        $('.subnav ul li:eq(3)')
            .addClass('current')
            .siblings()
            .removeClass('current');
    } else if (scrollTop >= $('.fu').offset().top) {
        // 三楼
        $('.subnav ul li:eq(2)')
            .addClass('current')
            .siblings()
            .removeClass('current');
    } else if (scrollTop >= $('.dian').offset().top) {
        // 二楼
        $('.subnav ul li:eq(1)')
            .addClass('current')
            .siblings()
            .removeClass('current');
    } else if (scrollTop >= $('.jia').offset().top) {
        // 一楼
        $('.subnav ul li:eq(0)')
            .addClass('current')
            .siblings()
            .removeClass('current');
    } else {
        // 取消高亮显示
        $('.subnav li').removeClass('current');
    }

});

// 2. 点击返回按钮，以动画的方式，回到顶部
$('.back').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 100);
});

// 4. 点击电梯导航对应的项，让页面以动画的方式滚动到对应楼层的位置
$('.subnav > ul > li:eq(0)').click(function() {
    $('html,body').animate({
        scrollTop: $('.jia').offset().top
    })
});

$('.subnav > ul > li:eq(1)').click(function() {
    $('html,body').animate({
        scrollTop: $('.dian').offset().top
    })
});

$('.subnav > ul > li:eq(2)').click(function() {
    $('html,body').animate({
        scrollTop: $('.fu').offset().top
    })
});
// 轮播图插件
$('#box').hover(function() {
    $('#arr').show();
    // 停止
    // https://sorgalla.com/jcarousel/docs/plugins/autoscroll/reference/api.html
    $('.screen').jcarouselAutoscroll('stop');
}, function() {
    $('#arr').hide();
    // 开始
    $('.screen').jcarouselAutoscroll('start');
});

// 插件的代码
// 实现轮播图的功能
$('.screen')
    .jcarousel({
        wrap: 'circular'
    })
    // 自动轮播
    // https://sorgalla.com/jcarousel/docs/plugins/autoscroll/reference/installation.html
    .jcarouselAutoscroll({
        // 间隔
        interval: 1000,
        target: '+=1',
        autostart: true
    })

// 上一张
$('#left')
    .jcarouselControl({
        target: '-=1'
    });

// 下一张
$('#right')
    .jcarouselControl({
        target: '+=1'
    });

// 显示页码
$('.page')
    // 注册事件  当当前页码激活 添加active类样式
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    // 注册事件  当当前页码不激活 移除active类样式
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    // 生成页码
    .jcarouselPagination();


// 五星评分
var wjx_k = '☆';
var wjx_s = '★';

$('.comment li').hover(function() {
    // 1 鼠标经过li
    //   让当前li和之前的li 都设置为实星星, 当前li之后的所有li 设置为空星星
    $(this)
        .text(wjx_s)
        .prevAll() // 当前li之前所有的li
        .text(wjx_s)
        .end() // 回到最后一次改变 包装集之前
        .nextAll()
        .text(wjx_k);
}, function() {
    // 2 鼠标离开li
    //   让所有li都设置为 空星星
    $('.comment li').text(wjx_k);

    // 设置标记class的项，和之前的项都为实星星
    $('.now')
        .text(wjx_s)
        .prevAll()
        .text(wjx_s);
});


// 3 点击当前li
//   记录当前li，设置一个自定义的类样式(作为标示)
$('.comment li').click(function() {
    $(this)
        .addClass('now')
        .siblings()
        .removeClass('now');
});