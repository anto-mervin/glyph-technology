import { Client } from '@notionhq/client';

if (!process.env.NOTION_TOKEN) {
  throw new Error('Missing NOTION_TOKEN environment variable');
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error('Missing NOTION_DATABASE_ID environment variable');
}

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const databaseId = process.env.NOTION_DATABASE_ID;

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Title',
          direction: 'ascending',
        },
      ],
    });

    return response.results.map((page: any) => {
      const properties = page.properties;

      return {
        id: page.id,
        title: properties.Title.title[0]?.plain_text || '',
        description: properties.Description.rich_text[0]?.plain_text || '',
        imageUrl: properties.Image.files[0]?.file?.url || '',
        technologies: properties.Technologies.multi_select.map((tech: any) => tech.name),
        demoUrl: properties.DemoURL?.url || '',
        githubUrl: properties.GithubURL?.url || '',
      };
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const response = await notion.pages.retrieve({ page_id: id });
    const properties = (response as any).properties;

    return {
      id: response.id,
      title: properties.Title.title[0]?.plain_text || '',
      description: properties.Description.rich_text[0]?.plain_text || '',
      imageUrl: properties.Image.files[0]?.file?.url || '',
      technologies: properties.Technologies.multi_select.map((tech: any) => tech.name),
      demoUrl: properties.DemoURL?.url || '',
      githubUrl: properties.GithubURL?.url || '',
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}