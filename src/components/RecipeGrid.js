import React from 'react';
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';

const RecipeGrid = ({recipes}) => {
  let rec = recipes[0];
  console.log(recipes);

  const recip = {
    title: 'Tempor aliquip exercitation commodo id non.',
    image: '/img/food-6.jpg',
    summary:
      'Reprehenderit consectetur et mollit magna enim ut anim. Anim fugiat ullamco ipsum non sit quis proident. Aliqua in sint est duis et culpa fugiat reprehenderit voluptate. Eiusmod laboris ullamco consectetur tempor in consectetur incididunt dolore incididunt aliqua occaecat. Commodo voluptate veniam proident magna et ipsum cillum.',
    diet: ['diet 1', 'diet 2', 'diet 3'],
    serving: 5,
    calories: 150,
    readyIn: 45,
    ingredients: [
      '1 organic delicata squash (about ¾ pound)',
      '1 organic red onion',
      '1 bunch organic lacinato or other kale (about 10 ounces)',
      '1 teaspoon harissa powder (optional)',
      '3 tablespoons dry-roasted pumpkin seeds',
      '3 tablespoons dried cherries',
    ],
    instructions: [
      'Tempor aliquip exercitation commodo id non. Labore sunt culpa dolor eu duis cupidatat laborum est occaecat eiusmod ipsum ad labore qui.',
      'Tempor aliquip exercitation commodo id non.',
      'Tempor aliquip exercitation commodo id non.Pariatur dolore nostrud aliqua eu esse veniam.',
      'Tempor aliquip exercitation commodo id non.Aliqua sint occaecat reprehenderit adipisicing ipsum incididunt ex aute aute sit irure est sint.',
      'Tempor aliquip exercitation commodo id non.',
      'Tempor aliquip exercitation commodo id non.Deserunt cupidatat laboris pariatur officia enim Lorem culpa est.',
    ],
  };

  let myRes = [];
  let count = 0;
  while (count < 20) {
    myRes = [...myRes, recip];
    count++;
  }

  console.log(myRes);

  return (
    <div className='recipe-grid'>
      {myRes &&
        myRes.map((recipe) => (
          <div
            className='recipe-grid-item'
            key={Math.floor(Math.random() * 100000000)}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
    </div>
  );
};

export default RecipeGrid;
