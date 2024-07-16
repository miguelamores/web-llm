onmessage = (e) => {
  console.log(e);
  console.log(e.data.name);
  postMessage("hi from the worker");
};
