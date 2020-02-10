import React, { Component } from 'react'
import './Footer.css'

export default class Nav extends Component {
    
    render () {
        return (
           <footer>
               Created by Megan Wade
               <ul className='socialLinks'>
                    <li><a href="https://www.linkedin.com/in/megan-wade-909129124/" target="_blank" aria-label="linkedin link"><i class="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a href="mailto:meganwade96@gmail.com" target="_blank" aria-label="email link"><i class="fas fa-envelope-square fa-2x"></i></a></li>
                    <li><a href="https://github.com/WadeMegan" target="_blank" aria-label="github link"><i class="fab fa-github-square fa-2x"></i></a></li>
               </ul>
           </footer>
        )
    }

}