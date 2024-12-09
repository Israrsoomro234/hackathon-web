import React from 'react'

const UpperHeaader = () => {
  return (
    
    <div>
        {/* {Header} */}

    <div className=" flex top-header items-center bg-black text-white 
    justify-center h-[38] w-full text-center gap-5">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="signup-link">
          Sign Up Now
        </a>
      </p>
      <span className='gap-10'>
      <button className="close-btn">✕</button>
      </span>
    </div>

      {/* Navigation Bar */}
      <header>
        <div className="navbar">
          <div className="logo">SHOP.CO</div>
          <nav>
            <ul>
              <li><a href="/page">Shop</a></li>
              <li><a href="#">On Sale</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Brands</a></li>
            </ul>
          </nav>
          <div className="nav-icons">
            <input type="text" placeholder="Search for products..." />
            <span className="icon">🔍</span>
            <span className="icon">🛒</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UpperHeaader
