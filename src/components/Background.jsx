import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0  overflow-hidden">
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[100vh] bg-radial-primary opacity-20 blur-[60px] animate-pulse animation-duration-8s"></div>
      <div className="absolute bottom-[5%] left-[5%] w-[300px] h-[300px] bg-radial-secondary opacity-15 blur-[60px] animate-pulse animation-duration-12s"></div>
      <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] bg-radial-accent opacity-10 blur-[60px] animate-pulse animation-duration-10s"></div>

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primaryLight rounded-full opacity-50"
          style={{
            top: `${[20, 60, 80, 10, 50, 30, 70, 40][i]}%`,
            left: `${[20, 80, 15, 90, 60, 40, 70, 30][i]}%`,
            animation: `float ${
              [6, 8, 7, 9, 5, 7, 8, 6][i]
            }s infinite ease-in-out`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
