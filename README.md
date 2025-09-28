# Document Management & Semantic Search Application

A Next.js application for uploading, managing, and performing semantic search on documents using AI.

## Features

- 📁 **Document Management**
  - Upload documents with drag-and-drop interface
  - View all uploaded documents
  - Delete documents with confirmation
  
- 🔍 **Semantic Search**
  - Natural language search across documents
  - AI-generated answers
  - Source attribution and tracking

- 👤 **User Management**
  - Automatic UUID generation
  - Persistent user sessions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query + Zustand
- **API Client**: Axios
- **UI Components**: Custom components with Headless UI patterns
- **File Upload**: React Dropzone
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- API endpoint configured

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd document-search-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Configure environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` and add your API endpoint:
\`\`\`
NEXT_PUBLIC_API_BASE_URL=https://your-api-endpoint.amazonaws.com/dev
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

\`\`\`
src/
├── app/           # Next.js app router pages
├── components/    # React components
├── lib/          # Utilities, hooks, and API
├── types/        # TypeScript type definitions
└── styles/       # Global styles and CSS modules
\`\`\`

## API Integration

The application integrates with the following API endpoints:

- `POST /document/upload/url` - Get signed URL for document upload
- `POST /document/list` - List user documents
- `DELETE /document/delete` - Delete a document
- `POST /document/semantic` - Perform semantic search

## Development

### Code Style

The project uses ESLint and Prettier for code formatting:

\`\`\`bash
npm run lint
npm run format
\`\`\`

### Testing

\`\`\`bash
npm run test
npm run test:watch
npm run test:coverage
\`\`\`

## Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Docker

\`\`\`dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details