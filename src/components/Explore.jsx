import React from 'react'
import delete1 from './delete1.jpg'
import delete2 from './delete2.jpg';

const Explore = () => {
  return (
    <div className='bebak'>
      <div className="img">
        <img src={delete2} alt="yaha hamre pass img hai " />
      </div>
      <div className="explore">

        <div className="div1">
          <h1>
            Explore Books
          </h1>
          <h2>google workshop for dummies</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur. Est, aperiam ullam alias harum neque officiis ratione impedit recusandae temporibus animi cumque deserunt maxime sint voluptatibus magni expedita? Ipsa corporis soluta ullam sunt voluptatem quasi quas, blanditiis, saepe aspernatur veniam aperiam atque mollitia earum error repudiandae maiores non adipisci! Sit natus aperiam, temporibus quo unde ex facilis. Fuga odit suscipit fugiat, possimus facere itaque modi reiciendis adipisci laudantium eaque in ad qui inventore eveniet distinctio labore reprehenderit error impedit ea? Rem magnam sapiente illo cupiditate autem praesentium temporibus recusandae nostrum provident accusantium, dolore laborum et alias perferendis blanditiis consectetur.</p>
        </div>
        <div className="div2">
          <h3>here we will see the img</h3>
          <img src={delete1} alt="nahi mila" />

        </div>
      </div>
    </div>
  )
}

export default Explore