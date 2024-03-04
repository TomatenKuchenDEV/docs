import MDXComponents from "@theme-original/MDXComponents"

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

export default {
	...MDXComponents,
	Command: props =>
		<Tabs groupId="command">
			{props.slash && props.slash == props.message ? console.warn("slash und message sind gleich: " + props.slash) : ""}
			<TabItem value="Slashcommand" default>
				/{props.name} {props.slash || ""}
			</TabItem>
			<TabItem value="Message (default prefix)">
				tk!{props.name} {props.message || props.slash || ""}
			</TabItem>
			<TabItem value="Message (custom prefix)">
				&lt;Prefix&gt;{props.name} {props.message || props.slash || ""}
			</TabItem>
		</Tabs>
}
