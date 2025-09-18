import React from "react";
type Block =
  | { type: "heading"; level?: 1|2|3|4|5|6; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string; width?: number; height?: number }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "html"; html: string }     // assume sanitized server-side
  | { type: "divider" }
  | { type: string; [key: string]: any }; // for future custom blocks

interface DataType {
  id?: number;
  date?: string;
  dateIcon?: string;
  thumbFull?: string;
  author?: string;
  title?: string;

  // legacy fields (optional)
  content?: string | string[];
  contentParagraphs?: string[];
  contentQuote?: string;
  contentList?: string[];

  // new format
  blocks?: Block[];
  tags?: string[];
}
const CodeBlock: React.FC<{ code: string; lang?: string }> = ({ code, lang }) => (
  <pre className={`codeblock ${lang || ""}`}><code>{code}</code></pre>
);

const ImageBlock: React.FC<{ src: string; alt?: string; caption?: string; width?: number; height?: number }> =
  ({ src, alt, caption, width, height }) => (
    <figure>
      <img src={src} alt={alt || "Image"} {...(width ? { width } : {})} {...(height ? { height } : {})} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
);

const blockRegistry: Record<string, (b: any, i: number) => React.ReactNode> = {
  heading: (b, i) => {
    const L = Math.min(Math.max(b.level ?? 2, 1), 6);
    const Tag = `h${L}` as keyof JSX.IntrinsicElements;
    return <Tag key={i}>{b.text}</Tag>;
  },
  paragraph: (b, i) => <p key={i}>{b.text}</p>,
  image: (b, i) => <ImageBlock key={i} {...b} />,
  quote: (b, i) => <blockquote key={i}>{b.text}{b.cite ? <footer>— {b.cite}</footer> : null}</blockquote>,
  list: (b, i) =>
    b.ordered
      ? <ol key={i}>{b.items?.map((it: string, j: number) => <li key={j}>{it}</li>)}</ol>
      : <ul key={i}>{b.items?.map((it: string, j: number) => <li key={j}>{it}</li>)}</ul>,
  code: (b, i) => <CodeBlock key={i} code={b.code} lang={b.lang} />,
  html: (b, i) => <div key={i} className="prose max-w-none" dangerouslySetInnerHTML={{ __html: b.html }} />,
  divider: (_b, i) => <hr key={i} />
};

export const ContentRenderer: React.FC<{ blocks?: Block[]; fallback?: React.ReactNode }> = ({ blocks, fallback }) => {
  if (!blocks?.length) return <>{fallback}</>;
  return (
    <>
      {blocks.map((b, i) => {
        const render = blockRegistry[b.type];
        return render ? render(b, i) : (
          <div key={i} className="unknown-block" data-type={b.type}>
            {/* Unknown block: ignore or log */}
          </div>
        );
      })}
    </>
  );
};
