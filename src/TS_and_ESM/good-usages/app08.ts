{
    type PropEventSource<T> = {
        on<K extends string & keyof T>(eventName: `${K}Changed`, callback: (newValue: T[K]) => void): void;
    };

    type ReturnType<T1> = T1 & PropEventSource<T1>;

    function makeWatchedObject<T1>(obj1: T1): ReturnType<T1>
    function makeWatchedObject<T1, T2>(obj1: T1, obj2: T2): ReturnType<T1 & T2>
    function makeWatchedObject<T1, T2, T3>(obj1: T1, obj2: T2, obj3: T3): ReturnType<T1 & T2 & T3>
    function makeWatchedObject<T1, T2, T3>(obj1: T1, obj2?: T2, obj3?: T3): any {

        const events = new Map<string, (a: any) => void>();

        const on_: PropEventSource<T1 & T2 & T3> = {
            on(eventName: string, callback: (newValue: any) => void): void {

                events.set(eventName, callback);
            }
        }
        const obj = { ...obj1, ...obj2, ...obj3, ...on_ };

        const proxyObj = new Proxy(obj, {
            set: function (target, property, value, receiver) {

                const event = events.get(`${property as string}Changed`);

                if (event) {
                    event(value);
                    return true;
                }

                return Reflect.set(target, property, value, receiver);
            }
        });

        return proxyObj;
    }


    const personInfo = { id: 1, firstName: 'kenan', lastName: 'hancer', age: 36 };
    const personAddress = { country: 'UK', city: 'London' };
    const personContact = { email: 'kh@kh.com', phone: '077111-33-33', baseSalary: 10, calculateSallary: () => 11 };

    let person = makeWatchedObject(personInfo, personAddress, personContact);


    // works! 'newName' is typed as 'string'
    person.on("calculateSallaryChanged", (calculateSalary) => {

        console.log(`${calculateSalary.name} is called.`);
        calculateSalary();
        console.log(`${calculateSalary.name} is finished.`);

    });

    // works! 'newAge' is typed as 'number'
    person.on("ageChanged", (newAge) => {
        if (newAge < 0) {
            console.log("warning! negative age");
        }
    });

    person.on("baseSalaryChanged", (newEmail) => {

        console.log("warning! negative age");
    });

    person.age = 34;
}


export { };