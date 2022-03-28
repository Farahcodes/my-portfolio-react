import { createClient } from 'contentful';

const client = createClient({
  space: 'gwykkvrc14h8',
  accessToken: 'BCVVWAS79Wmf6N5d6xcXCpoGpoET7mAKlwvKVl5GHVQ',
});

export const getProjects = async () => {
  //gets all entries of specific content-type (project in this case)
  const projects = await client.getEntries({content_type:'title'});
  const formatted_projects = projects.items.map((project) => {
    const{id}= project.sys;
    const{completeProject,description,stack,title,github}= project.fields;
    const img = project.fields.image.fields.file.url;

    return {id,completeProject,description,stack,title,github,img}
  });
  return formatted_projects;
};