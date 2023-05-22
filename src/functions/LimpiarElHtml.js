const CardContainer = document.querySelector("#CardContainer");

export const LimpiarElHtml = () => {
  while (CardContainer.firstChild) {
    CardContainer.removeChild(CardContainer.firstChild);
  }
};
