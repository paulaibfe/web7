"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  content: string
  sender: "user" | "bot"
}

interface ChatInterfaceProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatInterface({ isOpen, onClose }: ChatInterfaceProps) {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      content: t("chatWelcome"),
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Update welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        content: t("chatWelcome"),
        sender: "bot",
      },
    ])
  }, [t])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    setMessages((prev) => [...prev, { content: inputValue, sender: "user" }])

    // Simulate bot response (in a real implementation, this would call an API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content:
            "Gracias por tu mensaje. Este es un chat simulado para demostración. En una implementación real, Paula respondería a tus preguntas sobre sus proyectos y experiencia.",
          sender: "bot",
        },
      ])
    }, 1000)

    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-2xl h-[80vh] bg-card border border-primary/30 rounded-md flex flex-col overflow-hidden">
        {/* Chat header */}
        <div className="p-4 border-b border-border flex justify-between items-center bg-card">
          <h3 className="text-lg font-bold text-primary">{t("chatTitle")}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-white">
            <X size={20} />
          </Button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-md ${
                  message.sender === "user" ? "bg-primary/20 text-white" : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("typeMessage")}
              className="flex-1 bg-background border-border"
            />
            <Button onClick={handleSendMessage} className="bg-primary text-primary-foreground">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
