# Javascript properties are enumerable, writeable and configurable

> Object là một trong những phần chính của Js. Js Syntax cho object cực kì ngắn gọn (concise ) và dễ hiểu, vì vậy mà chúng ta liên tục ( constantly ) tạo object và sử dụng chúng một cách dễ dàng

```javascript
var myObject = { a: 1 };

// Accessing to Property :
myObject.a; // => 1

// Modify value of property:
myObject.a = 2;
myObject.a; // => 2

// Creating new property:
myObject.b = 3;

// delete property
delete myObject.b;
myObject.b; // => undefined
```

> **Nhưng**, \*bạn có biết tất cả object properties trong ví dụ bên trên là **enumerable**, **writeable** và **configurable\***

-   **Enumerable:** Tôi có thể truy cập tất cả thuộc tính của chúng sử dụng `for..in`. Ngoài ra, để lấy tất cả các keys trong object bạn có thể sử dụng phương thức `Object.keys: Array`.
-   **Writeable:** Tôi có thể thay đổi giá trị của thuộc tính hoặc tôi có thể update một thuốc tính khi vừa mới assigning một giá trị mới: obj.b = 2;

-   **Configurable:** Tôi có thể thay đổi hành vi của property, và tôi cũng có thể làm chúng thành non-enumerable, non-writeable hoặc cũng có thể để chúng mặc định non-configurable nếu tôi cảm thấy tôi muốn làm như vậy. Configurable properties là duy nhất bạn có thể delete operator.

> Tôi cá là bạn biết đến 2 chức năng đầu tiên của `Object`'s properties. Nhưng điều này là số ít Developers biết đến nó , Họ có thể create and update chúng tobe non-enumerable hoặc immutable sử dụng object's method called defineProperty.

```javascript
// Adding a property to ob using Object.defineProperty
Object.defineProperty(ob, 'c', {
    value: 3,
    enumerable: false,
    writable: false,
    configurable: false
});

ob.c; // => 3

Object.getOwnPropertyDescriptor(ob, 'c');
// => {value: 3, enumerable: false, writable: false, configurable: false}
```

> Tôi nghĩ rằng cú pháp này không thương xuyên được sử dụng và khó đọc. Nhưng để biết được properties có thể được handle cho một số mục đích thực tế. Object có thể define the property được gọi là "descriptor", và bạn có thể có cái nhìn đầu tiên về descriptor của bất kì property sử dụng object.getOwPropertyDescriptor method

Nói một cách thú vị, that the default option values for Object.defineProperty are completely the opposite to the ones applied when adding a property by assigment: Giá trị mặc định của property được gán là `non-enumerable`, `non-writable` and `non-configurable`.

```javascript
// The 'f' property will be non-enumerable. non-writable and non-configurable
Object.defineProperty(ob, 'f', { value: 6 });
```

Nó cũng có thể để mà định nghĩa những thuộc tính trong khởi tạo object nếu bạn sử dụng phương thức Object.create(prototype, properties). Nó cho phép một onject với property descriptor giống như tham số thứ 2, và nó có thể sử dụng như sau: ]

```javascript

var ob = Object.create(Object.prototype, {
  a: { writable:true, enumerable:true, value: 1 },
  b: { enumerable: true, value: 2 }
}});

ob; // => {a:1, b:2}
```

## Object's non-enumerbale properties

> Như tôi đã nói ở trên, enumerable properties là khả năng có thể sự dụng for..in loop, và non-enumerable không thể sự dụng.]

**Một khi object được định nghĩa là non-enumerable thì việc sử dụng các thuộc tính và phương thức dưới đây là không thể:**

-   Không thể for...in iteraions
-   Không thể sử dụng Object.keys function
-   Không thể serialized khi sử dụng Json.stringify

`Nó giống như một secret varibale`, Nhưng bạn có thể access them

```javascript
var ob = { a: 1, b: 2 };

ob.c = 3;
Object.defineProperty(ob, 'd', {
    value: 4,
    enumerable: false
});

ob.d; // => 4

for (var key in ob) console.log(ob[key]);
// Console will print out
// 1
// 2
// 3

Object.keys(ob); // => ["a", "b", "c"]

JSON.stringify(ob); // => "{a:1,b:2,c:3}"

ob.d; // => 4
```

Since this kind of properties are not serialized, I found them really useful when handling data model objects. I can add handy information to them using non enumerable properties.

// Imagine the model that represent a car, it has a reference
// to its owner using owner's id in the owner attribute

```javascript
var car = {
    id: 123,
    color: red,
    owner: 12
};

// I also have fetched the owner from the DB
// Of course, the car is mine :)
var owner = {
    id: 12,
    name: Javi
};

// I can add the owner data to the car model
// with a non-enumerable property, maybe it can
// be useful in the future
Object.defineProperty(car, 'ownerOb', { value: owner });

// I need the owner data now
car.ownerOb; // => {id:12, name:Javi}

// But if I serialize the car object, I can't see me
JSON.stringify(car); // => '{id: 123, color: "red", owner: 12}'
```

In case that you need to know all properties in an object, enumerable and non-enumerable ones, the method Object.getOwnPropertyNames returns an array with all the names.

http://arqex.com/967/javascript-properties-enumerable-writable-configurable
