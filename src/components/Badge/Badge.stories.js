import { Badge } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variante: {
      options: ["alternative", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: true,
    variante: "alternative",
    className: {},
  },
};
