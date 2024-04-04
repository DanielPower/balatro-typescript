import { JSDOM } from "jsdom";
import { Joker } from "../src/jokers";

const fetchWithCache = async (url: string) => {
  const filePath = `/tmp/balatroscraper/${url.replace(
    /[^a-z0-9]/gi,
    "_",
  )}.html`;
  const file = Bun.file(filePath);
  if (await file.exists()) {
    return await file.text();
  }
  const response = await fetch(url);
  const text = await response.text();
  Bun.write(filePath, text);
  return text;
};

const jokersPage = await fetchWithCache(
  "https://balatrogame.fandom.com/wiki/Jokers",
);
const document = new JSDOM(jokersPage).window.document;
const jokerRows = Array.from(document.querySelectorAll("tr")).slice(1);

const toSnakeCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/[^a-z0-9_]/g, "");

const jokers: { [key: string]: Joker } = {};
for (const row of jokerRows) {
  const cells = Array.from(row.querySelectorAll("td"));
  const jokerPageHref = cells[1].querySelector("a")!.href;
  const jokerPage = await fetchWithCache(
    `https://balatrogame.fandom.com${jokerPageHref}`,
  );
  const jokerDocument = new JSDOM(jokerPage).window.document;
  const name = jokerDocument
    .querySelector(".mw-page-title-main")!
    .textContent!.slice(0, -" (Joker)".length);
  const effect = jokerDocument
    .querySelector('[data-source="effect"]')!
    .textContent!.trim()
    .replace("  ", " ");
  const rarity = jokerDocument
    .querySelector('[data-source="rarity"]')!
    .textContent!.trim()
    .toLowerCase() as Joker["rarity"];
  const type = jokerDocument
    .querySelector('[data-source="type"]')!
    .querySelector(".pi-data-value")!
    .textContent!.trim()
    .toLowerCase() as Joker["type"];
  const buyPrice = parseInt(
    jokerDocument
      .querySelector('[data-source="buyprice"]')!
      .textContent!.trim()
      .replace(/[^0-9]/g, ""),
    10,
  );
  const sellPrice = parseInt(
    jokerDocument
      .querySelector('[data-source="sellprice"]')!
      .textContent!.trim()
      .replace(/[^0-9]/g, ""),
    10,
  );
  const imageUrl = jokerDocument
    .querySelector(".pi-image-thumbnail")!
    .getAttribute("src")!
    .replace(/\/revision\/.*/, "");
  const unlockRequirement = jokerDocument
    .querySelector('[data-source="unlock"]')!
    .textContent!.trim();
  jokers[toSnakeCase(name)] = {
    name,
    effect,
    type,
    rarity,
    buyPrice,
    sellPrice,
    unlockRequirement,
    imageUrl,
  };
}

Bun.write("jokers.json", JSON.stringify(jokers, null, 2));
console.log(jokers);

// for (const child of document.body.children) {
//   console.log(child.textContent);
// }
