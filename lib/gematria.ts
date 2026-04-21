/* ═══════════════════════════════════════════════════════════════════════
   THE LATTICE — Gematria engine + curated corpus
   Hebrew (3 methods), Greek isopsephy, English (Crowley AIQ BKR).
   Reverse lookup, prime factorization, Weavings (L480 system).
   ══════════════════════════════════════════════════════════════════════ */

export type Script = "hebrew" | "greek" | "english";
export type HebrewMethod = "standard" | "sofit" | "ordinal";

/* ───────── Letter value tables ───────── */

const HEB_STANDARD: Record<string, number> = {
  "א": 1, "ב": 2, "ג": 3, "ד": 4, "ה": 5, "ו": 6, "ז": 7, "ח": 8, "ט": 9,
  "י": 10, "כ": 20, "ך": 20, "ל": 30, "מ": 40, "ם": 40,
  "נ": 50, "ן": 50, "ס": 60, "ע": 70, "פ": 80, "ף": 80,
  "צ": 90, "ץ": 90, "ק": 100, "ר": 200, "ש": 300, "ת": 400,
};

const HEB_SOFIT: Record<string, number> = {
  ...HEB_STANDARD,
  "ך": 500, "ם": 600, "ן": 700, "ף": 800, "ץ": 900,
};

const HEB_ORDINAL: Record<string, number> = {
  "א": 1, "ב": 2, "ג": 3, "ד": 4, "ה": 5, "ו": 6, "ז": 7, "ח": 8, "ט": 9,
  "י": 10, "כ": 11, "ך": 11, "ל": 12, "מ": 13, "ם": 13,
  "נ": 14, "ן": 14, "ס": 15, "ע": 16, "פ": 17, "ף": 17,
  "צ": 18, "ץ": 18, "ק": 19, "ר": 20, "ש": 21, "ת": 22,
};

const GREEK: Record<string, number> = {
  "α": 1, "β": 2, "γ": 3, "δ": 4, "ε": 5, "ϛ": 6, "ϝ": 6, "ζ": 7, "η": 8, "θ": 9,
  "ι": 10, "κ": 20, "λ": 30, "μ": 40, "ν": 50, "ξ": 60, "ο": 70, "π": 80, "ϟ": 90, "ϙ": 90,
  "ρ": 100, "σ": 200, "ς": 200, "τ": 300, "υ": 400, "φ": 500, "χ": 600, "ψ": 700, "ω": 800, "ϡ": 900,
  // Uppercase
  "Α": 1, "Β": 2, "Γ": 3, "Δ": 4, "Ε": 5, "Ζ": 7, "Η": 8, "Θ": 9,
  "Ι": 10, "Κ": 20, "Λ": 30, "Μ": 40, "Ν": 50, "Ξ": 60, "Ο": 70, "Π": 80,
  "Ρ": 100, "Σ": 200, "Τ": 300, "Υ": 400, "Φ": 500, "Χ": 600, "Ψ": 700, "Ω": 800,
};

// English Qaballa (AIQ BKR / Crowley's mapping aligning Latin to Hebrew values)
const ENGLISH: Record<string, number> = {
  a: 1, b: 2, g: 3, d: 4, h: 5, v: 6, w: 6, z: 7,
  i: 10, y: 10, j: 10, k: 20, l: 30, m: 40, n: 50, x: 60, o: 70, p: 80,
  q: 100, r: 200, s: 300,
  // doubled glyphs
  c: 20, f: 80, t: 400, u: 6, e: 5,
};

/* ───────── Calculation ───────── */

export interface GematriaResult {
  script: Script;
  method: string;
  word: string;
  total: number;
  letters: { ch: string; value: number }[];
  ignored: string[];
}

export function calculate(word: string, script: Script, method: HebrewMethod = "standard"): GematriaResult {
  const table =
    script === "hebrew"
      ? method === "sofit"
        ? HEB_SOFIT
        : method === "ordinal"
        ? HEB_ORDINAL
        : HEB_STANDARD
      : script === "greek"
      ? GREEK
      : ENGLISH;

  const lookup = (ch: string) => table[script === "english" ? ch.toLowerCase() : ch];

  const chars = Array.from(word);
  const letters: { ch: string; value: number }[] = [];
  const ignored: string[] = [];
  let total = 0;
  for (const ch of chars) {
    const v = lookup(ch);
    if (v === undefined) {
      if (ch.trim()) ignored.push(ch);
      continue;
    }
    letters.push({ ch, value: v });
    total += v;
  }

  const methodLabel =
    script === "hebrew"
      ? method === "sofit"
        ? "Mispar Gadol (final letters extended)"
        : method === "ordinal"
        ? "Mispar Siduri (ordinal)"
        : "Standard Mispar Hechrechi"
      : script === "greek"
      ? "Isopsephy"
      : "English Qaballa (AIQ BKR)";

  return { script, method: methodLabel, word, total, letters, ignored };
}

/* ───────── Number theory helpers ───────── */

export function factorize(n: number): number[] {
  if (n < 2) return [];
  const factors: number[] = [];
  let x = n;
  for (let p = 2; p * p <= x; p++) {
    while (x % p === 0) {
      factors.push(p);
      x = Math.floor(x / p);
    }
  }
  if (x > 1) factors.push(x);
  return factors;
}

export function divisors(n: number): number[] {
  if (n < 1) return [];
  const out: number[] = [];
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      out.push(d);
      if (d !== n / d) out.push(n / d);
    }
  }
  return out.sort((a, b) => a - b);
}

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let p = 3; p * p <= n; p += 2) if (n % p === 0) return false;
  return true;
}

export function digitSum(n: number): number {
  let s = 0;
  let x = Math.abs(n);
  while (x > 0) {
    s += x % 10;
    x = Math.floor(x / 10);
  }
  return s;
}

export function digitalRoot(n: number): number {
  let x = Math.abs(n);
  while (x >= 10) x = digitSum(x);
  return x;
}

/* ───────── L480 Weavings ───────── */

export interface Weaving {
  name: string;
  symbol: string;
  factors: number[];
  product: number;
  meaning: string;
}

/**
 * Generate Weavings from a number.
 *
 * For the L480 Plenum specifically (480 = 2^5 × 3 × 5) we return Esprit's
 * three published Weavings exactly as the Liber Taninsam system defines them:
 *   Scarlet Vector  Q = 2^5 × 3 = 96   command
 *   Violet Key      W = 3   × 5 = 15   rupture
 *   Obsidian Bride  W = 2^2 × 5 = 20   ground       (Esprit uses 2² here, not 2^5)
 * Sum: 96 + 15 + 20 = 131 = Samael.
 *
 * For any other number we return generic pairwise products of unique prime
 * factors (with their full powers). These show the lattice structure without
 * borrowing Esprit's labels for cases his system was not built to address.
 */
export function weavings(n: number): Weaving[] {
  if (n === 480) {
    return [
      { name: "Scarlet Vector", symbol: "Q", factors: [32, 3], product: 96, meaning: "Command without negotiation" },
      { name: "Violet Key", symbol: "W", factors: [3, 5], product: 15, meaning: "Rupture and aperture" },
      { name: "Obsidian Bride", symbol: "W", factors: [4, 5], product: 20, meaning: "Ground and containment" },
    ];
  }

  const factors = factorize(n);
  if (factors.length < 2) return [];
  const unique = Array.from(new Set(factors)).sort((a, b) => a - b);
  if (unique.length < 2) return [];

  const groupedByPrime: Record<number, number> = {};
  for (const p of factors) groupedByPrime[p] = (groupedByPrime[p] ?? 0) + 1;
  const collapsed: Record<number, number> = {};
  for (const p of unique) collapsed[p] = Math.pow(p, groupedByPrime[p]);

  const out: Weaving[] = [];
  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      const p1 = unique[i];
      const p2 = unique[j];
      out.push({
        name: `${p1} × ${p2} weaving`,
        symbol: "·",
        factors: [collapsed[p1], collapsed[p2]],
        product: collapsed[p1] * collapsed[p2],
        meaning: "",
      });
    }
  }
  return out;
}

/* ───────── Curated corpus for reverse lookup ───────── */

export interface CorpusEntry {
  word: string;       // original-script form
  translit?: string;  // transliteration
  meaning: string;
  script: Script;
  value: number;      // standard gematria value
  tag: "divine" | "qliphoth" | "sefirot" | "lilith" | "concept" | "name" | "demonic" | "angelic" | "mystery";
  notes?: string;
}

export const CORPUS: CorpusEntry[] = [
  /* ───── LILITH CURRENT ───── */
  { word: "לילית", translit: "Lilith", meaning: "Lilith, the Night Mother", script: "hebrew", value: 480, tag: "lilith", notes: "L480 — the Plenum. 2^5 × 3 × 5." },
  { word: "סמאל", translit: "Samael", meaning: "Samael, blind god, dark consort", script: "hebrew", value: 131, tag: "qliphoth", notes: "Sum of L480 Weavings: 96+15+20." },
  { word: "תורה", translit: "Torah", meaning: "Torah, the Law", script: "hebrew", value: 611, tag: "concept", notes: "Lilith (480) + Samael (131) = 611. The Anti-Torah identity." },
  { word: "נחש", translit: "Nachash", meaning: "Serpent", script: "hebrew", value: 358, tag: "concept", notes: "Equal to Mashiach — serpent and savior share a number." },
  { word: "משיח", translit: "Mashiach", meaning: "Messiah, Anointed", script: "hebrew", value: 358, tag: "concept" },
  { word: "ברבלו", translit: "Barbelo", meaning: "Barbelo, First Thought, Mother of Aeons", script: "hebrew", value: 240, tag: "divine", notes: "Hebrew transliteration of Greek Βαρβηλώ." },
  { word: "Βαρβηλώ", translit: "Barbelo", meaning: "Barbelo, First Thought (Greek)", script: "greek", value: 0, tag: "divine" },
  { word: "לילים", translit: "Lilim", meaning: "Daughters of Lilith", script: "hebrew", value: 110, tag: "lilith" },
  { word: "תנינסם", translit: "Taninsam", meaning: "Poisonous Dragon encircling the Plenum", script: "hebrew", value: 786, tag: "qliphoth", notes: "Esprit's appendix DRAGON figure." },

  /* ───── DIVINE NAMES ───── */
  { word: "יהוה", translit: "YHVH", meaning: "Tetragrammaton", script: "hebrew", value: 26, tag: "divine" },
  { word: "אהיה", translit: "Eheyeh", meaning: "I AM (Kether name)", script: "hebrew", value: 21, tag: "divine" },
  { word: "אלהים", translit: "Elohim", meaning: "Elohim, God-pluralis", script: "hebrew", value: 86, tag: "divine" },
  { word: "אדני", translit: "Adonai", meaning: "Lord (Malkuth name)", script: "hebrew", value: 65, tag: "divine" },
  { word: "שדי", translit: "Shaddai", meaning: "Almighty", script: "hebrew", value: 314, tag: "divine", notes: "Equal to Metatron." },
  { word: "אל", translit: "El", meaning: "God", script: "hebrew", value: 31, tag: "divine", notes: "Grant: Mauve Zone master-key." },
  { word: "שכינה", translit: "Shekhinah", meaning: "Indwelling Presence, Bride", script: "hebrew", value: 385, tag: "divine" },
  { word: "אין סוף", translit: "Ain Soph", meaning: "The Limitless", script: "hebrew", value: 207, tag: "mystery" },
  { word: "אין", translit: "Ain", meaning: "Nothing, Void", script: "hebrew", value: 61, tag: "mystery", notes: "Esprit's Subject Position. Ain = 61 = 96 − (20+15)." },

  /* ───── ANGELIC ───── */
  { word: "מטטרון", translit: "Metatron", meaning: "Angel of the Presence", script: "hebrew", value: 314, tag: "angelic" },
  { word: "סנדלפון", translit: "Sandalphon", meaning: "Angel of Earth", script: "hebrew", value: 280, tag: "angelic" },
  { word: "מיכאל", translit: "Michael", meaning: "Archangel Michael", script: "hebrew", value: 101, tag: "angelic" },
  { word: "גבריאל", translit: "Gabriel", meaning: "Archangel Gabriel", script: "hebrew", value: 246, tag: "angelic" },
  { word: "רפאל", translit: "Raphael", meaning: "Archangel Raphael", script: "hebrew", value: 311, tag: "angelic" },
  { word: "אוריאל", translit: "Uriel", meaning: "Archangel Uriel", script: "hebrew", value: 248, tag: "angelic" },

  /* ───── SEFIROT ───── */
  { word: "כתר", translit: "Kether", meaning: "Crown — 1st Sefirah", script: "hebrew", value: 620, tag: "sefirot" },
  { word: "חכמה", translit: "Chokmah", meaning: "Wisdom — 2nd Sefirah", script: "hebrew", value: 73, tag: "sefirot" },
  { word: "בינה", translit: "Binah", meaning: "Understanding — 3rd Sefirah", script: "hebrew", value: 67, tag: "sefirot" },
  { word: "דעת", translit: "Daath", meaning: "Knowledge — Hidden 11th", script: "hebrew", value: 474, tag: "sefirot" },
  { word: "חסד", translit: "Chesed", meaning: "Mercy — 4th Sefirah", script: "hebrew", value: 72, tag: "sefirot" },
  { word: "גבורה", translit: "Geburah", meaning: "Severity — 5th Sefirah", script: "hebrew", value: 216, tag: "sefirot" },
  { word: "תפארת", translit: "Tiphareth", meaning: "Beauty — 6th Sefirah", script: "hebrew", value: 1081, tag: "sefirot" },
  { word: "נצח", translit: "Netzach", meaning: "Victory — 7th Sefirah", script: "hebrew", value: 148, tag: "sefirot" },
  { word: "הוד", translit: "Hod", meaning: "Splendor — 8th Sefirah", script: "hebrew", value: 15, tag: "sefirot" },
  { word: "יסוד", translit: "Yesod", meaning: "Foundation — 9th Sefirah", script: "hebrew", value: 80, tag: "sefirot" },
  { word: "מלכות", translit: "Malkuth", meaning: "Kingdom — 10th Sefirah", script: "hebrew", value: 496, tag: "sefirot" },

  /* ───── QLIPHOTH ───── */
  { word: "תאומיאל", translit: "Thaumiel", meaning: "Twin God — 1st Qlipha", script: "hebrew", value: 488, tag: "qliphoth" },
  { word: "גמליאל", translit: "Gamaliel", meaning: "Obscene Ones — Qlipha of Yesod, Lilith's sphere", script: "hebrew", value: 114, tag: "qliphoth", notes: "The lunar/sexual qliphoth. Lilith's seat." },
  { word: "תגרירון", translit: "Thagirion", meaning: "Disputer — Qlipha of Tiphareth, Black Sun", script: "hebrew", value: 869, tag: "qliphoth", notes: "Sorath (666) is its spirit." },
  { word: "נעמה", translit: "Naamah", meaning: "Pleasing One — Lesser Lilith", script: "hebrew", value: 165, tag: "qliphoth" },
  { word: "חורונזון", translit: "Choronzon", meaning: "Dweller in the Abyss", script: "hebrew", value: 333, tag: "qliphoth", notes: "Crowley's 10th Aethyr. (96+15)×3." },
  { word: "סורת", translit: "Sorath", meaning: "Spirit of the Sun (qliphothic)", script: "hebrew", value: 666, tag: "qliphoth", notes: "(96+15)×6. Beast number." },
  { word: "ליויתן", translit: "Leviathan", meaning: "Coiled Serpent of the Deep", script: "hebrew", value: 496, tag: "qliphoth", notes: "Equal to Malkuth — the Kingdom-as-Serpent." },

  /* ───── KEY CONCEPTS ───── */
  { word: "אדם", translit: "Adam", meaning: "Adam, the Red Earth", script: "hebrew", value: 45, tag: "name" },
  { word: "חוה", translit: "Chavah", meaning: "Eve, the Living", script: "hebrew", value: 19, tag: "name" },
  { word: "קין", translit: "Cain", meaning: "Cain, the Marked", script: "hebrew", value: 160, tag: "name" },
  { word: "אהבה", translit: "Ahavah", meaning: "Love (= 13 = Echad)", script: "hebrew", value: 13, tag: "concept" },
  { word: "אחד", translit: "Echad", meaning: "One, Unity", script: "hebrew", value: 13, tag: "concept" },
  { word: "אמן", translit: "Amen", meaning: "Amen, So be it (= 91 = YHVH+Adonai)", script: "hebrew", value: 91, tag: "concept" },

  /* ───── ENGLISH/CROWLEY QABALAH ───── */
  { word: "BABALON", translit: "Babalon", meaning: "Crowley's Scarlet Woman", script: "english", value: 0, tag: "lilith", notes: "AIQ BKR: 156. Equal to Zion in some readings." },
  { word: "AGAPE", translit: "Agape", meaning: "Love (Greek)", script: "english", value: 0, tag: "concept" },
  { word: "THELEMA", translit: "Thelema", meaning: "Will", script: "english", value: 0, tag: "concept" },
  { word: "ABRAHADABRA", translit: "Abrahadabra", meaning: "The Word of the Aeon", script: "english", value: 0, tag: "concept", notes: "Crowley: 418. Magickal child." },
];

// Compute Greek/English values for entries that left value=0 as placeholder
for (const entry of CORPUS) {
  if (entry.value === 0) {
    entry.value = calculate(entry.word, entry.script).total;
  }
}

/* ───────── Reverse lookup ───────── */

export function findByValue(target: number, scripts?: Script[]): CorpusEntry[] {
  const allowed = scripts ?? ["hebrew", "greek", "english"];
  return CORPUS.filter((e) => e.value === target && allowed.includes(e.script))
    .sort((a, b) => a.translit?.localeCompare(b.translit ?? "") ?? 0);
}

export function findNearby(target: number, window = 5): CorpusEntry[] {
  return CORPUS.filter((e) => Math.abs(e.value - target) <= window && e.value !== target)
    .sort((a, b) => Math.abs(a.value - target) - Math.abs(b.value - target));
}

/* ───────── Hebrew aleph-bet stations (for Liber Umbrarum) ───────── */

export interface Letter {
  letter: string;
  name: string;
  translit: string;
  value: number;
  ordinal: number;
  meaning: string;
  path?: string;        // sefirotic path
  planet?: string;
  zodiac?: string;
  element?: string;
  qliphoth?: string;
}

export const ALEPH_BET: Letter[] = [
  { letter: "א", name: "Aleph", translit: "A", value: 1, ordinal: 1, meaning: "Ox · Breath · The Fool", path: "Kether → Chokmah", element: "Air" },
  { letter: "ב", name: "Beth", translit: "B", value: 2, ordinal: 2, meaning: "House · The Magus", path: "Kether → Binah", planet: "Mercury" },
  { letter: "ג", name: "Gimel", translit: "G", value: 3, ordinal: 3, meaning: "Camel · The High Priestess", path: "Kether → Tiphareth", planet: "Moon" },
  { letter: "ד", name: "Daleth", translit: "D", value: 4, ordinal: 4, meaning: "Door · The Empress", path: "Chokmah → Binah", planet: "Venus" },
  { letter: "ה", name: "Heh", translit: "H", value: 5, ordinal: 5, meaning: "Window · The Star · Breath of the Mother", path: "Chokmah → Tiphareth", zodiac: "Aquarius" },
  { letter: "ו", name: "Vav", translit: "V", value: 6, ordinal: 6, meaning: "Nail · The Hierophant · The Linker", path: "Chokmah → Chesed", zodiac: "Taurus" },
  { letter: "ז", name: "Zayin", translit: "Z", value: 7, ordinal: 7, meaning: "Sword · The Lovers", path: "Binah → Tiphareth", zodiac: "Gemini" },
  { letter: "ח", name: "Cheth", translit: "Ch", value: 8, ordinal: 8, meaning: "Fence · The Chariot", path: "Binah → Geburah", zodiac: "Cancer" },
  { letter: "ט", name: "Teth", translit: "T", value: 9, ordinal: 9, meaning: "Serpent · Lust · The Lilith Letter", path: "Chesed → Geburah", zodiac: "Leo", qliphoth: "The serpent risen" },
  { letter: "י", name: "Yod", translit: "Y", value: 10, ordinal: 10, meaning: "Hand · The Hermit · Seed", path: "Chesed → Tiphareth", zodiac: "Virgo" },
  { letter: "כ", name: "Kaph", translit: "K", value: 20, ordinal: 11, meaning: "Palm · Wheel of Fortune", path: "Chesed → Netzach", planet: "Jupiter" },
  { letter: "ל", name: "Lamed", translit: "L", value: 30, ordinal: 12, meaning: "Goad · Adjustment · The Balance", path: "Geburah → Tiphareth", zodiac: "Libra" },
  { letter: "מ", name: "Mem", translit: "M", value: 40, ordinal: 13, meaning: "Water · The Hanged Man", path: "Geburah → Hod", element: "Water" },
  { letter: "נ", name: "Nun", translit: "N", value: 50, ordinal: 14, meaning: "Fish · Death · The Reaper", path: "Tiphareth → Netzach", zodiac: "Scorpio" },
  { letter: "ס", name: "Samekh", translit: "S", value: 60, ordinal: 15, meaning: "Prop · Art · Temperance", path: "Tiphareth → Yesod", zodiac: "Sagittarius" },
  { letter: "ע", name: "Ayin", translit: "O", value: 70, ordinal: 16, meaning: "Eye · The Devil · The Goat of the Sabbat", path: "Tiphareth → Hod", zodiac: "Capricorn", qliphoth: "Pan, Baphomet, the horned mirror" },
  { letter: "פ", name: "Peh", translit: "P", value: 80, ordinal: 17, meaning: "Mouth · The Tower · Lightning Struck", path: "Netzach → Hod", planet: "Mars" },
  { letter: "צ", name: "Tzaddi", translit: "Tz", value: 90, ordinal: 18, meaning: "Fish-hook · The Emperor", path: "Netzach → Yesod", zodiac: "Aries" },
  { letter: "ק", name: "Qoph", translit: "Q", value: 100, ordinal: 19, meaning: "Back of head · The Moon · Dream gate", path: "Netzach → Malkuth", zodiac: "Pisces" },
  { letter: "ר", name: "Resh", translit: "R", value: 200, ordinal: 20, meaning: "Head · The Sun", path: "Hod → Yesod", planet: "Sun" },
  { letter: "ש", name: "Shin", translit: "Sh", value: 300, ordinal: 21, meaning: "Tooth · The Aeon · Judgement · The Triple Flame", path: "Hod → Malkuth", element: "Fire/Spirit" },
  { letter: "ת", name: "Tav", translit: "Th", value: 400, ordinal: 22, meaning: "Cross · The Universe · Saturn-gate · The Last Letter", path: "Yesod → Malkuth", planet: "Saturn", element: "Earth" },
];

/* ───────── Notable numbers (the lattice landmarks) ───────── */

export interface Landmark {
  value: number;
  label: string;
  notes: string;
}

export const LANDMARKS: Landmark[] = [
  { value: 1, label: "Kether · Unity", notes: "The Crown. The Monad." },
  { value: 11, label: "Daath · Hidden Gate", notes: "The non-Sefirah. Crowley's number of magick." },
  { value: 13, label: "Echad · Ahavah", notes: "One = Love. Hebrew identity." },
  { value: 22, label: "The Aleph-Bet", notes: "The 22 letters / paths on the Tree." },
  { value: 26, label: "YHVH", notes: "Tetragrammaton." },
  { value: 31, label: "EL · LA", notes: "Grant's Mauve Zone master-key." },
  { value: 32, label: "32 Paths of Wisdom", notes: "Sefer Yetzirah." },
  { value: 50, label: "Gates of Binah", notes: "Also Enlil's number in Sumer." },
  { value: 60, label: "Anu · Sexagesimal", notes: "Sumerian sky-father; base-60 root." },
  { value: 61, label: "Ain · Subject Position", notes: "Esprit's Void: 96 − (20+15)." },
  { value: 65, label: "Adonai", notes: "Lord; Malkuth name." },
  { value: 72, label: "The Shemhamphorash", notes: "72 Names of God." },
  { value: 86, label: "Elohim", notes: "= 1+30+5+10+40. The plural Name." },
  { value: 91, label: "Amen / YHVH+Adonai", notes: "Union of mercy and rigor names." },
  { value: 96, label: "Scarlet Vector (Q)", notes: "L480 Weaving: 2⁵×3. Command." },
  { value: 111, label: "Aleph spelled in full", notes: "ALP = 1+30+80 = 111." },
  { value: 114, label: "Gamaliel", notes: "Lilith's qliphothic sphere (anti-Yesod)." },
  { value: 120, label: "120 years of Moshe", notes: "Patriarchal lifespan." },
  { value: 131, label: "Samael · Sum of Weavings", notes: "96+15+20 = 131. Lilith's consort generated arithmetically." },
  { value: 137, label: "Kabbalah", notes: "Also fine-structure constant in physics." },
  { value: 156, label: "Babalon", notes: "Crowley's Scarlet Woman." },
  { value: 207, label: "Ain Soph", notes: "Limitless." },
  { value: 216, label: "Geburah", notes: "Severity. Also 6³." },
  { value: 231, label: "231 Gates", notes: "Sefer Yetzirah letter pairs." },
  { value: 248, label: "Uriel · 248 limbs", notes: "Body-count of mitzvot." },
  { value: 280, label: "Sandalphon · Obsidian Bride", notes: "L480 Weaving (multiplied form for 280-codename)." },
  { value: 314, label: "Shaddai · Metatron", notes: "Almighty. Also π×100." },
  { value: 333, label: "Choronzon", notes: "Dweller in the Abyss. Crowley 10th Aethyr." },
  { value: 358, label: "Nachash · Mashiach", notes: "Serpent and Messiah share the number." },
  { value: 385, label: "Shekhinah", notes: "Indwelling Presence." },
  { value: 418, label: "Abrahadabra", notes: "Crowley: Word of the Aeon." },
  { value: 480, label: "LILITH · The Plenum", notes: "L480 = 2⁵×3×5. Esprit's source-number." },
  { value: 496, label: "Malkuth · Leviathan", notes: "Kingdom = Serpent. Perfect number." },
  { value: 611, label: "Torah · Anti-Torah", notes: "480 + 131 = 611. The Law as Lilith+Samael." },
  { value: 666, label: "Sorath · Beast", notes: "(96+15)×6. Spirit of the Black Sun." },
  { value: 720, label: "6! · 720°", notes: "Two full rotations." },
  { value: 786, label: "Taninsam", notes: "Esprit's Poisonous Dragon encircling the Plenum." },
  { value: 821, label: "Container of All Reality", notes: "ZAZAS×3 + ITA + PODO + LILITH terminal." },
  { value: 888, label: "Iesous (Greek)", notes: "Jesus in isopsephy." },
];

export function findLandmark(value: number): Landmark | undefined {
  return LANDMARKS.find((l) => l.value === value);
}
