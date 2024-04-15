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

const title = document.createElement('h1')
title.classList.add('titles')
title.textContent = "we are igniting innovative brands"

wrapWordInSpan('innovative', title)

const p1 = document.createElement('p');
p1.classList.add('paragraph-text')
p1.textContent = "We are shaping the global nutrition market with pioneering solutions.";
const p2 = document.createElement('p');
p2.classList.add('paragraph-text')
p2.textContent = "At Nutranation, we're redefining the standard for high-quality direct-to-customers nutrition brands worldwide.";

const anchorButton = document.createElement('a');
anchorButton.classList.add('anchor-buttons')
anchorButton.textContent = 'contact us';

parentContainer.appendChild(imageWrapper)
parentContainer.appendChild(title)
parentContainer.appendChild(p1)
parentContainer.appendChild(p2)
parentContainer.appendChild(anchorButton)

return parentContainer;
}

function section2Component() {
    const parentContainer = document.createElement('div');
parentContainer.id = 'section-2-parent-container'
parentContainer.classList.add('sections-parent')

const title = document.createElement('h1')
title.classList.add('titles')
title.textContent = "we always reach out for the top";

const paragraphContainer = document.createElement('div');
paragraphContainer.id = 'section-2-paragraph-container';

const p1 = document.createElement('p');
p1.id = 'section-2-p1';
p1.classList.add('paragraph-titles')
p1.textContent = "> 50 brands";
const p2 = document.createElement('p');
p2.id = 'section-2-p2';
p2.classList.add('paragraph-texts')
p2.textContent = "launched";

const p3 = document.createElement('p');
p3.id = 'section-2-p3';
p3.classList.add('paragraph-titles')
p3.textContent = "+ 5.000.000";
const p4 = document.createElement('p');
p4.id = 'section-2-p4';
p4.classList.add('paragraph-texts')
p4.textContent = "customers";

const p5 = document.createElement('p');
p5.id = 'section-2-p5';
p5.classList.add('paragraph-titles')
p5.textContent = "more than 15";
const p6 = document.createElement('p');
p6.id = 'section-2-p6';
p6.classList.add('paragraph-texts')
p6.textContent = "countries";


paragraphContainer.appendChild(p1)
paragraphContainer.appendChild(p2)
paragraphContainer.appendChild(p3)
paragraphContainer.appendChild(p4)
paragraphContainer.appendChild(p5)
paragraphContainer.appendChild(p6)

parentContainer.appendChild(title)
parentContainer.appendChild(paragraphContainer)





return parentContainer;
}






function wrapWordInSpan(word, h1Element) {
    const words = h1Element.textContent.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        const span = document.createElement('span');
        span.textContent = words[i];
        span.id = 'span-' + i
        // span.style.color = '#7315cb';
        // span.style.fontWeight = 'bold';
  
        words[i] = span.outerHTML;
      }
    }
  
    h1Element.innerHTML = words.join(' ');
  }


export {
    section1Image,
section1Component,
section2Component,

}; 