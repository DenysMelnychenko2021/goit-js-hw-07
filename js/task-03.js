const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryById = document.getElementById("gallery")
console.log(galleryById)

const addImages = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="400px"></li>`).join('')

galleryById.insertAdjacentHTML("afterbegin", addImages)

console.dir(gallery.style)
gallery.style.listStyle = "none"
gallery.style.display = "flex"
gallery.style.justifyContent = "space-between"
gallery.style.alignItems = "center"