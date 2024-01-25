import MDXComponents from "@theme-original/MDXComponents"

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

export default {
	...MDXComponents,
	Command: props =>
		<Tabs groupId="commands">
			<TabItem name="Slash" value="slash" default>
				/{props.slash}
			</TabItem>
			<TabItem name="Message" value="message">
				{props.message || props.slash}
			</TabItem>
		</Tabs>
}
