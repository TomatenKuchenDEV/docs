---
title: Über den Bot
description: Erzählt etwas über den Bot
---

Der Discord-Bot wurde im Jahr 2020 von TomatoCake erstellt und wird seitdem stetig weiterentwickelt. Fast täglich werden ~~Fehler~~ Features behoben und neue Funktionen hinzugefügt oder vorhandene ergänzt.

Der Bot wird alleinig von TomatoCake entwickelt - auch, wenn einige Nutzer auf Discord am Dashboard, einzelnen Befehlen und den Übersetzungen mitgeholfen haben, siehe [Credits](https://tomatenkuchen.eu/credits/)

[![Übersetzungsstatus](http://translate.tomatenkuchen.eu/widgets/tomatenkuchen/-/287x66-grey.png)](http://translate.tomatenkuchen.eu/engage/tomatenkuchen/)

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip Your Title

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger Your Title

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

export const Highlight = ({children, color}) => (
	<span
		style={{
			backgroundColor: color,
			borderRadius: '20px',
			color: '#fff',
			padding: '10px',
			cursor: 'pointer',
		}}
		onClick={() => {
			alert(`You clicked the color ${color} with label ${children}`)
		}}>
		{children}
	</span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
