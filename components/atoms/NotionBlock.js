import React from "react";

export default function NotionBlock({ text }) {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? "font-semibold" : "",
          code ? "code-inline" : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "paragraph-1" ? { color } : {}}>
        {text.link ? (
          <a href={text.link.url} className="inline-link">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
}
