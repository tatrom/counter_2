import {Meta, Story} from "@storybook/react/types-6-0";
import {ButtonType, Button} from "../components/Button/Button";

export default {
    title: 'Counter/Button',
    component: Button,
    argTypes: {}
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args}  />

export const ButtonExample = Template.bind({})
ButtonExample.args = {
    name: 'Examp',
    callback: () => {},
    mode: true,
    minValue: '10',
    disabledHandler: (type: string) => false
}

