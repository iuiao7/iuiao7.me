import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/1.writings')

export default defineEventHandler(() => {
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

  posts.sort((a, b) => b.date.getTime() - a.date.getTime())
  return posts
})
