class SectionQuestions {
  sectionsData;
  textosBasePath;
  currentDataLoader;

  constructor() {
    this.textosBasePath = "../textos_finales/";

    this.sectionsData = {
      civil: {
        relativePath: "civilJson",
      },
      deontologia: {
        relativePath: "deontologiaJson",
      },
      "laboral.edurne": {
        relativePath: "laboralEdurneJson",
      },
      "laboral.garbine": {
        relativePath: "laboralGarbineJson",
      },
      "laboral.landa": {
        relativePath: "laboralLandaJson",
      },
      "nuevas-modalidades.examen": {
        relativePath: "nuevasModalidadesExamenJson",
      },
      "nuevas-modalidades.profesores": {
        relativePath: "nuevasModalidadesProfesoresJson",
      },
      "examenes-oficiales.2022": {
        relativePath: "examenesOficiales2022Json",
      },
      "examenes-oficiales.2021": {
        relativePath: "examenesOficiales2021Json",
      },
      "examenes-oficiales.2017": {
        relativePath: "examenesOficiales2017Json",
      },
      "examenes-oficiales.2016": {
        relativePath: "examenesOficiales2016Json",
      },
    };

    const that = this;

    document.addEventListener(
      "sectionChanged",
      (e) => {
        that.sectionChangedHandler();
      },
      false
    );
  }

  async sectionChangedHandler(e) {
    // Get path to load
    const sectionToLoad = document.querySelector("#navbarNav [aria-current]")
      .dataset.sectionName;
    if (sectionToLoad == "inicio") {
      return;
    }
    const jsonData = eval(this.sectionsData[sectionToLoad].relativePath);
    this.loadData(jsonData);
  }

  loadData(jsonData) {
    if (this.currentDataLoader) {
      this.currentDataLoader.loadNewData(jsonData);
      return;
    }
    this.currentDataLoader = new DataLoader(jsonData);
  }
}

new SectionQuestions();
