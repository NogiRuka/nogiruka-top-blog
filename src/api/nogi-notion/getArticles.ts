let myHeaders = new Headers()
myHeaders.append('Authorization', 'Bearer ' + import.meta.env.VITE_NOTION_API_KEY)
myHeaders.append('Notion-Version', '2022-06-28')

let requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
}

// console.log(`output->requestOptions`, requestOptions)

const getArticles = () =>
  fetch('/api/databases/33403b90-bf18-4ec6-9029-c6bd99eb78b1/query', requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result))
      return JSON.parse(result)
    })
    .catch((error) => console.log('error', error))

export default getArticles
