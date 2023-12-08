import { getPageBlocks } from 'vue-notion'

const blockMap: any = await getPageBlocks(import.meta.env.VITE_NOTION_PAGE_ID, import.meta.env.VITE_NOTION_API_WORKER)

console.log(`output->blockMap`, blockMap)

export default blockMap

