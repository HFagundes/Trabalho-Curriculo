// Botão Voltar ao Topo
const btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Modo Claro";
  } else {
    darkModeBtn.textContent = "🌙 Modo Escuro";
  }
});

// Expandir/Recolher seções
const toggleBtns = document.querySelectorAll(".toggleBtn");

toggleBtns.forEach(btn => {
  const section = btn.parentElement;
  const content = section.querySelector(".content");

  // Já começa aberto
  content.style.display = "block";
  btn.textContent = "Ver menos";

  btn.addEventListener("click", () => {
    if (content.style.display === "block") {
      content.style.display = "none";
      btn.textContent = "Ver mais";
    } else {
      content.style.display = "block";
      btn.textContent = "Ver menos";
    }
  });
});
