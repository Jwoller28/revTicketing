// Decorators
/**
 *
 * These features allow you to modify classes, methods, properties, or parameters at design time
 *
 * Decorators are a special type of declaration that can be attached to those things
 */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
/**
 * Decorator Types
 * 1. Class
 * 2. Method
 * 3. Accessor
 * 4. Property
 * 5. Parameter
 */
// Class Decorator
function Component(target) {
    target.prototype.componentName = "MyComponent";
}
var MyClass = function () {
    var _classDecorators = [Component];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyClass = _classThis = /** @class */ (function () {
        function MyClass_1() {
        }
        return MyClass_1;
    }());
    __setFunctionName(_classThis, "MyClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
}();
var instance = new MyClass();
console.log(instance.componentName);
// Method Decorator
/**
 * Applied to a method of a class
 * target: the prototype of the class (or constructor for static methods)
 * propertyKey: the name of the method
 * descriptor: the property descriptor of the method
 */
function LogMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method ".concat(propertyKey, " called with arguments ").concat(args));
        return originalMethod.apply(this, args);
    };
}
var MyService = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _fetchData_decorators;
    return _a = /** @class */ (function () {
            function MyService() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            MyService.prototype.fetchData = function (id) {
                console.log("Fetching data for ID: ".concat(id));
            };
            return MyService;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _fetchData_decorators = [LogMethod];
            __esDecorate(_a, null, _fetchData_decorators, { kind: "method", name: "fetchData", static: false, private: false, access: { has: function (obj) { return "fetchData" in obj; }, get: function (obj) { return obj.fetchData; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var service = new MyService();
service.fetchData(43);
