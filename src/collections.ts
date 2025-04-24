type SupportDefaultDictTypes = "int" | "str" | "bool" | "list" | "dict" | "set";

const defaultFactories = {
  int: 0,
  str: "",
  bool: false,
  list: [],
  dict: {},
  set: new Set(),
};

export class DefaultDict {
  private defaultdict = {};

  constructor(type: SupportDefaultDictTypes) {
    //   TODO: 1과 "1"을 구분가능하게 하기
    return new Proxy(this, {
      get: (target, prop) => {
        if (typeof prop === "string") {
          if (!(prop in target.defaultdict)) {
            target.defaultdict[prop] = defaultFactories[type];
          }
        }

        return target.defaultdict[prop];
      },
      set: (target, prop, value) => {
        if (typeof prop === "string") {
          target.defaultdict[prop] = value;
          return true;
        }

        return false;
      },
    });
  }
}

// TODO: 나머지 메서드 구현
export class Deque {
  private deque = {};
  private left = 0;
  private right = 0;
  private size = 0;

  constructor() {}

  append(val: any) {
    this.size += 1;
    this.deque[this.right] = val;
    this.right += 1;
  }

  appendLeft(val: any) {
    this.size += 1;
    // 초기 상태처리, ex. 덱이 빈 상태에서 append후에 appendLeft 호출
    if (this.deque[this.left] !== undefined) {
      this.left -= 1;
    }

    this.deque[this.left] = val;
    this.left -= 1;
  }

  //  TODO: 빈 덱에서 pop을 할때 null을 반환할지 오류를 던질지 결정하기
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.size -= 1;
    this.right -= 1;
    const returnValue = this.deque[this.right];
    delete this.deque[this.right];

    return returnValue;
  }

  popLeft() {
    if (this.isEmpty()) {
      return null;
    }
    this.size -= 1;
    this.left += 1;
    const returnValue = this.deque[this.left];
    delete this.deque[this.left];

    return returnValue;
  }

  clear() {
    this.left = 0;
    this.right = 0;
    this.size = 0;
    this.deque = {};
  }

  isEmpty() {
    return this.size === 0;
  }
}
