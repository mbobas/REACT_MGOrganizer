/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Button.stories.js

// // MyComponent.stories.js | MyComponent.stories.ts
import { withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import Button from './Button';

// export const Knobs = () => (
// <Button disabled={boolean('Disabled', false)}>{text('label', 'button labell')}</Button>
// );

const label = 'Colors';
const options = {
  Primary: 'hsl(49,100%,58%)',
  Secondary: 'hsl(196,83%,75%)',
  Tertiary: 'hsl(106,47%,64%)',
 
};
const defaultValue = 'hsl(49,100%,58%)';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

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
Four.addDecorator(withKnobs)
Four.args = {color: options}