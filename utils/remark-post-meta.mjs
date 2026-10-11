import matter from "gray-matter";

// Inserts <PostMeta date="..." tags="..." /> right after a post's first h1,
// using the same frontmatter parsing as the writings listing page.
export default function remarkPostMeta() {
  return (tree) => {
    const yamlNode = tree.children.find((node) => node.type === "yaml");
    if (!yamlNode) return;

    const { data } = matter(`---\n${yamlNode.value}\n---`);
    const attributes = [];
    if (data.date) {
      const date = data.date instanceof Date ? data.date.toISOString() : String(data.date);
      attributes.push({ type: "mdxJsxAttribute", name: "date", value: date });
    }
    if (data.tags) {
      const tags = Array.isArray(data.tags) ? data.tags.join(",") : String(data.tags);
      attributes.push({ type: "mdxJsxAttribute", name: "tags", value: tags });
    }
    if (attributes.length === 0) return;

    const meta = { type: "mdxJsxFlowElement", name: "PostMeta", attributes, children: [] };
    const titleIndex = tree.children.findIndex((node) => node.type === "heading" && node.depth === 1);
    tree.children.splice(titleIndex + 1, 0, meta);
  };
}
