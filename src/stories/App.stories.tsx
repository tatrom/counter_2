import {Counter2} from "../components/Counter/Counter2";
import {Meta, Story} from "@storybook/react/types-6-0";
import App from "../App";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
    title: 'Counter',
    component: App,
    decorators: [ReduxStoreProviderDecorator],
    argTypes: {},
} as Meta;

const Template: Story = (args) => <App {...args} />

export const AppExample = Template.bind({})
AppExample.args = {}