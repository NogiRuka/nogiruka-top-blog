import { getPageTable } from 'vue-notion'

const tableMap: any = await getPageTable(import.meta.env.VITE_NOTION_DATABASE_ID, import.meta.env.VITE_NOTION_API_WORKER)

console.log(`output->tableMap`, tableMap)

export default tableMap
