let extraJson = [
  {
    pregunta:
      "Félix Abogados SLP, tiene una página web en la que informa de quienes son sus clientes, sin recabar previamente el consentimiento de los mismos para dicha publicación ¿Actúa correctamente este despacho de abogados? Indique la respuesta correcta",
    respuestaCorrecta: 3,
    respuestas: [
      "Sí, porque los despachos de abogados pueden fijar libremente sus estrategias publicitarias siempre que no prometan la obtención de resultados que no dependan exclusivamente de su actividad.",
      "Sí, siempre que se trate de una información veraz al seguir siendo sus clientes, y no incluya clientes con los que ya no existe una relación.",
      "No, porque supone publicidad engañosa para los clientes futuros.",
      "No, en ningún caso.",
    ],
  },
  {
    pregunta:
      "Sergio, abogado en ejercicio, es contratado en régimen de relación laboral especial para prestar servicios en un despacho de abogados En su contrato se incluye un pacto de permanencia de dos años y durante su relación se le da formación especializada por parte del despacho Al cabo de doce meses, Sergio comunica su intención de dejar voluntariamente el despacho ¿Puede obligarle el despacho a permanecer en su puesto de trabajo hasta cumplirse los dos años pactados?",
    respuestaCorrecta: 1,
    respuestas: [
      "No, pero el despacho tendrá derecho a la indemnización de daños y perjuicios que se hubiera pactado en el contrato de trabajo.",
      "No, pero el despacho tendrá derecho a la indemnización de daños y perjuicios que se hubiera pactado en el contrato de trabajo, que en ningún caso podrá ser superior a los gastos que hubiera soportado el despacho como consecuencia de la formación o especialización.",
      "Sí, pero Isabel tendrá derecho a una reducción de jornada en los términos que se hubiera pactado en el contrato de trabajo.",
      "No, pero el despacho podrá exigirle que finalice los asuntos encomendados que tenga.",
    ],
  },
  {
    pregunta:
      "Fernando es un abogado incorporado al Colegio de Abogados de Gipuzkoa y tiene la intención de asumir en Francia los intereses de Miguel ante un Tribunal de Burdeos (Francia) ¿Puede hacerlo?:",
    respuestaCorrecta: 1,
    respuestas: [
      "Sí, siempre que acredite que es abogado español.",
      "Sí, siempre que actúe concertadamente con un abogado colegiado en un Colegio de Abogados de Francia.",
      "Sí, siempre que se inscriba en el Colegio de Abogados correspondiente a Burdeos.",
      "Sí, si ya actuó en otras ocasiones como abogado en Tribunales extranjeros.",
    ],
  },
  {
    pregunta:
      "Fernando ha preparado una demanda por un asunto que le ha encomendado su cliente Antonio Cuando la tiene preparada para ser presentada ante el Juzgado llama a Antonio y le dice que debe abonar el 60% de sus honorarios Antonio se niega y dice que abonará los honorarios al finalizar el pleito A la vista de ello Fernando se plantea no presentar la demanda ¿La negativa de Antonio al abono del 60% de los honorarios devengados por Fernando podrá condicionar el inicio o el cese de las actuaciones profesionales por parte de Fernando?: Indique la respuesta correcta",
    respuestaCorrecta: 3,
    respuestas: [
      "Sí, porque el abogado tiene prohibido financiar el pleito.",
      "No, porque una vez preparada la demanda no puede dejar la defensa.",
      "No, porque previamente debería resolverse judicialmente el contrato de arrendamiento de servicios.",
      "Sí, porque la o el abogado puede renunciar al asunto si no se paga la provisión de fondos a cuenta de sus honorarios.",
    ],
  },
  {
    pregunta:
      "Idoia tiene claro que quiere ejercer como abogada tras aprobar la prueba de acceso a la profesión y va a ejercer de manera individual, por cuenta propia, dado que sus padres tienen un local cuyo uso le van a ceder para comenzar la profesión, pero se plantea una duda sobre cómo cubrir sus posibles contingencias de enfermedad, accidente, invalidez, jubilación y muerte Indique la respuesta correcta:",
    respuestaCorrecta: 3,
    respuestas: [
      "Para ello debe de darse de alta obligatoriamente en la Mutualidad General de la Abogacía.",
      "Para ello sólo debe de cumplir con sus obligaciones fiscales.",
      "Para ello debe de darse de alta en autónomos.",
      "Para ello debe de darse de alta en la correspondiente Mutua de previsión social de Abogados o en el régimen especial de autónomos de la Seguridad Social.",
    ],
  },
  {
    pregunta:
      "Tras aprobar el examen nacional y obtener el título profesional de abogada, Mercedes pretende ejercer la profesión montando un despacho con varios antiguos compañeros de facultad Mercedes vive con sus padres en Vitoria-Gasteiz, pero pretende abrir despacho en Donostia – San Sebastián con sus compañeros ¿Dónde debe colegiarse para ejercer su actividad?:",
    respuestaCorrecta: 2,
    respuestas: [
      "En el Colegio de Álava, porque es el lugar de su residencia habitual.",
      "En los Colegios de Álava y Gipuzkoa, uno por corresponder a su residencia habitual y el otro al lugar de su despacho.",
      "Debe colegiarse en el Colegio de Gipuzkoa, que es donde va a radicar su domicilio profesional único o principal.",
      "Debe colegiarse en Álava, pero si luego interviene en otra provincia tendrá que colegiarse también en el Colegio correspondiente del lugar donde vaya a actuar.",
    ],
  },
  {
    pregunta:
      "Teresa, abogada en ejercicio, acaba de ser contratada por un despacho de abogados muy importante que le exige exclusividad Ella ejerce como abogada del turno de oficio, pero ahora duda acerca de si debe o no renunciar a dicha labor ¿Es compatible el régimen de exclusividad con la asistencia letrada del turno de oficio? Indique la respuesta correcta:",
    respuestaCorrecta: 1,
    respuestas: [
      "Sí, es compatible con el régimen de exclusividad la prestación de asistencia letrada y defensa jurídica derivada de los servicios de asistencia jurídica gratuita.",
      "Sí, siempre y cuando en el contrato donde viene reflejado el régimen de exclusividad se haya acordado esta compatibilidad.",
      "No, porque el régimen de exclusividad hace incompatible la prestación de cualquier otro servicio de carácter jurídico.",
      "No, salvo que expresamente le autorice para ello el Colegio de Abogado a cuyo servicio de turno de oficio esté inscrita Teresa.",
    ],
  },
  {
    pregunta:
      "Andoni, abogado en ejercicio, acaba de firmar un contrato con un importante despacho que, sin embargo, le impone un pacto de no competencia para una vez extinguido el contrato ¿Qué duración máxima podría establecerse en dicho pacto de no competencia? Indique la respuesta correcta:",
    respuestaCorrecta: 3,
    respuestas: [
      "No son válidos los pactos de no competencia post-contractual en ningún caso.",
      "Dicho pacto no podrá exceder de un periodo máximo de tres años desde la finalización del contrato.",
      "Dicho pacto no podrá exceder de un periodo máximo de cinco años desde la finalización del contrato.",
      "Dicho pacto no podrá exceder de un periodo máximo de dos años desde la finalización del contrato.",
    ],
  },
  {
    pregunta:
      "Arantza acaba de recibir el título profesional de abogada, por lo que presenta su solicitud de incorporación en el Colegio de Abogados de Gipuzkoa ¿Quién deberá resolver dicha solicitud? Indique la respuesta correcta:",
    respuestaCorrecta: 3,
    respuestas: [
      "Las solicitudes de incorporación serán aprobadas mediante resolución motivada por la Decana del Colegio de Gipuzkoa, si bien deberá informar previamente la Junta de Gobierno del Colegio.",
      "Las solicitudes de incorporación serán aprobadas por la Decana del Colegio de Gipuzkoa, pero si se rechazasen, la resolución motivada ha de estar firmada por la Junta de Gobierno del Colegio.",
      "Las solicitudes de incorporación serán aprobadas mediante resolución motivada por la Decana del Colegio de Gipuzkoa, previo informe favorable de la Junta de Gobierno.",
      "Las solicitudes de incorporación serán tanto aprobadas como denegadas mediante resolución por la Junta de Gobierno del Colegio de Gipuzkoa.",
    ],
  },
  {
    pregunta:
      "Vicente acude al despacho de la abogada Lourdes para su defensa en la reclamación de una deuda que una empresa mantiene con él Respecto del abono de los honorarios por su actuación, Lourdes le indica que le cobrará un 20% del beneficio que se obtenga como resultado del pleito Vicente se pregunta si es lícito y legal pactar, como forma de remuneración de los honorarios del abogado la “cuota litis”, es decir, un tanto por ciento sobre el beneficio que resulte del asunto Indique la respuesta correcta:",
    respuestaCorrecta: 3,
    respuestas: [
      "No es lícito y es deontológicamente reprobable.",
      "Es únicamente lícito si lo prevé la Ley expresamente.",
      "Depende de la cuantía del asunto.",
      "Es completamente lícito y legal.",
    ],
  },
  {
    pregunta:
      "Juan, letrado de Tolosa, es titular de un despacho profesional individual en el que colabora, con relación laboral, Aitor, abogado también colegiado y ejerciente En uno de los asuntos en los que Aitor colaboraba con Juan, y debido exclusivamente a unas gestiones llevadas a cabo personalmente por el propio Aitor, se genera un perjuicio al cliente ¿Asumiría Juan la responsabilidad por ese error? Indique la respuesta correcta:",
    respuestaCorrecta: 0,
    respuestas: [
      "Sí, porque el abogado titular de un despacho profesional responde profesionalmente frente a su cliente de las actuaciones que efectúen sus pasantes o colaboradores.",
      "Sí, porque los honorarios a cargo del cliente se devengan a favor del titular del despacho.",
      "No, porque el abogado titular de un despacho profesional no responde profesionalmente frente a su cliente de las actuaciones que efectúen sus pasantes, salvo que expresamente se haya pactado esta condición en el contrato de los mismos.",
      "No, porque las actuaciones de los pasantes y colaboradores no están sometidas a ningún tipo de obligaciones éticas o normativas, por lo que no es posible asignarles a sus actuaciones ningún tipo de responsabilidad.",
    ],
  },
  {
    pregunta:
      "Gerardo, abogado en ejercicio y titular de un despacho individual, ha convenido con un cliente que su retribución económica se realice no por horas, sino mediante una retribución periódica fija (“iguala”) entre ellos ¿Es posible este tipo de acuerdos? Indique la respuesta correcta:",
    respuestaCorrecta: 0,
    respuestas: [
      "Sí, porque la compensación económica al abogado puede asumir la forma de retribución fija o periódica, e incluso por horas.",
      "No, porque la compensación económica al abogado sólo puede asumir la forma de retribución por horas.",
      "No, porque no es posible pactar con carácter previo a la realización de actuaciones la forma de compensación económica entre cliente y abogado.",
      "Sí, si bien Luis deberá inscribir dicho acuerdo en el Registro de su Colegio profesional para que quede constancia de esta forma de retribución.",
    ],
  },
  {
    pregunta:
      "Sandra, Abogada inscrita en el Colegio de Abogados de Gipuzkoa, es la defensora de los intereses de Alberto en un procedimiento penal seguido inicialmente en su contra ante un Juzgado de Instrucción de Donostia por un presunto delito de violencia de género por hechos acaecidos en esta capital, quien posteriormente se inhibe en favor de un Juzgado de Instrucción de Madrid, por virtud del domicilio de la víctima ¿Tiene Sandra la obligación de emplear los sistemas o aplicativos telemáticos existentes en la Administración de Justicia para los profesionales de la Justicia? Indique la respuesta correcta:",
    respuestaCorrecta: 3,
    respuestas: [
      "No, su empleo es potestativo por tratarse de un procedimiento del orden penal.",
      "Sí, es obligatorio en todos los procedimientos penales.",
      "No, la o el abogado en ningún caso tiene obligación de emplear los sistemas telemáticos de la Administración de Justicia.",
      "Si, es obligatorio desde el 1 de enero de 2016 emplear los sistemas existentes (Lexnet, justizia.sip, … etc) para la presentación de escritos y documentos y la realización de actos de comunicación procesal.",
    ],
  },
  {
    pregunta:
      "Amaia, abogada en ejercicio, ha recibido de su cliente una serie de fondos y valores durante la tramitación de un procedimiento Al ejercer la profesión en un despacho colectivo, ha ingresado dichos fondos en la cuenta bancaria del despacho, de la cual, entre otras actividades, se retrotraen las nóminas de los trabajadores o se paga a los proveedores del despacho ¿Es correcta dicha actuación? Indique la respuesta correcta:",
    respuestaCorrecta: 1,
    respuestas: [
      "Sí, si el titular del despacho le ha autorizado a ingresar dichos fondos en dicha cuenta bancaria.",
      "No, porque este fondo no puede ser confundido con otro depósito del bufete, por lo que deberá estar depositado en una cuenta específica con disposición inmediata.",
      "Sí, si el titular del despacho le ha autorizado a ingresar dichos fondos en dicha cuenta bancaria y tienen disponibilidad inmediata.",
      "No, porque este fondo no puede ser confundido con otro depósito del bufete, por lo que deberá estar en una cuenta específica tenga o no disposición inmediata.",
    ],
  },
  {
    pregunta:
      "Alfonso, abogado, contrata a otra compañera, Eva, acogiéndose a la relación laboral de carácter especial de las y los abogados, ¿cuál sería el tiempo máximo de duración del periodo de prueba si el contrato de Eva es de un año? Indique la respuesta correcta:",
    respuestaCorrecta: 2,
    respuestas: [
      "El tiempo máximo será de seis meses.",
      "El tiempo máximo será de tres meses.",
      "El tiempo máximo será de dos meses.",
      "El tiempo máximo será de un mes.",
    ],
  },
  {
    pregunta:
      "Izaskun y Carlos han aprobado el examen de acceso a la profesión de abogado Se plantean su futuro y están considerando las diferentes formas en la cuales pueden ejercer la profesión Indique la respuesta correcta:",
    respuestaCorrecta: 1,
    respuestas: [
      "Pueden ejercer la profesión de manera individual, por cuenta propia o por cuenta ajena.",
      "Pueden ejercer la profesión de manera individual bien por cuenta propia o por cuenta ajena, o de manera colectiva mediante la agrupación bajo cualquiera de las fórmulas lícitas en derecho, incluidas las sociedades mercantiles.",
      "Pueden ejercer de manera individual por cuenta propia o por cuenta ajena, y de manera colectiva agrupados en una Comunidad de Bienes.",
      "Pueden ejercer de manera colectiva o de manera individual, por cuenta propia o por cuenta ajena, y en este último caso, su relación laboral será a tenor de lo establecido en el Estatuto de los Trabajadores ya que no existe una regulación especial.",
    ],
  },
  {
    pregunta:
      "Susana, Pedro y Alicia quieren ejercer colectivamente la abogacía, constituyendo una sociedad mercantil ¿Deben constituirse como sociedad profesional?:",
    respuestaCorrecta: 0,
    respuestas: [
      "Sí, independientemente de la forma social que adopten.",
      "No, ya que pueden acogerse a cualquiera de las formas mercantiles existentes.",
      "Sí, siempre que vayan a tener colaboradores o pasantes en régimen de derecho laboral.",
      "No, ya que los abogados están exentos de la obligación de constituirse como sociedad profesional.",
    ],
  },
  {
    pregunta:
      "Edurne es clienta habitual de Andrés, abogado de su confianza con el que lleva trabajando muchos años En fecha reciente, Edurne encomienda a Andrés que le lleve un nuevo asunto y le pide firmar, con anterioridad, una hoja de encargo para conocer con seguridad el importe de los honorarios y su forma de pago ¿Cuál es la actuación que debería tener Andrés ante esta solicitud de hoja de encargo?:",
    respuestaCorrecta: 1,
    respuestas: [
      "Debe de negarse porque supone una desconfianza impropia en las relaciones entre abogado y cliente.",
      "Debe suscribir la hoja de encargo porque su cliente se lo pide.",
      "Debe suscribirla porque es una obligación de los abogados en todos los casos firmar una hoja de encargo, aunque no se lo hubiera solicitado Maite.",
      "Debe negarse porque para eso están los criterios orientadores para tasaciones de costas.",
    ],
  },
  {
    pregunta:
      "Víctor gana un juicio en el que se percibe una indemnización de 60500 € Su cliente Juan le había hecho una provisión de fondos a cuenta de sus honorarios de 2000 € El procurador entrega a Víctor los referidos 60500 € La minuta final de Víctor es de 5000 € Manuel lo comunica a su cliente para que pase por su despacho y hacerle entrega de los recibos correspondientes a su minuta y liquidación de las diferencias a su favor Como su cliente no acude a la cita le hace llegar por transferencia el importe de 57500 € tras descontar los 3000 € pendientes de su minuta Indique la respuesta correcta:",
    respuestaCorrecta: 2,
    respuestas: [
      "La detracción de honorarios efectuada por Manuel es correcta porque comunicó al cliente el importe de la indemnización y el de su minuta.",
      "La detracción de honorarios efectuada por Manuel es correcta porque había recibido una provisión de fondos a cuenta de honorarios.",
      "La detracción de honorarios efectuada por Manuel es incorrecta porque no tuvo el consentimiento expreso del cliente para descontar sus honorarios de la indemnización.",
      "La detracción de honorarios efectuada por Manuel es correcta porque se trataba de cantidades percibidas en concepto de indemnización",
    ],
  },
  {
    pregunta:
      "Susana, Pedro y Alicia deciden finalmente constituir una sociedad profesional e integrar en ella un procurador para ofertar y prestar a los clientes un servicio integral de defensa y representación ¿Es esto posible?:",
    respuestaCorrecta: 2,
    respuestas: [
      "No, porque las sociedades formadas para realizar actividades profesionales nunca pueden integrar a socios que se dediquen a otra actividad.",
      "Sí, ya que es posible que la actividad de la sociedad sea multidisciplinar.",
      "No, ya que el desempeño de la actividad de abogado y procurador es incompatible según la ley.",
      "Sí, ya que la legislación mercantil no establece ninguna limitación en función de la actividad a la que se dediquen los socios.",
    ],
  },
  {
    pregunta:
      "Bernardo, abogado en ejercicio, ejerce la abogacía por cuenta propia y como titular de su propio despacho individual Sin embargo, y con el objetivo de ahorrar costes, decide compartir las instalaciones con su amiga de la universidad Laura, quien también ejerce la abogacía por cuenta propia ¿Mantendrá Bernardo en ese caso su condición de titular de despacho individual? Indique la respuesta correcta:",
    respuestaCorrecta: 1,
    respuestas: [
      "No, en caso de compartir los locales o las instalaciones perderá su condición de abogado que ejerce como titular de su propio despacho individual, en cualquier caso.",
      "Sí, Bernardo mantendrá su condición de titular de su propio despacho individual aun cuando comparta las instalaciones con Laura siempre y cuando mantengan la independencia de sus bufetes, sin identificación conjunta de los mismos ante la clientela.",
      "No, porque en caso de compartir los locales o las instalaciones se produciría una identificación automática de ambos despachos ante la clientela, por lo que perderán ambos la condición de titulares de despacho individual.",
      "Sí, si bien Bernardo deberá informar previamente al Colegio de Abogados al que pertenece sobre tales circunstancias para que quede constancia de esta condición.",
    ],
  },
  {
    pregunta:
      "Andrea ha superado el máster de acceso a la profesión de abogado y la prueba de aptitud profesional de la abogacía, teniendo intención de ejercer como abogada en un despacho sito en Donostia, pero sin acudir a tribunales, por lo que ha decidido no colegiarse en el Colegio de Abogados de Gipuzkoa ¿Es ello posible?",
    respuestaCorrecta: 0,
    respuestas: [
      "No, porque para el ejercicio de la abogacía es obligatoria la colegiación en un Colegio de Abogados.",
      "No, aunque podrá colegiarse como no ejerciente.",
      "Sí, porque la colegiación es obligatoria únicamente si se quiere ejercer ante cualquier clase de Tribunales.",
      "Sí, porque la colegiación es voluntaria.",
    ],
  },
  {
    pregunta:
      "Agustín, abogado en ejercicio, ha ejercido la representación de un cliente en un procedimiento civil que concluye con la subasta pública de bienes ¿Podría adquirir Agustín alguno de estos bienes? Indique la respuesta correcta:",
    respuestaCorrecta: 3,
    respuestas: [
      "No, si los bienes subastados pertenecían a su cliente, pero sí si son de la parte contraria.",
      "Sí, si los bienes subastados pertenecían a su cliente, pero no si son de la parte contraria.",
      "Sí, Agustín podrá adquirir los bienes al margen de su pertenencia.",
      "No, Agustín no podrá comprar ningún bien que se subaste proveniente de un litigio en el que haya intervenido",
    ],
  },
  {
    pregunta:
      "Pedro, abogado, tiene su despacho en Gipuzkoa donde está colegiado y recibe el encargo de asumir la defensa de un asunto judicial que se tramita en los Juzgados de Barcelona ¿Puede Pedro asumir, sin más trámites colegiales, la defensa de este asunto fuera del ámbito territorial de su colegio?:",
    respuestaCorrecta: 0,
    respuestas: [
      "Sí, puede llevar sin más trámites la defensa jurídica del asunto judicial de Barcelona.",
      "Sí, puede llevar la defensa de este asunto, pero para ello deberá comunicar previamente su actuación profesional al Colegio de Abogados de Barcelona.",
      "No puede asumir la defensa de este asunto, ya que se encuentra fuera del ámbito territorial de su propio colegio de abogados, salvo que se colegie en el de Barcelona.",
      "No, debe pedir previamente autorización al Decano de su Colegio.",
    ],
  },
  {
    pregunta:
      "Un abogado mantiene una relación profesional con un mismo cliente durante varios años, habiéndole encomendado éste un asunto, existiendo entre ambos un acuerdo, reflejado en hoja de encargo en la que se reflejan el modo de pago de los honorarios del Letrado El acuerdo refleja el abono de una cantidad en concepto de provisión de fondos en el momento de iniciarse el procedimiento y un último pago al finalizar el procedimiento judicial Por problemas económicos el cliente no llega a abonar la totalidad del primer pago, decidiendo el abogado continuar con la tramitación del asunto hasta obtener la sentencia Iniciado el procedimiento la parte demandada se allana a las pretensiones del demandante procediendo a consignar judicialmente una cantidad que supera la cuantía de los honorarios adeudados al abogado ¿Qué debe hacer el Letrado con este importe consignado? Indique la respuesta correcta:",
    respuestaCorrecta: 1,
    respuestas: [
      "Deberá cobrar sus honorarios del importe consignado, entregando al cliente la cantidad sobrante.",
      "Deberá entregar al cliente el 100% de la cantidad consignada, continuando con la reclamación de sus honorarios.",
      "Podrá cobrar sus honorarios del importe de la cantidad consignada, entregando al cliente el importe sobrante siempre y cuando se haga a través del procurador.",
      "Sólo entregará a su cliente la cantidad consignada cuando éste haya abonado sus honorarios profesionales.",
    ],
  },
];
