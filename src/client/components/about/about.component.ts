import { IComponentOptions } from "angular";

class AboutComponent {
}

export const aboutComponent: IComponentOptions = {
  controller: AboutComponent,
  template: require("./about.component.html"),
};
