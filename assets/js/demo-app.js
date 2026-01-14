/******************************************
 * ファイル読み込み
 ******************************************/
Promise.all([
  fetch("../partials/drawer-menu.html").then((r) => r.text()),
  fetch("../partials/content-modal.html").then((r) => r.text()),
])
  .then(([drawerHtml, modalHtml]) => {
    document.querySelector(".drawer-menu").innerHTML = drawerHtml;
    document.querySelector(".content-modal").innerHTML = modalHtml;
  })
  .catch((err) => {
    console.error("Failed to load partials:", err);
  });

