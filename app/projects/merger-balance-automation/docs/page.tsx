'use client'

import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, FileText, Database, Brain, Zap } from 'lucide-react'

export default function MergerBalanceAutomationDocumentation() {
  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/projects/merger-balance-automation" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Merger Balance Sheet Automation Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to AI-powered financial data reconciliation for bank mergers
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5" />
            Table of Contents
          </h2>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-blue-600 hover:text-blue-800">Overview</a></li>
            <li><a href="#architecture" className="text-blue-600 hover:text-blue-800">System Architecture</a></li>
            <li><a href="#installation" className="text-blue-600 hover:text-blue-800">Installation</a></li>
            <li><a href="#usage" className="text-blue-600 hover:text-blue-800">Usage Guide</a></li>
            <li><a href="#versions" className="text-blue-600 hover:text-blue-800">Version Comparison</a></li>
            <li><a href="#configuration" className="text-blue-600 hover:text-blue-800">Configuration</a></li>
            <li><a href="#api" className="text-blue-600 hover:text-blue-800">API Reference</a></li>
          </ul>
        </nav>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Merger Balance Sheet Automation tool is a comprehensive solution designed to automate 
              the integration of CSV data into Excel balance sheets for financial mergers. It addresses 
              the complex challenge of data matching and reconciliation between different financial systems 
              during merger activities.
            </p>
            
            <h3>Key Problems Solved</h3>
            <ul>
              <li><strong>Inconsistent Naming Conventions:</strong> Different banks use varying account names and codes</li>
              <li><strong>Missing Data:</strong> Incomplete data sets requiring intelligent gap-filling</li>
              <li><strong>Manual Reconciliation:</strong> Time-consuming manual matching processes</li>
              <li><strong>Data Quality Issues:</strong> Inconsistent formatting and data structures</li>
            </ul>

            <h3>Business Impact</h3>
            <ul>
              <li>Reduces reconciliation time from weeks to hours</li>
              <li>Improves data accuracy from 37.5% to over 90%</li>
              <li>Eliminates manual errors in financial data matching</li>
              <li>Provides comprehensive audit trails for compliance</li>
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Database className="w-6 h-6" />
            System Architecture
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3>Core Components</h3>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Data Input Processing</h4>
                <p className="text-blue-800 text-sm">
                  Imports and validates CSV files from multiple source systems, 
                  normalizing data for further processing.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Vector Matching Engine</h4>
                <p className="text-green-800 text-sm">
                  AI-powered semantic matching using transformer models and 
                  vector embeddings for intelligent data reconciliation.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Balance Reconciliation</h4>
                <p className="text-purple-800 text-sm">
                  Compares mapped data with target systems, calculates variances, 
                  and generates reconciliation reports.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Audit &amp; Logging</h4>
                <p className="text-orange-800 text-sm">
                  Comprehensive logging with SQLite and PostgreSQL support 
                  for compliance and troubleshooting.
                </p>
              </div>
            </div>

            <h3>Data Flow</h3>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              CSV Files → Data Validation → Vector Embedding → Similarity Matching → Balance Reconciliation → Excel Output
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Installation
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3>Prerequisites</h3>
            <ul>
              <li>Python 3.8+ with pip</li>
              <li>Node.js 16+ with npm</li>
              <li>Excel 2016+ or LibreOffice Calc</li>
              <li>PostgreSQL (optional, for enhanced logging)</li>
            </ul>

            <h3>Quick Setup</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div># Clone the repository</div>
              <div>git clone https://github.com/bthompson-nd/balancing_act.git</div>
              <div>cd balancing_act</div>
              <br />
              <div># Install Python dependencies</div>
              <div>pip install -r requirements.txt</div>
              <br />
              <div># Install Node.js dependencies</div>
              <div>npm install</div>
              <br />
              <div># Test installation</div>
              <div>python merger-balance-vectorized.py --help</div>
            </div>

            <h3>GPU Acceleration (Optional)</h3>
            <p>
              For faster vector processing with large datasets, install CUDA-enabled FAISS:
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              pip install faiss-gpu
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section id="usage" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Usage Guide
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3>Basic Usage</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
              <div># Standard exact matching</div>
              <div>python merger-balance-automation.py --client ABC123</div>
              <br />
              <div># Enhanced with comprehensive logging</div>
              <div>python merger-balance-enhanced.py --client ABC123 --verbose</div>
              <br />
              <div># Vector-based AI matching (recommended)</div>
              <div>python merger-balance-vectorized.py --client ABC123 --similarity-threshold 0.7</div>
            </div>

            <h3>Directory Structure Setup</h3>
            <p>Organize your data files according to this structure:</p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <div>data/</div>
              <div>├── ABC123/           # Client code directory</div>
              <div>│   ├── deposits.csv</div>
              <div>│   ├── loans.csv</div>
              <div>│   └── accounts.csv</div>
              <div>└── Mapping/</div>
              <div>    └── balance_sheet_template.xlsx</div>
            </div>

            <h3>Advanced Configuration</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div># Custom similarity threshold</div>
              <div>python merger-balance-vectorized.py --client ABC123 --similarity-threshold 0.8</div>
              <br />
              <div># Custom embedding model</div>
              <div>python merger-balance-vectorized.py --client ABC123 --embedding-model sentence-transformers/all-mpnet-base-v2</div>
              <br />
              <div># Disable predictions for conservative matching</div>
              <div>python merger-balance-vectorized.py --client ABC123 --no-predictions</div>
            </div>
          </div>
        </section>

        {/* Version Comparison */}
        <section id="versions" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Version Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Feature</th>
                  <th className="border border-gray-300 p-3 text-left">Standard</th>
                  <th className="border border-gray-300 p-3 text-left">Enhanced</th>
                  <th className="border border-gray-300 p-3 text-left">Vector-Based</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Matching Algorithm</td>
                  <td className="border border-gray-300 p-3">Exact string matching</td>
                  <td className="border border-gray-300 p-3">Fuzzy matching</td>
                  <td className="border border-gray-300 p-3">AI semantic matching</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Data Fill Rate</td>
                  <td className="border border-gray-300 p-3">~40%</td>
                  <td className="border border-gray-300 p-3">~45%</td>
                  <td className="border border-gray-300 p-3">&gt;90%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Setup Complexity</td>
                  <td className="border border-gray-300 p-3">Low</td>
                  <td className="border border-gray-300 p-3">Medium</td>
                  <td className="border border-gray-300 p-3">High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Processing Speed</td>
                  <td className="border border-gray-300 p-3">Fast</td>
                  <td className="border border-gray-300 p-3">Medium</td>
                  <td className="border border-gray-300 p-3">Slower (first run)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Value Prediction</td>
                  <td className="border border-gray-300 p-3">❌</td>
                  <td className="border border-gray-300 p-3">❌</td>
                  <td className="border border-gray-300 p-3">✅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Enterprise Logging</td>
                  <td className="border border-gray-300 p-3">Basic</td>
                  <td className="border border-gray-300 p-3">✅</td>
                  <td className="border border-gray-300 p-3">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Configuration */}
        <section id="configuration" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Configuration
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3>Environment Variables</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div># PostgreSQL logging (Enhanced/Vector versions)</div>
              <div>export POSTGRES_HOST=localhost</div>
              <div>export POSTGRES_PORT=5432</div>
              <div>export POSTGRES_DBNAME=merger_logs</div>
              <div>export POSTGRES_USER=dbuser</div>
              <div>export POSTGRES_PASSWORD=dbpass</div>
            </div>

            <h3>Command Line Options</h3>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <div>
                <h4 className="font-semibold mb-2">Common Options</h4>
                <ul className="text-sm space-y-1">
                  <li><code>--client, -s</code>: Client code</li>
                  <li><code>--balance-sheet, -b</code>: Excel file path</li>
                  <li><code>--config, -c</code>: Config file</li>
                  <li><code>--verbose, -v</code>: Verbose logging</li>
                  <li><code>--output, -o</code>: Output path</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Vector-Specific Options</h4>
                <ul className="text-sm space-y-1">
                  <li><code>--similarity-threshold</code>: Match sensitivity (0.0-1.0)</li>
                  <li><code>--embedding-model</code>: AI model name</li>
                  <li><code>--no-predictions</code>: Disable value prediction</li>
                  <li><code>--cache-embeddings</code>: Cache for faster reruns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">API Reference</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Core Classes</h3>
            
            <h4>VectorBalanceIntegration</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <div>class VectorBalanceIntegration:</div>
              <div>    def __init__(self, config: dict)</div>
              <div>    def process_client_data(self, client_code: str) → dict</div>
              <div>    def find_similar_accounts(self, query: str, threshold: float) → list</div>
              <div>    def predict_missing_values(self, account_data: dict) → dict</div>
            </div>

            <h4>EmbeddingService</h4>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <div>class EmbeddingService:</div>
              <div>    def generate_embeddings(self, texts: list) → np.ndarray</div>
              <div>    def find_similar(self, query_embedding: np.ndarray, k: int) → list</div>
              <div>    def update_index(self, new_embeddings: np.ndarray)</div>
            </div>

            <h3>Configuration Schema</h3>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              {`{
  "embedding": {
    "model_name": "all-MiniLM-L6-v2",
    "similarity_threshold": 0.7,
    "cache_embeddings": true
  },
  "logging": {
    "level": "INFO",
    "database_url": "postgresql://..."
  }
}`}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 mt-12">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>© 2024 Bryan Thompson - Triepod.AI</p>
            <Link 
              href="/projects/merger-balance-automation" 
              className="flex items-center gap-2 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Project
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}