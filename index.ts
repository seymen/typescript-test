const log = require('./log')

// structural vs nominally typed
// In TS types are constraints. If you have two different types with the same properties, you can use them interchangeably in TS. In Java, for example, that wouldn't work.

// object type ////// ////// ////// ////// ////// ////// ////// ////// //////

type Point = {
  x: number,
  y: number
}


// Intersecting types ////// ////// ////// ////// ////// ////// ////// ////// //////

type Named = {
  name: string
}

type NamedPoint = Point & Named

const np: NamedPoint = { name: 'bob', x: 1, y: 2}

// Union types ////// ////// ////// ////// ////// ////// ////// ////// ////// //////

let x: number | string = 2
log(typeof x)

// types with values ////// ////// ////// ////// ////// ////// ////// ////// ////// //////

type MyBool = true | false
type Result = 'ok' | 'error'
type Result2 =
  | { status: 'ok' }
  | { status: 'error' }
type Result3 =
  | { status: 'ok' }
  | { status: 'error', reason: string }

// kind workaround (Discriminated Unions) //////////////////////////////////////////////

type Square = {
  kind: 'square',
  size: number
}

type Rectangle = {
  kind: 'rectangle',
  width: number,
  height: number
}

type Shape = Square | Rectangle

let area: (s: Shape) => number
area = s => {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
  }
}

const square: Square = { kind: 'square', size: 5 }

log(area(square))

// Generics ////////////////////////////////////////////////////////////

type Stack<T> = {
  top: T,
  rest: Stack<T>
} | null

// Deconstructuring types

let f: (p:Point) => number
f = ({x, y}) => x+y

const p:Point = { x: 1, y: 2 }
log(f(p))

// Type level programming ////////////////////////////////////////////////

type Id<T> = T
type Pair<T,U> = [T,U]
