'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Server, Code, Globe, Github } from 'lucide-react'

export default function BuildingMCPServerDirectories() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Building ToolNexusMCP: A Directory for Model Context Protocol Servers
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <time dateTime="2025-06-06">June 6, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            ToolNexusMCP.com represents a practical implementation of directory architecture 
            for the growing ecosystem of Model Context Protocol (MCP) servers. Built to serve 
            the AI development community, it catalogues and organizes 272 MCP servers from the 
            community-maintained awesome-mcp-servers list.
          </p>

          <h2>The Technical Foundation</h2>
          <p>
            The site is built with a modern React stack, leveraging TypeScript for type safety 
            and Vite for blazing-fast development builds. The architecture prioritizes performance 
            and maintainability:
          </p>

          <ul>
            <li><strong>React 18.3.1</strong> - Modern UI framework with concurrent features</li>
            <li><strong>TypeScript</strong> - Type-safe development and better IDE support</li>
            <li><strong>Vite</strong> - Lightning-fast build tool and dev server</li>
            <li><strong>Tailwind CSS</strong> - Utility-first styling for rapid UI development</li>
            <li><strong>Firebase Hosting</strong> - Global CDN for fast content delivery</li>
          </ul>

          <h2>Directory Architecture</h2>
          <p>
            The MCP servers are organized into two main categories: Reference Servers (official 
            implementations) and Community Servers (third-party contributions). Each server entry 
            includes:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-4">Server Metadata Structure</h3>
            <ul className="space-y-2">
              <li>• Name and description</li>
              <li>• GitHub repository URL</li>
              <li>• Online status tracking</li>
              <li>• License information</li>
              <li>• GitHub stars count</li>
              <li>• Author attribution</li>
              <li>• Category tags</li>
            </ul>
          </div>

          <h2>Real-World Implementation Details</h2>
          <p>
            The data pipeline processes the awesome-mcp-servers markdown list, extracting server 
            information and enriching it with GitHub metadata. The enhanced parsing script runs 
            periodically to keep the directory current with community contributions.
          </p>

          <p>
            Notable MCP servers in the directory include:
          </p>
          <ul>
            <li><strong>Brave Search</strong> - Web and local search integration</li>
            <li><strong>Filesystem</strong> - Secure file operations with access controls</li>
            <li><strong>Git</strong> - Repository manipulation tools</li>
            <li><strong>Memory</strong> - Knowledge graph implementations</li>
            <li><strong>Puppeteer</strong> - Browser automation capabilities</li>
          </ul>

          <h2>Performance Optimizations</h2>
          <p>
            The site implements several performance optimizations:
          </p>
          <ul>
            <li>Static generation of server data at build time</li>
            <li>Lazy loading for server detail pages</li>
            <li>Efficient search using pre-indexed data</li>
            <li>CDN distribution through Firebase Hosting</li>
          </ul>

          <h2>Future Enhancements</h2>
          <p>
            The roadmap includes features like server popularity tracking, user reviews, 
            integration testing status, and automated compatibility checking with different 
            MCP clients (Claude Desktop, WindSurf, Cline).
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-2">Visit ToolNexusMCP</h3>
            <p className="mb-4">
              Explore the directory and find MCP servers for your AI development needs.
            </p>
            <a 
              href="https://toolnexusmcp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Visit toolnexusmcp.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="border-t pt-8 mt-12">
            <p className="text-gray-600">
              <em>
                ToolNexusMCP demonstrates how modern web technologies can create valuable 
                resources for the AI development community. By focusing on practical implementation 
                over complex architectures, it serves its purpose effectively while remaining 
                maintainable and extensible.
              </em>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}