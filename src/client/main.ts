import * as angular from "angular";
import "@uirouter/angularjs";
import "angular-animate";
import "angular-aria";
import "angular-messages";
import "angular-material";
import { stateConfig } from "./states";
import { appComponent } from "./components/app/app.component";
import { navbarComponent } from "./components/nav-bar/nav-bar.component";
import { homeComponent } from "./components/home/home.component";
import { aboutComponent } from "./components/about/about.component";

angular

  .module("app", ["ngMaterial", "ui.router"])

  .config(stateConfig)

  .component("app", appComponent)
  .component("appNavBar", navbarComponent)
  .component("appHome", homeComponent)
  .component("appAbout", aboutComponent)

  ;
