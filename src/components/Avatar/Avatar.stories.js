import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    type: {
      options: ["image", "text", "icon"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "XL"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "image",
    size: "l",
    className: {},
    overlapGroupClassName: {},
  },
};
