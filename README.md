# ![FeatherTable 🪶](logo.png) FeatherTable 🪶

A lightweight, dependency-free React table component designed for modern frontend applications.  
Built completely from scratch — no UI libraries, no CSS frameworks, no dependency bloat.

FeatherTable focuses on:

- ⚡ Zero dependencies  
- 🔍 Filtering (global + column-wise)  
- ↕ Sorting  
- 📄 Pagination  
- 📐 Column resizing  
- ↔ Column reordering  
- 🎨 Custom cell rendering  
- 📦 Tiny bundle size  
- 🧠 TypeScript-first API  
- 🚀 Virtualization (coming soon)

---

## 📦 Installation

```bash
npm install feather-table
# or
yarn add feather-table
```

### 🚀 Basic Usage

```
import FeatherTable from "feather-table";

const columns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
];

const data = [
  { name: "Abhi", age: 21 },
  { name: "John", age: 30 },
];

export default function App() {
  return <FeatherTable columns={columns} data={data} />;
}

```

### 🔧 Features

✅ Available

Sorting

Filtering

Pagination

Custom cell renderer

Column hide/show

Minimal CSS

TypeScript Support

🏗 Planned

Column resize

Column drag & drop

Virtualized rendering (10k+ rows)

Row selection

Row drag

Export CSV / PDF

Server-side mode

Advanced styling API

### 📁 Project Structure

```
feather-table/
│
├── src/
│   ├── core/
│   ├── components/
│   ├── utils/
│   ├── styles/
│
├── example/
├── tests/
├── dist/

```

### 🧑‍💻 Local Development

```
git clone https://github.com/<your-username>/feather-table.git
cd feather-table
npm install
npm run dev

```

### 🤝 Contributing

See the full guidelines in [CONTRIBUTING.md](CONTRIBUTING.md)

### 📜 License

FeatherTable is MIT licensed.
See [LICENSE](LICENSE)

### 👨‍💻 Maintainer

Built and maintained with ❤️ by Abhi (Abhij)
Full Stack Engineer

<div align="left"> <a href="https://github.com/abhijain1705" target="_blank"> <img src="https://github.com/abhijain1705.png" width="90" height="90" style="border-radius:50%;" /> </a> </div>

### 👉 GitHub: [@abhijain1705](https://github.com/abhijain1705)

If you found FeatherTable useful, please ⭐ the repo — it helps the project grow and reach more developers.
