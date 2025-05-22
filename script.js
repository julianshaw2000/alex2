
const clientKey = "broadland"; // or get from URL
const data = CLIENTS[clientKey];

// Site title
document.title = data.siteTitle;
document.querySelectorAll(".sitename").forEach(el => el.textContent = data.siteTitle);

// Hero
const heroSlides = document.querySelectorAll("#hero-carousel .carousel-item");
heroSlides.forEach((slide, i) => {
  slide.querySelector("h2").textContent = data.hero[i].title;
  slide.querySelector("p").textContent = data.hero[i].desc;
});

// About section
document.querySelector(".inner-title").textContent = data.about.header;
document.querySelector(".our-story h4").textContent = data.about.est;
document.querySelector(".our-story h3").textContent = data.about.subtitle;
document.querySelector(".our-story > p").textContent = data.about.desc;

const aboutList = document.querySelector(".our-story ul");
aboutList.innerHTML = data.about.services
  .map(service => `<li><i class="bi bi-check-circle"></i><span>${service}</span></li>`)
  .join("");

// Footer
document.querySelector("footer strong").textContent = data.footer.contact;
document.querySelector("footer .footer-contact").innerHTML = `
  <p><strong>Phone JA:</strong> ${data.footer.phoneJA}</p>
  <p><strong>Phone BD:</strong> ${data.footer.phoneBD}</p>
  <p><strong>Email:</strong> <a href="mailto:${data.footer.email}">${data.footer.email}</a></p>
`;
