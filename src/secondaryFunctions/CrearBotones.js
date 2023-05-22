const containerButtons = document.querySelector("#containerButtons");

export const CrearBotones = (nombreBoton) => {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.innerHTML = `${nombreBoton}`;

  containerButtons.appendChild(button);
};
