import { getPageTable } from 'vue-notion'

const pageTable: any = await getPageTable(import.meta.env.VITE_NOTION_DATABASE_ID, import.meta.env.VITE_NOTION_API_WORKER)

console.log(`output->pageTable`, pageTable)

export default pageTable
