# Emergency-Hotline

1.<h1 class="font-bold text-xl"> What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h1>

Ans : GetElementById is used to find a specific and unique element. GetElementByClassName is used to find an element using only the class name. QuerySelector is used to find a specific element of a child node or a parent node, similarly QuerySelectorAll is used to find every element of a child node or a parent node.

<h1 class="font-bold text-lg">2.How do you create and insert a new element into the DOM?</h1>

Ans : Creating and inserting a new element into the Document Object Modle (DOM) in JavaScript involves two main steps : crating the element and then attaching it to an existing part of the DOM.

<h1 class="font-bold text-lg">3.What is Event Bubbling and how does it work?</h1>

Ans : Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through it's ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.

<h1 class="font-bold text-lg">4.What is Event Delegation in JavaScript? Why is it useful?</h1>

Ans : Event delegation is a technique in JavaScript where a parent element handles events for it's child elements , even if the children are added dynamically after the page loads. This works because events in JavaScript bubble up from the target element to it's ancestors.

<h1 class="font-bold text-lg">5.What is the difference between preventDefault() and stopPropagation() methods?</h1>

Ans : 1.<h3 class="font-bold">JavaScript preventDefault() Method:</h3> It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable. For example, there are some events that can not be prevented, such as the scroll and wheel event.

 1.<h3 class="font-bold">JavaScript stopPropagation() event method:</h3>This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called. For eg,  we have a button element inside a div tag and there is an onclick event on both of them, then whenever we try to activate the event attached to the button element, then the event attached to the div element also gets executed because div is the parent of the button element.
