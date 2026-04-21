/* JSON-LD injector — server component, renders structured data into <head>.
   Use one per page with the appropriate schema function from lib/schema.ts. */

interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON-LD is safe to inject; never accept user-controlled data here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
