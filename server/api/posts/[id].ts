import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeStringify)

const postsDir = path.join(process.cwd(), 'content/1.writings')

export default defineEventHandler(async (event) => {
  const fileName = `${getRouterParam(event, 'id')}.md`
  const fullPath = path.join(postsDir, fileName)
  if (!fs.existsSync(fullPath)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found',
    })
  }
  const fileContent = fs.readFileSync(fullPath, { encoding: 'utf-8' })
  const { data: frontmatter, content } = matter(fileContent)
  const file = await processor.process(content)

  return {
    title: (frontmatter?.title as string) ?? '',
    content: file.value,
  }
})
