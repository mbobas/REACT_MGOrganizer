/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Button.stories.js

// MyComponent.stories.js | MyComponent.stories.ts

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  width: "100px", 
};
// your templates and stories

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args}>Hello</Button>

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { secondary: true }

export const Third = Template.bind({});
Third.args = { width: "500px" }