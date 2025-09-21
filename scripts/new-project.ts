#!/usr/bin/env node

import inquirer from 'inquirer'
import slugify from 'slugify'
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

interface ProjectAnswers {
  title: string
  date: string
  roles: string
  stack: string
  summary: string
  impact: string
  cover: string
  links: string
  draft: boolean
}

async function createNewProject() {
  console.log('🚀 Creazione nuovo progetto\n')

  const answers: ProjectAnswers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Titolo del progetto:',
      validate: (input) => input.trim() !== '' || 'Il titolo è obbligatorio',
    },
    {
      type: 'input',
      name: 'date',
      message: 'Data (YYYY-MM-DD):',
      default: () => new Date().toISOString().split('T')[0],
      validate: (input) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        return dateRegex.test(input) || 'Formato data non valido (usa YYYY-MM-DD)'
      },
    },
    {
      type: 'input',
      name: 'roles',
      message: 'Ruoli (separati da virgola):',
      default: 'Frontend, Design',
    },
    {
      type: 'input',
      name: 'stack',
      message: 'Stack tecnologico (separato da virgola):',
      default: 'Next.js, Tailwind',
    },
    {
      type: 'input',
      name: 'summary',
      message: 'Riassunto breve:',
    },
    {
      type: 'input',
      name: 'impact',
      message: 'Impatti/risultati (separati da virgola):',
    },
    {
      type: 'input',
      name: 'cover',
      message: 'Path immagine cover (opzionale):',
    },
    {
      type: 'input',
      name: 'links',
      message: 'Links JSON (es: {"live": "url", "repo": "url"}):',
      default: '{}',
    },
    {
      type: 'confirm',
      name: 'draft',
      message: 'Salvare come bozza?',
      default: true,
    },
  ])

  // Generate slug
  const slug = slugify(answers.title, { lower: true, strict: true })
  
  // Prepare data
  const roles = answers.roles.split(',').map(r => r.trim()).filter(Boolean)
  const stack = answers.stack.split(',').map(s => s.trim()).filter(Boolean)
  const impact = answers.impact.split(',').map(i => i.trim()).filter(Boolean)
  
  let links = {}
  try {
    links = JSON.parse(answers.links)
  } catch {
    console.warn('⚠️  Links JSON non valido, usando oggetto vuoto')
  }

  // Create MDX content
  const mdxContent = `---
title: "${answers.title}"
date: "${answers.date}"
roles: [${roles.map(r => `"${r}"`).join(', ')}]
stack: [${stack.map(s => `"${s}"`).join(', ')}]
summary: "${answers.summary}"
impact: [${impact.map(i => `"${i}"`).join(', ')}]
${answers.cover ? `cover: "${answers.cover}"` : ''}
links: ${JSON.stringify(links)}
draft: ${answers.draft}
---

import { Badge } from '@/components/ui/badge'
import Kpi from '@/components/kpi'

## Intro

Descrivi il progetto, il contesto e gli obiettivi principali.

## Risultati

Mostra i risultati ottenuti con metriche concrete:

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
  <Kpi label="Metrica 1" value="Valore" />
  <Kpi label="Metrica 2" value="Valore" />
</div>

## Processo

### Discovery
- Punto 1
- Punto 2

### Design
- Processo di design
- Decisioni prese

<div className="flex gap-2 mt-4">
  <Badge>Tool 1</Badge>
  <Badge>Tool 2</Badge>
</div>

### Sviluppo
- Implementazione tecnica
- Sfide risolte
- Risultati finali
`

  // Create directory and file
  const projectDir = join(process.cwd(), 'content', 'projects', slug)
  mkdirSync(projectDir, { recursive: true })
  
  const filePath = join(projectDir, 'index.mdx')
  writeFileSync(filePath, mdxContent)

  console.log(`\\n✅ Progetto creato con successo!`)
  console.log(`📁 Directory: ${projectDir}`)
  console.log(`📄 File: ${filePath}`)
  console.log(`🔗 Slug: ${slug}`)
  console.log(`\\n💡 Prossimi passi:`)
  console.log(`1. Aggiungi immagini in /public/projects/${slug}/`)
  console.log(`2. Modifica il contenuto MDX`)
  console.log(`3. Imposta draft: false quando pronto per la pubblicazione`)
}

createNewProject().catch(console.error)