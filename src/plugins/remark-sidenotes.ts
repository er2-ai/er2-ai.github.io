/**
 * Tufte-style sidenotes and margin notes for Markdown.
 *
 *   Sidenote:    {- This text moves into the right margin. -}
 *   Margin note: {-- This text also sits in the margin, unnumbered. --}
 *
 * The plugin accepts both `{-- … --}` and the typographically converted
 * `{— … —}` form (Astro's smartypants turns `--` into an em dash before
 * this plugin runs).
 *
 * Notes must be a single paragraph and cannot contain $...$ math or
 * Markdown links; raw HTML inside a note is passed through.
 */

interface TextNode {
  type: 'text';
  value: string;
}

interface HtmlNode {
  type: 'html';
  value: string;
}

type FragmentNode = TextNode | HtmlNode;

const NOTE_RE = /\{--([\s\S]*?)--\}|\{\u2014([\s\S]*?)\u2014\}|\{-([\s\S]*?)-\}/g;

function transformText(value: string): FragmentNode[] | null {
  const parts: FragmentNode[] = [];
  let lastIndex = 0;
  let matched = false;
  let match: RegExpExecArray | null;

  NOTE_RE.lastIndex = 0;
  while ((match = NOTE_RE.exec(value)) !== null) {
    matched = true;
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: value.slice(lastIndex, match.index) });
    }
    const isMarginNote = match[1] !== undefined || match[2] !== undefined;
    const inner = (match[1] ?? match[2] ?? match[3]) ?? '';
    // A sidenote gets a superscript number in the text that matches the
    // number printed in the margin; a margin note is unnumbered.
    const html = isMarginNote
      ? `<span class="marginnote">${inner.trim()}</span>`
      : `<span class="sidenote-number"></span>` +
        `<span class="sidenote">${inner.trim()}</span>`;
    parts.push({ type: 'html', value: html });
    lastIndex = match.index + match[0].length;
  }
  if (!matched) return null;
  if (lastIndex < value.length) {
    parts.push({ type: 'text', value: value.slice(lastIndex) });
  }
  return parts;
}

interface ParentNode {
  children: any[];
  [key: string]: any;
}

function walk(children: any[], parent: ParentNode): void {
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    if (node.type === 'text') {
      const parts = transformText(node.value);
      if (parts) {
        parent.children.splice(i, 1, ...parts);
        i += parts.length - 1;
      }
    } else if (node.children) {
      walk(node.children, node);
    }
  }
}

export default function remarkSidenotes() {
  return (tree: ParentNode) => {
    walk(tree.children, tree);
  };
}
