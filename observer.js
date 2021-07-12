/**
 * Demo observer pattern
 */
function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function (observer) {
        this.observers.push(observer);
    },
    unsubscribe: function (observer) {
       this.observers = this.observers.filter((obseverToRemove) => observer !== obseverToRemove);
    },
    notifyAllObserver: function() {
         this.observers.forEach((obsverver) => {
              obsverver.call()
         })
    }
    
};

const sub = new Subject();

const Observer1 = function() {
     console.log(`subject has changed: notified observer 1`)
}

const Observer2 = function() {
     console.log(`subject has changed: notified observer 2`)
}


// sub.subscribe(Observer1)
// sub.subscribe(Observer2)
// sub.notifyAllObserver()

/**
 * code example 2
 */

function Account(firstName, lastName) {
     this.observers = []
     this.fullname = `${firstName} ${lastName}`
}

Account.prototype = {
     subscribe: function(observer) {
          this.observers.push(observer)
     },
     unsubscribe: function(observerToUnsub) {
          this.observers = this.observers.filter(observer => observerToUnsub !== observer)
     },
     notifyToObserver: function(observer) {
          const index = this.observers.indexOf(observer)
          if(index) this.observers[index].call()
     },
     notifyAllObservers: function() {
          this.observers.forEach(observer => {
               observer.call()
          })
     }
}

const mainAccount = new Account('admin', 'admin')

const EmailAccount = function() {
     const fullName = mainAccount.fullname 
     console.log(`email notify: ${fullName}`)    
}
const FacebookAccount = function() {
     const fullName = mainAccount.fullname
     console.log(`fb notify: ${fullName}`)    
}
const InstagramAccount = function() {
     const fullName = mainAccount.fullname
     console.log(`insta notify: ${fullName}`)    
}

mainAccount.subscribe(EmailAccount)
mainAccount.subscribe(FacebookAccount)
mainAccount.subscribe(InstagramAccount)

mainAccount.notifyAllObservers()

mainAccount.notifyToObserver(InstagramAccount)

mainAccount.unsubscribe(InstagramAccount)

mainAccount.notifyAllObservers()
