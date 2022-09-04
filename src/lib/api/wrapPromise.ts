function wrapPromise<T = unknown>(promise: Promise<T>) {
  let status = 'pending';
  let response: any;

  const suspender = promise.then(
    (res: T) => {
      status = 'success';
      response = res;
    },
    (err: Error) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
}

export default wrapPromise;
