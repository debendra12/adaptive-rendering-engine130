Decision Algorithm

The Adaptive Rendering Engine uses rule-based decision making.

Inputs

- Device Performance
- Network Speed
- Cache Status
- Content Volatility
- Request Type

Example Rules

Rule H1

If:

- Content rarely changes
- Cache available

Select:

SSG

---

Rule H2

If:

- Content updates frequently

Select:

SSR

---

Rule H3

If:

- Large dynamic content
- Slow network

Select:

Streaming SSR

---

Rule H4

If:

- Content moderately dynamic

Select:

ISR

Output

Best rendering strategy for the current request.