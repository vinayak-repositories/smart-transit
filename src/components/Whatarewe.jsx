import React from 'react'

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
const Whatarewe = () => {
return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '70vh', justifyContent: 'center', color:'#e63946' }}>
        <h1
            style={{
                opacity: 0,
                animation: 'fadeIn 5s forwards',
                fontSize: '2.3rem',
            }}
            onAnimationEnd={handleAnimationComplete}
        >
            What We Are?
        </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '1100px', marginTop: '1rem', color: 'black' }}>
            We are a team of dedicated professionals committed to providing top-notch transit solutions. Our mission is to innovate and improve urban mobility, ensuring safe, efficient, and sustainable transportation for everyone.
        </p>
        <style>
            {`
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
            `}
        </style>
    </div>
    )
}

export default Whatarewe