
class Subarashi {
	constructor(el){
		this.el = el;
	}
	
   addClass = (className) => {
       this.el.classList.add(className);
       console.log(this.el)
   }

   removeClass = (className) => {
    this.el.classList.remove(className)
   }
	
   toggleClass = (className) => {
       const el = this.el
       const classes = Array.from(el.classList)
       if(classes.includes(className)){
           this.removeClass(className);
       } else {
        this.addClass(className);

       }
       console.log(this.el)
   }
	
}

