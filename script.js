//your JS code here. If required.
const container=document.querySelector('.container')

for(let i =1 ; i<=800 ; i++)
	{
		const div=document.createElement('div');
		div.classList.add('square');
		container.appendChild(div);
		
	}
const squares = document.querySelectorAll('.square');