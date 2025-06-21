/**
 * LLM API Integrations for Content Generation
 * Supports multiple LLM providers for automated content creation
 */

class LLMIntegration {
    constructor(provider = 'openai', apiKey = null) {
        this.provider = provider;
        this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;
        
        if (!this.apiKey) {
            console.warn('No API key found. Set ANTHROPIC_API_KEY or OPENAI_API_KEY environment variable.');
        }
    }

    /**
     * Generate content using the configured LLM
     */
    async generateContent(prompt, options = {}) {
        const {
            maxTokens = 2000,
            temperature = 0.7,
            model = null
        } = options;

        try {
            switch (this.provider) {
                case 'anthropic':
                    return await this.callAnthropic(prompt, { maxTokens, temperature, model });
                case 'openai':
                    return await this.callOpenAI(prompt, { maxTokens, temperature, model });
                case 'local':
                    return await this.callLocalLLM(prompt, options);
                default:
                    throw new Error(`Unsupported provider: ${this.provider}`);
            }
        } catch (error) {
            console.error(`LLM generation error (${this.provider}):`, error.message);
            throw error;
        }
    }

    /**
     * Call Anthropic Claude API
     */
    async callAnthropic(prompt, options) {
        if (!this.apiKey) {
            throw new Error('Anthropic API key required');
        }

        const { maxTokens, temperature, model = 'claude-3-sonnet-20240229' } = options;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: model,
                max_tokens: maxTokens,
                temperature: temperature,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Anthropic API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return {
            content: data.content[0].text,
            provider: 'anthropic',
            model: model,
            usage: data.usage
        };
    }

    /**
     * Call OpenAI API
     */
    async callOpenAI(prompt, options) {
        if (!this.apiKey) {
            throw new Error('OpenAI API key required');
        }

        const { maxTokens, temperature, model = 'gpt-4' } = options;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: maxTokens,
                temperature: temperature
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return {
            content: data.choices[0].message.content,
            provider: 'openai',
            model: model,
            usage: data.usage
        };
    }

    /**
     * Call local LLM (e.g., Ollama)
     */
    async callLocalLLM(prompt, options) {
        const { model = 'llama2', endpoint = 'http://localhost:11434' } = options;

        try {
            const response = await fetch(`${endpoint}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: model,
                    prompt: prompt,
                    stream: false
                })
            });

            if (!response.ok) {
                throw new Error(`Local LLM error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return {
                content: data.response,
                provider: 'local',
                model: model,
                usage: { tokens: data.response.length }
            };
        } catch (error) {
            // Fallback to mock response for development
            console.warn('Local LLM not available, using mock response');
            return {
                content: this.generateMockContent(prompt),
                provider: 'mock',
                model: 'mock',
                usage: { tokens: 0 }
            };
        }
    }

    /**
     * Generate mock content for development/testing
     */
    generateMockContent(prompt) {
        const topics = this.extractTopics(prompt);
        
        return `
# Tech Content Summary

## Executive Summary
This analysis covers ${topics.join(', ')} with focus on automation and technology applications. The research demonstrates significant opportunities for technology integration and process optimization.

## Key Insights
- **Automation Potential**: Multiple opportunities identified for process automation
- **Technology Integration**: Strong case for AI/ML implementation
- **Market Opportunity**: Growing demand for technology solutions
- **Implementation Feasibility**: Technical and economic viability confirmed

## Technology Applications
1. **Process Automation**: Streamline operational workflows
2. **Data Analytics**: Leverage data for decision-making
3. **Quality Monitoring**: Automated quality assurance systems
4. **Predictive Maintenance**: Reduce downtime through prediction

## Industry Implications
The research indicates significant potential for technology adoption across the industry, with particular emphasis on automation and efficiency improvements.

## Next Steps
1. Evaluate specific implementation opportunities
2. Develop pilot program proposals
3. Identify key stakeholders and partners
4. Create detailed technical specifications

*This content was generated automatically from research sources.*
`;
    }

    /**
     * Extract topics from prompt for mock content
     */
    extractTopics(prompt) {
        const commonTopics = ['AI', 'automation', 'technology', 'agriculture', 'research', 'innovation'];
        const topics = [];
        
        for (const topic of commonTopics) {
            if (prompt.toLowerCase().includes(topic.toLowerCase())) {
                topics.push(topic);
            }
        }
        
        return topics.length > 0 ? topics : ['technology'];
    }

    /**
     * Test LLM connectivity
     */
    async testConnection() {
        const testPrompt = "Hello! Please respond with 'Connection successful' to confirm the API is working.";
        
        try {
            const response = await this.generateContent(testPrompt, { maxTokens: 50 });
            return {
                success: true,
                provider: this.provider,
                response: response.content.substring(0, 100)
            };
        } catch (error) {
            return {
                success: false,
                provider: this.provider,
                error: error.message
            };
        }
    }
}

module.exports = LLMIntegration;