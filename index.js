
var translations = {
    "en": {
        "about-me": "About me:",
        "about": "Born and raised in Madrid (Spain) I've been programming from an early age, always looking for the simplification of daily tasks. This way I came up with the idea of lemonSW.",
        "subtitle": "Student and part-time freelancer.",
        "highschool": "Graduated of Bachillerato de Excelencia of science from I.E.S. el Burgo de las Rozas.",
        "upm": "Currently studying Grado en Ingeniería y Servicios de las Telecomunicaciones in the UPM."
    },
    "es": {
        "about-me": "Sobre mi:",
        "about": "Nacido en Madrid, me he dedicado a la programación desde pequeño. Me apasiona aprender cosas nuevas e involucrarme en proyectos que implican superación tanto personal como grupal.",
        "subtitle": "Estudiante y freelancer a tiempo parcial.",
        "highschool": `Graduado en <i>Bachillerato de Excelencia</i> en ciencias por el <a href="https://www.educa2.madrid.org/web/iesburgoiecheverria.lasrozas">IES El Burgo</a>.`,
        "upm": `Actualmente estudiando <i>Grado en Ingeniería y Servicios de las Telecomunicaciones</i> en la <a href="https://www.upm.es/">UPM</a>.`
    }
};

if (navigator.languages.includes('es')) {
    var lang = translations['es'];
} else {
    var lang = translations['en'];
}
Object.keys(lang).forEach((n) => {
    document.getElementById(n).innerHTML = lang[n];
});
feather.replace();