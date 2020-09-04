/* eslint-disable */
export function foreRequestMiddleware(context, next) {
  context.setData({
    query: {
      ts: Date.now()
    },
    ...context.data
  });

  console.log(context.metadata.url);
  console.log(context.url);
  console.log(context.data);

  // `next` function must be called
  next();
}

export function postRequestMiddleware(context, next) {
  const { preProcessor } = context.metadata;

  if (preProcessor) {
    context.setResponse(preProcessor(response));
  }
  next();
}

export function fallbackMiddleware(context, next) {
  console.error('Comes some error', context.responseError);
  next();
}
