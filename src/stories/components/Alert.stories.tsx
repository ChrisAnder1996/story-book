import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "UI/Alert",
  component: Alert,
  argTypes: {
    type: { control: "select" },
    bgColor: { control: "color" },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "info",
  label: "Hello world!!!",
};
