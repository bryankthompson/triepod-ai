'use client'

import Link from 'next/link'
import { ArrowLeft, Terminal, Code, Shield, Zap } from 'lucide-react'

export default function TriepodEncoderRingDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/triepod-encoder-ring" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Triepod Encoder Ring Documentation</h1>
          <p className="text-xl text-gray-600">
            Complete guide to using the cyberpunk email address generator
          </p>
        </header>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Triepod Encoder Ring generates unique cyberpunk-themed email addresses using 
              deterministic encoding algorithms. Each email address follows a structured pattern 
              that combines randomized components with encoded user input.
            </p>
            <p>
              The system uses SHA256 hashing to ensure reproducible results - the same input 
              will always generate the same email address, making it perfect for creating 
              consistent digital identities.
            </p>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Installation
          </h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <pre className="text-green-400">
              <code>{`# Install required dependencies
pip install colorama

# Clone the repository
git clone https://github.com/disler/triepod.ai_encoder_ring.git
cd triepod.ai_encoder_ring`}</code>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Usage</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Basic Command</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400">
                  <code>python triepod.ai_encoder_ring.py /path/to/repo email_part</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Example</h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-green-400">
                  <code>python triepod.ai_encoder_ring.py . gmail_catch_all</code>
                </pre>
              </div>
              <p className="text-gray-600">
                This would generate something like: <code className="bg-gray-100 px-2 py-1 rounded">abc-123456789-neon-g3ail_c47c4_a11@triepod.ai</code>
              </p>
            </div>
          </div>
        </section>

        {/* Email Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Email Address Structure
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <div className="font-mono text-lg mb-4">
              {`{botid}-{noid}-{vector}-{encoded_email_part}@triepod.ai`}
            </div>
            <div className="space-y-2 text-sm">
              <div><strong>botid:</strong> 3-letter random identifier (e.g., &ldquo;abc&rdquo;)</div>
              <div><strong>noid:</strong> 9-digit random number (e.g., &ldquo;123456789&rdquo;)</div>
              <div><strong>vector:</strong> Cyberpunk-themed word (sync, neon, matrix, cyber, tech, grid, pulse, byte, wire, node)</div>
              <div><strong>encoded_email_part:</strong> Your input transformed using leetspeak substitutions</div>
            </div>
          </div>
        </section>

        {/* Encoding Rules */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Encoding Rules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Character Substitutions</h3>
              <div className="space-y-2 font-mono">
                <div>a → 4</div>
                <div>e → 3</div>
                <div>i → 1</div>
                <div>o → 0</div>
                <div>s → 5</div>
                <div>t → 7</div>
                <div>l → 1</div>
                <div>m → 3</div>
                <div>h → 4</div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Encoding Logic</h3>
              <ul className="space-y-2">
                <li>• Substitutions are applied probabilistically based on the seed</li>
                <li>• Numbers and special characters remain unchanged</li>
                <li>• Case is preserved where substitution doesn&apos;t occur</li>
                <li>• @ symbols are not allowed in input</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Deterministic Generation</h3>
              <p className="text-gray-600">
                Same input always produces the same output using SHA256 hashing for seed generation.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Cyberpunk Aesthetic</h3>
              <p className="text-gray-600">
                Leetspeak-style substitutions and cyberpunk vector words create distinctive addresses.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Comprehensive Logging</h3>
              <p className="text-gray-600">
                All generation activities are logged with timestamps in the logs/ directory.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Cross-Platform</h3>
              <p className="text-gray-600">
                ANSI color support with Colorama works consistently across Windows, Mac, and Linux.
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 bg-red-50 p-4">
              <h4 className="font-semibold">Error: No repository path provided</h4>
              <p>Ensure you provide a repository path as the first argument.</p>
            </div>
            <div className="border-l-4 border-red-400 bg-red-50 p-4">
              <h4 className="font-semibold">Error: email_part contains &apos;@&apos;</h4>
              <p>The email part should not contain @ symbols. Use underscores or other characters instead.</p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
              <h4 className="font-semibold">Missing colorama dependency</h4>
              <p>Install colorama using: <code>pip install colorama</code></p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The encoder uses a two-stage seeding process:
            </p>
            <ol>
              <li><strong>Primary seed:</strong> Generated from SHA256 hash of the input email part</li>
              <li><strong>Encoding seed:</strong> Created by concatenating botid + noid + vector, then hashing</li>
            </ol>
            <p>
              This ensures that while the overall email structure is deterministic, the encoding 
              pattern varies based on the generated components, adding complexity while maintaining 
              reproducibility.
            </p>
          </div>
        </section>
      </div>
    </article>
  )
}