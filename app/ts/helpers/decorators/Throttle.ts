export function Throttle(timeout = 500) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    let timer = 0;
    descriptor.value = function (...args: any[]) {
      clearInterval(timer);
      setTimeout(() => originalMethod.apply(this, args), timeout);
    };

    return descriptor;
  };
}
