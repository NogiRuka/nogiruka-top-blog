import { getPageBlocks } from 'vue-notion'

const getArticle = async (id: string) => {
  const blockMap: any = await getPageBlocks(id, import.meta.env.VITE_NOTION_API_WORKER)

  console.log(`output->blockMap`, blockMap)
  
  return blockMap
}

export default getArticle
