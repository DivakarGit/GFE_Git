/**
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>}
 */
function getElementsByTagName(el, tagName) {
    tagName = tagName.toUpperCase();
    let outputArray=[];
    function traverse(child){
        if(child === null){
            return;
        }
        if(child.tagName === tagName){
            outputArray.push(child)
        }
        for(let grandChild of child.children){
            traverse(grandChild);
        }
    }
    for(let child of el.children){
        traverse(child)
    }
    return outputArray;
}

clickHandler =() =>{
    const document = new DOMParser().parseFromString(
        `<div id="foo">
          <span>Span</span>
          <p>Paragraph</p>
          <div id="bar">Div</div>
        </div>`,
        'text/html',
    );
    console.log(getElementsByTagName(document.body, 'div'));  // [div#foo, div#bar] <-- This is an array of elements.

}