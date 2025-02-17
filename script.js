// Obiect de traduceri
const translations = {
  en: {
    pageTitle: "My Portfolio",
    navLogo: "YourName",
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    homeTitle: "Welcome to My Portfolio!",
    homeSubtitle: "I'm [Your Name], a passionate web developer.",
    aboutTitle: "About Me",
    aboutText: "I am a web developer with experience in HTML, CSS, JavaScript, and modern frameworks. I love creating interactive and responsive web applications.",
    experienceTitle: "Experience",
    exp1Title: "Web Developer at Company A",
    exp1Duration: "Jan 2020 - Present",
    exp1Desc: "Working on front-end development, building responsive interfaces and enhancing user experience.",
    exp2Title: "Intern at Company B",
    exp2Duration: "Jun 2019 - Dec 2019",
    exp2Desc: "Assisted in web application development and learned full-stack development skills.",
    projectsTitle: "Projects",
    project1Title: "Project One",
    project1Desc: "A brief description of Project One.",
    project1Link: "View Project",
    project2Title: "Project Two",
    project2Desc: "A brief description of Project Two.",
    project2Link: "View Project",
    contactTitle: "Contact",
    contactText: "Feel free to reach out via email at youremail@example.com or connect with me on social media.",
    footerText: "Created by [Your Name]. | GitHub Profile"
  },
  ro: {
    pageTitle: "Portofoliul Meu",
    navLogo: "NumeleTău",
    navHome: "Acasă",
    navAbout: "Despre mine",
    navExperience: "Experiență",
    navProjects: "Proiecte",
    navContact: "Contact",
    homeTitle: "Bine ai venit la Portofoliul Meu!",
    homeSubtitle: "Sunt [Numele Tău], un dezvoltator web pasionat.",
    aboutTitle: "Despre mine",
    aboutText: "Sunt dezvoltator web cu experiență în HTML, CSS, JavaScript și framework-uri moderne. Îmi place să creez aplicații web interactive și responsive.",
    experienceTitle: "Experiență",
    exp1Title: "Dezvoltator Web la Compania A",
    exp1Duration: "Ian 2020 - Prezent",
    exp1Desc: "Lucrez la dezvoltarea front-end, creând interfețe responsive și îmbunătățind experiența utilizatorilor.",
    exp2Title: "Intern la Compania B",
    exp2Duration: "Iun 2019 - Dec 2019",
    exp2Desc: "Am asistat la dezvoltarea aplicațiilor web și am învățat abilități de dezvoltare full-stack.",
    projectsTitle: "Proiecte",
    project1Title: "Proiectul Unu",
    project1Desc: "O scurtă descriere a Proiectului Unu.",
    project1Link: "Vezi Proiectul",
    project2Title: "Proiectul Doi",
    project2Desc: "O scurtă descriere a Proiectului Doi.",
    project2Link: "Vezi Proiectul",
    contactTitle: "Contact",
    contactText: "Nu ezita să mă contactezi prin email la youremail@example.com sau pe rețelele sociale.",
    footerText: "Creat de [Numele Tău]. | Profil GitHub"
  }
};

let currentLang = "en";

function updateTexts() {
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
  document.title = translations[currentLang]["pageTitle"];
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ro" : "en";
  updateTexts();
  document.getElementById("lang-toggle").textContent = currentLang === "en" ? "Română" : "English";
});

updateTexts();
