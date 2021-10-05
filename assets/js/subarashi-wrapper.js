const $ = function(querySelector){
    const subarashiElementsArray = [];
    if((typeof querySelector).toLowerCase() === 'string' ){
        querySelector = document.querySelectorAll(querySelector);

        elList = Array.from(querySelector);

        for( let i = 0; i < elList.length; i++){
            let el = elList[i];
            subarashiElementsArray.push(new Subarashi(el));
        }

        return {
            subarashi: subarashiElementsArray,
            addClass: function(className){
                for(let i = 0; i < subarashiElementsArray.length; i++){
                    let subarashiEl = subarashiElementsArray[i];
                    subarashiEl.addClass(className);
                }
            }
        };

    } else if(querySelector instanceof Element){
        return new Subarashi(querySelector);
    } else {
        return console.error(`The following parameter is not String or Element instance: ${querySelector}`)
    }



    
}

const navSection = $('.nav-section')
