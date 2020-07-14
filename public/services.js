(() => {
    class Service {
        constructor (defaultState) {
            this.state = defaultState;
            this.observers = [];
        }

        subscribe (fn) {
            this.observers.push(fn);
        }

        unsubscribe (fn) {
            this.observers = this.observers.filter(o => o.toString() !== fn.toString());
        }

        update (newState) {
            this.state = newState;
            this.notify();
        }

        notify () {
            this.observers.forEach(handler => handler.call(window, this.state));
        }
    }

    window.SERVICES = {
        userService: new Service({ name: 'Default Name', job: 'Default Job' })
    };
})();

