'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Languages } from 'lucide-react';

export default function TranslatePage() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = () => {
    // TODO: Implement translation logic
    setTranslation('Translation feature coming soon...');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center">
            <Languages className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold glow-text">AI Translation</h1>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8">
          Translate text between languages with advanced AI accuracy
        </p>

        <div className="grid gap-6">
          <div className="grid gap-4">
            <Textarea
              placeholder="Enter text to translate..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="h-32"
            />
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="From language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Detect Language</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  {/* Add more languages */}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="To language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  {/* Add more languages */}
                </SelectContent>
              </Select>
              <Button onClick={handleTranslate}>Translate</Button>
            </div>
          </div>

          {translation && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">Translation</h2>
              <p className="text-muted-foreground">{translation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}