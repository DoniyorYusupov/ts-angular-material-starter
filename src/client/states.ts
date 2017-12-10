/* @ngInject */
export function stateConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("app", {
      url: "/",
      template: "<app></app>",
    })
    .state("app.home", {
      url: "home",
      template: "<app-home></app-home>",
    })
    .state("app.about", {
      url: "about",
      template: "<app-about></app-about>",
    })
    ;
}
