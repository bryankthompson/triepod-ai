'use client';

import { Chat } from '@/components/chat';

export default function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 glow-text">AI Chat Assistant</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Experience natural conversations with our advanced AI assistant
        </p>
        <div className="chat-container rounded-xl p-6">
          <Chat />
        </div>
      </div>
    </div>
  );
}