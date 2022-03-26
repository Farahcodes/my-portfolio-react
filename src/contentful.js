import { createClient } from 'contentful';

const client = createClient({
  space: 'gwykkvrc14h8',
  accessToken: 'BCVVWAS79Wmf6N5d6xcXCpoGpoET7mAKlwvKVl5GHVQ',
});

export const getProjects = async () => {
  //gets all entries of specific content-type (project in this case)
  const projects = await client.getEntries();
  const formatted_projects = projects.items.map((Project) => {
    console.log(Project);
  });
  return formatted_projects;
};