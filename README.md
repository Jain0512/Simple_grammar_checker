# Simple Grammar Checker Chrome Extension

## 📌 Overview

Simple Grammar Checker is a Chrome Extension built using Manifest V3.  
It detects grammar and spelling mistakes in text input fields and text areas across websites and provides correction suggestions.

The extension uses the free public LanguageTool API to analyze text and display suggestions.

This project was built as part of an assignment to demonstrate Chrome extension development fundamentals.

---

## 🚀 Features

- Works on input fields and textareas
- Detects grammar and spelling mistakes
- Displays suggested corrections
- Lightweight and simple UI
- Built using Chrome Extension Manifest V3
- No API keys or secrets required

---

## 🛠️ Technologies Used

- JavaScript
- HTML
- CSS
- Chrome Extension (Manifest V3)
- LanguageTool Public API

---

## ⚙️ How It Works

1. The extension injects a content script into webpages.
2. It listens for user input in text fields.
3. When the user clicks outside the text field (blur event), the text is sent to the LanguageTool API.
4. The API returns grammar and spelling issues.
5. The extension displays detected issues along with suggested corrections.

---

## 🧪 Example

If the user types:
She go to market.
The extension will detect the grammatical error and suggest:
go → goes


---

## 📥 Installation Guide

To install this extension locally:

1. Clone or download this repository.
2. Open Google Chrome.
3. Go to:chrome://extensions
4. 4. Enable **Developer Mode** (top right corner).
5. Click **Load Unpacked**.
6. Select the project folder.
7. The extension will now be installed.

