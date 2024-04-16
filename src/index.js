

import { headerComponent, section1Component, section2Component, section3Component, section4Component, section5Component, section6Component } from "./page-load";
import './style.css'

const body = document.body;


const content = document.getElementById('content');

content.appendChild(headerComponent())

content.appendChild(section1Component())
content.appendChild(section2Component())
content.appendChild(section3Component())
content.appendChild(section4Component())
content.appendChild(section5Component())
content.appendChild(section6Component())

const navItems = document.querySelector('.nav-items');
const navItemsOpen = document.querySelector('.nav-items-open');

if (navItemsOpen) {
    navItemsOpen.addEventListener('click', () => {
        navItems.classList.remove('nav-items-open');
      });

}

