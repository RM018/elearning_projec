'use client';

import React from 'react';
import ChatInterface from '../components/chat-interface';
import { ChatProvider } from '../components/chat-context';

export default function ChatPage() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Chat</h1>
            <p className="text-gray-600">Connect with other learners and instructors in real-time</p>
          </div>
          
          <div className="h-[calc(100vh-12rem)]">
            <ChatInterface />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}
