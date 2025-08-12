// components/ProductCard.jsx
import React from 'react';
import useIsMobile from "../hooks/useIsMobile";

const ProductCard = () => {
  const isMobile = useIsMobile(900); // <=900px = mobile

  // JS guard (no render on mobile)
  if (isMobile) return null;

  return (
    <>
      {/* CSS fallback: even if JS fails, hide on mobile */}
      <style>{`
        @media (max-width: 900px), (pointer: coarse) {
          .product-card { display: none !important; }
        }
      `}</style>

      <div className="product-card">
        <a
          href="https://lennardfeist.gumroad.com/l/slitoex?_gl=1*1qa2jjy*_ga*MTA3NTU2OTU5NC4xNzUwOTYxODA1*_ga_6LJN6D94N6*czE3NTM4MjQxOTMkbzIwJGcxJHQxNzUzODI1MTI1JGozOCRsMCRoMA.."
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="product-title">Slito EX</h2>
          <p className="product-description">Available now on Gumroad!</p>
        </a>
      </div>
    </>
  );
};

export default ProductCard;
