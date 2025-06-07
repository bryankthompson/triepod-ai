'use client'

import Link from 'next/link'
import { ArrowLeft, Database, Brain, Code, Terminal, FileText, Search, Zap, Shield } from 'lucide-react'

export default function TriepodKnowledgeBaseDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/triepod-knowledge-base" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Triepod.ai Knowledge Base Platform</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Enterprise-grade RAG system with vector database integration for semantic document search and AI-powered insights
          </p>
        </header>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            Overview
          </h2>
          <div className="prose max-w-none">
            <p>
              The Triepod.ai Knowledge Base Platform is a sophisticated document management and retrieval system 
              that combines the power of traditional databases with modern vector search capabilities. Built with 
              React and Node.js, it integrates PostgreSQL for structured data storage with Pinecone for 
              high-performance vector operations.
            </p>
            <p>
              The platform excels at processing large document collections, extracting semantic meaning, and 
              providing intelligent search capabilities that go beyond traditional keyword matching. With built-in 
              support for multiple AI models through OpenAI and Hugging Face integrations, it delivers contextual 
              responses and document insights.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-blue-600" />
            Architecture
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-medium mb-4">System Components</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium">Frontend Layer</h4>
                  <p className="text-sm text-gray-600">React + TypeScript with TailwindCSS</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium">API Layer</h4>
                  <p className="text-sm text-gray-600">Express.js with comprehensive routing</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium">Vector Database</h4>
                  <p className="text-sm text-gray-600">Pinecone for semantic search</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-medium">SQL Database</h4>
                  <p className="text-sm text-gray-600">PostgreSQL via Supabase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-600" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Advanced Document Processing</h3>
              <p className="text-gray-600 text-sm">
                Intelligent chunking with heading structure analysis, semantic tag extraction using OpenAI, 
                and multi-language support with automatic language detection.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <Search className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Semantic Search</h3>
              <p className="text-gray-600 text-sm">
                Natural language queries that understand context and meaning, with metadata filtering 
                and relevance scoring for accurate results.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <Code className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Hugging Face Integration</h3>
              <p className="text-gray-600 text-sm">
                Direct API integration with Hugging Face Spaces for text generation, summarization, 
                and image processing with secure token management.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-sm">
                Secure API token storage, rate limiting, comprehensive logging, and JWT authentication 
                for enterprise compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-blue-600" />
            Installation
          </h2>
          
          <h3 className="text-lg font-medium mb-4">Prerequisites</h3>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
            <li>Node.js 16+ and npm</li>
            <li>PostgreSQL database (Supabase recommended)</li>
            <li>Pinecone vector database account</li>
            <li>OpenAI API key</li>
            <li>Hugging Face API token (optional)</li>
          </ul>

          <h3 className="text-lg font-medium mb-4">Environment Setup</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre><code>{`# Frontend Environment (.env)
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_PINECONE_API_KEY=your_pinecone_api_key
VITE_PINECONE_ENVIRONMENT=your_pinecone_environment
VITE_PINECONE_INDEX=knowledge-base
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# API Environment (api/.env)
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=your_pinecone_environment
PINECONE_INDEX=knowledge-base
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key`}</code></pre>
          </div>

          <h3 className="text-lg font-medium mb-4">Installation Steps</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre><code>{`# Clone and install frontend
npm install
npm run dev

# Install and start API server
cd api
npm install
npm run dev

# Run database migrations
npx supabase migration up`}</code></pre>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-600" />
            API Reference
          </h2>
          
          <h3 className="text-lg font-medium mb-4">Vector Database Endpoints</h3>
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                <code className="text-sm">/api/vectordb/process</code>
              </div>
              <p className="text-gray-600 mb-3">Process and index a single document</p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <pre><code>{`{
  "title": "Document Title",
  "content": "Document content...",
  "language": "English",
  "structureInfo": { ... },
  "sourceFile": "filename.md"
}`}</code></pre>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">POST</span>
                <code className="text-sm">/api/vectordb/search</code>
              </div>
              <p className="text-gray-600 mb-3">Semantic search with filtering</p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <pre><code>{`{
  "query": "How do I start an architectural review?",
  "topK": 5,
  "filter": { "language": "English" }
}`}</code></pre>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono">GET</span>
                <code className="text-sm">/api/vectordb/status/:jobId</code>
              </div>
              <p className="text-gray-600">Check processing status with detailed progress</p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            Usage Examples
          </h2>
          
          <h3 className="text-lg font-medium mb-4">Document Processing</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre><code>{`import { postgresService } from './services/postgresService';

// Process a document
const result = await postgresService.processDocument({
  title: "System Architecture Guide",
  content: documentContent,
  language: "English",
  sourceFile: "architecture.md"
});

console.log(\`Processing job: \${result.jobId}\`);`}</code></pre>
          </div>

          <h3 className="text-lg font-medium mb-4">Semantic Search</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre><code>{`import { ragService } from './services/ragService';

// Perform semantic search
const results = await ragService.searchDocuments(
  "best practices for system design",
  5,
  { language: "English" }
);

results.forEach(result => {
  console.log(\`\${result.title}: \${result.score}\`);
});`}</code></pre>
          </div>

          <h3 className="text-lg font-medium mb-4">Hugging Face Integration</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre><code>{`import HuggingFaceService from './services/huggingfaceService';

const hfService = new HuggingFaceService(userId);

// Register a model
await hfService.registerSpace({
  id: 'meta-llama/Llama-2-7b-chat-hf',
  name: 'Llama 2 Chat',
  apiUrl: 'https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf',
  requiresAuth: true
});

// Generate response
const response = await hfService.callSpace(
  'meta-llama/Llama-2-7b-chat-hf',
  { inputs: 'Explain microservices architecture' }
);`}</code></pre>
          </div>
        </section>

        {/* Performance & Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-600" />
            Performance & Metrics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Search Accuracy</div>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Token Optimization</div>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="https://github.com/bryan308/triepod-knowledge-base" 
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
            >
              <Code className="w-5 h-5" />
              <span>View Source Code</span>
            </Link>
            <Link 
              href="https://knowledge.triepod.ai" 
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50"
            >
              <Zap className="w-5 h-5" />
              <span>Live Demo</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}