export function LogPerformanceTime(toSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divider = toSeconds ? 1000 : 1;
      let unit = toSeconds ? "segundos" : "milisegundos";
      const before = performance.now();
      const result = originalMethod.apply(this, args);
      const after = performance.now();
      console.log(
        `O tempo de execução do método ${propertyKey} foi de ${
          (after - before) / divider
        } ${unit}`
      );
    };
    return descriptor;
  };
}
