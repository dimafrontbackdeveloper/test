const preload = Preload();

preload
  .fetch([
    'https://light-dist-for-host.vercel.app./assets/images/mountains.png',
    'https://light-dist-for-host.vercel.app./assets/images/Mountains1-mobile.png',
  ])
  .then((items) => {
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
