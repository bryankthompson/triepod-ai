import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const definitions = [
  {
    title: "Large Language Models (LLMs)",
    description: "Advanced AI systems trained on vast amounts of text data, capable of understanding and generating human-like text. Examples include GPT-4, Claude, and Llama 2.",
    category: "Core Concepts"
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    description: "A technique that combines information retrieval with text generation to produce more accurate and contextually relevant responses.",
    category: "Techniques"
  },
  {
    title: "Prompt Engineering",
    description: "The art and science of crafting effective inputs for AI models to achieve desired outputs. Includes techniques like few-shot learning and chain-of-thought prompting.",
    category: "Skills"
  },
  {
    title: "Vector Embeddings",
    description: "Mathematical representations of text that capture semantic meaning, enabling AI systems to understand relationships between different pieces of content.",
    category: "Technology"
  },
  {
    title: "Fine-tuning",
    description: "The process of adapting a pre-trained AI model to specific tasks or domains by training it on additional specialized data.",
    category: "Techniques"
  },
  {
    title: "Transformer Architecture",
    description: "The foundational neural network design that powers modern language models, using self-attention mechanisms to process sequential data.",
    category: "Technology"
  },
  {
    title: "Semantic Search",
    description: "Search technology that understands the meaning and context of queries rather than just matching keywords.",
    category: "Features"
  },
  {
    title: "Zero-shot Learning",
    description: "The ability of AI models to perform tasks they weren't explicitly trained on, using their general knowledge and understanding.",
    category: "Capabilities"
  },
  {
    title: "Attention Mechanisms",
    description: "Neural network components that help models focus on relevant parts of input data, crucial for understanding context and relationships.",
    category: "Technology"
  },
  {
    title: "Token",
    description: "The basic unit of text that language models process, which can be words, parts of words, or individual characters.",
    category: "Core Concepts"
  }
];

export default function DefinitionsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 glow-text">AI Definitions</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Essential concepts and terminology in modern AI technology
          </p>

          <div className="grid gap-6">
            {definitions.map((def, index) => (
              <div
                key={index}
                className="group hover-card rounded-xl p-6 bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {def.category}
                    </span>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {def.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {def.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}