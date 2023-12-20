/**
 * @param {string} text
 * @param {string} query
 * @return {string}
 */
function textSearch(text, query) {
    if(text.length ==0 || !text ||query.length ==0){
        return text;
    }

    return text.replaceAll(query,`<b>${query}</b>`)
}

clickHandler =() =>{
    const output1 = textSearch('The Quick Brown Fox Jumps Over fox Lazy Dog', 'fox');
    console.log(output1);
}