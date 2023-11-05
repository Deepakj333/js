function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}


function Galllary(element){
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  this.modal = getElement('.modal');
  this.mainImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImgs = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.chooseImgae = this.chooseImgae.bind(this);
  this.container.addEventListener('click' ,function (e){
    console.log(e);
    console.log(e.target);

     this.openModal(e.target,this.list);
  }.bind(this));
                   
}

Galllary.prototype.openModal = function (selectedImage,list){
  this.setMainImage(selectedImage);
  this.modalImgs.innerHTML = list.map(function(image){
    return `<img src="${
      image.src
    }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
                      
  }).join('');

  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click' , this.closeModal);
  this.nextBtn.addEventListener('click' , this.nextImage);
  this.prevBtn.addEventListener('click' , this.prevImage);
  this.modalImgs.addEventListener('click',this.chooseImgae)
};

Galllary.prototype.setMainImage = function(selectedImage){
  this.imageName.textContent = selectedImage.title;
  this.mainImg.src = selectedImage.src;

};

Galllary.prototype.closeModal = function(){
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click' , this.closeModal);
    this.nextBtn.removeEventListener('click' , this.nextImage);
    this.prevBtn.removeEventListener('click' , this.prevImage);
    this.modalImgs.removeEventListener('click' , this.modalImgs);                                                                    
  }

Galllary.prototype.nextImage = function(){
  const selectedimage = this.modalImgs.querySelector('.selected');
  const nextimage = selectedimage.nextElementSibling || this.modalImgs.firstElementChild;
  selectedimage.classList.remove('selected');
  nextimage.classList.add('selected');
  this.setMainImage(nextimage);
}
Galllary.prototype.prevImage = function(){
  const selectedimage = this.modalImgs.querySelector('.selected');
  const previousimage = selectedimage.previousElementSibling || this.modalImgs.lastElementChild;
  selectedimage.classList.remove('selected');
  previousimage.classList.add('selected');
  this.setMainImage(previousimage);
}

Galllary.prototype.chooseImgae = function(e){
  console.log(e.target);
  console.log(this);
  if(e.target.classList.contains('modal-img')){
    const selected = this.modalImgs.querySelector('.selected');
    selected.classList.remove('selected');
    this.setMainImage(e.target);
    e.target.classList.add('selected');
  }
}

const nature = new Galllary(getElement('.nature'));
const city = new Galllary(getElement('.city'));