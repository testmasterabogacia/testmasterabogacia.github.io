class DataLoader {
  containerPreguntas;
  results_numbers;
  jsonData;
  aciertosProgressBar;
  fallosProgressBar;
  contadorRespondidas;
  numeroAciertos;
  numeroFallos;

  constructor(data) {
    this.containerPreguntas = document.getElementById("container-preguntas");
    this.aciertosProgressBar = document.getElementById("aciertos-progress-bar");
    this.fallosProgressBar = document.getElementById("fallos-progress-bar");
    this.contadorRespondidas = document.getElementById("contador-respondidas");
    this.numeroAciertos = document.getElementById("numero-aciertos");
    this.numeroFallos = document.getElementById("numero-fallos");
    this.jsonData = data;
    this.results_numbers = {
      aciertos: 0,
      fallos: 0,
    };
    this.generateQuestions();
  }

  loadNewData(data) {
    this.jsonData = data;
    this.results_numbers = {
      aciertos: 0,
      fallos: 0,
    };
    this.recalculatePorcentajes();
    this.generateQuestions();
  }

  shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));
      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }

  generateQuestions() {
    this.containerPreguntas.innerHTML = "";
    const randomKeys = this.shuffle(Object.keys(this.jsonData));
    randomKeys.forEach((key, index) => {
      const datos = this.jsonData[key];
      const pregunta = datos["pregunta"];
      const respuestas = datos["respuestas"];
      const bloqueDiv = this.getPreguntaTemplate(
        key,
        pregunta,
        respuestas,
        index
      );
      // this.containerPreguntas.appendChild(bloqueDiv);
    });
  }

  recalculatePorcentajes() {
    const totalRespondidas =
      this.results_numbers["aciertos"] + this.results_numbers["fallos"];
    const numPreguntas = this.jsonData.length;

    this.contadorRespondidas.textContent = `${totalRespondidas}/${numPreguntas}`;

    this.numeroAciertos.textContent = this.results_numbers["aciertos"];
    this.numeroFallos.textContent = this.results_numbers["fallos"];

    const valorPorcentajeAciertos = Math.round(
      (this.results_numbers["aciertos"] * 100) / numPreguntas
    );
    const valorPorcentajeFallos = Math.round(
      (this.results_numbers["fallos"] * 100) / numPreguntas
    );

    const porcentajeAciertos = `${valorPorcentajeAciertos}%`;
    const porcentajeFallos = `${valorPorcentajeFallos}%`;

    this.aciertosProgressBar.style.width = porcentajeAciertos;
    this.fallosProgressBar.style.width = porcentajeFallos;

    if (valorPorcentajeAciertos) {
      this.aciertosProgressBar.children[0].textContent = porcentajeAciertos;
    }
    if (valorPorcentajeFallos) {
      this.fallosProgressBar.children[0].textContent = porcentajeFallos;
    }
  }

  updateProgressBar(acierto) {
    if (acierto) {
      this.results_numbers["aciertos"] += 1;
    } else {
      this.results_numbers["fallos"] += 1;
    }
    this.recalculatePorcentajes();
  }

  getPreguntaTemplate(preguntaId, pregunta, respuestas, localNumberQuestion) {
    // <div>
    const wrapperDiv = document.createElement("div");
    // <p>
    const preguntaPTag = document.createElement("p");
    preguntaPTag.classList.add("pregunta");
    preguntaPTag.textContent = `${localNumberQuestion + 1}. ${pregunta}`;
    // <ul>
    const respuestasUlTag = document.createElement("div");
    respuestasUlTag.classList.add(
      "respuestas",
      "list-group",
      "list-group-numbered"
    );
    respuestasUlTag.setAttribute("data-pregunta-id", preguntaId);

    const that = this;

    // Build <li>'s
    const liItems = [];
    Object.keys(respuestas).forEach((letraRespuesta) => {
      const textoRespuesta = respuestas[letraRespuesta];
      const buttonRespuesta = document.createElement("button");
      buttonRespuesta.setAttribute("type", "button");
      buttonRespuesta.classList.add(
        "list-group-item",
        "list-group-item-action"
      );
      buttonRespuesta.innerText = textoRespuesta;
      buttonRespuesta.addEventListener("click", function () {
        that.checkRespuesta(this, letraRespuesta);
      });
      liItems.push(buttonRespuesta);
    });

    const respuestasDesordenadas = this.shuffle(liItems);
    respuestasDesordenadas.forEach((preguntaRandom) => {
      respuestasUlTag.appendChild(preguntaRandom);
    });

    const horizontalRule = document.createElement("hr");
    horizontalRule.classList.add("card-line-separator");

    wrapperDiv.appendChild(preguntaPTag);
    wrapperDiv.appendChild(respuestasUlTag);
    wrapperDiv.appendChild(horizontalRule);

    this.containerPreguntas.appendChild(wrapperDiv);
  }

  checkRespuesta(element, respuestaSeleccionada) {
    const { preguntaId } = element.parentElement.dataset;
    const respuestaPregunta = this.jsonData[preguntaId].respuestaCorrecta;
    element.classList.add("selected");
    let acierto = false;
    if (typeof respuestaPregunta == "object") {
      // array
      acierto = respuestaPregunta.includes(parseInt(respuestaSeleccionada));
      if (
        element.parentElement.getElementsByClassName("selected").length ==
        respuestaPregunta.length
      ) {
        acierto =
          !element.parentElement.getElementsByClassName(
            "list-group-item-danger"
          ).length && acierto;
        this.updateProgressBar(acierto);
      }
    } else {
      // number
      acierto = respuestaPregunta == respuestaSeleccionada;
      console.log(acierto);
      if (
        element.parentElement.getElementsByClassName("selected").length == 1
      ) {
        this.updateProgressBar(acierto);
      }
    }
    const resultadoColor = acierto
      ? "list-group-item-success"
      : "list-group-item-danger";
    element.classList.add(resultadoColor);
  }
}
