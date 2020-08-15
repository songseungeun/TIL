const images = document.querySelectorAll(".image-box");

const threshold = 0.8;
const lazyLoadOption = { root: null, threshold };

const lazyLoadImage = (entries, observer) => {
  console.log(entries);
  console.log(observer);
  entries.forEach((entry) => {
    console.log(entry);
    const { target } = entry;
    if (entry.isIntersecting) {
      target.style.backgroundImage = `url("${target.dataset.src}")`;
      target.style.backgroundSize = `cover`;
      target.style.backgroundColor = `transparent`;
      target.textContent = "";
    }
  });
};

const lazyLoadingIO = new IntersectionObserver(lazyLoadImage, lazyLoadOption);

images.forEach((image) => lazyLoadingIO.observe(image));
