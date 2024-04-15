

import { section1Component, section2Component } from "./page-load";
import './style.css'
const content = document.getElementById('content');


content.appendChild(section1Component())
content.appendChild(section2Component())
