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
/**
 * code example 2
 */
