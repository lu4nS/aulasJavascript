var clicks = 0;
var aula8 = {
  function1() {
    const button = document.getElementById("function1Button");
    const input = document.getElementById("function1Input");

    if (input.style.display === "none") {
      input.style.display = "block";
      button.style.display = "block";
    } else {
      input.style.display = "none";
      button.style.display = "none";
    }

    button.addEventListener("click", () => {
      console.log(`Você digitou: ${input.value}`);
    });
  },

  function2() {
    const button = document.getElementById("function2Button");
    const input = document.getElementById("function2Input");
    const paragraph = document.getElementById("function2Paragraph");

    if (input.style.display === "none") {
      input.style.display = "block";
      button.style.display = "block";
      paragraph.style.display = "block";
    } else {
      input.style.display = "none";
      button.style.display = "none";
      paragraph.style.display = "none";
    }

    button.addEventListener("click", () => {
      paragraph.innerText = `Paragrafo ${input.value}`;
    });
  },

  function3() {
    const anchor = document.getElementById("function3Anchor");
    let theresParagraph = document.getElementById("function3Paragraph");
    if (theresParagraph) {
      console.log("alooo");
      theresParagraph.parentNode.removeChild(theresParagraph);
    } else {
      const paragraph = document.createElement("p");
      paragraph.id = "function3Paragraph";
      paragraph.textContent = "paragrafo inserido";
      anchor.insertAdjacentElement("afterend", paragraph);
    }
  },

  function4() {
    const ancora = document.getElementById("function4Anchor");

    const imagem = document.getElementById("function4Img");

    if (imagem) {
      imagem.parentNode.removeChild(imagem);
    } else {
      const novaImagem = document.createElement("img");
      novaImagem.src =
        "https://webapp377823.ip-23-239-29-170.cloudezapp.io/wp-content/uploads/2018/02/logo-visual-header.png";
      novaImagem.id = "function4Img";
      novaImagem.style.display = "block";
      ancora.insertAdjacentElement("afterend", novaImagem);
    }
  },

  function5() {
    const anchor = document.getElementById('function5Anchor')
    clicks++;

    if (clicks === 1) {
      anchor.insertAdjacentElement("afterend", this.functionCreateUL());
    } else if (clicks === 2) {
      const lis = anchor.parentNode.querySelectorAll('ul li')
      lis.forEach((li) => {
        if (!li.classList.contains("item")) {
          li.style.display = "none";
        }
      });
    } else if (clicks === 3) {
      anchor.parentNode.removeChild(document.getElementsByTagName('ul')[0])
      clicks = 0;
    }
  },

  function6() {
    alert('ATENZIONE, GAMBIARRA IN THE POCKEEEEET!')
    const anchor = document.getElementById('function6Anchor')
    clicks++;

    if (clicks === 1) {
      anchor.insertAdjacentElement("afterend", this.functionCreateUL());
    } else if (clicks === 2) {
      const lis = anchor.parentNode.querySelectorAll('ul li')
      lis.forEach((li) => {
        if (!li.classList.contains("item")) {
          li.textContent = li.textContent + " not item"
        }
      });
    } else if (clicks === 3) {
      anchor.parentNode.removeChild(document.getElementsByTagName('ul')[0])
      clicks = 0;
    }
  },

  functionCreateUL() {
    const ulElement = document.createElement("ul");
    ulElement.innerHTML = `
        <li class="item">Vermelho</li>
        <li>Azul</li>
        <li class="item">Verde</li>
        <li>Amarelo</li>
      `;

    return ulElement
  }
};
