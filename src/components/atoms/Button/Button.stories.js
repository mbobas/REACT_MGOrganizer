/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Button.stories.js

// // MyComponent.stories.js | MyComponent.stories.ts
import { withSmartKnobs, withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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

export const Third = Template.bind({
  
});
Third.args = { width: "500px" }

export const Four = Template.bind({});
const label = 'Color';
const color = {
  Primary: 'hsl(49,100%,58%)',
  Secondary: 'hsl(196,83%,75%)',
  Tertiary: 'hsl(106,47%,64%)',
 
};
const defaultValue = 'hsl(49,100%,58%)';
const groupId = 'GROUP-ID1';

const value = select(label, color, defaultValue, groupId);
Four.args = {
  
};