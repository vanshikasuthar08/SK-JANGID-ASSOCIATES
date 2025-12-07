import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function DoodleGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [currentShape, setCurrentShape] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shapes = [
    { name: 'House', emoji: '🏠', points: 10 },
    { name: 'Building', emoji: '🏢', points: 15 },
    { name: 'Castle', emoji: '🏰', points: 20 },
    { name: 'Bridge', emoji: '🌉', points: 25 },
    { name: 'Statue', emoji: '🗽', points: 30 },
  ];

  useEffect(() => {
    // Show popup after 30 seconds on first visit
    const hasSeenGame = localStorage.getItem('hasSeenDoodleGame');
    if (!hasSeenGame) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenDoodleGame', 'true');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = (index: number) => {
    if (index === currentShape) {
      setScore(prev => prev + shapes[index].points);
      if (currentShape === shapes.length - 1) {
        setGameOver(true);
      } else {
        setCurrentShape(prev => prev + 1);
      }
    } else {
      setScore(prev => Math.max(0, prev - 5));
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentShape(0);
    setGameOver(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-full max-w-md border-2 border-primary/30 shadow-2xl">
              <div className="bg-gradient-to-r from-primary to-cyan-600 text-white p-4 flex items-center justify-between rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <h3>Architecture Quiz!</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <CardContent className="p-6">
                {!gameOver ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
                        <span className="text-sm">Score:</span>
                        <motion.span
                          key={score}
                          initial={{ scale: 1.5 }}
                          animate={{ scale: 1 }}
                          className="text-lg text-primary"
                        >
                          {score}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        Find the {shapes[currentShape].name}!
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Click on the correct architectural icon
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {shapes.map((shape, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleClick(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`aspect-square rounded-xl flex items-center justify-center text-5xl transition-all ${
                            index === currentShape
                              ? 'bg-primary/10 border-2 border-primary shadow-lg'
                              : 'bg-secondary/50 border-2 border-transparent hover:border-primary/30'
                          }`}
                        >
                          {shape.emoji}
                        </motion.button>
                      ))}
                    </div>

                    <div className="flex justify-center gap-2">
                      {shapes.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 w-8 rounded-full transition-all ${
                            index <= currentShape ? 'bg-primary' : 'bg-secondary'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5 }}
                    >
                      <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl mb-2">Congratulations! 🎉</h3>
                    <p className="text-muted-foreground mb-6">
                      You completed the game with a score of{' '}
                      <span className="text-primary text-xl">{score}</span> points!
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button onClick={resetGame} className="bg-primary">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Play Again
                      </Button>
                      <Button variant="outline" onClick={() => setIsOpen(false)}>
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
