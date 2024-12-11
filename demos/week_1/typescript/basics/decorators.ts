// Decorators
/**
 * 
 * These features allow you to modify classes, methods, properties, or parameters at design time
 * 
 * Decorators are a special type of declaration that can be attached to those things
 */

/**
 * Decorator Types
 * 1. Class 
 * 2. Method
 * 3. Accessor
 * 4. Property
 * 5. Parameter
 */

// Class Decorator

function Component(target: Function){
    target.prototype.componentName = "MyComponent";
}

@Component
class MyClass{}

const instance = new MyClass();

console.log((instance as any).componentName);

// Method Decorator
/**
 * Applied to a method of a class
 * target: the prototype of the class (or constructor for static methods)
 * propertyKey: the name of the method
 * descriptor: the property descriptor of the method
 */

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]){
        console.log(`Method ${propertyKey} called with arguments ${args}`);
        return originalMethod.apply(this, args);
    }
}

class MyService {
    @LogMethod
    fetchData(id: number){
        console.log(`Fetching data for ID: ${id}`);
    }
}

const service = new MyService();
service.fetchData(43);