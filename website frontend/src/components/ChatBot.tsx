import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! 👋 I'm your SK Jangid & Associates virtual assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "View Portfolio",
    "Our Services",
    "Get a Quote",
    "Contact Us",
    "Sustainability"
  ];

  const botResponses: { [key: string]: string } = {
    "portfolio": "I'd love to show you our amazing projects! Check out our Portfolio page to see our residential, commercial, and interior design work. 🏗️",
    "services": "We offer Residential Architecture, Commercial Design, Interior Design, Space Planning, Sustainable Design, and Design Consultation. What interests you? 🎨",
    "quote": "Great! To get a personalized quote, please visit our Contact page and fill out the form with your project details. We'll get back to you within 24 hours! 💼",
    "contact": "You can reach us at:\n📞 +91 98765 43210\n📧 info@skjangidassociates.com\nOr use our Contact form! ✉️",
    "sustainability": "We're committed to sustainable architecture! We offer LEED certifications, solar integration, rainwater harvesting, and eco-friendly materials. 🌱",
    "default": "That's a great question! For detailed information, I recommend visiting our Services page or contacting our team directly. They'll be happy to help! 😊"
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    setMessages(prev => [...prev, { text: messageText, isBot: false }]);
    setInputValue('');

    // Simple bot response logic
    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let response = botResponses.default;

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-br from-primary to-cyan-600 hover:shadow-primary/50 transition-all duration-300 group"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <MessageCircle className="w-7 h-7" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-cyan-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">SK Assistant</h4>
                    <p className="text-xs opacity-90">Online • Typically replies instantly</p>
                  </div>
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

              {/* Messages */}
              <CardContent className="p-4 h-[400px] overflow-y-auto bg-secondary/20">
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          msg.isBot
                            ? 'bg-background border border-border'
                            : 'bg-gradient-to-r from-primary to-cyan-600 text-white'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Replies */}
                {messages.length <= 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4"
                  >
                    <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSendMessage(reply)}
                          className="text-xs rounded-full"
                        >
                          {reply}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t border-border bg-background">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    size="icon"
                    className="bg-gradient-to-r from-primary to-cyan-600 hover:opacity-90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
