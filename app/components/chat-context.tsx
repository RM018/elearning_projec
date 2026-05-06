'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Message {
  id: string;
  text: string;
  sender: string;
  senderId: string;
  avatar?: string;
  timestamp: Date;
  isOwn?: boolean;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (text: string) => void;
  isConnected: boolean;
  onlineUsers: number;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    const mockMessages: Message[] = [
      {
        id: '1',
        text: 'Welcome to the live chat! Feel free to ask any questions.',
        sender: 'Support Team',
        senderId: 'support',
        avatar: 'https://picsum.photos/seed/support/40/40.jpg',
        timestamp: new Date(Date.now() - 3600000),
      },
      {
        id: '2',
        text: 'Hi everyone! I am new to web development.',
        sender: 'Alex Chen',
        senderId: 'alex',
        avatar: 'https://picsum.photos/seed/alex/40/40.jpg',
        timestamp: new Date(Date.now() - 1800000),
      },
      {
        id: '3',
        text: 'Welcome Alex! This is a great place to learn.',
        sender: 'Sarah Johnson',
        senderId: 'sarah',
        avatar: 'https://picsum.photos/seed/sarah/40/40.jpg',
        timestamp: new Date(Date.now() - 900000),
      },
    ];
    
    setMessages(mockMessages);
    setIsConnected(true);
    setOnlineUsers(Math.floor(Math.random() * 20) + 5);

    const interval = setInterval(() => {
      setOnlineUsers(prev => Math.max(1, prev + Math.floor(Math.random() * 5) - 2));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'You',
      senderId: 'current-user',
      avatar: 'https://picsum.photos/seed/currentuser/40/40.jpg',
      timestamp: new Date(),
      isOwn: true,
    };

    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const responses = [
        'That is a great question! Let me help you with that.',
        'I understand what you are asking. Here are my thoughts...',
        'Thanks for sharing! Have you tried checking the documentation?',
        'Interesting point! What do others think about this?',
        'Welcome to the chat! How can I assist you today?',
      ];

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'Chat Assistant',
        senderId: 'assistant',
        avatar: 'https://picsum.photos/seed/assistant/40/40.jpg',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1000 + Math.random() * 2000);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isConnected, onlineUsers }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
