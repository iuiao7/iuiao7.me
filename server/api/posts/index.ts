import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/1.writings')

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 1
  const size = Number(query.size) || 10

  const fileNames = fs.readdirSync(postsDir)
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const fileContent = fs.readFileSync(fullPath, { encoding: 'utf-8' })
    const matterInfo = matter(fileContent)
    const fileInfo = fs.statSync(fullPath)

    return {
      id,
      title: (matterInfo.data?.title as string) ?? '',
      date: fileInfo.ctime,
    }
  })

  const start = (page - 1) * size
  const end = start + size
  // 按时间降序排序
  posts.sort((a, b) => b.date.getTime() - a.date.getTime())

  return {
    records: posts.slice(start, end),
    total: posts.length,
  }
})
