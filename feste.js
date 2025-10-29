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
  ` <p>Hauptsaison im Frühjahr (ca. März bis April), landesweit in
                  Parks mit Kirschblütenbäumen (z. B. Ueno Park in Tokio,
                  Maruyama Park in Kyoto)<br /><br />
                  Hanami bedeutet wörtlich „Blüten anschauen“. Menschen
                  versammeln sich unter den Blütenbäumen, um die kurze
                  Blütenzeit zu feiern. Oft werden Picknicks mit Freundinnen und
                  Freunden oder Familie veranstaltet, manchmal auch
                  Nachbarschaften. Es ist ein Fest der Vergänglichkeit und des
                  neuerblühenden Lebens, oft begleitet von Musik, Fotografie und
                  poetischen Momenten. In vielen Städten gibt es beleuchtete
                  Kirschbäume am Abend (yozakura). <br/><br/>Traditionell wird die
                  Schönheit der Natur zelebriert und man reflektiert über das
                  Vergängliche. Kommerzielle Feiern gibt es in Form von
                  Festivals, Verkaufsständen und Sparkling-Events, doch der Kern
                  bleibt die Natur.
                </p>`,
  `<br/><br/>Das Fest findet im Juli in Kyoto statt (Hauptprozessionen am 17. und 24. Juli; der Umzug ist der berühmteste Teil). Ursprünglich war es ein Reinigungsritual gegen Unglück und Feuer. Mit der Zeit entwickelte es sich zum größten Fest Japans. <br/><br/>Charakteristisch sind prächtige Umzüge mit prachtvollen yama- und hoko-Fahrzeugen, reich verziert und oft mehrere Meter hoch. Traditionelle Musik, Tanzaufführungen und verschiedene Trachten gehören dazu.<br/><br/> Die Vorbereitungen beginnen Monate vorher mit beliebten Veranstaltungen in der Stadt. Das Fest stärkt Gemeinschaftssinn, zieht Besucher aus aller Welt an und bietet Einblicke in Kyoto als kulturelle Hauptstadt Japans.`,
  `<br/><br/>Es findet je nach Region im August oder Juli statt und wird landesweit in Tempeln, Schreinen und Festhallen gefeiert. <br/><br/>Obon ist ein buddhistischer Feiertag, der die zurückkehrenden Geister der Ahnen ehren soll. Traditionell gibt es Suppen- und Festmähzeiten, Laternen und Tänze wie Bon Odori.<br/><br/> Menschen besuchen Familiengräber, bereiten Andenken und Speisen zu. In Dörfern und Städten finden Tanzveranstaltungen und Feuerwerke statt. Die Leuchtschnuppen- und Laternenprozessionen führen die Geisterwanderung symbolisch zurück.<br/><br/> Es ist eine Zeit der Erinnerung, des Zusammenkommens und des Dankes.`,
  ` <br/><br/>Es findet in der Zeit vom 1. bis 3. Januar landesweit in Häusern, Tempeln, Schreinen und Geschäften statt. Das Fest markiert den Beginn des neuen Jahres. <br/><br/>Typische Rituale sind das Zählen der Glockenschläge, Tempel- bzw. Schreinsbesuch (Hatsumode), das Essen spezieller Neujahrsgerichte (osechi-ryori) und das Öffnen von Glückwünschen. Familien treffen sich, um gemeinsam zu essen, Pläne zu schmieden und sich zu besinnen.<br/><br/> Traditionelle Glücksbringer wie Daruma-Figuren werden besorgt und Farbrausch der Displays bringt Fröhlichkeit in die Städte. Man wünscht Gesundheit, Glück und Erfolg im kommenden Jahr.`,
  `Je nach Region wird es im Juli oder August gefeiert. Es findet in Städten wie Sendai (Tanzaku-Wünsche am Tanabata-Fest) und überall in Japans Schreinen und Parks statt. <br/><br/>Tanabata basiert auf einer Astrologie- / Legende der Liebesgötter Vega und Altair. Menschen schreiben Wünsche auf bunte Zettel (tanzaku) und hängen sie an Bambussträucher.<br/><br/> Das Fest wird oft mit Paraden, Bühnenprogrammen und handwerklichen Ständen verbunden. In vielen Städten gibt es beeindruckende Licht- und Farbenfeste, die die Fantasie anregen. <br/><br/>Traditionell wird der Wunsch an den Bambus geschrieben, und der Bambus bleibt oft bis zur nächsten Tanabata bestehen. Es symbolisiert Hoffnung, Träume und die Verbindung von Menschen, Natur und Sternen.`,
];
const textform = document.querySelector(".showText");
function showText(num) {
  textform.style.display = "block";
  textform.innerHTML = festeArray[num];
}
