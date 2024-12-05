let todos = [
    {
        "id": 0,
        "title": "Putzen",
        "category": "open",
    },
    {
        "id": 1,
        "title": "Kochen",
        "category": "open",
    },
    {
        "id": 2,
        "title": "Einkaufen",
        "category": "closed",
    },
];

let currentDraggedElement;

/**
 * This function checks the categories of the TODO-Elements and renders them into the correct container.
 */
function updateHTML() {
    let open = todos.filter((t) => t["category"] == "open");

    document.getElementById("open").innerHTML = "";

    for (let index = 0; index < open.length; index++) {
        const element = open[index];
        document.getElementById("open").innerHTML += generateTodoHTML(element);
    }

    let closed = todos.filter((t) => t["category"] == "closed");

    document.getElementById("closed").innerHTML = "";

    for (let index = 0; index < closed.length; index++) {
        const element = closed[index];
        document.getElementById("closed").innerHTML += generateTodoHTML(element);
    }
}

/**
 * This function gets the id of the TODO-Element, that has been startet dragging and saves it into the variable "currentDraggedElement".
 * @param {number} id
 */
function startDragging(id) {
    currentDraggedElement = id;
}

/**
 * This function renders one TODO-Element.
 * @param {object} element
 * @returns
 */
function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element["id"]})" class="todo">${element["title"]}</div>`;
}

/**
 * This function prevents the default-behavior of an fired event.
 * @param {event} ev
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * This function sets the current category to one TODO-Element and invokes the updateHTML-function
 * @param {string} category
 */
function moveTo(category) {
    todos[currentDraggedElement]["category"] = category;
    updateHTML();
}

/**
 * This function adds a styling-class to one TODO-Element, that lightens up the color of one container,
 * that is dragged over with the TODO-Element
 * @param {number} id
 */
function highlight(id) {
    document.getElementById(id).classList.add("drag-area-highlight");
}

/**
 * This function removes a styling-class from one TODO-Element, that lightens up the color of one container,
 * that is dragged over with the TODO-Element
 * @param {number} id
 */
function removeHighlight(id) {
    document.getElementById(id).classList.remove("drag-area-highlight");
}
