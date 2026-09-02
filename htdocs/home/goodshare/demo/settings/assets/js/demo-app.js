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

const svgTextCache = new Map();

const isSvgPath = (imagePath) =>
  typeof imagePath === "string" && /\.svg(?:$|[?#])/i.test(imagePath);

const resolveAbsoluteUrl = (path) => {
  try {
    return new URL(path, window.location.href).toString();
  } catch (error) {
    console.error("Invalid image path:", path, error);
    return path;
  }
};

const escapeHtmlAttribute = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const createFallbackOverlayAnchor = (tooltipTarget) =>
  tooltipTarget
    ? `<div class="position-absolute" id="${escapeHtmlAttribute(
        tooltipTarget
      )}"></div>`
    : "";

const fetchSvgText = async (imagePath) => {
  const requestUrl = resolveAbsoluteUrl(imagePath);
  if (svgTextCache.has(requestUrl)) {
    return svgTextCache.get(requestUrl);
  }

  const response = await fetch(requestUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch SVG: ${response.status} ${requestUrl}`);
  }

  const svgText = await response.text();
  svgTextCache.set(requestUrl, svgText);
  return svgText;
};

window.buildDemoAppSlideInnerHtml = async (slide) => {
  const imagePath = slide?.imagePath ?? "";
  const alt = slide?.alt ?? "";
  const tooltipTarget = slide?.tooltipTarget ?? "";

  const fallbackHtml = `<img src="${escapeHtmlAttribute(
    imagePath
  )}" alt="${escapeHtmlAttribute(alt)}" />${createFallbackOverlayAnchor(
    tooltipTarget
  )}`;

  if (!isSvgPath(imagePath)) {
    return fallbackHtml;
  }

  try {
    const svgText = await fetchSvgText(imagePath);
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, "image/svg+xml");
    const svgRoot = doc.querySelector("svg");

    if (!svgRoot) {
      throw new Error(`SVG root not found: ${imagePath}`);
    }

    svgRoot.setAttribute("role", "img");
    if (alt) {
      svgRoot.setAttribute("aria-label", alt);
    }

if (tooltipTarget) {
  const selectorValue = tooltipTarget
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');

  const highlightTarget =
    svgRoot.querySelector(`[id="${selectorValue}"]`);

  console.log('--------------------------------');
  console.log('SVG:', imagePath);
  console.log('tooltipTarget:', tooltipTarget);
  console.log('highlightTarget:', highlightTarget);

  if (highlightTarget) {
    highlightTarget.classList.add("demo-svg-highlight-target");
  } else {
    console.warn(
      `SVG target id "${tooltipTarget}" not found in ${imagePath}`
    );

    return `${svgRoot.outerHTML}${createFallbackOverlayAnchor(
      tooltipTarget
    )}`;
  }
}

    return svgRoot.outerHTML;
  } catch (error) {
    console.error(`Failed to render inline SVG: ${imagePath}`, error);
    return fallbackHtml;
  }
};

function addTargetOverlay(targetObj, color = '#ED701E', opacity = 0.3) {
    // targetObjが存在しない場合
    if (!targetObj) {
        console.warn('targetObjが見つかりません。');
        return null;
    }

    // targetObjの描画範囲を取得
    const bbox = targetObj.getBBox();

    // SVGのrect要素を作成
    const overlay = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect'
    );

    // オーバーレイの属性を設定
    overlay.setAttribute('id', 'targetOverlay');
    overlay.setAttribute('x', bbox.x);
    overlay.setAttribute('y', bbox.y);
    overlay.setAttribute('width', bbox.width);
    overlay.setAttribute('height', bbox.height);

    // 見た目を設定
    overlay.setAttribute('fill', color);
    overlay.setAttribute('fill-opacity', opacity);

    // targetObjと同じ階層に追加
    targetObj.parentNode.appendChild(overlay);
    console.log(bbox);

    return overlay;
}
