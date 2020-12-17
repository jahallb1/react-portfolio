import React from 'react'
import * as RiIcons from 'react-icons/ri'; 
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
       title: 'Home',
       path: '/',
       icon: <AiIcons.AiFillHome />,
       cName: 'nav-text' 
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <BiIcons.BiBook />,
        cName: 'nav-text' 
     },
     {
        title: 'Resume',
        path: '/resume',
        icon: <BiIcons.BiDetail />,
        cName: 'nav-text' 
     },
     {
        title: 'Contact',
        path: '/contact',
        icon: <RiIcons.RiContactsFill />,
        cName: 'nav-text' 
     },

     
]