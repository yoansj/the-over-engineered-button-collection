import { getCollection, type InferEntrySchema, type RenderedContent } from 'astro:content';

export interface ButtonWithHtml {
  id: string;
  body?: string;
  collection: "buttons";
  data: InferEntrySchema<"buttons">;
  rendered?: RenderedContent;
  filePath?: string;
  html: string;
}

export async function fetchAllButtons() {
  const allButtons = await getCollection('buttons')
  const allHtmlFiles = import.meta.glob('../contributions/**/*.html', { eager: true, as: 'raw' })

  const buttons = allButtons.map((data) => ({
    ...data,
    html: allHtmlFiles[`../contributions/${data.data.name}/index.html`]
  }))

  return buttons
}