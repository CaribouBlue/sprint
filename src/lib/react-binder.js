const autoBinder = (that, ...funcs) => {
  funcs.forEach(func => {
    if (Array.isArray(func))
      autoBinder(that, ...func);
    else
      that[func] = that[func].bind(that);
  });
};

export default autoBinder;