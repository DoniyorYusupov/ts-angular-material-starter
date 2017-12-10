import { IComponentOptions } from "angular";

class AppComponent {
}

export const appComponent: IComponentOptions = {
  controller: AppComponent,
  template: require("./app.component.html"),
};
