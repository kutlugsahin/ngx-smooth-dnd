// import * as simples from './simple';
// import SimpleHorizontal from './simple-horizontal';
// import Groups from './groups';
// import Copy from './copy';
// import Horizontal from './horizontal';
// import Nested from './nested';
// import VanillaNested from './vanilla-nested';
// import Height from './height';
// import Form from './form';
// import Cards from './cards';
// import LockAxis from './lock-axis';
// import DragDelay from './drag-delay';
// import DragHandle from './drag-handle';
// import DragClass from './drag-class';
// import TransitionDuration from './transition-duration';
export * from './simple';
export * from './simple-scroller';
export * from './simple-horizontal';
export * from './groups';
export * from './copy';
export * from './nested';

const getUrl = (pagename) => {
	return `https://github.com/kutlugsahin/smooth-dnd-demo/blob/master/src/demo/pages/${pagename}`;
};


export default [
	{
		title: 'Showcase',
		pages: [
			{
				title: 'Card board', page: 'cards', url: getUrl('cards.js')
			},
			{
				title: 'Form elements', page: 'form', url: getUrl('form.js')
			}
		]
	}, {
		title: 'Basic Sortables',
		pages: [
			{
				title: 'Sortable with default options', page: 'simple', url: getUrl('simple.js')
			},
			{
				title: 'Sortable inside scroller', page: 'simple-scroller', url: getUrl('simple.js')
			}, {
				title: 'Horizontal sortable', page: 'simple-horizontal', url: getUrl('horizontal.js')
			}
		]
	},
	{
		title: 'Groups',
		pages: [
			{
				title: 'DnD between groups', page: 'groups', url: getUrl('groups.js')
			},
			{
				title: 'Copy draggable', page: 'copy', url: getUrl('copy.js')
			}
		]
	},
	{
		title: 'Nested Groups',
		pages: [
			{
				title: 'Nested vertical sortable', page: 'nested', url: getUrl('nested.js')
			}
		]
	},
	{
		title: 'Advanced options',
		pages: [
			{
				title: 'Lock axis', page: 'lock-axis', url: getUrl('lock-axis.js')
			},
			{
				title: 'Drag begin delay of 500ms', page: 'drag-delay', url: getUrl('drag-delay.js')
			},
			{
				title: 'Drag handle', page: 'drag-handle', url: getUrl('drag-handle.js')
			},
			{
				title: 'Drag and Drop classses', page: 'drag-class', url: getUrl('drag-class.js')
			},
			{
				title: 'Animation duration 500ms', page: 'transition-duration', url: getUrl('transition-duration.js')
			}
		]
	}
];