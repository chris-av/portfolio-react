import type { MDXComponents } from 'mdx/types'
import PostMeta from './app/collections/writings/PostMeta'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl text-center font-extrabold text-purple-500 dark:text-purple-400 mt-8 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl text-center font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl text-center font-bold mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-lg pl-2">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic my-6 opacity-80 lg:max-w-[45vw] lg:mx-auto">{children}</blockquote>
    ),
    Attribution: ({ children }) => (
      <footer className="mt-2 text-right text-sm not-italic opacity-70">
        — <cite>{children}</cite>
      </footer>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-white/10 rounded px-1 py-0.5 font-mono text-sm">{children}</code>
    ),
    hr: () => (
      <hr className="my-8 border-t border-gray-200 dark:border-white/10" />
    ),
    PostMeta,
    ...components,
  }
}
