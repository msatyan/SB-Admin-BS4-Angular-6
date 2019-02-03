import { Injectable } from '@angular/core';


// The @Injectable() decorator tells Angular that this service might itself have injected dependencies

// Since Angular6, recommended, way to register a provider is directly inside the @Injectable() decorator
// using the new providedIn attribute. It accepts 'root' as a value or any module of your application.
// When you use 'root', your injectable will be registered as a singleton in the application, and
// you don’t need to add it to the providers of the root module.
// Similarly, if you use providedIn: UsersModule, the injectable is registered as a provider of
// the UsersModule without adding it to the providers of the module.

@Injectable( {providedIn: 'root'} )
export class Table1Service {

    constructor() {

        console.log('Table1Service.constructor()');
    }

    getTable1Data() {
        // TODO: move Table1Data as class member
        const Table1Data = {
                colname: ['#', 'First Name', 'Born', 'Memory'],
                tabdata: [
                    {
                        Name: 'Archimedes',
                        Memory: 'Eureka',
                        Born: -287
                    },

                    {
                        Name: 'Gandhi',
                        Memory: 'Freedom, Nonviolence',
                        Born: 1869
                    },

                    {
                        Name: 'Lincoln',
                        Memory: 'Abolished slavery',
                        Born: 1809
                    },

                    {
                        Name: 'Einstein',
                        Memory: 'E = mc2',
                        Born: 1879
                    },

                    {
                        Name: 'Newton',
                        Memory: 'Gravity, laws of motion',
                        Born: 1642
                    },

                    {
                        Name: 'Edison',
                        Memory: 'Inventionssss...',
                        Born: 1847
                    }
                ]
            };

        return (Table1Data);
    }
}


