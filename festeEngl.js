(() => {
  const track = document.getElementById("track");
  const wrap = track.parentElement;
  const cards = Array.from(track.children);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotsBox = document.getElementById("dots");

  const isMobile = () => matchMedia("(max-width:767px)").matches;

  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => activate(i, true);
    dotsBox.appendChild(dot);
  });
  const dots = Array.from(dotsBox.children);

  let current = 0;

  function center(i) {
    const card = cards[i];
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrap.scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: "smooth",
    });
  }

  function toggleUI(i) {
    cards.forEach((c, k) => c.toggleAttribute("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
    prev.disabled = i === 0;
    next.disabled = i === cards.length - 1;
  }

  function activate(i, scroll) {
    if (i === current) return;
    current = i;
    toggleUI(i);
    if (scroll) center(i);
  }

  function go(step) {
    activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
  }

  prev.onclick = () => go(-1);
  next.onclick = () => go(1);

  addEventListener(
    "keydown",
    (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    },
    { passive: true }
  );

  cards.forEach((card, i) => {
    card.addEventListener(
      "mouseenter",
      () => matchMedia("(hover:hover)").matches && activate(i, true)
    );
    card.addEventListener("click", () => activate(i, true));
  });

  let sx = 0,
    sy = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
        go((isMobile() ? dy : dx) > 0 ? -1 : 1);
    },
    { passive: true }
  );
  if (window.matchMedia("(max-width:767px)").matches) dotsBox.hidden = true;

  addEventListener("resize", () => center(current));

  toggleUI(0);
  center(0);
})();

const festeArray = [
  `<p>Peak season in spring (approximately March to April), nationwide in
parks with cherry blossom trees (e.g., Ueno Park in Tokyo,
Maruyama Park in Kyoto)<br /><br />
Hanami literally means "flower viewing." People
gather under the flowering trees to celebrate the short
blossoming season. Picnics with friends and
family, and sometimes even entire neighborhoods, are often held. It is a celebration of transience and
newly blossoming life, often accompanied by music, photography, and
poetic moments. In many cities, there are illuminated
cherry trees in the evening (yozakura). <br/><br/>Traditionally, the
beauty of nature is celebrated, and people reflect on
the ephemeral nature of life. Commercial celebrations exist in the form of
festivals, stalls, and sparkling events, but the core
remains nature. 
</p>`,
  `<br/><br/>The festival takes place in Kyoto in July (main processions on July 17th and 24th; the parade is the most famous part). Originally, it was a purification ritual against misfortune and fire. Over time, it developed into the largest festival in Japan. <br/><br/>Characteristic features include magnificent parades with splendid yama and hoko floats, richly decorated and often several meters high. Traditional music, dance performances, and various costumes are also part of the festivities.<br/><br/> Preparations begin months in advance with popular events throughout the city. The festival strengthens community spirit, attracts visitors from all over the world, and offers insights into Kyoto as the cultural capital of Japan.`,
  `<br/><br/>It takes place in August or July depending on the region and is celebrated nationwide in temples, shrines, and festival halls. <br/><br/>Obon is a Buddhist holiday intended to honor the returning spirits of ancestors. Traditionally, there are soup and festive meals, lanterns, and dances such as Bon Odori.<br/><br/> People visit family graves, prepare offerings and food. Dance events and fireworks take place in villages and cities. The processions of glowing lanterns and floating lights symbolically guide the spirits back.<br/><br/> It is a time of remembrance, coming together, and gratitude.`,
  ` <br/><br/>It takes place nationwide from January 1st to 3rd in homes, temples, shrines, and shops. The festival marks the beginning of the new year. <br/><br/>Typical rituals include counting the bell strokes, visiting temples or shrines (Hatsumode), eating special New Year's dishes (osechi-ryori), and exchanging New Year's greetings. Families gather to eat together, make plans, and reflect.<br/><br/> Traditional good luck charms such as Daruma dolls are acquired, and the vibrant displays bring cheer to the cities. People wish for health, happiness, and success in the coming year.`,
  `Depending on the region, it is celebrated in July or August. It takes place in cities like Sendai (Tanabata festival with tanzaku wishes) and everywhere in Japan's shrines and parks. <br/><br/>Tanabata is based on an astrological legend of the love gods Vega and Altair. People write wishes on colorful slips of paper (tanzaku) and hang them on bamboo branches.<br/><br/> The festival is often associated with parades, stage performances, and craft stalls. In many cities, there are impressive light and color festivals that stimulate the imagination. <br/><br/>Traditionally, the wish is written on the bamboo, and the bamboo often remains until the next Tanabata. It symbolizes hope, dreams, and the connection between people, nature, and the stars.`,
];
const textform = document.querySelector(".showText");
function showText(num) {
  textform.style.display = "block";
  textform.innerHTML = festeArray[num];
}
