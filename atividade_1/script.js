const mainElement = document.querySelector("main");
    
const innerForm = mainElement.innerHTML;


function renderViewCalc(event) {
  event.preventDefault();
  const inpuElement = document.querySelectorAll("input");

  let massValue = inpuElement[0].value;
  let heightValue = inpuElement[1].value;

  if (massValue.length === 0 && heightValue.length === 0) {
    alert("Prenncha todos os campos");
  }
  
  if (!Number(massValue.replace(",", ".")) && !Number(heightValue.replace(",", ".")) ) {
    alert("preencha apenas com números");
  } else {
    mainElement.classList.add("slide");
    mainElement.addEventListener("animationend", () => {
      mainElement.classList.remove("slide");

    });
    mainElement.innerHTML = calc(Number(massValue), Number(heightValue));
  }
}

function reset() {
  mainElement.innerHTML = innerForm;
  mainElement.classList.add("slide");
  mainElement.removeAttribute("class");
  mainElement.addEventListener("animationend", () => {
    mainElement.classList.remove("slide");
  });
}

function calc(mass, height) {
  let imc = Number((mass/height**2).toFixed(2));
  console.log(imc)
  let classification;

  if (imc < 16) {
    classification = "Magreza grave";
    mainElement.classList.remove("slide");
    mainElement.classList.add("imc-morbit-obesity");
  }

  if (imc >= 16 && imc < 17) {
    classification = "Magreza moderada";
    mainElement.classList.add("imc-moderate-thinness");
  }

  if (imc >= 17 && imc < 18.5) {
    classification = "Magreza leve";
    mainElement.classList.add("imc-moderate-thinness");
  }

  if (imc >= 18.5 && imc < 25) {
    classification = "Saudável";
    mainElement.classList.add("imc-normal");
  }

  if (imc >= 25 && imc < 30) {
    classification = "Sobrepeso";
    mainElement.classList.add("imc-overweight");
  }

  if (imc >= 30 && imc < 35) {
    classification = "Obesidade Grau I";
    mainElement.classList.add("imc-obesity");
  }

  if (imc >= 35 && imc < 40) {
    classification = "Obesidade Grau II (severa)";
    mainElement.classList.add("imc-serious-obesity")
  }

  if (imc >= 40) {
    classification = "Obesidade Grau III (mórbida)";
    mainElement.classList.add("imc-morbit-obesity");
  }

  let imcElement = `
      <h1>IMC</h1>
      <div class="container">
        <div class="table">
          <p>Valor</p></h1><p>${imc}</p>
        </div>
        <div class="table">
          <p>classificação</p><hr/><p>${classification}</p>
        </div>
        <button type="button" onclick="reset()" id="reset">Reset infomation</button>
      </div>
  `;

  return imcElement;
}
