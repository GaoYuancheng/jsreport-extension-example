import * as configuration from "./configuration.js";

class Studio {
  get exampleComponents() {
    return configuration.exampleTemplates;
  }

  addExampleComponents(component) {
    configuration.exampleTemplates.push(component);
  }
}

let studio;

export const creatStudio = () => (studio = new Studio());

export default studio;
