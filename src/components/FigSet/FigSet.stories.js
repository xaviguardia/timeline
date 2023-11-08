import { FigSet } from ".";

export default {
  title: "Components/FigSet",
  component: FigSet,
  argTypes: {
    type: {
      options: ["avatar", "image", "icon"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    childRight: true,
    badge: true,
    type: "avatar",
    size: "l",
    className: {},
  },
};
