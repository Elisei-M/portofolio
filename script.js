// Obiect de traduceri
const translations = {
  en: {
    pageTitle: "My Portfolio",
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    homeTitle: "Welcome to my Portfolio!",
    homeIntro: "I am [Your Name], a passionate web developer. Here you can find my projects, skills, and experiences.",
    aboutTitle: "About Me",
    aboutText: "I specialize in front-end development using HTML, CSS, and JavaScript. I love creating beautiful and functional web applications.",
    projectsTitle: "My Projects",
    project1Title: "Project One",
    project1Desc: "A brief description of Project One.",
    project1Link: "View Project",
    contactTitle: "Contact Me",
    contactText: "Feel free to reach out via email at youremail@example.com or follow me on social media.",
    footerText: "Created by [Your Name].",
    // Poți adăuga alte chei după nevoie
  },
  ro: {
    pageTitle: "Portofoliul Meu",
    navHome: "Acasă",
    navAbout: "Despre mine",
    navProjects: "Proiecte",
    navContact: "Contact",
    homeTitle: "Bine ai venit la portofoliul meu!",
    homeIntro: "Sunt [Numele Tău], un dezvoltator web pasionat. Aici poți găsi proiectele, abilitățile și experiențele mele.",
    aboutTitle: "Despre mine",
    aboutText: "Mă specializez în dezvoltarea front-end cu HTML, CSS și JavaScript. Îmi place să creez aplicații web frumoase și funcționale.",
    projectsTitle: "Proiectele mele",
    project1Title: "Proiectul Unu",
    project1Desc: "O scurtă descriere a Proiectului Unu.",
    project1Link: "Vezi Proiectul",
    contactTitle: "Contact",
    contactText: "Nu ezita să mă contactezi prin email la youremail@example.com sau pe rețelele sociale.",
    footerText: "Creat de [Numele Tău]."
  }
};

// Limba implicită
let currentLang = "en";

// Actualizează textele din pagină
function updateTexts() {
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
  document.title = translations[currentLang]["pageTitle"];
}

// Schimbare limbă la click pe butonul de toggle
document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ro" : "en";
  updateTexts();
  document.getElementById("lang-toggle").textContent = currentLang === "en" ? "Română" : "English";
});

// Inițializare texte la încărcare
updateTexts();
