// 防止随手保存图片和视频：在图片、视频以及指向它们的链接上禁用右键菜单和拖拽。
// 只能挡住普通访客，无法阻止开发者工具或截图。
(function () {
  var MEDIA = 'img, video, a[href^="images/"], a[href^="videos/"]';

  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest && e.target.closest(MEDIA)) e.preventDefault();
  });

  document.addEventListener("dragstart", function (e) {
    if (e.target.closest && e.target.closest(MEDIA)) e.preventDefault();
  });

  // 页脚年份自动更新
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".js-year").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
