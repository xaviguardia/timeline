import { Heading } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    color: {
      options: ["inverse", "standard"],
      control: { type: "select" },
    },
    alignment: {
      options: ["center", "right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "inverse",
    alignment: "center",
    className: {},
    typographyContentClassName: {},
    text: "Título h5",
  },
};
