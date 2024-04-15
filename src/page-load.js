import section1Image from './section1image.jpg'

function section1Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-1-parent-container'
parentContainer.classList.add('sections-parent')

const imageWrapper = document.createElement('div');
imageWrapper.classList.add('mobile-image-wrapper')

const image = new Image();
image.src = section1Image;
image.alt = 'caucasion portrait of a healthy women with blue eyes and blond brunette hair with a big smile'

imageWrapper.appendChild(image)


parentContainer.appendChild(imageWrapper)

return parentContainer;
}






export {
    section1Image,
section1Component,

}; 