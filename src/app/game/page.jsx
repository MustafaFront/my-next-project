// "use client";

// import { useState } from "react";

// export default function TicTacToeGame() {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(true);
//   const [winner, setWinner] = useState(null);

//   const handleClick = (index) => {
//     if (board[index] || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = isXNext ? "X" : "O";
//     setBoard(newBoard);
//     setIsXNext(!isXNext);

//     const gameWinner = calculateWinner(newBoard);
//     if (gameWinner) {
//       setWinner(gameWinner);
//       setTimeout(() => {
//         alert(`${gameWinner} فاز! 🎉`);
//       }, 100);
//     }
//   };

//   const calculateWinner = (board) => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return board[a];
//       }
//     }
//     return null;
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">لعبة X O</h1>
//       <div className="grid grid-cols-3 gap-2 w-64">
//         {board.map((cell, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             className="w-20 h-20 text-2xl font-bold flex items-center justify-center bg-white border border-gray-300 rounded shadow hover:bg-gray-200"
//           >
//             {cell}
//           </button>
//         ))}
//       </div>
//       {winner && (
//         <div className="mt-6 text-xl font-bold text-green-600">
//           🎉 {winner} فاز! 🎉
//         </div>
//       )}
//       <button
//         onClick={resetGame}
//         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         إعادة اللعب
//       </button>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";

// const GRID_SIZE = 10; // 10x10 grid
// const INITIAL_SNAKE = [{ x: 0, y: 0 }];
// const INITIAL_FOOD = { x: 5, y: 5 };

// export default function SnakeGame() {
//   const [snake, setSnake] = useState(INITIAL_SNAKE);
//   const [food, setFood] = useState(INITIAL_FOOD);
//   const [direction, setDirection] = useState({ x: 1, y: 0 }); // Moving right initially
//   const [gameOver, setGameOver] = useState(false);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!gameOver) {
//         moveSnake();
//       }
//     }, 200); // Snake moves every 200ms
//     return () => clearInterval(interval);
//   }, [snake, direction, gameOver]);

//   const moveSnake = () => {
//     const newSnake = [...snake];
//     const head = newSnake[newSnake.length - 1];
//     const newHead = { x: head.x + direction.x, y: head.y + direction.y };

//     // Check for collisions with walls or itself
//     if (
//       newHead.x < 0 ||
//       newHead.x >= GRID_SIZE ||
//       newHead.y < 0 ||
//       newHead.y >= GRID_SIZE ||
//       newSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
//     ) {
//       setGameOver(true);
//       return;
//     }

//     newSnake.push(newHead);

//     // Check if the snake eats the food
//     if (newHead.x === food.x && newHead.y === food.y) {
//       setScore(score + 1);
//       setFood(generateFood(newSnake));
//     } else {
//       newSnake.shift(); // Remove the tail if no food is eaten
//     }

//     setSnake(newSnake);
//   };

//   const generateFood = (snake) => {
//     let newFood;
//     do {
//       newFood = {
//         x: Math.floor(Math.random() * GRID_SIZE),
//         y: Math.floor(Math.random() * GRID_SIZE),
//       };
//     } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
//     return newFood;
//   };

//   const handleKeyDown = (e) => {
//     switch (e.key) {
//       case "ArrowUp":
//         if (direction.y === 0) setDirection({ x: 0, y: -1 });
//         break;
//       case "ArrowDown":
//         if (direction.y === 0) setDirection({ x: 0, y: 1 });
//         break;
//       case "ArrowLeft":
//         if (direction.x === 0) setDirection({ x: -1, y: 0 });
//         break;
//       case "ArrowRight":
//         if (direction.x === 0) setDirection({ x: 1, y: 0 });
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [direction]);

//   const resetGame = () => {
//     setSnake(INITIAL_SNAKE);
//     setFood(INITIAL_FOOD);
//     setDirection({ x: 1, y: 0 });
//     setGameOver(false);
//     setScore(0);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">لعبة الثعبان 🐍</h1>
//       <div
//         className="grid gap-1"
//         style={{
//           gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
//           gridTemplateRows: `repeat(${GRID_SIZE}, 20px)`,
//         }}
//       >
//         {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
//           const x = index % GRID_SIZE;
//           const y = Math.floor(index / GRID_SIZE);
//           const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
//           const isFood = food.x === x && food.y === y;
//           return (
//             <div
//               key={index}
//               className={`w-5 h-5 ${
//                 isSnake ? "bg-green-500" : isFood ? "bg-red-500" : "bg-gray-200"
//               }`}
//             ></div>
//           );
//         })}
//       </div>
//       <div className="mt-4 text-xl">النتيجة: {score}</div>
//       {gameOver && (
//         <div className="mt-6 text-xl font-bold text-red-600">
//           انتهت اللعبة! 😢
//         </div>
//       )}
//       {score >= 10 && !gameOver && (
//         <div className="mt-6 text-xl font-bold text-green-600">
//           🎉 فوز رائع! لقد وصلت إلى {score} نقطة! 🎉
//         </div>
//       )}
//       <button
//         onClick={resetGame}
//         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         إعادة اللعب
//       </button>
//     </div>
//   );
// }


// app/not-found.jsx (أو wherever 404 route is handled)
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 rtl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <Truck size={64} className="text-yellow-500 animate-bounce" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          الصفحة غير موجودة
        </motion.h1>

        <p className="text-gray-600 mb-6">
          يبدو أنك وصلت إلى طريق غير موجود... 🛣️
        </p>

        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-[#b38908] transition"
          >
            الرجوع للرئيسية
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
