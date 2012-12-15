/*---------------------- 共用函数 -------------------------*/

function hideElements(arr) {
  for (var k in arr) {
    $(arr[k]).css('display', 'none');
  }
}


/*---------------------- 首页-------------------------*/

// 要隐藏的模块
var home_hide_now = [
  '#pl_leftnav_app', // 最近使用的应用 
  '.global_footer', // 底栏
  '.gn_title[node-type="app"]', // 导航上的 应用 按钮
  '.gn_title[node-type="weiba"]', // 导航上的 微吧 按钮
  '.gn_title[node-type="game"]', // 导航上的 游戏 按钮
  //'.gn_search', // 导航上的 搜索
  '.gn_setting[node-type="member"]', // 导航上的 会员
  '.gn_setting[node-type="account"]', // 导航上的 会员
];

var home_hide_later = [
  '#pl_content_biztips', // 发布框下的广告
  '#trustPagelet_checkin_lotteryv5', // 个人信息栏下的小活动
  '#trustPagelet_recom_interestv5',  // 可能感兴趣的人
  '#pl_rightmod_ads35', // 右侧栏广告
  '#trustPagelet_recom_memberv5', // 会员专区
  '#trustPagelet_recom_allinonev5',  // 微吧微刊
  '#pl_rightmod_noticeboard', // 公告栏
  '#pl_content_setSkin', // 右上角换肤按钮
  '#WB_webim', // 私信聊天
  '#pl_topic_followTopic .btns', // 话题更新按钮
  '#pl_topic_followTopic .btm_rt', // 话题底部按钮
  '.right_bar[node-type="search_adv_rightbar"]', // Timeline 导航中的搜索
  '#pl_leftnav_group .btns', // 分组的管理按钮
  '#pl_leftnav_group .levmore', // 创建新分组
  '#pl_rightmod_ads35', // 侧栏广告
  '#pl_rightmod_ads36', // 侧栏广告
  '#pl_content_commentTopNav', // 热门微博
  '#pl_rightmod_feedback', // 意见反馈
  '#pl_rightmod_reportentry', // 举报
  'ul[node-type="feed_type_tabs"]', // 微博/动态 tab
];

setInterval(function(){
  $('.layer_guide').remove();
  $('.function_guide').remove();
}, 1000); 

hideElements(home_hide_now);

setInterval(function(){
  hideElements(home_hide_later);
}, 1000); 

/*---------------------- profile -------------------------*/

var profile_hide_now = [
  '#pl_profile_cover', // 最上面的大图
  '#pl_profile_nav', // 导航
  '#pl_profile_unfollow', // 未关注时的微关系
  '#plc_main .W_main_2r', // 侧栏微关系
  '.btn_bed[node-type="hover"]', // 鼠标滑动出现的「加关注」等按钮
  '.lock_r[node-type="activity_nav"]', // 动态设置
  '#pl_profile_extraInfo a', // 申请认证
  '.tags a[node-type="infoSlide"]', // 申请认证
  '.icon_bed[node-type="level"]', // 等级
  'ul[node-type="feed_adv_tabs"]', // 微博/动态 tab
];

hideElements(profile_hide_now);
