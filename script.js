const verbos = [
  // Grupo A
  { grupo: "a", infinitive: "bring", past: "brought", participle: "brought", spanish: "traer" },
  { grupo: "a", infinitive: "buy", past: "bought", participle: "bought", spanish: "comprar" },
  { grupo: "a", infinitive: "catch", past: "caught", participle: "caught", spanish: "coger" },
  { grupo: "a", infinitive: "fight", past: "fought", participle: "fought", spanish: "pelear" },
  { grupo: "a", infinitive: "think", past: "thought", participle: "thought", spanish: "pensar" },
  { grupo: "a", infinitive: "teach", past: "taught", participle: "taught", spanish: "enseñar" },

  // Grupo B
  { grupo: "b", infinitive: "keep", past: "kept", participle: "kept", spanish: "guardar" },
  { grupo: "b", infinitive: "meet", past: "met", participle: "met", spanish: "conocer personas" },
  { grupo: "b", infinitive: "feel", past: "felt", participle: "felt", spanish: "sentir" },
  { grupo: "b", infinitive: "sleep", past: "slept", participle: "slept", spanish: "dormir" },
  { grupo: "b", infinitive: "leave", past: "left", participle: "left", spanish: "dejar, salir" },

  // Grupo C
  { grupo: "c", infinitive: "spend", past: "spent", participle: "spent", spanish: "gastar" },
  { grupo: "c", infinitive: "send", past: "sent", participle: "sent", spanish: "enviar" },
  { grupo: "c", infinitive: "build", past: "built", participle: "built", spanish: "construir" },
  { grupo: "c", infinitive: "lend", past: "lent", participle: "lent", spanish: "prestar" },

  // Grupo D
  { grupo: "d", infinitive: "sell", past: "sold", participle: "sold", spanish: "vender" },
  { grupo: "d", infinitive: "tell", past: "told", participle: "told", spanish: "decir, contar" },

  // Grupo E
  { grupo: "e", infinitive: "find", past: "found", participle: "found", spanish: "encontrar" },
  { grupo: "e", infinitive: "have", past: "had", participle: "had", spanish: "tener" },
  { grupo: "e", infinitive: "hear", past: "heard", participle: "heard", spanish: "oír" },
  { grupo: "e", infinitive: "hold", past: "held", participle: "held", spanish: "sostener" },
  { grupo: "e", infinitive: "read", past: "read", participle: "read", spanish: "leer", pronunciation: { past: "red", participle: "red" } },
  { grupo: "e", infinitive: "say", past: "said", participle: "said", spanish: "decir" },

  // Grupo F
  { grupo: "f", infinitive: "put", past: "put", participle: "put", spanish: "poner" },
  { grupo: "f", infinitive: "cut", past: "cut", participle: "cut", spanish: "cortar" },
  { grupo: "f", infinitive: "let", past: "let", participle: "let", spanish: "permitir" },
  { grupo: "f", infinitive: "cost", past: "cost", participle: "cost", spanish: "costar" },
  { grupo: "f", infinitive: "shut", past: "shut", participle: "shut", spanish: "cerrar" },
  { grupo: "f", infinitive: "hurt", past: "hurt", participle: "hurt", spanish: "herir" },

  // Grupo G
  { grupo: "g", infinitive: "win", past: "won", participle: "won", spanish: "ganar" },
  { grupo: "g", infinitive: "make", past: "made", participle: "made", spanish: "hacer" },

  // Grupo H
  { grupo: "h", infinitive: "lose", past: "lost", participle: "lost", spanish: "perder" },
  { grupo: "h", infinitive: "shoot", past: "shot", participle: "shot", spanish: "disparar" },
  { grupo: "h", infinitive: "get", past: "got", participle: "got", spanish: "obtener" },
  { grupo: "h", infinitive: "sit", past: "sat", participle: "sat", spanish: "sentarse" },

  // Grupo I
  { grupo: "i", infinitive: "pay", past: "paid", participle: "paid", spanish: "pagar" },
  { grupo: "i", infinitive: "make", past: "made", participle: "made", spanish: "hacer" },

  // Grupo J
  { grupo: "j", infinitive: "understand", past: "understood", participle: "understood", spanish: "entender" },
  { grupo: "j", infinitive: "stand", past: "stood", participle: "stood", spanish: "pararse" },

  // Grupo K
  { grupo: "k", infinitive: "learn", past: "learnt", participle: "learnt", spanish: "aprender" },
  { grupo: "k", infinitive: "dream", past: "dreamt", participle: "dreamt", spanish: "soñar" },
  { grupo: "k", infinitive: "mean", past: "meant", participle: "meant", spanish: "significar, querer decir" },
  { grupo: "k", infinitive: "burn", past: "burnt", participle: "burnt", spanish: "quemar" },
  { grupo: "k", infinitive: "smell", past: "smelt", participle: "smelt", spanish: "oler" },

  // Grupo L
  { grupo: "l", infinitive: "blow", past: "blew", participle: "blown", spanish: "soplar" },
  { grupo: "l", infinitive: "fly", past: "flew", participle: "flown", spanish: "volar" },
  { grupo: "l", infinitive: "grow", past: "grew", participle: "grown", spanish: "sembrar, cultivar" },
  { grupo: "l", infinitive: "know", past: "knew", participle: "known", spanish: "saber, conocer" },
  { grupo: "l", infinitive: "throw", past: "threw", participle: "thrown", spanish: "lanzar" },
  { grupo: "l", infinitive: "draw", past: "drew", participle: "drawn", spanish: "dibujar" },

  // Grupo M
  { grupo: "m", infinitive: "begin", past: "began", participle: "begun", spanish: "comenzar" },
  { grupo: "m", infinitive: "drink", past: "drank", participle: "drunk", spanish: "beber" },
  { grupo: "m", infinitive: "ring", past: "rang", participle: "rung", spanish: "sonar" },
  { grupo: "m", infinitive: "sing", past: "sang", participle: "sung", spanish: "cantar" },
  { grupo: "m", infinitive: "swim", past: "swam", participle: "swum", spanish: "nadar" },
  { grupo: "m", infinitive: "run", past: "run", participle: "run", spanish: "correr" },

  // Grupo N
  { grupo: "n", infinitive: "eat", past: "ate", participle: "eaten", spanish: "comer" },
  { grupo: "n", infinitive: "fall", past: "fell", participle: "fallen", spanish: "caer" },
  { grupo: "n", infinitive: "forgive", past: "forgave", participle: "forgiven", spanish: "perdonar" },
  { grupo: "n", infinitive: "give", past: "gave", participle: "given", spanish: "dar" },
  { grupo: "n", infinitive: "see", past: "saw", participle: "seen", spanish: "ver" },
  { grupo: "n", infinitive: "take", past: "took", participle: "taken", spanish: "coger, llevar" },
  { grupo: "n", infinitive: "do", past: "did", participle: "done", spanish: "hacer" },

  // Grupo O
  { grupo: "o", infinitive: "swear", past: "swore", participle: "sworn", spanish: "jurar" },
  { grupo: "o", infinitive: "wear", past: "wore", participle: "worn", spanish: "vestir" },

  // Grupo P
  { grupo: "p", infinitive: "become", past: "became", participle: "become", spanish: "llegar a ser" },
  { grupo: "p", infinitive: "come", past: "came", participle: "come", spanish: "venir" },

  // Grupo Q
  { grupo: "q", infinitive: "drive", past: "drove", participle: "driven", spanish: "conducir" },
  { grupo: "q", infinitive: "ride", past: "rode", participle: "ridden", spanish: "montar" },
  { grupo: "q", infinitive: "write", past: "wrote", participle: "written", spanish: "escribir" },

  // Grupo R
  { grupo: "r", infinitive: "bite", past: "bit", participle: "bitten", spanish: "morder" },
  { grupo: "r", infinitive: "hide", past: "hid", participle: "hidden", spanish: "esconder" },

  // Grupo S
  { grupo: "s", infinitive: "break", past: "broke", participle: "broken", spanish: "romper" },
  { grupo: "s", infinitive: "choose", past: "chose", participle: "chosen", spanish: "escoger" },
  { grupo: "s", infinitive: "forget", past: "forgot", participle: "forgotten", spanish: "olvidar" },
  { grupo: "s", infinitive: "speak", past: "spoke", participle: "spoken", spanish: "hablar" },
  { grupo: "s", infinitive: "steal", past: "stole", participle: "stolen", spanish: "robar" },

];

function pronunciar(texto, idioma, alternativo) {
  const utterance = new SpeechSynthesisUtterance(alternativo || texto);
  utterance.lang = idioma === "es" ? "es-MX" : "en-US";
  window.speechSynthesis.speak(utterance);
}

const tabla = document.getElementById("verbTable");

let grupoActual = "";

verbos.forEach(verb => {
  if (verb.grupo !== grupoActual) {
    grupoActual = verb.grupo;

    const filaTitulo = document.createElement("tr");
    const celdaTitulo = document.createElement("td");
    celdaTitulo.colSpan = 4;
    celdaTitulo.textContent = `GROUP ${grupoActual.toUpperCase()}`;
    celdaTitulo.className = "group-title";
    filaTitulo.appendChild(celdaTitulo);
    tabla.appendChild(filaTitulo);
  }

  const fila = document.createElement("tr");
  fila.classList.add(`grupo-${verb.grupo}`);

  ["infinitive", "past", "participle", "spanish"].forEach(key => {
    const celda = document.createElement("td");
    celda.textContent = verb[key];
    celda.onclick = () => {
      const idioma = key === "spanish" ? "es" : "en";
      const altPronunciation = verb.pronunciation?.[key];
      pronunciar(verb[key], idioma, altPronunciation);
    };
    fila.appendChild(celda);
  });

  tabla.appendChild(fila);
});