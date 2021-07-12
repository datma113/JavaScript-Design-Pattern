var nameModule = function() {
     //private method and property call here
     let privateVar = 0
     let anotherPrivateVar = 'abc'

     const privateMethod = function() {
          console.log(`private method...`)
     }

     const anotherPrivateMethod = function() {
          console.log(`another private method`)
     }

     return {
          //public method and property call here
          publicVar: 1,
          anotherPublicVar: 'ccc',

          publicMethod: function() {
               console.log(` public method: ${this.publicVar} ${this.anotherPublicVar} `)
          },

          callPrivateMethod: function() {
              privateMethod();
              anotherPrivateMethod();
          },

          callPrivateVar: function() {
               console.log(` call private var: ${privateVar} ${anotherPrivateVar} `)
          },

          increase: function() {
               privateVar++;
               this.publicVar++;
          }
     }
}()

//run nameModule
nameModule.publicMethod()
nameModule.callPrivateMethod()
nameModule.callPrivateVar()

nameModule.increase()
nameModule.increase()

nameModule.publicMethod()
nameModule.callPrivateVar()


