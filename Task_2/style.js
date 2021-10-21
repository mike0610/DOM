//                   Task2  
// ========================================================

const title = document.querySelector('h1');
title.style.cssText = `
	background-color: #90ee90;
	width: 350px;
`;
// ======================================================

const paragraph = document.querySelectorAll('#myDiv p');

paragraph[0].style.fontWeight = 'bold';
paragraph[1].style.color = 'red';
paragraph[2].style.textDecoration = 'underline';
paragraph[3].style.fontStyle = 'italic';

// ======================================================

let lists = document.getElementById('myList');

lists.style.cssText = `
display: flex;
`;

let list = document.querySelectorAll('#myList li');

list[0].style.listStyleType = 'none';
list[1].style.listStyleType = 'none';
list[2].style.listStyleType = 'none';

// =======================================================

let elem = document.querySelector('span');
elem.style.cssText = `
display: none;
`;

