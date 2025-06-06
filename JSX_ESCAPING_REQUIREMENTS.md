# CRITICAL: JSX HTML Entity Escaping Requirements

## ⚠️ MANDATORY: PREVENT ESLINT BUILD FAILURES ⚠️

**This document contains CRITICAL requirements that MUST be followed to prevent build failures in GitHub Actions and deployment pipelines.**

---

## The Problem

ESLint's `react/no-unescaped-entities` rule will FAIL the build if you use unescaped quotes or apostrophes in JSX. This is a COMMON cause of deployment failures.

## REQUIRED HTML Entity Escaping in JSX

### 1. QUOTES - Always Escape

**❌ WRONG - WILL FAIL BUILD:**
```jsx
<p>The user said "hello world" to the system</p>
<p>Click the "Save" button</p>
<h1>Building "Next-Gen" AI Systems</h1>
```

**✅ CORRECT - WILL PASS BUILD:**
```jsx
<p>The user said &ldquo;hello world&rdquo; to the system</p>
<p>Click the &ldquo;Save&rdquo; button</p>
<h1>Building &ldquo;Next-Gen&rdquo; AI Systems</h1>
```

### 2. APOSTROPHES - Always Escape

**❌ WRONG - WILL FAIL BUILD:**
```jsx
<p>It's important to understand</p>
<p>Don't forget to save</p>
<h1>Bryan's AI Portfolio</h1>
```

**✅ CORRECT - WILL PASS BUILD:**
```jsx
<p>It&rsquo;s important to understand</p>
<p>Don&rsquo;t forget to save</p>
<h1>Bryan&rsquo;s AI Portfolio</h1>
```

### 3. OTHER SPECIAL CHARACTERS

**Common HTML entities to use:**
- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`
- `"` → `&ldquo;` (left) or `&rdquo;` (right) or `&quot;` (generic)
- `'` → `&lsquo;` (left) or `&rsquo;` (right) or `&apos;` (generic)
- `—` → `&mdash;` (em dash)
- `–` → `&ndash;` (en dash)
- `…` → `&hellip;` (ellipsis)
- `©` → `&copy;` (copyright)
- `®` → `&reg;` (registered)
- `™` → `&trade;` (trademark)

## Quick Reference Table

| Character | HTML Entity | Usage |
|-----------|------------|-------|
| " (left) | `&ldquo;` | Opening quote |
| " (right) | `&rdquo;` | Closing quote |
| " (generic) | `&quot;` | Generic quote |
| ' (left) | `&lsquo;` | Opening apostrophe |
| ' (right) | `&rsquo;` | Closing apostrophe |
| ' (generic) | `&apos;` | Generic apostrophe |

## Real Examples from Build Failures

### Example 1: Blog Post Title
```jsx
// ❌ FAILED BUILD:
<h1>Building "Multi-Database" AI Systems</h1>

// ✅ FIXED:
<h1>Building &ldquo;Multi-Database&rdquo; AI Systems</h1>
```

### Example 2: Paragraph with Apostrophe
```jsx
// ❌ FAILED BUILD:
<p>Triepod.AI's approach doesn't require litigation</p>

// ✅ FIXED:
<p>Triepod.AI&rsquo;s approach doesn&rsquo;t require litigation</p>
```

### Example 3: Complex Sentence
```jsx
// ❌ FAILED BUILD:
<p>The "secret sauce" isn't just the AI—it's the methodology</p>

// ✅ FIXED:
<p>The &ldquo;secret sauce&rdquo; isn&rsquo;t just the AI—it&rsquo;s the methodology</p>
```

## Validation Before Committing

**ALWAYS run these commands before committing:**

```bash
# Check for ESLint errors
npm run lint

# Build the project to catch all errors
npm run build
```

## Common Patterns to Search and Replace

When reviewing code, search for these patterns:

1. `"` (straight quotes) → Replace with `&ldquo;` and `&rdquo;`
2. `'s ` (possessive) → Replace with `&rsquo;s `
3. `n't ` (contractions) → Replace with `n&rsquo;t `
4. `'ll ` (contractions) → Replace with `&rsquo;ll `
5. `'re ` (contractions) → Replace with `&rsquo;re `
6. `'ve ` (contractions) → Replace with `&rsquo;ve `
7. `'m ` (contractions) → Replace with `&rsquo;m `
8. `'d ` (contractions) → Replace with `&rsquo;d `

## VS Code Tips

1. Use Find & Replace (Ctrl+H / Cmd+H)
2. Enable regex mode
3. Search for: `(?<=[a-zA-Z])'(?=[a-zA-Z\s])`
4. Replace with: `&rsquo;`

## CRITICAL REMINDER

**Every unescaped quote or apostrophe = Build Failure = Deployment Blocked**

Make HTML entity escaping a HABIT. Check EVERY string in JSX for these characters.

---

## Quick Checklist for New Components

- [ ] All quotes escaped with `&ldquo;` and `&rdquo;`
- [ ] All apostrophes escaped with `&rsquo;` or `&apos;`
- [ ] Ran `npm run lint` with no errors
- [ ] Ran `npm run build` successfully
- [ ] Reviewed all JSX text content for special characters

---

**Remember: It's better to over-escape than to have a failed deployment!**
