const preload = Preload();

preload.fetch(['https://test-dimafrontbackdeveloper.vercel.app./Frame.png']).then((items) => {
  // use either a promise or 'oncomplete'
  console.log(items);
});

preload.oncomplete = (items) => {
  console.log(items);
};

preload.onprogress = (event) => {
  console.log(event.progress + '%');
};

preload.onfetched = (item) => {
  console.log(item);
};

preload.onerror = (item) => {
  console.log(item);
};
