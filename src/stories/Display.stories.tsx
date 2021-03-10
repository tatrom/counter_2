import {Display, DisplayProps} from "../components/Counter/Display/Display";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Counter/Display',
    component: Display,
    argTypes: {}
} as Meta

const ChangeMinValueCallback = action('Trying to change  min value')
const ChangeMaxValueCallback = action('Trying to change max value')
const Template: Story<DisplayProps> = (args) => <Display {...args} />

export const DisplayIncrementModeExample = Template.bind({})
DisplayIncrementModeExample.args = {
    mode: true,
    counter: 1,
    minValue: '1',
    maxValue: '10',
    changeMinValue: ChangeMinValueCallback,
    changeMaxValue: ChangeMaxValueCallback
}

export const DisplaySetModeExample = Template.bind({})
DisplaySetModeExample.args = {
    mode: false,
    counter: 1,
    minValue: '1',
    maxValue: '10',
    changeMinValue: ChangeMinValueCallback,
    changeMaxValue: ChangeMaxValueCallback
}
