# 🐍 snakejs

**Pythonic data structures for JavaScript developers**  
A TypeScript-based utility library inspired by Python's standard collections — like `defaultdict`, `deque`, and more.

> Bring the comfort of Python’s built-ins to your JavaScript/TypeScript projects.

<!-- --- -->

<!-- ## 📦 Installation

```bash
npm install snakejs
```

or with yarn:

```bash
yarn add snakejs
``` -->

---

## ✨ Features

- ✅ `DefaultDict` – auto-initializing dictionary (like `collections.defaultdict`)
- 🔄 `Deque` – double-ended queue (coming soon)
- ⛑ TypeScript support with intelligent type inference
- 🧠 Python-inspired, JavaScript-native

---

## 🚀 Usage

### `DefaultDict`

```ts
import { DefaultDict } from "snakejs";

const counter = new DefaultDict("int");

counter["a"] += 1;
counter["b"] += 5;

console.log(counter["a"]); // 1
console.log(counter["b"]); // 5
console.log(counter["c"]); // 0 (auto-initialized)
```

Supported default types:

- `"int"` → `0`
- `"str"` → `""`
- `"bool"` → `false`
- `"list"` → `[]`
- `"dict"` → `{}`
- `"set"` → `new Set()`

---

<!-- ## 🧪 Tests

```bash
npm run test
```

Uses [Vitest](https://vitest.dev/) for unit testing.

--- -->

## 📁 Project Structure

```
snakejs/
├── src/
│   ├── datastructures/
│   │   ├── defaultdict.ts
│   │   └── deque.ts (WIP)
│   └── index.ts
├── test/
│   ├── defaultdict.test.ts
│   └── ...
```

<!-- --- -->

<!-- ## 📜 License

MIT © 2025 [Your Name or GitHub Handle] -->

---

## 🌱 Contributing

Pull requests are welcome! If you have ideas for other Pythonic structures (e.g. `Counter`, `OrderedDict`, `namedtuple`), feel free to open an issue or PR.
