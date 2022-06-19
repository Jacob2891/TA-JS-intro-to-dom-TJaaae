// 1. Change the title of the page to `Hello AltCampus!`
let title = document.querySelector(`title`)
title.innerText= `Hello AltCampus`
// 2. Select the element using the children property:
//    - Select the `h1` element and change the value to `Learning DOM`
let head1 = document.children[0].children[1].children[0];
head1.innerText = `Learning Dom`
//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let All = document.children[0].children[1].children[5].children[0];
All.innerText = `all about document`
//    - Select the input element with name `email`
document.children[0].children[1].children[6].children[2];
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
document.querySelectorAll(`li`).length
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let emailInput = document.querySelector(`input`)
// 5. Select the ul element using class selector and store in `topics`
let topic = document.querySelector(`.topics`) // a existing class name cant be redeclared as a new variable
// 6. Select the first label element and store in `label`
let label = document.querySelector(`label`)
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
// Can't be defined again because class has been declared with same name 
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let password = document.querySelector(`input`)[type=`text`]
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`

// 10. Select all the `li` element and store in `allTopics`

// 11. Select all the input element of any type and store in `allInput`

// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.

// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`

// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`

// 15. Select all the img element and log the number of element saying `The total number of img element is ---`

// 16. Select all the `p` element and store in `allPElement`

// 17. Select all the buttons and log the count of buttons.

// 18. Select all the `label` element and log the count.

// 19. Select all the elements with `id` of `test`

// 20. Select the first element with id `test` using `getElementById`

// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.

// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.

// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.

// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.

// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.

// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
