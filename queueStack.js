var MyQueue = function () {
  this.inStack = []
  this.outStack = []
};

MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
};

MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
      while (this.inStack.length) {
          this.outStack.push(this.inStack.pop())
      }
  }

  return this.outStack.pop()
};

MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
      while (this.inStack.length) {
          this.outStack.push(this.inStack.pop())
      }
  }
  return this.outStack[this.outStack.length - 1]
};

MyQueue.prototype.empty = function () {
  return !(this.inStack.length || this.outStack.length)
};