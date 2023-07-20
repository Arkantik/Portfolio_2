export default function formatRequest(projectInfo) {
  return {
    name: projectInfo.name,
    description: projectInfo.description,
    img: projectInfo.project_image,
    github: projectInfo.github ?? "",
    website: projectInfo.website ?? "",
    tool: projectInfo.tool ?? "",
  };
}
