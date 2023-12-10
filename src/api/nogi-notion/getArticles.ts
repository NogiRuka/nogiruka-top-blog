import BLOG from '@/BLOG'
import moment from 'moment'

let myHeaders = new Headers()
myHeaders.append('Authorization', 'Bearer ' + import.meta.env.VITE_NOTION_API_KEY)
myHeaders.append('Notion-Version', '2022-06-28')

let requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
}

// console.log(`output->requestOptions`, requestOptions)

// type Article = {
//   id: string;
//   category: string;
//   status: string;
//   tags: string[];
//   AISummary: string;
//   pinned: boolean;
//   title: string;
// }

const getArticles = () =>
  fetch('/api/databases/' + import.meta.env.VITE_NOTION_DATABASE_ID + '/query', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const res = JSON.parse(result).results
      console.log(res)
      const articles: any = res.map(i => {
        return {
          id: i.id,
          cover: i.cover?.external === undefined ? BLOG.ARTICLE_COVER_DEFAULT : i.cover.external.url,
          url: i.url,
          title: i.properties.title.title[0].plain_text,
          summary: i.properties.AISummary.rich_text[0].plain_text,
          status: i.properties.status.status,
          category: i.properties.category.select,
          tags: i.properties.tags.multi_select,
          password: i.properties.password.rich_text[0]?.plain_text,
          pinned: i.properties.pinned.checkbox,
          createdAt: moment(i.properties.createdAt.created_time).format('YYYY-MM-DD HH:mm'),
          createdBy: i.properties.createdBy.created_by,
          updatedAt: i.properties.updatedAt.last_edited_time,
          updatedBy: i.properties.updatedBy.last_edited_by,
        }
      })
      console.log(`output->articles`, articles)
      return articles
    })
    .catch((error) => console.log('error', error))

export default getArticles
