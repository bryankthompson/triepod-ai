'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, Send } from 'lucide-react'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    consultationType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            Your consultation request has been received. I&apos;ll respond within 24 hours with next steps 
            and available time slots for our discussion.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a Consultation</CardTitle>
        <CardDescription>
          Let&apos;s discuss your AI implementation needs. I&apos;ll respond within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="your.email@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company/Organization</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your company name (optional)"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="consultation-type">Consultation Interest</Label>
            <Select onValueChange={(value) => handleInputChange('consultationType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select primary area of interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-strategy">AI Strategy & Assessment</SelectItem>
                <SelectItem value="custom-development">Custom AI Development</SelectItem>
                <SelectItem value="integration">AI Integration & Implementation</SelectItem>
                <SelectItem value="accessibility">Accessibility-First AI Solutions</SelectItem>
                <SelectItem value="general">General AI Consultation</SelectItem>
                <SelectItem value="partnership">Strategic Partnership</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell me about your AI needs, current challenges, or questions you&apos;d like to discuss..."
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Request Consultation
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive a consultation response via email. 
            No spam, just professional AI consulting discussion.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}