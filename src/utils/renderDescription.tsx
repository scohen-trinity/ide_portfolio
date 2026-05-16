import './Utils.css';

// Supports [link text](url) syntax in plain strings
export function renderDescription(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);

  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      const [, label, href] = match;
      return <a key={i} href={href} className='custom-link'>{label}</a>;
    }
    return part;
  });
}