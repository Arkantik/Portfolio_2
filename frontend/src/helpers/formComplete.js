export default function fromComplete() {
  const result = { areMandatoryInputsFilled: false, errorMessage: "" };

  // if (!Object.keys(projectInfo.tool).length) {
  //   return { ...result, errorMessage: "Please select a tool..." };
  // }

  // if (!projectInfo.techno.length) {
  //   return {
  //     ...result,
  //     errorMessage: "Please select at least one techno....",
  //   };
  // }
  return { ...result, areMandatoryInputsFilled: true };
}
