import { createClient } from "contentful";
const client = createClient({
    space:'gwykkvrc14h8',
    accessToken:'BCVVWAS79Wmf6N5d6xcXCpoGpoET7mAKlwvKVl5GHVQ'
});



export const getProjects = async()=>{
    //gets all entries of specific content-type (project in this case)
    const projects = await client.getEntries({
        content_type:'project'
    });
    const formatted_projects= projects.items.map((project)=>{
        console.log(project);
    });
    return formatted_projects
};