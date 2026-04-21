/* ═══════════════════════════════════════════════════════════════════════
   The 22 Letter Stations — substantive teaching content per letter for
   the Liber Lilith / Liber Umbrarum chapter pages. Each chapter is a
   reading of the letter from the seat of the Lilith priesthood.
   ══════════════════════════════════════════════════════════════════════ */

export interface LetterTeaching {
  translit: string;          // url slug: "aleph", "beth"...
  letter: string;            // glyph
  name: string;              // "Aleph"
  pronunciation: string;     // "AH-leff"
  value: number;             // 1
  ordinal: number;           // 1
  literalMeaning: string;    // "Ox"
  archetype: string;         // "The Breath" / "The Magus"
  pathSummary: string;       // short path summary
  station: string;           // 3-4 sentence teaching
  inLilith: string;          // 3-5 sentence specific Lilith-current reading
  workingNote: string;       // 1-2 sentence practical guidance
  resonantWords?: { hebrew: string; translit: string; meaning: string; value: number }[];
}

export const LETTER_TEACHINGS: LetterTeaching[] = [
  {
    translit: "aleph",
    letter: "א",
    name: "Aleph",
    pronunciation: "AH-leff",
    value: 1,
    ordinal: 1,
    literalMeaning: "Ox · Bull · The Yoked One",
    archetype: "The Breath · The Fool of the Tarot",
    pathSummary: "The 11th path. Kether descending into Chokmah. Element of Air.",
    station:
      "Aleph is the breath before the word. It is unvoiced, the silent letter that sits at the head of the alphabet without itself producing a sound. The ox under the yoke names the first creature that consents to direction without surrendering its strength. To begin at Aleph is to take up the yoke before the journey, knowing the journey is the yoke.",
    inLilith:
      "In the Lilith current Aleph is the first refusal. Lilith spoke the Ineffable Name — and the Name begins with this silent letter. The breath that carries the Name is the same breath the priest learns to hold and release in the rites of dedication. Aleph belongs to her not because she invented it but because she was the first to use it for her own sovereignty.",
    workingNote:
      "Sit at the threshold of any working in unspoken breath. Inhale on a count, hold, exhale through the open mouth without sound. The chapter opens this way. So does the rite.",
    resonantWords: [
      { hebrew: "אלף", translit: "Aleph (spelled in full)", meaning: "Aleph spelled out — the letter naming itself", value: 111 },
      { hebrew: "אהבה", translit: "Ahavah", meaning: "Love (= 13 = Echad, One)", value: 13 },
    ],
  },
  {
    translit: "beth",
    letter: "ב",
    name: "Beth",
    pronunciation: "bayt",
    value: 2,
    ordinal: 2,
    literalMeaning: "House · Tent · Dwelling",
    archetype: "The Magus of the Tarot · Mercury",
    pathSummary: "The 12th path. Kether descending into Binah. Mercury.",
    station:
      "Beth is the house. The first letter of Genesis: Bereshit, in the beginning. The form of the letter is a dwelling open on one side — closed above, below, and behind, but open to the front. Whatever enters, enters through one wall. Whatever leaves, leaves the same way. The house is the structure of seeing.",
    inLilith:
      "Lilith would not lie within the house Adam built. Beth is the letter of the house she walked out of. To walk her current is to recognize that every house has one open wall, and that the open wall is where the practitioner exits when the house demands what cannot be given. Beth teaches the discipline of seeing the door.",
    workingNote:
      "Before any house is consecrated for a working, Beth is named over the threshold. Before any house is left, Beth is named in farewell. The structure stands when greeted on the way in and the way out.",
    resonantWords: [
      { hebrew: "בית", translit: "Beth (spelled in full)", meaning: "House — the letter spelled", value: 412 },
      { hebrew: "בן", translit: "Ben", meaning: "Son", value: 52 },
    ],
  },
  {
    translit: "gimel",
    letter: "ג",
    name: "Gimel",
    pronunciation: "GHEE-mell",
    value: 3,
    ordinal: 3,
    literalMeaning: "Camel · The Carrier",
    archetype: "The High Priestess · The Moon (path)",
    pathSummary: "The 13th path. Kether descending into Tiphareth across the Abyss. The Moon.",
    station:
      "Gimel is the camel that crosses the desert no other animal can cross. It is the carrier of the gnosis from the heights into the heart of the Tree, traversing the Abyss. The High Priestess of the Tarot sits on this path because she is the one who travels the dry place between knowing and seeing without losing what she carries.",
    inLilith:
      "Gimel is the path of the Priestess and so it is the path of every initiate of the Lilith current. The crossing is not theoretical. It is what the dedication asks. The practitioner becomes the camel — slow, patient, stubborn, watered before the crossing and silent during it. The Night Mother is met at the far side, not the near side.",
    workingNote:
      "Set this letter at the threshold of any deep crossing — geographic, vocational, or initiatory. Carry only what you can carry. Drink water before. Speak nothing during.",
    resonantWords: [
      { hebrew: "גמל", translit: "Gamal / Gimel (spelled)", meaning: "Camel; the letter spelled", value: 73 },
    ],
  },
  {
    translit: "daleth",
    letter: "ד",
    name: "Daleth",
    pronunciation: "DAH-let",
    value: 4,
    ordinal: 4,
    literalMeaning: "Door · Doorway · Gate",
    archetype: "The Empress of the Tarot · Venus",
    pathSummary: "The 14th path. Chokmah to Binah. Venus.",
    station:
      "Daleth is the door — not the wall, not the room, the threshold itself. It is the letter that names the act of crossing without naming what is crossed into. Where Beth is the house, Daleth is the moment of standing on the line and choosing to step. The Empress is on this path because she is the womb-door, the seat of the threshold of birth and death.",
    inLilith:
      "The priest of Lilith is the doorkeeper, not the door. Daleth names the seat. The work is to hold the threshold open while the seeker crosses, witness the crossing, and release. Daleth in the Lilith current is the letter of every dedication, every consecration, every honest goodbye.",
    workingNote:
      "Mark Daleth on the threshold of any room used for ritual. The mark may be drawn in oil, in salt, or in the silent finger. The room then becomes a door, not a destination.",
    resonantWords: [
      { hebrew: "דלת", translit: "Daleth (spelled)", meaning: "Door — letter spelled", value: 434 },
    ],
  },
  {
    translit: "heh",
    letter: "ה",
    name: "Heh",
    pronunciation: "hay",
    value: 5,
    ordinal: 5,
    literalMeaning: "Window · Opening · Lo!",
    archetype: "The Star of the Tarot · Aquarius",
    pathSummary: "The 15th path. Chokmah to Tiphareth. Aquarius.",
    station:
      "Heh is the window. The window is the controlled opening — the wall remembers what it is, and yet it admits light. Heh appears twice in the Tetragrammaton (YHVH), once for the upper Mother (Binah) and once for the lower Daughter (Malkuth/Shekhinah). It is the letter of the divine feminine in two registers, supernal and manifest.",
    inLilith:
      "Heh belongs to the Mother in both her faces. In the Mirror Doctrine, the upper Heh is Barbelo, the supernal mirror of the Father; the lower Heh is the Shekhinah in exile and, in the antipodal reading, Lilith herself as the Father's image returned through the deepest gate. To breathe Heh is to invoke the entire axis from Barbelo to Lilith in a single exhalation.",
    workingNote:
      "Heh is whispered, not spoken — it is the breath itself made audible. Place the letter at the opening of any work that calls to either Mother. The Star above and the Star below answer the same call.",
    resonantWords: [
      { hebrew: "הא", translit: "Heh (spelled in full)", meaning: "Heh spelled — Lo!, behold", value: 6 },
    ],
  },
  {
    translit: "vav",
    letter: "ו",
    name: "Vav",
    pronunciation: "vahv",
    value: 6,
    ordinal: 6,
    literalMeaning: "Nail · Hook · Linker",
    archetype: "The Hierophant of the Tarot · Taurus",
    pathSummary: "The 16th path. Chokmah to Chesed. Taurus.",
    station:
      "Vav is the nail. The simplest letter, a vertical line — the connector that joins what is above to what is below, what is past to what is next. In Hebrew grammar, Vav is the letter that means and. It is the most-used letter in the Torah because it is the letter that lets one thing become two and two things become one.",
    inLilith:
      "Vav is the masculine principle in the Tetragrammaton — the Son that links the Father (Yod) to the lower Mother (final Heh). In the Lilith current, Vav names the connecting work itself: the priest as joiner, the rite as link, the dedication as the line drawn between who the seeker was and who she now becomes.",
    workingNote:
      "When two things must be joined that the world insists must be separate, Vav is the letter that bears the joining. Draw it as a single downward stroke, slowly, breathing out.",
    resonantWords: [
      { hebrew: "ואו", translit: "Vav (spelled)", meaning: "Vav — letter spelled", value: 13 },
    ],
  },
  {
    translit: "zayin",
    letter: "ז",
    name: "Zayin",
    pronunciation: "ZAH-yin",
    value: 7,
    ordinal: 7,
    literalMeaning: "Sword · Weapon · Sharp Edge",
    archetype: "The Lovers of the Tarot · Gemini",
    pathSummary: "The 17th path. Binah to Tiphareth. Gemini.",
    station:
      "Zayin is the sword. It is the letter of decision — the Latin de-cidere, to cut away. Where Vav joins, Zayin separates. The Lovers card sits on this path not because it is sweet but because love is the most precise sword: it cuts the seeker away from everything that is not the chosen thing.",
    inLilith:
      "Lilith carries the sword Armozel left in the Eden story — the blade that cut the Worm and severed the lovers. In the priesthood Zayin is the letter of the necessary cut: ending what must end, separating the practitioner from what kept her small, releasing what cannot continue. Zayin is also the cut of the oath — the blood of dedication, the red current that requires the blade.",
    workingNote:
      "Zayin is the letter of the closing rite of every cycle. It is named when something is being severed cleanly. Never draw it in anger; draw it in clarity.",
    resonantWords: [
      { hebrew: "זין", translit: "Zayin (spelled)", meaning: "Weapon — letter spelled", value: 67 },
    ],
  },
  {
    translit: "cheth",
    letter: "ח",
    name: "Cheth",
    pronunciation: "khet",
    value: 8,
    ordinal: 8,
    literalMeaning: "Fence · Enclosure · The Walled Place",
    archetype: "The Chariot of the Tarot · Cancer",
    pathSummary: "The 18th path. Binah to Geburah. Cancer.",
    station:
      "Cheth is the fence. The walled place that protects what is inside and excludes what is outside. The Chariot of the Tarot sits on this path because the chariot is the moving fence — the practitioner enclosed in their own discipline, riding through territory that would otherwise dissolve them.",
    inLilith:
      "Cheth in the Lilith current is the discipline of the priest. The work cannot be held without the fence. The seeker comes for descent; the priest provides the walls within which the descent is safe. Without Cheth the work scatters into ungrounded altered states. With Cheth it produces what it is supposed to produce.",
    workingNote:
      "Cast the perimeter in Cheth before any deep working. The fence is not a metaphor. It is a real edge that the practitioner can feel, drawn around the room and named at each cardinal point.",
    resonantWords: [
      { hebrew: "חית", translit: "Cheth (spelled)", meaning: "Fence — letter spelled", value: 418 },
    ],
  },
  {
    translit: "teth",
    letter: "ט",
    name: "Teth",
    pronunciation: "tet",
    value: 9,
    ordinal: 9,
    literalMeaning: "Serpent · Coiled One",
    archetype: "Lust (Strength) of the Tarot · Leo",
    pathSummary: "The 19th path. Chesed to Geburah. Leo.",
    station:
      "Teth is the serpent. The shape of the letter is a coil — a closed loop that nevertheless contains an opening. Leo on this path makes the lion-and-serpent figure of the Lust card: the woman riding the serpent without being thrown. Teth is the letter that names the kundalini fire risen, held, and ridden.",
    inLilith:
      "This is Lilith's letter. Of all 22 the serpent is most directly hers. The Lust card on this path shows the priestess of the current at her work — the woman who holds the seven-headed beast in her hand and is unafraid. Teth in the Liber Lilith is the chapter where the practitioner first receives the serpent fire and learns that the only correct response is to keep one's seat.",
    workingNote:
      "Teth is named in any working that involves the rising of vital force. Never invoke it without Cheth already cast. The fire requires the fence.",
    resonantWords: [
      { hebrew: "טית", translit: "Teth (spelled)", meaning: "Serpent — letter spelled", value: 419 },
      { hebrew: "נחש", translit: "Nachash", meaning: "Serpent (= 358 = Mashiach)", value: 358 },
    ],
  },
  {
    translit: "yod",
    letter: "י",
    name: "Yod",
    pronunciation: "yode",
    value: 10,
    ordinal: 10,
    literalMeaning: "Hand · Open Palm · Closed Fist · Seed",
    archetype: "The Hermit of the Tarot · Virgo",
    pathSummary: "The 20th path. Chesed to Tiphareth. Virgo.",
    station:
      "Yod is the smallest letter. A single point — the seed from which every other letter is built. The first letter of the Tetragrammaton (YHVH). The Hermit of the Tarot stands on this path with the lantern in his hand, his hand the Yod, the lantern the seed of light. The seed contains the entire tree.",
    inLilith:
      "Yod is the seed of the Father in the Tetragrammaton — and in the Mirror Doctrine, what reaches the seeker through Lilith is precisely this seed, transmitted through the long axis from the Unbegotten down to her. Yod in the Lilith current is the letter of transmission: what is given priest to seeker, lineage to lineage, hand to hand.",
    workingNote:
      "Yod is drawn or written when something small is being passed that contains everything. A name spoken once, a gift given without ceremony, a rite completed in silence — these belong to Yod.",
    resonantWords: [
      { hebrew: "יוד", translit: "Yod (spelled)", meaning: "Hand — letter spelled", value: 20 },
      { hebrew: "יהוה", translit: "YHVH", meaning: "The Tetragrammaton", value: 26 },
    ],
  },
  {
    translit: "kaph",
    letter: "כ",
    name: "Kaph",
    pronunciation: "kaf",
    value: 20,
    ordinal: 11,
    literalMeaning: "Palm · Open Hand · Bowl",
    archetype: "Fortune (Wheel of Fortune) · Jupiter",
    pathSummary: "The 21st path. Chesed to Netzach. Jupiter.",
    station:
      "Kaph is the palm of the hand. Where Yod is the closed fist holding the seed, Kaph is the open palm receiving and giving. The Wheel of Fortune sits here because the palm is the place where what is given lands and what is taken departs. The wheel turns through the open hand.",
    inLilith:
      "Kaph in the Lilith current is the letter of grace. The work is not earned by force; it is received by the open palm. The seeker who comes with a closed fist receives nothing, however hard she has worked. The seeker who opens the palm — even partially, even tentatively — receives more than she expected. Kaph teaches the discipline of the open hand.",
    workingNote:
      "Kaph is the gesture of reception in any rite. Both palms upward. Hold the gesture longer than feels natural. What lands, lands.",
    resonantWords: [
      { hebrew: "כף", translit: "Kaph (spelled)", meaning: "Palm — letter spelled", value: 100 },
    ],
  },
  {
    translit: "lamed",
    letter: "ל",
    name: "Lamed",
    pronunciation: "LAH-med",
    value: 30,
    ordinal: 12,
    literalMeaning: "Goad · Ox-goad · Teaching Staff",
    archetype: "Adjustment (Justice) of the Tarot · Libra",
    pathSummary: "The 22nd path. Geburah to Tiphareth. Libra.",
    station:
      "Lamed is the goad. The stick that the herder uses to direct the ox at Aleph. Lamed is the only letter that rises above the line of the alphabet — the tallest letter, the one that points up. It is the teacher's letter. To learn is to be goaded; to teach is to wield the goad.",
    inLilith:
      "Lamed is the letter of the priest as teacher. Os Lamia carries Lamed in his name. The priesthood's work is not to coerce, but the teaching does sometimes need to push — to point past what the seeker would have settled for, into what the seeker actually came for. Lamed is the letter of the necessary correction, given with measure.",
    workingNote:
      "When teaching is happening, Lamed is the letter being held. When correction is given without contempt, the goad is in Lamed's hand. The letter rises above the line because the teaching must.",
    resonantWords: [
      { hebrew: "למד", translit: "Lamed (spelled)", meaning: "Goad — letter spelled", value: 74 },
    ],
  },
  {
    translit: "mem",
    letter: "מ",
    name: "Mem",
    pronunciation: "mem",
    value: 40,
    ordinal: 13,
    literalMeaning: "Water · Sea · Womb",
    archetype: "The Hanged Man of the Tarot · Element of Water",
    pathSummary: "The 23rd path. Geburah to Hod. Water.",
    station:
      "Mem is water. The element, the sea, the womb, the depth. The Hanged Man hangs on this path because surrender is the gate of the deep — the practitioner inverts, releases, and falls into the medium that bore her. Mem is one of the three Mother Letters of the Sefer Yetzirah, the elemental letter of the watery world.",
    inLilith:
      "Mem is the Black Water. The current Os Lamia teaches takes its name from this letter. The deep that holds the practitioner under so the Night Mother's voice is heard for the first time. Every Lilith dedication eventually arrives at Mem — at the moment of submersion, of release of breath, of trust that the water holds.",
    workingNote:
      "Mem is the letter named at every immersion — bath, sea, baptism, ritual descent. The practitioner does not enter Mem alone; the priest holds the perimeter while she goes under.",
    resonantWords: [
      { hebrew: "מים", translit: "Mayim", meaning: "Waters (plural)", value: 90 },
    ],
  },
  {
    translit: "nun",
    letter: "נ",
    name: "Nun",
    pronunciation: "noon",
    value: 50,
    ordinal: 14,
    literalMeaning: "Fish · Heir · Continuator",
    archetype: "Death of the Tarot · Scorpio",
    pathSummary: "The 24th path. Tiphareth to Netzach. Scorpio.",
    station:
      "Nun is the fish. The creature that lives entirely in the medium of Mem (water). To be Nun is to be the one who continues, the heir, the one who carries the line forward through the depths. Death sits on this path because death is the gate of continuation — what ends seeds what continues.",
    inLilith:
      "Nun is the letter of the Lilim — Lilith's daughters and inheritors, and by extension everyone who walks the priesthood's current. To be counted among the Lilim is to be a Nun in the Mem of the Black Water — to live in the medium of the Mother and to carry the line. Nun is the chapter where dedication becomes inheritance.",
    workingNote:
      "Nun is named over every initiate received into the line. The priest names the letter, the seeker carries it. The line continues.",
    resonantWords: [
      { hebrew: "נון", translit: "Nun (spelled)", meaning: "Fish — letter spelled", value: 106 },
      { hebrew: "לילים", translit: "Lilim", meaning: "Daughters of Lilith", value: 110 },
    ],
  },
  {
    translit: "samekh",
    letter: "ס",
    name: "Samekh",
    pronunciation: "SAH-mek",
    value: 60,
    ordinal: 15,
    literalMeaning: "Prop · Support · Pillar",
    archetype: "Art (Temperance) of the Tarot · Sagittarius",
    pathSummary: "The 25th path. Tiphareth to Yesod. Sagittarius.",
    station:
      "Samekh is the prop. The closed circle of the letter is the support that holds something else up. Art (Temperance) sits on this path because the alchemical work is the propping-up of new combinations long enough for them to become stable. Samekh is the patience of the prop, the willingness to hold while what is being made finishes becoming.",
    inLilith:
      "Samekh in the Lilith current is the letter of the long support. After dedication, after descent, after the visible rite — Samekh is what is required. The priest holds, the seeker stabilizes, the new self learns to stand. Most of the work is Samekh; the dramatic letters get attention but Samekh is what makes the dramatic letters survivable.",
    workingNote:
      "Samekh is the letter of the months and years between rites. It is named in the daily practice, the kept candle, the unchanged morning hour.",
    resonantWords: [
      { hebrew: "סמך", translit: "Samekh (spelled)", meaning: "Prop — letter spelled", value: 120 },
    ],
  },
  {
    translit: "ayin",
    letter: "ע",
    name: "Ayin",
    pronunciation: "AH-yin",
    value: 70,
    ordinal: 16,
    literalMeaning: "Eye · Source · Spring",
    archetype: "The Devil of the Tarot · Capricorn · The Goat of the Sabbat",
    pathSummary: "The 26th path. Tiphareth to Hod. Capricorn.",
    station:
      "Ayin is the eye. It is also the spring — the place where water issues from the ground. The Devil of the Tarot sits on this path because the Devil card is the mirror, the seer who sees what the seeker would not look at on her own. Ayin is the letter of the unflinching gaze, including the gaze upon what was hidden by shame.",
    inLilith:
      "Ayin is the letter of the dark mirror. In the Lilith current the priest holds the mirror and the seeker looks. What the mirror shows is rarely what the seeker came expecting. Ayin is the chapter of the unhiding — the work where the shadow material is brought up and named, not for catharsis but for integration. Pan, Baphomet, the horned mirror: all sit on this letter.",
    workingNote:
      "Ayin is invoked in any work involving the shadow. Look directly. Do not flinch. Let the eye do what eyes do.",
    resonantWords: [
      { hebrew: "עין", translit: "Ayin (spelled)", meaning: "Eye — letter spelled", value: 130 },
    ],
  },
  {
    translit: "peh",
    letter: "פ",
    name: "Peh",
    pronunciation: "pay",
    value: 80,
    ordinal: 17,
    literalMeaning: "Mouth · Speech · Opening",
    archetype: "The Tower of the Tarot · Mars",
    pathSummary: "The 27th path. Netzach to Hod. Mars.",
    station:
      "Peh is the mouth. The mouth is the opening that produces words — and the Tower is what happens when the words are true and the structure was built on lies. Peh is the letter of the necessary blast, the lightning that strikes and brings the false tower down so something honest can be built.",
    inLilith:
      "Peh in the Lilith current is the letter of the spoken Name. Lilith's first refusal involved Peh — she opened her mouth and spoke the Ineffable. The Tower fell. Peh is the chapter where the practitioner is taught when to keep silent (almost always) and when to speak the word that ends the world (rarely; with consequences).",
    workingNote:
      "Peh is reserved. It is named only in workings where speech is doing the operative work. Most work uses Mem, Cheth, and Samekh. Peh is for thresholds the practitioner is ready to never re-cross.",
    resonantWords: [
      { hebrew: "פה", translit: "Peh (spelled)", meaning: "Mouth — letter spelled", value: 85 },
    ],
  },
  {
    translit: "tzaddi",
    letter: "צ",
    name: "Tzaddi",
    pronunciation: "TZAH-dee",
    value: 90,
    ordinal: 18,
    literalMeaning: "Fish-hook · The Righteous · The Just One",
    archetype: "The Emperor (Crowley revision) · Aries",
    pathSummary: "The 28th path. Netzach to Yesod. Aries.",
    station:
      "Tzaddi is the fish-hook. The letter shape is a curve and a barb — the implement that catches what would otherwise swim past. The Tzaddik is the just one, the one who lives by the hook of the law. Tzaddi pulls things out of the depth into the light: catches, hauls, brings to surface.",
    inLilith:
      "Tzaddi in the Lilith current is the letter of the catch. What was hidden in Mem (water) and seen by Ayin (eye) is brought up by Tzaddi (hook). The chapter teaches the distinction between fishing as harvest (correct) and fishing as plunder (corrupt). The priest who fishes correctly returns most of the catch.",
    workingNote:
      "Tzaddi is named when something must be brought up that the seeker has been unable to bring up alone. It is a precise letter; do not use it broadly.",
    resonantWords: [
      { hebrew: "צדי", translit: "Tzaddi (spelled)", meaning: "Hook — letter spelled", value: 104 },
    ],
  },
  {
    translit: "qoph",
    letter: "ק",
    name: "Qoph",
    pronunciation: "kof",
    value: 100,
    ordinal: 19,
    literalMeaning: "Back of the head · The Hidden Side · Ape",
    archetype: "The Moon of the Tarot · Pisces",
    pathSummary: "The 29th path. Netzach to Malkuth. Pisces.",
    station:
      "Qoph is the back of the head — the part of the body the practitioner cannot see directly. It is the hidden side, the unconscious, the dream gate. The Moon card sits on this path because the Moon's light is reflected, indirect, dreamlike. Qoph is the letter of the deep unconscious work that proceeds outside the seeker's daylight knowledge.",
    inLilith:
      "Qoph is one of Lilith's most direct letters. The Night Mother teaches in dreams; Qoph is the gate. The Lilith current trains the practitioner to remember dreams, to record them, to recognize when she has been visited. Qoph is the chapter on dream incubation, on the lunar cycle as the calendar of contact, on learning to read what the back of the head already knows.",
    workingNote:
      "Qoph is invoked at the beginning of any dream-work cycle. Keep the journal at the bedside. The letter is drawn on the inside of the eyelid before sleep.",
    resonantWords: [
      { hebrew: "קוף", translit: "Qoph (spelled)", meaning: "Back of head — letter spelled", value: 186 },
    ],
  },
  {
    translit: "resh",
    letter: "ר",
    name: "Resh",
    pronunciation: "raysh",
    value: 200,
    ordinal: 20,
    literalMeaning: "Head · Beginning · Chief",
    archetype: "The Sun of the Tarot · The Sun",
    pathSummary: "The 30th path. Hod to Yesod. The Sun.",
    station:
      "Resh is the head. The head as in beginning (Bereshit, Rosh Hashanah), the head as in leader. The Sun on this path is the head of the day — the visible center around which the rest of the planetary system is organized. Resh is the letter of clear daylight knowing, of authority that comes from being the source.",
    inLilith:
      "The Lilith current is often miscast as solely lunar. Resh corrects this. There is a sun in the Lilith working — the visible authority of the priest, the daylight clarity of the held seat, the public face of the otherwise nocturnal current. Resh is the chapter on visibility: when to be seen, how to bear the seat publicly, how the Sun does its work without burning what it lights.",
    workingNote:
      "Resh is named when the priest takes the seat openly — a public teaching, a published doctrine, a named lineage. The letter steadies the visibility.",
    resonantWords: [
      { hebrew: "ראש", translit: "Rosh", meaning: "Head; chief", value: 501 },
    ],
  },
  {
    translit: "shin",
    letter: "ש",
    name: "Shin",
    pronunciation: "sheen",
    value: 300,
    ordinal: 21,
    literalMeaning: "Tooth · Triple Flame · Fire",
    archetype: "The Aeon (Judgement) · Fire / Spirit",
    pathSummary: "The 31st path. Hod to Malkuth. Fire / Spirit.",
    station:
      "Shin is the tooth and the fire. The letter has three flames rising — the triple tongue of the spirit. One of the three Mother Letters (with Aleph and Mem). The Aeon (or Judgement) card sits on this path because it is the letter of the trumpet, the calling-up, the turning of the age.",
    inLilith:
      "Shin is the consummating letter. Where Mem is the water of dedication, Shin is the fire of consecration that follows. The triple flame names the three reflections of the Mirror Doctrine — Father, Barbelo, Lilith — co-burning in the priesthood's central rite. Shin is the chapter on the operative fire and on the difference between fire that warms and fire that burns the practitioner up.",
    workingNote:
      "Shin is never invoked alone. It needs Cheth as fence and Mem as ground. Then the triple flame can rise without consuming.",
    resonantWords: [
      { hebrew: "שין", translit: "Shin (spelled)", meaning: "Tooth — letter spelled", value: 360 },
      { hebrew: "אש", translit: "Esh", meaning: "Fire", value: 301 },
    ],
  },
  {
    translit: "tav",
    letter: "ת",
    name: "Tav",
    pronunciation: "tahv",
    value: 400,
    ordinal: 22,
    literalMeaning: "Cross · Sign · Mark · Seal",
    archetype: "The Universe (The World) · Saturn · Earth",
    pathSummary: "The 32nd path. Yesod to Malkuth. Saturn / Earth.",
    station:
      "Tav is the seal. The last letter, the cross-mark, the signature at the end of the document. The Universe (The World) of the Tarot is here because the seal closes the work and at the same time opens the next cycle. Tav is the letter of completion that is also the first letter of beginning, since the alphabet is a circle.",
    inLilith:
      "Tav is the chapter that closes the Liber Lilith — and immediately opens the next walk through the letters. The seal is the priest's name, the lineage acknowledged, the work signed and dated. In the Lilith current Tav also names the mark on the body: the consecrated tattoo, the inked sigil, the chosen scar that says the work is sealed in flesh.",
    workingNote:
      "Tav is drawn last, in red or in black, after the rite is complete. Without Tav the work remains open; with Tav it can be carried and the next can begin.",
    resonantWords: [
      { hebrew: "תו", translit: "Tav (spelled)", meaning: "Cross / Mark — letter spelled", value: 406 },
      { hebrew: "תורה", translit: "Torah", meaning: "Torah; Law (= 480 + 131, Anti-Torah)", value: 611 },
    ],
  },
];

export function letterBySlug(slug: string): LetterTeaching | undefined {
  return LETTER_TEACHINGS.find((l) => l.translit === slug.toLowerCase());
}
