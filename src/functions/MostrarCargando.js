const CardContainer = document.querySelector("#CardContainer");
export const MostrarCargando = () => {
  const div = document.createElement("div");
  div.classList.add("mx-auto");
  div.innerHTML = `
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  CardContainer.appendChild(div);
};
