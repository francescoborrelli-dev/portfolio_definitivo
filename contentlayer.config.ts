import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/index.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    roles: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
    stack: {
      type: 'list', 
      of: { type: 'string' },
      default: [],
    },
    summary: {
      type: 'string',
    },
    impact: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
    cover: {
      type: 'string',
    },
    gallery: {
      type: 'list',
      of: { type: 'string' },
      default: [],
    },
    links: {
      type: 'json',
    },
    draft: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir.split('/').pop(),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/projects/${doc._raw.sourceFileDir.split('/').pop()}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
})