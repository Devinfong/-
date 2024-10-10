// 目前没有需要JavaScript的功能

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取个人信息卡元素
    var profileCard = document.querySelector('.profile-card');
    
    // 测量并输出高度
    if (profileCard) {
        var height = profileCard.offsetHeight;
        console.log('个人信息卡的高度是: ' + height + 'px');
        // 如果您想在页面上显示这个信息，可以取消下面这行的注释
        // alert('个人信息卡的高度是: ' + height + 'px');
    } else {
        console.log('未找到个人信息卡元素');
    }
});