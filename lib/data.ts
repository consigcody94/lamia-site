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
    role: "Co-Head of GCOL · Founder, The Order of Phosphorus",
    significance:
      "Author of Wisdom of Eosphoros and the principal architect of the modern Luciferian Tradition as a formal current. Our introduction was the first door.",
    link: "https://en.wikipedia.org/wiki/Michael_W._Ford",
  },
  {
    name: "Hope Marie Ford",
    role: "Co-Head of GCOL · Co-President with Michael W. Ford",
    significance:
      "Co-president of the Greater Church of Lucifer and the feminine half of its founding presidium. Held the steady ground while the outer world made noise.",
  },
  {
    name: "Jeremy Crow",
    role: "Co-Head of GCOL · Founder, NOL and LRS",
    significance:
      "Ordained Priest, lodge-keeper, and the steadiest hand in the post-GCOL diaspora. Teacher, collaborator, and living lineage in the Gnostic Luciferian line.",
    link: "https://www.jeremycrow.com/",
  },
  {
    name: "Jacob No · Jacob McKelvy",
    role: "Co-Head of GCOL (2013–2017) · Archon",
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

export const PRIEST_EMAIL = "os@lilitu.org";

export const LINKS = {
  discord: "https://discord.gg/GvjsS4C",
  contact: `mailto:${PRIEST_EMAIL}`,
  email: PRIEST_EMAIL,
  mail: "/mail",
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

export interface WritingSection {
  heading?: string;
  paragraphs: string[];
  pullQuote?: string;
}

export interface Writing {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  tag: string;
  readTime: string;
  intro: string;
  sections: WritingSection[];
  closing: string;
}

export const WRITINGS: Writing[] = [
  {
    slug: "why-lilith-left-the-garden",
    title: "Why Lilith Left the Garden",
    subtitle: "On the First Refusal as the First Act of Sovereignty",
    excerpt:
      "Eden, read correctly, is not paradise. It is a probationary state with one rule: do not seek. Lilith was not cast out. She walked out. The Eden story, told from her side of the gate, is the first gospel of sovereign refusal.",
    tag: "Foundational Teaching",
    readTime: "7 min read",
    intro:
      "Every civilization keeps a founding refusal at the bottom of its memory. The American one is Boston Harbor. The Hebrew one is Eden. We are used to reading Eden as a story about compliance and fall, but the oldest version of that story, preserved in Genesis 1 and in the Alphabet of Ben-Sira, contains a figure who does not fall. She walks out. Her name is Lilith, and the Eden narrative, read from her side of the gate, is the first gospel of sovereign refusal.",
    sections: [
      {
        heading: "The Two Creations",
        paragraphs: [
          "The Torah gives two accounts of the making of humans. In Genesis 1:27, male and female He created them simultaneously, from the same earth, in the same breath. In Genesis 2:22, a second account gives us a different scene: the rib, the sleeping Adam, Eve fashioned afterward as a companion.",
          "These accounts do not contradict. They describe two different women. Orthodox tradition, squeamish about the first, has mostly erased her. Heterodox tradition calls her Lilith and remembers.",
        ],
      },
      {
        heading: "The One Rule",
        paragraphs: [
          "Eden is not paradise. It is a probationary state with one rule: do not seek the knowledge of good and evil. The rule is not do not sin. The rule is do not seek. The garden is a laboratory for a specific question. Given unlimited sensual provision and one explicit boundary, will the creature accept the boundary?",
          "Lilith's first refusal is not about food. It is about the prior boundary, the order of the bed.",
        ],
      },
      {
        heading: "The Position Dispute",
        paragraphs: [
          "The Alphabet of Ben-Sira, a medieval Hebrew compendium, preserves the older story. Adam and Lilith disagreed on the position of their coupling. Lilith would not lie beneath him. Her reasoning was precise: they were made of the same earth, at the same time, by the same breath. Adam insisted on hierarchy. Lilith refused.",
          "The refusal is not about sex. It is about ontology. A unilateral claim to hierarchy without basis in origin is a lie. She would not consent to the lie.",
        ],
        pullQuote:
          "A unilateral claim to hierarchy without basis in origin is a lie. She would not consent to the lie.",
      },
      {
        heading: "The Name",
        paragraphs: [
          "What she did next is the theurgic heart of the narrative. She spoke the Ineffable Name of God and flew from the garden. The Name is not a curse word. It is the engine of creation itself. To speak it is to command reality to rearrange.",
          "Lilith is the first figure in the Western tradition to wield the Name for her own sovereignty rather than on behalf of an authority. She did not ask permission to depart. She spoke the Name and the gate opened.",
        ],
      },
      {
        heading: "The Legacy",
        paragraphs: [
          "Three angels were dispatched to retrieve her. She refused to return. The agreement struck at the Red Sea was that she would keep her territory, that her daughters (the Lilim) would persist in the world, and that she would not be domesticated. She kept her side of the agreement. The tradition kept less of theirs. Nevertheless, she remains, and every practitioner who walks her current inherits the posture.",
        ],
      },
      {
        heading: "The Practice",
        paragraphs: [
          "What does it mean to receive this gospel in the body? It means that the daily practice is refusal. Not nihilistic refusal, which is its own form of compliance, but sovereign refusal: the ability to say no to an unearned authority without melodrama, without permission, and without moving the refusal into public theater.",
          "The Lilim learn to do this at the small scale first. At work. At the dinner table. In the mirror. Each refusal, rightly made, lights a point of light in the grid of the untamed self.",
          "This is not rebellion. Rebellion is the shadow of obedience. This is something older. This is Lilith at the edge of the garden, with the Name still on her tongue, not looking back.",
        ],
      },
    ],
    closing: "Renich · tasa · uberaca · biasa · icar · Lilith",
  },
  {
    slug: "red-tent-in-the-age-of-apps",
    title: "The Red Tent in the Age of Apps",
    subtitle: "Reclaiming the Red Current for the Contemporary Practitioner",
    excerpt:
      "The lower mysteries of blood, body, and descent were quarantined behind shame for two thousand years. They are reopening now, and Lilith is one of the names under which they return. A practical guide to working the red current in a sterile, screen lit century.",
    tag: "Praxis",
    readTime: "9 min read",
    intro:
      "There was a time in every culture when the body had a room. In the Hebrew world it was the niddah, the women's tent outside the camp during menstruation. In West Africa it was the sacred groves. In the Andes it was the mountain. In the old Celtic countries it was the broom-marked hut in the woods. The room had a single function: to hold a body that was passing through a threshold. Blood was the most common threshold. There were others. Birth, sickness, death, puberty, grief. The practice was the same. You left the ordinary world for a period. You did the work the threshold asked. You came back changed.",
    sections: [
      {
        heading: "What Was Lost",
        paragraphs: [
          "We lost the tent in the West over the last thousand years, in layered waves. The Christian horror of the body arrived first. Then the medicalization of menstruation in the Victorian era. Then the pharmaceutical management of the cycle in the twentieth century. Then the complete capture of attention by screens in the twenty-first.",
          "The tent was not only a physical structure. It was a time-set-aside. It was permission to descend. We no longer have permission. And without permission, the body's thresholds come and go without rite, without witness, and without the work that the thresholds exist to invite.",
        ],
      },
      {
        heading: "Why She Is Coming Back Now",
        paragraphs: [
          "Lilith's re-emergence as a name in contemporary spiritual vocabulary is not an accident of pop-culture interest in the dark feminine. It is a tradition reopening under its own pressure. The lower mysteries refuse to stay buried forever. They return under whatever name is available.",
          "She happens to be available. Her association with blood, with the first wound of creation, with the first feminine sovereignty, makes her the correct presiding figure for the return of the red current.",
        ],
        pullQuote:
          "The lower mysteries refuse to stay buried forever. They return under whatever name is available.",
      },
      {
        heading: "What the Red Current Is",
        paragraphs: [
          "The red current is the technology of descent-through-the-body. It works through blood, breath, posture, ordeal, silence, fasting, drumming, incense, and specific ritual acts timed to specific physiological states. It is not symbolic.",
          "A practitioner working the red current knows that her period is not an inconvenience to be pharmaceutically managed but a monthly initiation if she gives it the architecture. She knows that fever is a teacher, that grief is a teacher, that the body's refusal to cooperate with the schedule is a teacher. The current runs through all of these. The practitioner's job is to recognize it and meet it with the correct frame.",
        ],
      },
      {
        heading: "Building the Tent in the Age of Apps",
        paragraphs: [
          "You cannot erect a physical tent outside your condo. You can do the following.",
          "Designate a day of the month as a tent day. Do not schedule. Do not consume. Read, bathe, sit, sleep, write, be silent. Keep a specific candle only for these days. Keep a specific book only for these days. If you menstruate, use the day closest to your period. If you do not, use the dark of the moon.",
          "The architecture matters more than the timing. The repetition is what opens the door. Every practitioner who rebuilds the tent in her own life reports the same sequence. First, resistance. The calendar will push back, the phone will push back, obligation will push back. Second, space. The day begins to feel longer than it should. Third, encounter. Something arrives in the space. This is where her work starts.",
        ],
      },
      {
        heading: "The Warning",
        paragraphs: [
          "The red current takes what it takes. It is not a self-care practice. It is an initiatory relationship with a current that has been waiting for the practitioner to open the door. Once the door is open, the current has terms. It will ask the practitioner to shed things. Habits, relationships, self-images, entire chapters.",
          "The practitioner who tries to take from the current without giving will be given less and less until the current withdraws. The practitioner who gives receives more than she can hold.",
          "This is not aesthetics. This is the deepest practice in the book of Lilith. The tent is where you light it.",
        ],
      },
    ],
    closing: "Renich · tasa · uberaca · biasa · icar · Lilith",
  },
  {
    slug: "ophiuchus-and-the-serpent-of-lilith",
    title: "Ophiuchus and the Serpent of Lilith",
    subtitle: "On the Hidden Thirteenth Sign and the Dark Mother's Mark",
    excerpt:
      "The serpent bearer was removed from the wheel for the same reason Lilith was removed from Genesis: the tradition could not hold both. A sidereal astrology essay on how Ophiuchus placements and Lilith placements interact, and what it means to have both lit in your chart.",
    tag: "Essay",
    readTime: "10 min read",
    intro:
      "Two figures were removed from their respective canons for reasons that, when seen beside each other, tell the same story. Ophiuchus, the Serpent-Bearer, was dropped from the common zodiac even though the sun passes through his constellation longer than through Scorpio. Lilith was dropped from Genesis even though the two-creation account in Chapter 1 plainly attests to a woman before Eve. In both cases the excision was tidy. In both cases it served the same doctrinal need. The tradition could not hold both the first woman and the serpent at the same time.",
    sections: [
      {
        heading: "The Pattern",
        paragraphs: [
          "Lilith carries the serpent as her consort (Samael in the Zohar, the nachash of the Eden story in some traditions) and sometimes as her mount. Ophiuchus holds the serpent across his body. The serpent in both images is the same character, and it carries the same meaning. It is the kundalini, the coiled current of initiatory fire that rises along the spine when a practitioner crosses a threshold.",
          "This current is the carrier of gnosis. It bites and it heals. It does both at the same moment.",
        ],
      },
      {
        heading: "What the Tradition Feared",
        paragraphs: [
          "A figure who can hold the serpent without being destroyed by it threatens a specific model of religious authority. The model depends on three things: the serpent being dangerous, the practitioner being insufficient, and a mediator being necessary.",
          "Ophiuchus and Lilith both deny the model. Ophiuchus shows that a human can be the serpent-bearer without dying. Lilith shows that a woman can speak the Name without being annihilated. Both are, in that sense, structurally heretical to the canonical form that removed them. The excision was not incidental. It was defensive.",
        ],
        pullQuote:
          "The tradition could not hold both the first woman and the serpent at the same time.",
      },
      {
        heading: "What Ophiuchus Means in a Chart",
        paragraphs: [
          "In 13-sign sidereal astrology, a planet in Ophiuchus marks the life-department of that planet as a healing-initiation axis. The person is not allowed to work that department superficially. The placement demands descent.",
          "Someone with Sun in Ophiuchus is initiated into identity the hard way. Someone with Moon in Ophiuchus is initiated into emotional life the hard way. Someone with Venus in Ophiuchus is initiated into love the hard way. Jeremy Crow, whose sidereal Sun sits in Ophiuchus, is a lifelong Luciferian teacher for reasons that are legible in his chart: his identity department is built on the serpent-bearer's axis.",
        ],
      },
      {
        heading: "What Lilith Means in a Chart",
        paragraphs: [
          "Most astrologers work with the Black Moon Lilith, an abstract point marking the apogee of the Moon's orbit. There is also the Lilith asteroid (1181 Lilith), a physical body. And there is the fixed star Algol, the Gorgon's head, which carries a Lilithic resonance older than either.",
          "A seeker whose chart has a prominent Black Moon Lilith and a planet in Ophiuchus carries both currents at once. The tradition's two great exclusions are co-lit in him.",
        ],
      },
      {
        heading: "How They Interact",
        paragraphs: [
          "The serpent current rises. The Lilith current calls. Together they form the axis of descent-and-return that is the operating system of any Left Hand Path practice. Without the Lilith call, there is no door. Without the serpent rising, there is nothing to take through it.",
          "A practitioner who has both natally is already configured for the work. He will find the path or the path will find him. He will usually find that the work has been pursuing him for years.",
        ],
      },
      {
        heading: "The Practical Invitation",
        paragraphs: [
          "If you have not yet cast your chart in the 13-sign sidereal system, I recommend it. The tradition has restored both figures in our lifetime. The tools have restored them too. Cast your sidereal chart with Ophiuchus lit and see what lands there. Then see what your Black Moon Lilith is doing in that same chart.",
          "The two figures the canon tried to lose have always been talking to each other. If both are lit in you, they have been talking about you.",
        ],
      },
    ],
    closing: "Renich · tasa · uberaca · biasa · icar · Lilith",
  },
];
