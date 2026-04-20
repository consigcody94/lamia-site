"use client";

import { motion } from "framer-motion";
import { BLACK_WATER, LINEAGE, LINEAGE_CHAPTER, LINKS, PRIEST } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8977a]/40 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
            ☾ The One Who Keeps the Door ☾
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-wide md:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 40%, #c8977a 100%)" }}
            >
              About {PRIEST.name}
            </span>
          </h2>
          <p className="mt-3 font-caps text-[11px] uppercase tracking-[0.4em]" style={{ color: "#a8a09b" }}>
            {PRIEST.title} · {PRIEST.location}
          </p>
        </div>

        {/* ACT I — Black Water Baptism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative mb-8 overflow-hidden rounded-xl border p-8 backdrop-blur md:p-12"
          style={{
            borderColor: "rgba(200,151,122,0.3)",
            background:
              "linear-gradient(160deg, rgba(13,7,9,0.9) 0%, rgba(74,16,32,0.25) 50%, rgba(13,7,9,0.9) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 moon-pulse"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 100%, rgba(114,31,53,0.25), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex items-baseline gap-4">
              <span className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
                Act I
              </span>
              <span className="h-px flex-1 bg-[#c8977a]/30" />
            </div>
            <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#ebdcc4" }}>
              {BLACK_WATER.title}
            </h3>
            <p className="mt-6 font-serif text-lg leading-[1.9] text-[#ebdcc4]/85 md:text-xl">
              {BLACK_WATER.body}
            </p>
          </div>
        </motion.div>

        {/* ACT II — The Library of Forbidden Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mb-8 overflow-hidden rounded-xl border p-8 backdrop-blur md:p-12"
          style={{
            borderColor: "rgba(200,151,122,0.3)",
            background:
              "linear-gradient(160deg, rgba(13,7,9,0.9) 0%, rgba(74,16,32,0.2) 50%, rgba(13,7,9,0.9) 100%)",
          }}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Act II
            </span>
            <span className="h-px flex-1 bg-[#c8977a]/30" />
          </div>
          <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#ebdcc4" }}>
            The Library of Forbidden Knowledge
          </h3>
          <div className="mt-6 flex flex-col gap-5 font-serif text-lg leading-[1.9] text-[#ebdcc4]/85">
            <p>
              The Library is what I call the condition of knowing, as a teenager and then a young
              man, what a person my age had no business knowing. Names before I had read them.
              Rites I had never been taught. Sigils rising from the back of a notebook in a hand
              that felt borrowed. Dream-instruction that arrived with the cadence of a teacher
              already mid-sentence. It was not scholarship. It was transmission.
            </p>
            <p>
              This is old work for her. In the Zohar she is the consort of Samael and ruler of
              the Sitra Achra, the Other Side, teaching the arts the dayside tradition refused to
              keep. In the Alphabet of Ben-Sira she holds a Name that power could not take back.
              Her daughters, the Lilim, are described across medieval Jewish mysticism and modern
              Luciferian writings as keepers of lunar and forbidden wisdom, awakeners of the
              chosen, the ones who come to the young in dreams and mark them. Michael W. Ford
              names her plainly in <em>The Bible of the Adversary</em> as the <em>Awakener</em>{" "}
              of the Luciferian spark in her initiates. Every tradition that has touched her
              honestly has said the same thing in different words: she chooses her priests young,
              and she teaches them in their sleep before she ever introduces them to a lodge.
            </p>
            <p>
              That was my Library. Physical texts and manuscripts accumulated later, handed down
              by elders who recognized in me the fingerprints of her visits. But the gnosis came
              first, and the books arrived as confirmation.
            </p>
            <p>
              I did not waste it. I walked across the country with it.
            </p>
          </div>
        </motion.div>

        {/* ACT III — Old Town Spring + Lineage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mb-8 overflow-hidden rounded-xl border p-8 backdrop-blur md:p-12"
          style={{
            borderColor: "rgba(200,151,122,0.3)",
            background:
              "linear-gradient(160deg, rgba(13,7,9,0.9) 0%, rgba(74,16,32,0.25) 50%, rgba(13,7,9,0.9) 100%)",
          }}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Act III
            </span>
            <span className="h-px flex-1 bg-[#c8977a]/30" />
          </div>
          <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#ebdcc4" }}>
            The Initiation at Old Town Spring
          </h3>
          <p className="mt-2 font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#a8a09b" }}>
            {LINEAGE_CHAPTER.locator}
          </p>
          <div className="mt-6 flex flex-col gap-5 font-serif text-lg leading-[1.9] text-[#ebdcc4]/85">
            <p>
              Most of my youth, up until eighteen, was spent on the road. I was looking for the
              others. Not books about the others, the others themselves. I found them in kitchens
              and back rooms and conference halls in a dozen states, from the Gulf coast up
              through Appalachia, across to the desert southwest, and home again. Every meeting
              added a word to a vocabulary I did not yet know I was assembling.
            </p>
            <p>
              A pattern followed me across those miles that I could not explain at the time. In
              gas stations, at counters, in airport terminals, in the back rows of gatherings,
              strangers would catch my eye, hold it a beat longer than politeness allows, and
              then offer something: a ride, a meal, a place to sleep. More often than not they
              would go further, lowering their voice and telling me a secret they had never told
              anyone, or a piece of a teaching they had carried alone and needed to hand to
              someone. I learned later that this is an old motif. The ones marked by the Dark
              Mother carry a resonance that others feel without knowing why, and the world
              arranges aid around them. I did not earn it. I received it, and the Library
              doubled in every city.
            </p>
            <p>
              At eighteen I was initiated as a High Priest of the Greater Church of Lucifer at a
              gathering in Old Town Spring, Texas. The Greater Church of Lucifer was founded in
              2013 under the joint leadership of four heads: Michael W. Ford, Hope Marie Ford,{" "}
              <a
                href={LINKS.nol}
                target="_blank"
                rel="noopener"
                className="transition hover:text-[#e4b89c]"
                style={{ color: "#c8977a" }}
              >
                Jeremy Crow
              </a>
              , and Jacob No. Its public temple would open on the eve of Samhain, October 30 of
              2015. My initiation took place during that formative window, in the
              Houston-suburb circle that became the first openly Luciferian temple in the United
              States. I stood in the same room with all four of them and watched the Left Hand
              Path in America name itself out loud.
            </p>
            <p>
              The temple in Old Town Spring was forced to close in 2016 under the weight of local
              hostility. The order continued under its new name,{" "}
              <em>{LINEAGE_CHAPTER.renamedTo}</em>. The current did not dissipate. It moved. Some
              of us moved with it.
            </p>
          </div>

          {/* Lineage panel — the four heads of GCOL */}
          <div className="mt-10 border-t pt-8" style={{ borderColor: "rgba(200,151,122,0.25)" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ☾ The Four Heads of GCOL ☾
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {LINEAGE.map((f) => (
                <div
                  key={f.name}
                  className="rounded-lg border p-5"
                  style={{
                    borderColor: "rgba(200,151,122,0.25)",
                    background: "rgba(13,7,9,0.6)",
                  }}
                >
                  <p className="font-display text-lg font-semibold" style={{ color: "#e4b89c" }}>
                    {f.link ? (
                      <a
                        href={f.link}
                        target="_blank"
                        rel="noopener"
                        className="transition hover:text-[#ebdcc4]"
                      >
                        {f.name}
                      </a>
                    ) : (
                      f.name
                    )}
                  </p>
                  <p className="mt-1 font-caps text-[9px] uppercase tracking-[0.3em]" style={{ color: "#c8977a" }}>
                    {f.role}
                  </p>
                  <p className="mt-3 font-serif text-sm leading-relaxed text-[#ebdcc4]/75">
                    {f.significance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ACT IV — Present work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative overflow-hidden rounded-xl border p-8 backdrop-blur md:p-12"
          style={{
            borderColor: "rgba(200,151,122,0.3)",
            background:
              "linear-gradient(160deg, rgba(13,7,9,0.9) 0%, rgba(74,16,32,0.2) 50%, rgba(13,7,9,0.9) 100%)",
          }}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              Now
            </span>
            <span className="h-px flex-1 bg-[#c8977a]/30" />
          </div>
          <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#ebdcc4" }}>
            The Work in Washington
          </h3>
          <div className="mt-6 flex flex-col gap-5 font-serif text-lg leading-[1.9] text-[#ebdcc4]/85">
            <p>
              I work now from the Washington DMV area: Virginia, Maryland, and the District. My
              consulting room, when it is a room, has red candles, bare floors, and a door that
              closes completely. My work is to hold space for seekers walking the Lilith current,
              to facilitate the rites that cannot be done alone, and to preserve and transmit what
              was handed to me.
            </p>
            <p>
              I am in active dialogue with the{" "}
              <a
                href={LINKS.nol}
                target="_blank"
                rel="noopener"
                className="transition hover:text-[#e4b89c]"
                style={{ color: "#c8977a" }}
              >
                Novus Ordo Luciferi
              </a>
              , the{" "}
              <a
                href={LINKS.lrs}
                target="_blank"
                rel="noopener"
                className="transition hover:text-[#e4b89c]"
                style={{ color: "#c8977a" }}
              >
                Luciferian Research Society
              </a>
              , and the broader Gnostic Luciferian current under which the Lilith lineage sits. If
              you hear her voice and do not know what to do with it, this is one of the rooms
              where the conversation is still being held.
            </p>
          </div>

          <div className="mt-8 border-t pt-6" style={{ borderColor: "rgba(200,151,122,0.25)" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em] text-[#ebdcc4]/55">
              Active in the wider current:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-caps text-[10px] uppercase tracking-[0.3em]">
              <a href={LINKS.nol} target="_blank" rel="noopener" className="transition hover:text-[#e4b89c]" style={{ color: "#c8977a" }}>Novus Ordo Luciferi</a>
              <span className="text-[#ebdcc4]/20">·</span>
              <a href={LINKS.lrs} target="_blank" rel="noopener" className="transition hover:text-[#e4b89c]" style={{ color: "#c8977a" }}>Luciferian Research Society</a>
              <span className="text-[#ebdcc4]/20">·</span>
              <a href={LINKS.tools} target="_blank" rel="noopener" className="transition hover:text-[#e4b89c]" style={{ color: "#c8977a" }}>Ritual Tools</a>
              <span className="text-[#ebdcc4]/20">·</span>
              <a href={LINKS.discord} target="_blank" rel="noopener" className="transition hover:text-[#e4b89c]" style={{ color: "#c8977a" }}>Discord</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
