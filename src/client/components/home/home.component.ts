import { IComponentOptions } from "angular";

class HomeComponent {
  private users = [
    {
      name: "Lia Lugo",
      avatar: "svg-1",
      content: "Consequatur quas voluptates id perferendis nostrum officia et quod ab.",
    },
    {
      name: "George Duke",
      avatar: "svg-2",
      content: "Consequatur quas voluptates id perferendis nostrum officia et quod ab.",
    },
    {
      name: "Gener Delosreyes",
      avatar: "svg-3",
      content: "Consequatur quas voluptates id perferendis nostrum officia et quod ab.",
    },
    {
      name: "Lawrence Ray",
      avatar: "svg-4",
      content: "Consequatur quas voluptates id perferendis nostrum officia et quod ab.",
    },
    {
      name: "Ernesto Urbina",
      avatar: "svg-2",
      content: "Consequatur quas voluptates id perferendis nostrum officia et quod ab.",
    },
    {
      name: "Gani Ferrer",
      avatar: "svg-4",
      content: "Consequatur quas voluptates id perferendis nostrum officia et quod ab.",
    },
  ];

  constructor() { }

}

export const homeComponent: IComponentOptions = {
  controller: HomeComponent,
  template: require("./home.component.html"),
};
