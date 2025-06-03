'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Music } from 'lucide-react';

export default function MusicGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [lyrics, setLyrics] = useState('');

  const handleGenerate = () => {
    // TODO: Implement lyrics generation logic
    setLyrics('Lyrics generation feature coming soon...');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center">
            <Music className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold glow-text">Song Generator</h1>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8">
          Create unique song ideas and lyrics with AI assistance
        </p>

        <div className="grid gap-6">
          <div className="grid gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select generation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lyrics">Generate Lyrics</SelectItem>
                <SelectItem value="melody">Melody Ideas</SelectItem>
                <SelectItem value="complete">Complete Song</SelectItem>
              </SelectContent>
            </Select>
            
            <Textarea
              placeholder="Describe your song idea..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-32"
            />
            
            <Button onClick={handleGenerate}>Generate</Button>
          </div>

          {lyrics && (
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">Generated Lyrics</h2>
              <pre className="text-muted-foreground whitespace-pre-wrap">{lyrics}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}