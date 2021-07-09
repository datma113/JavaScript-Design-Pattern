let Singleton = function () {
     let instance = null;

     function initial() {
          return {          
               number: 0,
               char: "abc",
               testArrowFunc: () => {
                    console.log(`arrow: ${this.number} ${this.char} `)
               },
               showProperty: function() {
                    console.log(`showchar method: ${this.number} ${this.char} `)
               },
               diveDeeper: function() {
                    return () => {
                         console.log(`dive deeper: `,this.number)
                    }
               },
               increaseNumber: function() {
                    this.number++;
                    console.log(this.number)
               }
          }
     }

     return {
          getInstance: function() {
               if(!instance)
                    instance = initial()
               return instance
          }
     }
}()


let mySingleton = Singleton.getInstance()

mySingleton.testArrowFunc()
mySingleton.showProperty()
mySingleton.diveDeeper()()
mySingleton.increaseNumber()
mySingleton.showProperty()
mySingleton.increaseNumber()
mySingleton.showProperty()




