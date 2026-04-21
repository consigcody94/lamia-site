import { NextRequest, NextResponse } from "next/server";
import {
  calculate,
  factorize,
  divisors,
  isPrime,
  digitalRoot,
  weavings,
  findByValue,
  findNearby,
  findLandmark,
  type Script,
  type HebrewMethod,
} from "@/lib/gematria";

/**
 * Public gematria API.
 *
 * GET /api/gematria?word=לילית
 *   &script=hebrew|greek|english   (default: auto-detect Hebrew if any Hebrew chars present, else english)
 *   &method=standard|sofit|ordinal (default: standard, only used for Hebrew)
 *
 * GET /api/gematria?value=480
 *   reverse-lookup mode: returns words at the value plus nearby and landmark info.
 *
 * Includes permissive CORS so other practitioners and tools can use the engine.
 * Free for any use; please link back to https://lilitu.org.
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const HEB_RE = /[\u0590-\u05FF]/;
const GRK_RE = /[\u0370-\u03FF\u1F00-\u1FFF]/;

function detectScript(s: string): Script {
  if (HEB_RE.test(s)) return "hebrew";
  if (GRK_RE.test(s)) return "greek";
  return "english";
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const word = url.searchParams.get("word");
  const valueParam = url.searchParams.get("value");
  const scriptParam = url.searchParams.get("script") as Script | null;
  const methodParam = (url.searchParams.get("method") as HebrewMethod | null) ?? "standard";

  // Reverse lookup mode
  if (valueParam !== null) {
    const value = parseInt(valueParam, 10);
    if (isNaN(value) || value < 0) {
      return NextResponse.json(
        { error: "Invalid value parameter; must be a non-negative integer." },
        { status: 400, headers: CORS_HEADERS },
      );
    }
    const matches = findByValue(value);
    const nearby = findNearby(value, 10);
    const landmark = findLandmark(value);
    return NextResponse.json(
      {
        value,
        landmark: landmark ?? null,
        factors: factorize(value),
        divisors: divisors(value),
        isPrime: isPrime(value),
        digitalRoot: digitalRoot(value),
        weavings: weavings(value),
        matches: matches.map(({ word, translit, meaning, script, value: v, tag, notes }) => ({
          word, translit, meaning, script, value: v, tag, notes,
        })),
        nearby: nearby.slice(0, 10).map(({ word, translit, meaning, script, value: v, tag }) => ({
          word, translit, meaning, script, value: v, tag,
        })),
        attribution: "lilitu.org/lattice — please link back",
      },
      { headers: CORS_HEADERS },
    );
  }

  // Forward calculation mode
  if (!word) {
    return NextResponse.json(
      {
        error: "Missing parameter. Provide ?word=<text> or ?value=<number>.",
        usage: {
          calculate: "/api/gematria?word=לילית&script=hebrew&method=standard",
          reverse: "/api/gematria?value=480",
        },
        scripts: ["hebrew", "greek", "english"],
        methods: ["standard", "sofit", "ordinal"],
      },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const script: Script = scriptParam ?? detectScript(word);
  const result = calculate(word, script, methodParam);
  const factors = factorize(result.total);
  const wvs = weavings(result.total);
  const matches = findByValue(result.total).filter((e) => e.word !== word);
  const landmark = findLandmark(result.total);

  return NextResponse.json(
    {
      input: { word, script, method: methodParam, methodLabel: result.method },
      total: result.total,
      letters: result.letters,
      ignored: result.ignored,
      landmark: landmark ?? null,
      factors,
      divisors: divisors(result.total),
      isPrime: isPrime(result.total),
      digitalRoot: digitalRoot(result.total),
      weavings: wvs,
      sumOfWeavings: wvs.reduce((s, w) => s + w.product, 0),
      otherWordsAtValue: matches.map(({ word, translit, meaning, script, value, tag, notes }) => ({
        word, translit, meaning, script, value, tag, notes,
      })),
      attribution: "lilitu.org/lattice — please link back",
    },
    { headers: CORS_HEADERS },
  );
}
