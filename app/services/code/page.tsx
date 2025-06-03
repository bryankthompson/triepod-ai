'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code } from 'lucide-react';

export default function CodeAssistantPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = () => {
    // TODO: Implement code generation logic
    setResponse('Code generation feature coming soon...');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center">
            <Code className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold glow-text">Coding Assistant</h1>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8">
          Get help with coding tasks and generate code snippets
        </p>

        <div className="grid gap-6">
          <div className="grid gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select assistance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Assistance</SelectItem>
                <SelectItem value="debug">Debug Code</SelectItem>
                <SelectItem value="generate">Generate Code</SelectItem>
                <SelectItem value="explain">Explain Code</SelectItem>
              </SelectContent>
            </Select>
            
            <Textarea
              placeholder="Describe what you need help with..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-32"
            />
            
            <Button onClick={handleGenerate}>Generate</Button>
          </div>

          {response && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">Response</h2>
              <pre className="text-muted-foreground whitespace-pre-wrap">{response}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}