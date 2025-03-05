// utils/tooltip.js
export const tooltipUtil = {
  toggleTooltip: (event) => {

  },

  init: () => {
    // 클릭 이벤트 등록
    document.addEventListener("click", tooltipUtil.toggleTooltip);
  },

  destroy: () => {
    // 클릭 이벤트 제거
    document.removeEventListener("click", tooltipUtil.toggleTooltip);
  },
};