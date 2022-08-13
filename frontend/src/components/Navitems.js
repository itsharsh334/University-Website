import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Student',
    path: '/student',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
    {
    title: 'Faculty',
    path: '/faculty',
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];