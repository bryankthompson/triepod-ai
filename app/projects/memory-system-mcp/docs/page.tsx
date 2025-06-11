'use client'

import Link from 'next/link'
import { ArrowLeft, Database, Search, Zap, Shield, Globe, Code } from 'lucide-react'

export default function MemorySystemMcpDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/memory-system-mcp" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Memory System MCP Server Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to setting up and using the Knowledge Graph Memory System for AI assistants.
          </p>
        </header>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Quick Start
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <pre className="text-sm text-gray-800 overflow-x-auto">
              <code>{`# Install dependencies
npm install

# Build the project
npm run build

# Start the MCP server
npm start

# Or use Docker
docker-compose up`}</code>
            </pre>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Architecture Overview
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The Memory System MCP Server implements a dual-backend architecture for maximum reliability:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>Primary Backend:</strong> Neo4j graph database for high-performance queries</li>
              <li><strong>Fallback Backend:</strong> File-based JSON storage for offline operation</li>
              <li><strong>Automatic Switching:</strong> Seamless failover with operation consistency tracking</li>
              <li><strong>MCP Compliance:</strong> Full Model Context Protocol implementation</li>
            </ul>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Configuration
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Environment Variables</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-800">
                  <code>{`# Neo4j Configuration
NEO4J_URI=neo4j://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=your_password

# Fallback Storage
MEMORY_FILE_PATH=./memory.json

# Optional: Custom logging level
LOG_LEVEL=info`}</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Docker Configuration</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-800">
                  <code>{`# Use docker-compose.override.yml for local development
services:
  memory-server:
    volumes:
      - /your/local/path:/app/dist
    environment:
      NEO4J_URI: neo4j://host.docker.internal:7687
      NEO4J_USER: neo4j
      NEO4J_PASSWORD: password`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Entity Management</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Create, read, update, delete entities</li>
                <li>• Type-based organization</li>
                <li>• Observation management</li>
                <li>• Duplicate prevention</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Relationship Mapping</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Directional relationships</li>
                <li>• Type-specific connections</li>
                <li>• Relationship validation</li>
                <li>• Cascading operations</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Search</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Content-based search</li>
                <li>• Bounded relationship discovery</li>
                <li>• Context-aware results</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Migration</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Dry-run capabilities</li>
                <li>• Conflict resolution</li>
                <li>• Comprehensive logging</li>
                <li>• Cross-reference tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            API Reference
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Operations</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900">create_entities</h4>
                  <p className="text-gray-600 text-sm">Create multiple entities with type and observations</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900">create_relations</h4>
                  <p className="text-gray-600 text-sm">Establish typed relationships between entities</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900">search_with_relationships</h4>
                  <p className="text-gray-600 text-sm">Advanced search with bounded relationship discovery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Capabilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Search className="w-6 h-6" />
            Search Capabilities
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The system provides two search modes optimized for different use cases:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Basic Search</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Use <code>search_nodes</code> for straightforward entity discovery without relationship limits.
                </p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Unlimited results</li>
                  <li>• Direct relationships only</li>
                  <li>• Fast execution</li>
                  <li>• Small to medium datasets</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Enhanced Search</h3>
                <p className="text-green-800 text-sm mb-3">
                  Use <code>search_with_relationships</code> for complex analysis with bounded results.
                </p>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Context-aware limiting</li>
                  <li>• Relationship explosion prevention</li>
                  <li>• Large dataset optimization</li>
                  <li>• Metadata transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Neo4j Connection Issues</h3>
              <p className="text-gray-700 text-sm mb-2">
                System automatically falls back to file storage if Neo4j is unavailable.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Check environment variables</li>
                <li>• Verify Neo4j service status</li>
                <li>• Review connection logs</li>
                <li>• Use <code>get_storage_status</code> for diagnostics</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Use <code>maxEntities</code> parameter for large datasets</li>
                <li>• Limit <code>maxRelationshipsPerEntity</code> for complex graphs</li>
                <li>• Enable fallback to simple search for reliability</li>
                <li>• Monitor backend consistency status</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Creating Knowledge</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Create entities
{
  "entities": [
    {
      "name": "Claude",
      "entityType": "AI Assistant",
      "observations": ["Helpful", "Knowledgeable", "Ethical"]
    }
  ]
}

// Create relationships
{
  "relations": [
    {
      "from": "Claude",
      "to": "Anthropic",
      "relationType": "developed_by"
    }
  ]
}`}</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Searching Knowledge</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Enhanced search with bounds
{
  "query": "AI assistant",
  "maxEntities": 10,
  "maxRelationshipsPerEntity": 5,
  "fallbackToSimple": true
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              For more information, visit the{' '}
              <Link href="https://github.com/triepod-ai/memory-system-mcp" className="text-blue-600 hover:underline">
                GitHub repository
              </Link>
            </p>
            <Link 
              href="/projects/memory-system-mcp" 
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              Back to Project
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}