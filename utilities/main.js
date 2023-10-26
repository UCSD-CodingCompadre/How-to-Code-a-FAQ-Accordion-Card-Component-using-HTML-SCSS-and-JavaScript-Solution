// Hold the active id 
let activeId;

/*
Handle the accordion item selected
@param newId string the id of the accordion item
@return none
*/
const handleAccordionItem = (newId) =>
{

    // Check if the active id is undefined
    if(activeId === undefined)
    {

        // Set the active state for the accordion item
        setAccordionItemActive(newId)

        // Set the new active id
        activeId = newId;
    }

    // Else check if the new id is the active id
    else if(newId === activeId)
    {

        // Remove the active state for the accordion item
        removeAccordionItemActive(newId);

        // Set the new active to undefined
        activeId = undefined;
    }

    // Else we have an active id that is not the new id
    else
    {

        // Set the active state for the accordion item
        setAccordionItemActive(newId);

        // Remove the active state for the accordion item
        removeAccordionItemActive(activeId);

        // Set the new active id
        activeId = newId;
    }
}

/*
Handle the active style changes for the accordion item
@param id string the id of the accordion element
@return none
*/
const setAccordionItemActive = (id) =>
{

    // Hold the accordion item elements 
    const accordionElements = document.getElementById(id).children;

    // Hold the flex box items from the accordion item's flex box
    const flexContainerElements = accordionElements[0].children

    // Change the class names to the active styling
    flexContainerElements[0].className = 'accordion-heading-active';
    flexContainerElements[1].className = 'arrow-active';
    accordionElements[1].style.display = 'block';
}

/*
Handle the default style changes for the accordion item
@param id string the id of the accordion element
@return none
*/
const removeAccordionItemActive = (id) =>
{

    // Hold the accordion item elements 
    const accordionElements = document.getElementById(id).children;

    // Hold the flex box items from the accordion item's flex box
    const flexContainerElements = accordionElements[0].children

    // Change the class names to the default styling
    flexContainerElements[0].className = 'accordion-heading';
    flexContainerElements[1].className = 'arrow';
    accordionElements[1].style.display = 'none';
}