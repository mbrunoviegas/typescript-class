export function DomInject(selector: string) {
  return (target: any, key: string) => {
    let _element: JQuery;
    const getter = () => {
      if (!_element) {
        _element = $(selector);
      }

      return _element;
    };

    Object.defineProperty(target, key, {
      get: getter,
    });
  };
}
