import { nanoid } from 'nanoid'
import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import Chart from 'chart.js/auto';


// nanoid
const id = nanoid()
const id1 = nanoid()
console.log(id);
console.log(id1);

//  pnotify
   const button = document.querySelector('button');
   const input = document.querySelector('input');

   button.addEventListener('click', ()=>{
    if (input.value.length > 0) {
        success({
        text: `${input.value}`
      });
    } else{
        error({
                text: "Введіть щось в поле вводу"
              });
    }
    
   });
   
// chart.js
const ctx = document.getElementById('myChart');

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow',
      'Green'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100, 300],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 255, 0)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'bar',
    data: data,
  };
 new Chart(ctx, config);
 