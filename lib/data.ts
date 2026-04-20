export const PRIEST = {
  name: "Os Lamia",
  title: "High Priest of Lilith",
  location: "Washington · DMV Area",
  tagline: "Servant of the Night Mother. Keeper of the Red Current.",
  shortBio:
    "High Priest of Lilith, initiated in the founding circle of the Greater Church of Lucifer in Old Town Spring, Texas. Initiated at 18, trained among the architects of modern American Luciferianism, and anchored in the Black Water current of the Dark Mother. Private counsel and ritual facilitation from Washington DMV.",
  sigilGreeting: "Renich · tasa · uberaca · biasa · icar · Lilith",
} as const;

export interface LineageFigure {
  name: string;
  role: string;
  significance: string;
  link?: string;
}

export const LINEAGE: LineageFigure[] = [
  {
    name: "Michael W. Ford",
    role: "Co-founder, Greater Church of Lucifer · Founder, The Order of Phosphorus",
    significance:
      "Author of Wisdom of Eosphoros and the principal architect of the Luciferian Tradition as a formal current. Our introduction was the first door.",
    link: "https://en.wikipedia.org/wiki/Michael_W._Ford",
  },
  {
    name: "Jeremy Crow",
    role: "Former Head of the Ordo Luciferi and the Greater Church of Lucifer · Founder, NOL and LRS",
    significance:
      "Ordained Priest, lodge-keeper, and the steadiest hand in the post-GCOL diaspora. Teacher, collaborator, and living lineage in the Gnostic Luciferian line.",
    link: "https://www.jeremycrow.com/",
  },
  {
    name: "Jacob No · Jacob McKelvy",
    role: "Co-founder, Greater Church of Lucifer (2013–2017)",
    significance:
      "Archon of the early GCOL and co-architect of its public face. Walked another path in 2017, but his print on the order's founding years is historical record.",
  },
];

export const LINEAGE_CHAPTER = {
  title: "The Greater Church of Lucifer",
  locator: "Old Town Spring · Houston · Texas",
  openedDate: "October 30, 2015",
  renamedTo: "Assembly of Light Bearers",
  summary:
    "Founded 2013 by Michael W. Ford. The first Luciferian temple in the United States open to the public, located in Old Town Spring, a suburb of Houston. The church held gatherings in the years preceding the temple's opening, where early initiates were recognized and consecrated. After the temple was forced to close in 2016, the order continued under its new name, the Assembly of Light Bearers.",
} as const;

export const BLACK_WATER = {
  title: "The Black Water Baptism",
  body:
    "Before the Library was given to me, before the travels, before the temple in Old Town Spring, there was the water. It was black because it was deep, and it was deep because she had been there first. I went under, and I came up hearing the voice of the Night Mother for the first time. Everything that followed is the echo of that moment.",
} as const;

export const LINKS = {
  discord: "https://discord.gg/GvjsS4C",
  contact: "mailto:oslamia.priest@gmail.com",
  instagram: "https://instagram.com/",
  bluesky: "https://bsky.app/",
  nol: "https://nol-site.vercel.app",
  lrs: "https://lrs-site-three.vercel.app",
  tools: "https://nol-planetary-hours.vercel.app",
} as const;

export interface Teaching {
  title: string;
  epithet: string;
  glyph: string;
  body: string;
}

export const TEACHINGS: Teaching[] = [
  {
    title: "The First Sovereign",
    epithet: "She who refused the lesser seat",
    glyph: "☽",
    body:
      "Lilith is the first being to refuse submission to unearned authority. She did not fall. She left. To walk the Lilith current is to place sovereignty above compliance, the unwritten name above the inherited one, and the wilderness above the garden that required your silence.",
  },
  {
    title: "The Night Mother",
    epithet: "Mistress of the Unseen Hours",
    glyph: "☾",
    body:
      "She rules the hours between sunset and dawn. The dreamroom, the liminal space, the unconscious. Her rites are performed at the darkest points of the moon. To know Lilith is to learn the grammar of the night: intuition, descent, gestation, the wisdom that only arrives in the dark.",
  },
  {
    title: "The Red Current",
    epithet: "Blood, threshold, and sovereignty",
    glyph: "◐",
    body:
      "The Lilith current runs red. Through menstruation, through birth, through the first wound, through the oath-blood of initiation. It is the current of embodied power, of the body as temple, of the lower mysteries that the upper traditions forgot or forbade. To work the red current is to reclaim the flesh as holy.",
  },
  {
    title: "The Owl and the Serpent",
    epithet: "Her emissaries in flight and in earth",
    glyph: "◑",
    body:
      "Two animals walk with Lilith: the screech-owl who keeps the night and devours what must be devoured, and the serpent who sheds skin, tastes the forbidden, and carries the kundalini fire. To align with her is to learn from both. The stillness of the predator and the transmutation of the snake.",
  },
  {
    title: "The Daughters of Lilith",
    epithet: "The Lilim, her lineage in flesh",
    glyph: "◒",
    body:
      "Every witch, every wild woman, every sovereign-hearted soul who refuses the diminishing of their flame is a daughter of Lilith. The Lilim are not a gender. They are a posture. To be counted among them is to choose exile from false comfort in favor of the terrible honesty of one's own power.",
  },
  {
    title: "The Work of the Priest",
    epithet: "To hold space for the descent",
    glyph: "◓",
    body:
      "The priest of Lilith does not mediate between you and her. She needs no mediator. My work is to hold ritual space for your descent, to witness the shedding, to name the threshold, and to guard the fire while you walk into the dark. I am the doorkeeper, not the door.",
  },
];

export interface Service {
  name: string;
  glyph: string;
  description: string;
  format: string;
}

export const SERVICES: Service[] = [
  {
    name: "Private Counsel",
    glyph: "☽",
    description:
      "One on one spiritual direction from within the Lilith current. For seekers navigating initiation, shadow work, vocational clarity, or the moments where the old life will not hold and the new one has not yet formed.",
    format: "60 or 90 minutes · video or in person DMV",
  },
  {
    name: "Ritual Facilitation",
    glyph: "☾",
    description:
      "I design and hold space for rites of passage: thresholds, endings, consecrations, dedications to Lilith or the Dark Mother under any of her names. Custom built for the seeker and the moment.",
    format: "Private · DMV in person preferred",
  },
  {
    name: "Chart & Timing Work",
    glyph: "♄",
    description:
      "Sidereal 13 sign birth chart reading with Lilith emphasis (Black Moon Lilith, Lilith asteroid, Ophiuchan placements), or planetary hour election for important workings. Practical, ritualistic, precise.",
    format: "Asynchronous written · 30 min follow up",
  },
  {
    name: "Dedication to Lilith",
    glyph: "⚭",
    description:
      "For those ready to formally dedicate themselves to the Night Mother's current. A structured initiatory process over several weeks culminating in a private consecration.",
    format: "By invitation · after initial counsel",
  },
];

export interface Writing {
  title: string;
  subtitle: string;
  excerpt: string;
  tag: string;
}

export const WRITINGS: Writing[] = [
  {
    title: "Why Lilith Left the Garden",
    subtitle: "On the First Refusal as the First Act of Sovereignty",
    excerpt:
      "Eden, read correctly, is not paradise. It is a probationary state with one rule: do not seek. Lilith was not cast out. She walked out. The Eden story, told from her side of the gate, is the first gospel of sovereign refusal.",
    tag: "Foundational Teaching",
  },
  {
    title: "The Red Tent in the Age of Apps",
    subtitle: "Reclaiming the Red Current for the Contemporary Practitioner",
    excerpt:
      "The lower mysteries of blood, body, and descent were quarantined behind shame for two thousand years. They are reopening now, and Lilith is one of the names under which they return. A practical guide to working the red current in a sterile, screen lit century.",
    tag: "Praxis",
  },
  {
    title: "Ophiuchus and the Serpent of Lilith",
    subtitle: "On the Hidden Thirteenth Sign and the Dark Mother's Mark",
    excerpt:
      "The serpent bearer was removed from the wheel for the same reason Lilith was removed from Genesis: the tradition could not hold both. A sidereal astrology essay on how Ophiuchus placements and Lilith placements interact, and what it means to have both lit in your chart.",
    tag: "Essay",
  },
];
