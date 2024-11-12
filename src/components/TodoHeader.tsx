import React from 'react';
import './todoHeader.css';
interface HeaderProps {
  title: string;
}

function TodoHeader({ title }: HeaderProps) {
  return <h1>{title}</h1>;
}

export default TodoHeader;
