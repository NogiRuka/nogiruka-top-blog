import blockMap from './getPageBlocks.ts'
import tableMap from './getPageTable.ts'

export default async function getPage() {
  return {
    blockMap,
    tableMap,
  }
}
