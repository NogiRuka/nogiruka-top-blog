import { Client } from "@notionhq/client"

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

(async () => {
    const databaseId = import.meta.env.VITE_NOTION_PAGE_ID;
    console.log(`output->databaseId`, databaseId)
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
})();
