import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, MessageCircle, X } from 'lucide-react';



interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface BotResponse {
  [key: string]: string;
}

const PortfolioBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  

  const botResponses: BotResponse = {
    'hola': '¡Hola! 👋 Soy el asistente de este portafolio. Puedo contarte sobre las tecnologías que uso, mis certificados, experiencia y proyectos. ¿Qué te interesa saber?',
    'disclaimer': 'Disclaimer: De momento solo respondo preguntas pre definidas. Si me contratas, ¡podrás desbloquear GPT-4 aquí! 😛',
    'tecnologias': '💻 Tecnologías que domino:\n\n• Frontend: React, TypeScript, Tailwind CSS, Next.js\n• Backend: Java, Spring Boot, MySQL\n• Base de datos: MySQL, MongoDB\n• Herramientas: Git, Github, NetBeans\n• Cloud: AWS',
    'certificados': '🏆 Mis certificaciones:\n\n•Certificación en Java, Universidad Mariana\n• Java de Cero a Máster, Udemy\n• Arquitecturas de Big Data, UniAndes\n• Bootcamp Github Actions, Código Facilito\n•Fundamentos de Arquitectura de Software, Código Facilito',
    'experiencia': '💼 Mi experiencia:\n\n•Sistema de Historia Clínica Electrónica y Gestión de Citas\n• Sistema de Ventas para Supermercado\n•Landing Page - Materiales de Construcción\n• Liderazgo de equipos técnicos pequeños\n',
    'contacto': '📧 Puedes contactarme a través de:\n\n• Email: juanbmusic8@gmail.com\n• LinkedIn: in/juan-josé-burbano-587aab266\n• GitHub: /Juanjose190\n•',
    'ayuda': '🤖 Comandos disponibles:\n\n• "tecnologias" - Ver stack tecnológico\n• "certificados" - Mis certificaciones\n• "experiencia" - Experiencia laboral\n• "proyectos" - Proyectos destacados\n• "contacto" - Información de contacto\n\n¡Escribe cualquiera de estos temas!'
  };

  const quickOptions = [
    { label: 'Tecnologías', value: 'tecnologias' },
    { label: 'Certificados', value: 'certificados' },
    { label: 'Experiencia', value: 'experiencia' },
    { label: 'Contacto', value: 'contacto' }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(botResponses['hola']);
    }
  }, [isOpen]);

   useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(botResponses['disclaimer']);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (type: 'bot' | 'user', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage('bot', content);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickOption = (option: string) => {
    addMessage('user', option);
    const response = botResponses[option.toLowerCase()] || 
      "Lo siento, no entiendo esa consulta. Escribe 'ayuda' para ver los comandos disponibles.";
    addBotMessage(response);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('message') as HTMLInputElement;
    const message = input.value.trim();
    
    if (message) {
      addMessage('user', message);
      const response = botResponses[message.toLowerCase()] || 
        "Lo siento, no entiendo esa consulta. Escribe 'ayuda' para ver los comandos disponibles.";
      addBotMessage(response);
      input.value = '';
    }
  };

  const toggleBot = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleBot}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <span className="font-medium">Portfolio Assistant</span>
        </div>
        <button
          onClick={toggleBot}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'bot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {message.type === 'bot' ? (
                <Bot className="w-4 h-4" />
              ) : (
                <User className="w-4 h-4" />
              )}
            </div>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-line ${
                message.type === 'bot'
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Options */}
      <div className="p-2 border-t border-gray-200">
        <div className="flex flex-wrap gap-1 mb-2">
          {quickOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleQuickOption(option.value)}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleInputSubmit} className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            name="message"
            placeholder="Escribe tu pregunta..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioBot;