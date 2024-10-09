# Flemish Translator

A simple web application that translates text into Flemish (Belgian Dutch) using AI-powered language translation.

![alt text](<CleanShot 2024-10-09 at 16.16.23.png>)

## Features

- User-friendly interface for entering text to translate
- Real-time translation from any language to Flemish
- Responsive design for desktop and mobile use

## Technologies Used

- [Remix](https://remix.run/): A full stack web framework
- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
- [LangChain](https://js.langchain.com/): A framework for developing applications powered by language models
- [OpenAI](https://openai.com/): Provides the GPT-4 model for high-quality translations

## Getting Started

### Prerequisites

- Node.js (version 20.0.0 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/flemish-translator.git
   cd flemish-translator
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Enter the text you want to translate in the provided textarea.
2. Click the "Translate to Flemish" button.
3. The translated text will appear below the input area.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Remix team for the excellent web framework
- OpenAI for providing the powerful GPT-4 model
- LangChain for simplifying the integration of language models
