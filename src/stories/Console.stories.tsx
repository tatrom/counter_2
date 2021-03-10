import {Console, ConsolePropsType} from "../components/Counter/Console/Console";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Counter/Console',
    component: Console,
    argTypes: {}
} as Meta;

const ChangeModeCallback = action('Tap button for mode changing')
const ResetCounterCallback = action('Tap to reset counter')
const IncCounterCallback = action('Tap to inc counter')
const disableCallback = (mode: string) => {
    action('Disable callback')
    return false
}

const Template: Story<ConsolePropsType> = (args) => <Console {...args} />

export const IncrementModeExample = Template.bind({})
IncrementModeExample.args = {
    mode: true,
    changeMode: ChangeModeCallback,
    resetCounter: ResetCounterCallback,
    incCounter: IncCounterCallback,
    minValue: '1',
    maxValue: '10',
    counter: 5,
    disabledHandler: disableCallback
}

export const SetModeExample = Template.bind({})
SetModeExample.args = {
    mode: false,
    changeMode: ChangeModeCallback,
    resetCounter: ResetCounterCallback,
    incCounter: IncCounterCallback,
    minValue: '1',
    maxValue: '10',
    counter: 5,
    disabledHandler: disableCallback
}