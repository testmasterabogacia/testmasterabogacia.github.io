class QuestionObject {
  containerPreguntas;
  questionData;
  numPreguntas;
  jsonDataId;
  localNumberQuestion;

  constructor(questionData, key, index, numPreguntas) {
    this.containerPreguntas = document.getElementById("container-preguntas");
    this.questionData = questionData;
    this.numPreguntas = numPreguntas;
    this.jsonDataId = key;
    this.localNumberQuestion = index;

    const { pregunta, respuestas } = questionData;

    this.getPreguntaTemplate(pregunta, respuestas);
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

  getPreguntaTemplate(pregunta, respuestas) {
    // <div>
    const wrapperDiv = document.createElement("div");
    // <p>
    const preguntaPTag = document.createElement("p");
    preguntaPTag.classList.add("pregunta");
    preguntaPTag.textContent = `${this.localNumberQuestion + 1}. ${pregunta}`;
    // <ul>
    const respuestasUlTag = document.createElement("div");
    respuestasUlTag.classList.add(
      "respuestas",
      "list-group",
      "list-group-numbered"
    );
    respuestasUlTag.setAttribute("data-pregunta-id", this.jsonDataId);

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
    const respuestaPregunta = currentJson[preguntaId].respuestaCorrecta;
    const acierto = respuestaPregunta == respuestaSeleccionada;
    if (element.parentElement.getElementsByClassName("selected").length == 0) {
      this.updateProgressBar(acierto);
    }
    const resultadoColor = acierto
      ? "list-group-item-success"
      : "list-group-item-danger";
    element.classList.add(resultadoColor, "selected");
  }

  updateProgressBar(acierto) {
    if (acierto) {
      results_numbers["aciertos"] += 1;
    } else {
      results_numbers["fallos"] += 1;
    }
    this.recalculatePorcentajes();
  }

  recalculatePorcentajes() {
    const totalRespondidas =
      results_numbers["aciertos"] + results_numbers["fallos"];

    contadorRespondidas.textContent = `${totalRespondidas}/${numPreguntas}`;

    numeroAciertos.textContent = results_numbers["aciertos"];
    numeroFallos.textContent = results_numbers["fallos"];

    const valorPorcentajeAciertos = Math.round(
      (results_numbers["aciertos"] * 100) / numPreguntas
    );
    const valorPorcentajeFallos = Math.round(
      (results_numbers["fallos"] * 100) / numPreguntas
    );

    const porcentajeAciertos = `${valorPorcentajeAciertos}%`;
    const porcentajeFallos = `${valorPorcentajeFallos}%`;

    aciertosProgressBar.style.width = porcentajeAciertos;
    fallosProgressBar.style.width = porcentajeFallos;

    if (valorPorcentajeAciertos) {
      aciertosProgressBar.children[0].textContent = porcentajeAciertos;
    }
    if (valorPorcentajeFallos) {
      fallosProgressBar.children[0].textContent = porcentajeFallos;
    }
  }
}
