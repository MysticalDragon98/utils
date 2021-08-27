# @mysticaldragon/utils

NodeJS utilities for repetitive tasks

 - [x] Object
 - [x] Functions
 - [x] Math
 - [x] String
 - [x] Events

##  Object Module
```ts
export  declare  class  ObjectUtils {
  // If object[property] === undefined, object[property] = defaultValue
  static setDefault<T>(object: any, property: string, defaultValue: T): void;
  // For each property in properties, set default property on object
  static setDefaults(object: any, properties: any): void;
  
  // Creates a new object where values = map(key, value) of the original object
  static map<T, U>(obj: { [key: string]: T; }, map: (key: string, value: T) =>  U): { [key: string]: U; };
  
  // Build object from array, keys = filter return value
  static fromArray<T>(array: T[], filter: (e: T, i: number) =>  string): { [key: string]: T[]; };
  // Creates { key, value }[] array from object
  static toArray<T>(obj: { [key: string]: T; }): { key: string; value: T; }[];
}
```

##  Function Module
```ts
class FunctionUtils {
  // Get the array of parameter names of function, ex. getParamNames((foo, bar) => 0) => ["foo", "bar"]
  static  getParamNames(func: Function): Array<string>;
  // Get object property ignoring the case, ex. getObjectPropertyIgnoreCase({ Name: "Peter" }, "naMe") => "Peter"
  static  getObjectPropertyIgnoreCase(obj: any, prop: string): any;
}
```

##  Events Module
```ts
class EventsUtils {
  // Wait event emitter to emit event, if timeout (ms) is providen promise will fail after that time
  static waitOnce(emitter: EventEmitter, event: string, timeout?: number): Promise<unknown>;
}
```


## FileSystem Module
```ts
class FileSystem {
  // Read CSV file
  static readCSV(path: string, separator?: string): Promise<{}[]>;
  // Read file as UTF-8
  static read(path: string): Promise<String>;
  // Write file
  static write(path: string, data: string | Buffer): Promise<void>;
  // Remove File
  static remove(path: string): Promise<void>;
  // Read File Sync as String
  static readSync(path: string): String;
  // Synchronously write file
  static writeSync(path: string, data: string): void;
  // Search file in a group of directories
  static lookup(dirs: string[], name: string): Promise<String | null>;
}
```

##  Math Module
```ts
class Vector2 {
  constructor(x: number, y: number, listener?: ((prev: Vector2, next: Vector2) =>  any) | undefined);
  get  x(): number;
  get  y(): number;
  set  x(val: number);
  set  y(val: number);
  update(x: number, y: number): void;
  minus(vec: Vector2): Vector2;
  plus(vec: Vector2): Vector2;
}

class Vector3 {
  constructor(x: any, y: any, z: any, listener?: ((prev: Vector3, next: Vector3) =>  any) | undefined);

  get  x(): number;
  get  y(): number;
  get  z(): number;
  abs(): number;
  set  x(val: number);
  set  y(val: number);
  set  z(val: number);
  update(x: number, y: number, z: number): void;
  minus(vec: Vector3): Vector3;
  plus(vec: Vector3): Vector3;
  toString(): string;
}

class  Maths {
  static max(a: number, b: number): number;
  static randInt(from: number, to: number): number;
}
```