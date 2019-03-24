# ngx-smooth-dnd

A fast and lightweight drag&drop, sortable library for Angular with many configuration options covering many d&d scenarios. It uses css transitions for animations so it's hardware accelerated whenever possible.

This library consists wrapper Angular components over <a href="https://github.com/kutlugsahin/smooth-dnd/">smooth-dnd</a> library.

**Show, don't tell !**
### <a href="https://kutlugsahin.github.io/ngx-smooth-dnd/">Demo page</a>

### Installation

```shell
npm i ngx-smooth-dnd
```

## Usage

Add **NgxSmoothDnDModule** to your app module imports
```ts
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';

@NgModule({
  imports: [
    NgxSmoothDnDModule
  ],
  bootstrap: [AppComponent]
  ...
})
export class AppModule { }

```


```ts
import { Component } from '@angular/core';
import { ContainerComponent, DraggableComponent, IDropResult } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div class="simple-page">
        <smooth-dnd-container (drop)="onDrop($event)">            
          <smooth-dnd-draggable *ngFor="let item of items">
            <div class="draggable-item">
              {{item.data}}
            </div>
          </smooth-dnd-draggable>
        </smooth-dnd-container>
      </div>
    </div>
  `
})
export class AppComponent {
  items = generateItems(50, i => ({ data: 'Draggable ' + i }))

  onDrop(dropResult: IDropResult) {
    // update item list according to the @dropResult
    this.items = applyDrag(this.items, dropResult);
  }
}
```

## API

### **smooth-dnd-container**

Component that contains the draggable elements or components. Each of its children should be wrapped by **smooth-dnd-draggable** component


### Properties

| Property | Type | Default | Description |
|-|:-:|:-:|-|
| [orientation] |string|`vertical` | Orientation of the container. Can be **horizontal** or **vertical**.|
|[behaviour]|string|`move`| Property to describe weather the dragging item will be moved or copied to target container. Can be **move** or **copy** or **drop-zone** or **contain**.|
|[groupName]|string|`undefined`|Draggables can be moved between the containers having the same group names. If not set container will not accept drags from outside. This behaviour can be overriden by shouldAcceptDrop function. See below.
|[lockAxis]|string|`undefined`|Locks the movement axis of the dragging. Possible values are **x**, **y** or **undefined**.
|[dragHandleSelector]|string|`undefined`|Css selector to test for enabling dragging. If not given item can be grabbed from anywhere in its boundaries.|
|[nonDragAreaSelector]|string|`undefined`|Css selector to prevent dragging. Can be useful when you have form elements or selectable text somewhere inside your draggable item. It has a precedence over **dragHandleSelector**.|
|[dragBeginDelay]|number| `0` (`200` for touch devices)|Time in milisecond. Delay to start dragging after item is pressed. Moving cursor before the delay more than 5px will cancel dragging.
|[animationDuration]|number|`250`|Animation duration in milisecond. To be consistent this animation duration will be applied to both drop and reorder animations.|
|[autoScrollEnabled]|boolean|`true`|First scrollable parent will scroll automatically if dragging item is close to boundaries.
|[dragClass]|string|`undefined`|Class to be added to the ghost item being dragged. The class will be added after it's added to the DOM so any transition in the class will be applied as intended.
|[dropClass]|string|`undefined`|Class to be added to the ghost item just before the drop animation begins.|
|[dropPlaceholder]|boolean,object|`undefined`|Options for drop placeholder. **className**, **animationDuration**, **showOnTop**|
|(dragStart)|EventEmitter|`undefined`|*See descriptions below*|
|(dragEnd)|EventEmitter|`undefined`|*See descriptions below*|
|(dropReady)|EventEmitter|`undefined`|*See descriptions below*|
|(drop)|EventEmitter|`undefined`|*See descriptions below*|
|[getChildPayload]|function|`undefined`|*See descriptions below*|
|[shouldAnimateDrop]|function|`undefined`|*See descriptions below*|
|[shouldAcceptDrop]|function|`undefined`|*See descriptions below*|
|(dragEnter)|EventEmitter|`undefined`|*See descriptions below*|
|(dragLeave)|EventEmitter|`undefined`|*See descriptions below*|
|[getGhostParent]|function|`undefined`|*See descriptions below*|

---

### dragStart

Event to be emitted only by all Containers when a drag is started.

```ts
(dragStart)="onDragStart($event)"

onDragStart({isSource: boolean, payload: any, willAcceptDrop: boolean}) {
  ...
}
```

#### Parameters
- **isSource** : `boolean` : true if it is called by the container which drag starts from otherwise false.
- **payload** : `object` : the payload object that is returned by get-child-payload function. It will be undefined in case get-child-payload is not set.
- **willAcceptDrop** : `boolean` : true if the dragged item can be dropped into the container, otherwise false.

### dragEnd

The function to be called by all container when drag ends. Called before **drop** event.

```ts
(dragEnd)="onDragEnd($event)"

onDragEnd({isSource: boolean, payload: any, willAcceptDrop: boolean}) {
  ...
}
```

#### Parameters
- **isSource** : `boolean` : true if it is called by the container which drag starts from otherwise false.
- **payload** : `object` : the payload object that is returned by get-child-payload function. It will be undefined in case get-child-payload is not set.
- **willAcceptDrop** : `boolean` : true if the dragged item can be dropped into the container, otherwise false.

### dropReady

The function to be called by the container which is being drag over, when the index of possible drop position changed in container. Basically it is called each time the draggables in a container slides for opening a space for dragged item. **dropResult** is the only parameter passed to the function which contains the following properties.
```ts
(drop)="onDropReady($event)"

onDropReady(dropResult: IDropResult) {
  const { removedIndex, addedIndex, payload, element } = dropResult;
  ...
}
```

#### Parameters
- **dropResult** : `object`
	- **removedIndex** : `number` : index of the removed children. Will be `null` if no item is removed. 
	- **addedIndex** : `number` : index to add droppped item. Will be `null` if no item is added. 
	- **payload** : `object` : the payload object retrieved by calling *getChildPayload* function.
	- **element** : `DOMElement` : the DOM element that is moved 

### drop

The event to be emitted by any relevant container when drop is over. (After drop animation ends). Source container and any container that could accept drop is considered relevant.

```ts
(drop)="onDrop($event)"

onDrop(dropResult: IDropResult) {
  const { removedIndex, addedIndex, payload, element } = dropResult;
  ...
}
```
#### Parameters
- **dropResult** : `object`
	- **removedIndex** : `number` : index of the removed children. Will be `null` if no item is removed. 
	- **addedIndex** : `number` : index to add droppped item. Will be `null` if no item is added. 
	- **payload** : `object` : the payload object retrieved by calling *getChildPayload* function.
	- **element** : `DOMElement` : the DOM element that is moved 

### getChildPayload

The function to be called to get the payload object to be passed **onDrop** function.
```ts
[getChildPayload]="getChildPayload"

getChildPayload(index: number) {
  return {
    ...
  }
}
```
#### Parameters
- **index** : `number` : index of the child item
#### Returns
- **payload** : `object`

### shouldAnimateDrop

The function to be called by the target container to which the dragged item will be droppped.
Sometimes dragged item's dimensions are not suitable with the target container and dropping animation can be wierd. So it can be disabled by returning **false**. If not set drop animations are enabled.
```ts
[shouldAnimateDrop]="shouldAnimateDrop"

shouldAnimateDrop(sourceContainerOptions: IContainerOptions, payload: any) {
  return false;
}
```
#### Parameters
- **sourceContainerOptions** : `IContainerOptions` : options of the source container. (parent container of the dragged item)
- **payload** : `object` : the payload object retrieved by calling *getChildPayload* function.
#### Returns
- **boolean** : **true / false**

### shouldAcceptDrop

The function to be called by all containers before drag starts to determine the containers to which the drop is possible. Setting this function will override the **groupName** property and only the return value of this function will be taken into account.

```ts
[shouldAcceptDrop]="shouldAcceptDrop"

shouldAcceptDrop(sourceContainerOptions, payload) {
  return true;
}
```
#### Parameters
- **sourceContainerOptions** : `IContainerOptions` : options of the source container. (parent container of the dragged item)
- **payload** : `object` : the payload object retrieved by calling *getChildPayload* function.
#### Returns
- **boolean** : **true / false**

### onDragEnter

The event to be emitted by the relevant container whenever a dragged item enters its boundaries while dragging.
```ts
(dragEnter)="onDragEnter()"

onDragEnter() {
  ...
}
```

### onDragLeave

The event to be emitted by the relevant container whenever a dragged item leaves its boundaries while dragging.
```ts
(dragLeave)="onDragLeave()"

onDragLeave() {
  ...
}
```

### getGhostParent

The function to be called to get the element that the dragged ghost will be appended. Default parent element is the container itself.
The ghost element is positioned as 'fixed' and appended to given parent element. 
But if any anchestor of container has a transform property, ghost element will be positioned relative to that element which breaks the calculations. Thats why if you have any transformed parent element of Containers you should set this property so that it returns any element that has not transformed parent element.
```ts
(getGhostParent)="getGhostParent()"

getGhostParent() {
  // i.e return document.body;
}
```

### **smooth-dnd-draggable**

Wrapper component for smooth-dnd-container's children. Every draggable element should be wrapped with **smooth-dnd-draggable** component.