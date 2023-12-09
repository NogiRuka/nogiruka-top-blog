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
      // console.log(res)
      const articles: any = res.map(i => {
        return {
          id: i.id,
          properties: i.properties,
        }
      })
      console.log(`output->articles`, articles)
      return articles
    })
    .catch((error) => console.log('error', error))

export default getArticles
