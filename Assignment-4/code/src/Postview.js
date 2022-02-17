import React, { useEffect } from 'react';
import { useState } from 'react';
import './Postview.css';
const date = new Date().toLocaleDateString();

const Postview = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch('http://localhost:3004/user').then(res => res.json()).then(ele => setdata(ele))

  })
  return (
    <div className="site-container">
    {data.map((post, idx) => {
      return (
        <div className='contain'>
    <div className='name-address'>
    <div className='name'>
      <h4>{post.name}</h4>
      <h3>{post.location}</h3>
      </div>
      <select className='opt'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      </div>
      <img className="10x-image" src='https://coursereport-production.imgix.net/uploads/school/logo/1312/original/10x_Academy_logo.png?w=200&h=200&dpr=3&q=35' alt='image' width={350} height={250} />
      <div className='likes'>
      <div className='btn-likes'>
       <img  className="btn" src='https://th.bing.com/th/id/OIP.N4pai0yY_6B1NXN78slnZAAAAA?pid=ImgDet&w=170&h=170&c=7&dpr=1.5' alt='likse-logo' width={30} height={30} />
      <img className='btn1'  src='https://www.vhv.rs/dpng/d/244-2447270_instagram-share-icon-png-png-download-instagram-share.png' alt='share-logo' width={25} height={25} />
      </div>
      <p className='Date'>{date}</p>
      </div>
      <h3>Learn React </h3>
      </div>
      )
    })}
    
    </div>
  );
}

export default Postview;
