'use client'

import Link from 'next/link'
import { ArrowLeft, Terminal, Download, Play, Settings, Users, Shield, Database } from 'lucide-react'

export default function CyberpunkChatDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/cyberpunk-chat" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Cyberpunk Chat Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete guide to the Max Headroom-inspired terminal chat interface
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Play className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Quick Start</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Python 3.8 or higher</li>
              <li>OpenAI API key (optional - works offline without it)</li>
              <li>OpenAI Assistant ID (optional)</li>
            </ul>
          </div>

          <div className="bg-black rounded-lg p-6 text-green-400 font-mono text-sm">
            <div className="mb-2"># Clone and install</div>
            <div>git clone https://github.com/triepod-ai/cyberpunk-chat.git</div>
            <div>cd cyberpunk-chat</div>
            <div>pip install -e .</div>
            <div className="mt-4 mb-2"># Set environment variables</div>
            <div>export OPENAI_API_KEY=&quot;your-api-key&quot;</div>
            <div>export OPENAI_ASSISTANT_ID=&quot;your-assistant-id&quot;</div>
            <div className="mt-4 mb-2"># Run the application</div>
            <div>cyberpunk-chat</div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Download className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Installation</h2>
          </div>

          <h3 className="text-xl font-semibold mb-4">From Source</h3>
          <div className="bg-black rounded-lg p-6 text-green-400 font-mono text-sm mb-6">
            <div>git clone https://github.com/triepod-ai/cyberpunk-chat.git</div>
            <div>cd cyberpunk-chat</div>
            <div>pip install -e .</div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Environment Setup</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Linux/Mac</h4>
              <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                <div>export OPENAI_API_KEY=&quot;your-key&quot;</div>
                <div>export OPENAI_ASSISTANT_ID=&quot;your-id&quot;</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Windows</h4>
              <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-sm">
                <div>set OPENAI_API_KEY=your-key</div>
                <div>set OPENAI_ASSISTANT_ID=your-id</div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Usage</h2>
          </div>

          <h3 className="text-xl font-semibold mb-4">Command Line Options</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="space-y-3">
              <div><code className="bg-gray-200 px-2 py-1 rounded">--api-key</code> - Your OpenAI API key</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">--assistant-id</code> - Your OpenAI Assistant ID</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">--width</code> - Console width in characters (default: 80)</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">--glitch-level</code> - Glitch effect level, 0-3 (default: 2)</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">In-Application Commands</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div><code className="bg-gray-200 px-2 py-1 rounded">help</code> - Show help message</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">new [name]</code> - Create new thread</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">threads</code> - List all threads</div>
            </div>
            <div className="space-y-3">
              <div><code className="bg-gray-200 px-2 py-1 rounded">switch &lt;id&gt;</code> - Switch threads</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">clear</code> - Clear screen</div>
              <div><code className="bg-gray-200 px-2 py-1 rounded">exit/quit</code> - Exit application</div>
            </div>
          </div>
        </section>

        {/* Thread Management */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Thread Management</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Cyberpunk Chat uses a sophisticated thread management system that allows you to maintain multiple conversation contexts simultaneously.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Creating Threads</h3>
              <p className="text-sm text-gray-700 mb-3">Create named conversation threads for different topics or contexts.</p>
              <div className="bg-white rounded p-3 font-mono text-sm">
                new Project Discussion<br/>
                new Debug Session
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Switching Threads</h3>
              <p className="text-sm text-gray-700 mb-3">Switch between threads using partial ID matching.</p>
              <div className="bg-white rounded p-3 font-mono text-sm">
                switch proj<br/>
                switch debug
              </div>
            </div>
          </div>
        </section>

        {/* Offline Mode */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Offline Mode & Resilience</h2>
          </div>

          <p className="text-gray-700 mb-6">
            The application automatically falls back to offline mode when the OpenAI API is unavailable, ensuring uninterrupted workflow.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <h3 className="font-semibold mb-2">Circuit Breaker Pattern</h3>
            <p className="text-sm text-gray-700">
              Intelligent failure handling prevents cascading API failures and enables graceful degradation.
              The system automatically recovers when connectivity is restored.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4">Offline Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Continue creating and switching between threads</li>
            <li>Messages are stored locally and synchronized when online</li>
            <li>Placeholder responses maintain conversation flow</li>
            <li>Seamless transition back to online mode</li>
          </ul>
        </section>

        {/* Persistence */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Data Persistence</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Dual-backend persistence ensures your conversation history is never lost, with automatic failover between storage methods.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Primary Backend: SQLite</h3>
              <p className="text-sm text-gray-700">
                Robust SQL database for reliable storage and complex queries.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Backup Backend: JSON</h3>
              <p className="text-sm text-gray-700">
                Human-readable fallback storage for maximum compatibility.
              </p>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold">Configuration</h2>
          </div>

          <h3 className="text-xl font-semibold mb-4">Glitch Effects</h3>
          <p className="text-gray-700 mb-4">
            Customize the cyberpunk aesthetic with configurable glitch effects:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="font-mono text-2xl mb-2">0</div>
              <div className="text-sm">None</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="font-mono text-2xl mb-2">1</div>
              <div className="text-sm">Minimal</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="font-mono text-2xl mb-2">2</div>
              <div className="text-sm">Default</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="font-mono text-2xl mb-2">3</div>
              <div className="text-sm">Maximum</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Custom Usage Examples</h3>
          <div className="bg-black rounded-lg p-6 text-green-400 font-mono text-sm">
            <div># Minimal setup for productivity</div>
            <div>cyberpunk-chat --glitch-level 0 --width 120</div>
            <div className="mt-2"># Full cyberpunk experience</div>
            <div>cyberpunk-chat --glitch-level 3 --width 80</div>
            <div className="mt-2"># Direct API configuration</div>
            <div>cyberpunk-chat --api-key sk-xxx --assistant-id asst-xxx</div>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Architecture</h2>
          
          <p className="text-gray-700 mb-6">
            Built with modular architecture and proven design patterns from enterprise systems.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">UI Layer</h3>
              <p className="text-sm text-gray-700">Rich terminal interface with cyberpunk styling</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Business Logic</h3>
              <p className="text-sm text-gray-700">Thread management and conversation orchestration</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Data Layer</h3>
              <p className="text-sm text-gray-700">Dual-backend persistence with automatic failover</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t pt-8 mt-12">
          <p className="text-gray-600 text-center">
            Built with passion for cyberpunk aesthetics and enterprise-grade reliability.
          </p>
        </div>
      </div>
    </article>
  )
}