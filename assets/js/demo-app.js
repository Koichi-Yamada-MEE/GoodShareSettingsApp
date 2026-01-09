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

/******************************************
 * ファイル読み込み
 ******************************************/
    const img = document.getElementById('modalImage');

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;

    const getPoint = (e) => e.touches ? e.touches[0] : e;

    const startDrag = (e) => {
      isDragging = true;
      const p = getPoint(e);
      startX = p.clientX - currentX;
      startY = p.clientY - currentY;
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const p = getPoint(e);
      currentX = p.clientX - startX;
      currentY = p.clientY - startY;
      img.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };

    const endDrag = () => {
      isDragging = false;
    };

    img.addEventListener('mousedown', startDrag);
    img.addEventListener('mousemove', onDrag);
    img.addEventListener('mouseup', endDrag);
    img.addEventListener('mouseleave', endDrag);

    img.addEventListener('touchstart', startDrag);
    img.addEventListener('touchmove', onDrag);
    img.addEventListener('touchend', endDrag);

    // モーダルを閉じたら位置リセット
    document
      .getElementById('imageModal')
      .addEventListener('hidden.bs.modal', () => {
        currentX = 0;
        currentY = 0;
        img.style.transform = 'translate(0, 0)';
      });
