import { Client } from '@notionhq/client'

const apiKey = import.meta.env.VITE_NOTION_API_KEY
const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID

const notion = new Client({ auth: apiKey })

async function getPage() {
  console.log(`output->databaseId`, databaseId)
  const response = await notion.databases.retrieve({ database_id: databaseId })
  console.log(`output->response`, response)
}

export default getPage
