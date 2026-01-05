"use client"

import React from "react"
import { useState } from "react"
import { Moon, Sun, Download, Mail, Linkedin, Github, ExternalLink, Award } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    },
    { category: "Tools", items: ["Git", "VS Code", "Vercel", "npm/yarn", "Chrome DevTools"] },
  ]

  const certifications = [
    { name: "Advanced React Patterns", issuer: "Frontend Masters", year: "2024" },
    { name: "UX Design Professional", issuer: "Google", year: "2023" },
    { name: "TypeScript Deep Dive", issuer: "Udemy", year: "2023" },
  ]

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields")
      return
    }
    console.log("Form submitted:", formData)
    alert("Thanks for reaching out! This is a demo form.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleDownloadResume = () => {
    alert("Resume download would trigger here. Connect this to your actual resume file.")
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 transition-colors duration-300'>
        {/* Navigation */}
        <nav className='fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800'>
          <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              YourName
            </h1>
            <div className='flex items-center gap-6'>
              <a
                href='#about'
                className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
                About
              </a>
              <a
                href='#skills'
                className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
                Skills
              </a>
              <a
                href='#projects'
                className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
                Projects
              </a>
              <a
                href='#contact'
                className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'>
                {darkMode ? (
                  <Sun className='w-5 h-5 text-yellow-400' />
                ) : (
                  <Moon className='w-5 h-5 text-gray-700' />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className='pt-32 pb-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
              <div className='flex-1'>
                <h2 className='text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent'>
                  Frontend Engineer & UI/UX Designer
                </h2>
                <p className='text-xl text-gray-700 dark:text-gray-300 mb-8'>
                  Crafting beautiful, intuitive digital experiences that users love. Specialized in
                  React, Next.js, and modern frontend technologies.
                </p>
                <div className='flex gap-4'>
                  <button
                    onClick={handleDownloadResume}
                    className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow'>
                    <Download className='w-5 h-5' />
                    Download Resume
                  </button>
                  <a
                    href='#contact'
                    className='px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors'>
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className='w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full'></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-20 px-6 bg-white dark:bg-gray-800'>
          <div className='max-w-6xl mx-auto'>
            <h3 className='text-4xl font-bold mb-8 text-gray-900 dark:text-white'>About Me</h3>
            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <p className='text-lg text-gray-700 dark:text-gray-300 mb-4'>
                  I'm a passionate frontend engineer and UI/UX designer who believes that great
                  design and clean code go hand in hand. With a keen eye for detail and a love for
                  creating seamless user experiences, I bridge the gap between design and
                  development.
                </p>
                <p className='text-lg text-gray-700 dark:text-gray-300'>
                  My approach combines modern frontend technologies with user-centered design
                  principles to build products that are not only functional but delightful to use.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg'>
                  <h4 className='font-bold text-xl mb-2 text-gray-900 dark:text-white'>
                    Frontend Development
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Building responsive, performant web applications with modern frameworks and best
                    practices.
                  </p>
                </div>
                <div className='p-6 bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-lg'>
                  <h4 className='font-bold text-xl mb-2 text-gray-900 dark:text-white'>
                    UI/UX Design
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Designing intuitive interfaces through research, prototyping, and iterative user
                    testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <h3 className='text-4xl font-bold mb-12 text-gray-900 dark:text-white'>
              Skills & Technologies
            </h3>
            <div className='grid md:grid-cols-3 gap-8'>
              {skills.map((skillGroup, idx) => (
                <div key={idx} className='p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg'>
                  <h4 className='text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400'>
                    {skillGroup.category}
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-gray-800 dark:text-gray-200 rounded-full text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='py-20 px-6 bg-white dark:bg-gray-800'>
          <div className='max-w-6xl mx-auto'>
            <h3 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>Projects</h3>
            <p className='text-gray-600 dark:text-gray-400 mb-12'>
              This section is currently being designed. Check back soon for project showcases!
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className='p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl'>
                  <div className='w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-lg mb-4'></div>
                  <h4 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                    Project Title {i}
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    Project description will go here. Add your case studies and work samples.
                  </p>
                  <button className='flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline'>
                    View Project <ExternalLink className='w-4 h-4' />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>
            <h3 className='text-4xl font-bold mb-12 text-gray-900 dark:text-white'>
              Certifications
            </h3>
            <div className='grid md:grid-cols-3 gap-6'>
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className='p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-purple-600'>
                  <Award className='w-10 h-10 text-purple-600 dark:text-purple-400 mb-4' />
                  <h4 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                    {cert.name}
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>{cert.issuer}</p>
                  <p className='text-sm text-gray-500 dark:text-gray-500 mt-2'>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='py-20 px-6 bg-white dark:bg-gray-800'>
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center'>
              Get In Touch
            </h3>
            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h4 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                  Let's Connect
                </h4>
                <p className='text-gray-700 dark:text-gray-300 mb-6'>
                  I'm always interested in hearing about new projects and opportunities. Whether you
                  have a question or just want to say hi, feel free to reach out!
                </p>
                <div className='flex gap-4'>
                  <a
                    href='https://github.com'
                    className='p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
                    <Github className='w-6 h-6 text-gray-700 dark:text-gray-300' />
                  </a>
                  <a
                    href='https://linkedin.com'
                    className='p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
                    <Linkedin className='w-6 h-6 text-gray-700 dark:text-gray-300' />
                  </a>
                  <a
                    href='mailto:your.email@example.com'
                    className='p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
                    <Mail className='w-6 h-6 text-gray-700 dark:text-gray-300' />
                  </a>
                </div>
              </div>
              <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white'
                />
                <textarea
                  placeholder='Your Message'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className='w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white'
                />
                <button
                  onClick={handleSubmit}
                  className='w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow font-semibold'>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='py-8 px-6 border-t border-gray-200 dark:border-gray-800'>
          <div className='max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400'>
            <p>© 2025 Your Name. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
