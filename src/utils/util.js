export const utils = {
  tooltipClick: (event) => {
    console.log(event.targrt)
    // 현재 클릭된 버튼을 찾음
    const clickedButton = event.target.closest(".tooltip-button");
    const tooltips = document.querySelectorAll(".tooltip-box");

    // 모든 tooltip 닫기
    tooltips.forEach((tooltip) => {
      if (!tooltip.contains(clickedButton)) {
        tooltip.classList.remove("open");
      }
    });

    // 현재 클릭된 버튼의 tooltip만 열기
    if (clickedButton) {
      const targetTooltip = clickedButton.nextElementSibling;
      if (targetTooltip && targetTooltip.classList.contains("tooltip-box")) {
        targetTooltip.classList.toggle("open");
      }
    }
  },

  init: () => {
    tooltipClick()
  }
}