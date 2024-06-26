import BLOG from '@/BLOG'
import { timeFormatByA } from '@/utils/timeFormat'

let myHeaders = new Headers()
myHeaders.append('Authorization', 'Bearer ' + import.meta.env.VITE_NOTION_API_KEY)
myHeaders.append('Notion-Version', '2022-06-28')
myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('Accept', '*/*')
myHeaders.append('Host', 'api.notion.com')
myHeaders.append('Connection', 'keep-alive')

let requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
}

// todo 利用随机壁纸接口代替默认封面
// https://api.aa1.cn/doc/wallpaper.html

const getArticles = () =>
  fetch('/api-notion/v1/databases/' + import.meta.env.VITE_NOTION_DATABASE_ID + '/query', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const res = JSON.parse(result).results
      console.log(res)
      const articles: any = []
      res.map(i => {
        articles.push({
          id: i.id,
          cover: i.cover?.external === undefined ? BLOG.ARTICLE_COVER_DEFAULT : i.cover.external.url,
          url: i.url,
          title: i.properties.title.title[0]?.plain_text,
          summary: i.properties.summary.rich_text[0]?.plain_text,
          status: i.properties.status.status,
          category: i.properties.category.select,
          tags: i.properties.tags.multi_select,
          password: i.properties.password.rich_text[0]?.plain_text,
          pinned: i.properties.pinned.checkbox,
          createdAt: timeFormatByA(i.properties.createdAt.created_time),
          createdBy: i.properties.createdBy.created_by,
          updatedAt: timeFormatByA(i.properties.updatedAt.last_edited_time),
          updatedBy: i.properties.updatedBy.last_edited_by,
        })
      })
      console.log(`output->articles`, articles)
      return articles
    })
    .catch((error) => console.log('error', error))

export default getArticles
