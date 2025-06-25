
import React from 'react';
import { ResumeData, Template } from '@/types/resume';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  selectedTemplate: Template;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, selectedTemplate }) => {
  const TemplateComponent = selectedTemplate.component;

  const handlePrint = () => {
    // Create a new window for printing only the resume
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    // Create the HTML content with only the resume template
    const resumeElement = document.createElement('div');
    resumeElement.className = 'print-container';
    
    // Render the template component to get its HTML
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    
    // Use React to render the component into the temporary div
    import('react-dom/client').then(({ createRoot }) => {
      const root = createRoot(tempDiv);
      root.render(<TemplateComponent data={data} />);
      
      // Wait a bit for React to render
      setTimeout(() => {
        const resumeHTML = tempDiv.innerHTML;
        
        // Write the complete HTML document to the print window
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Resume - ${data.personalInfo.fullName}</title>
              <style>
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                
                body {
                  margin: 0;
                  padding: 0;
                  font-family: system-ui, -apple-system, sans-serif;
                }
                
                @media print {
                  body {
                    margin: 0 !important;
                    padding: 0 !important;
                  }
                  
                  .print-container {
                    width: 8.5in !important;
                    min-height: 11in !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    box-shadow: none !important;
                  }
                }
                
                /* Include all Tailwind CSS classes used in templates */
                ${getTailwindStyles()}
              </style>
            </head>
            <body>
              <div class="print-container">
                ${resumeHTML}
              </div>
            </body>
          </html>
        `);
        
        printWindow.document.close();
        
        // Clean up
        document.body.removeChild(tempDiv);
        
        // Trigger print
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }, 100);
    });
  };

  const handleFullPreview = () => {
    // Open resume in a new tab for full preview
    const previewWindow = window.open('', '_blank');
    if (!previewWindow) return;

    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    
    import('react-dom/client').then(({ createRoot }) => {
      const root = createRoot(tempDiv);
      root.render(<TemplateComponent data={data} />);
      
      setTimeout(() => {
        const resumeHTML = tempDiv.innerHTML;
        
        previewWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Resume Preview - ${data.personalInfo.fullName}</title>
              <style>
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                
                body {
                  margin: 20px;
                  font-family: system-ui, -apple-system, sans-serif;
                  background: #f5f5f5;
                  display: flex;
                  justify-content: center;
                  align-items: flex-start;
                  min-height: 100vh;
                }
                
                .preview-container {
                  background: white;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  margin: 20px;
                }
                
                ${getTailwindStyles()}
              </style>
            </head>
            <body>
              <div class="preview-container">
                ${resumeHTML}
              </div>
            </body>
          </html>
        `);
        
        previewWindow.document.close();
        document.body.removeChild(tempDiv);
      }, 100);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Preview</h3>
        <div className="flex space-x-2">
          <Button onClick={handlePrint} size="sm" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </Button>
          <Button onClick={handleFullPreview} size="sm" variant="outline" className="flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span>Full Preview</span>
          </Button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden bg-gray-100 p-4">
        <div className="transform scale-75 origin-top-left bg-white shadow-lg" style={{ width: '133.33%', height: '133.33%' }}>
          <TemplateComponent data={data} />
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <p>Template: <span className="font-medium">{selectedTemplate.name}</span></p>
        <p>{selectedTemplate.description}</p>
      </div>
    </div>
  );
};

// Helper function to generate essential Tailwind CSS styles
function getTailwindStyles() {
  return `
    .bg-white { background-color: white; }
    .bg-black { background-color: black; }
    .bg-gray-50 { background-color: #f9fafb; }
    .bg-gray-100 { background-color: #f3f4f6; }
    .bg-gray-200 { background-color: #e5e7eb; }
    .bg-gray-300 { background-color: #d1d5db; }
    .bg-gray-600 { background-color: #4b5563; }
    .bg-gray-700 { background-color: #374151; }
    .bg-gray-800 { background-color: #1f2937; }
    .bg-gray-900 { background-color: #111827; }
    .bg-blue-50 { background-color: #eff6ff; }
    .bg-blue-100 { background-color: #dbeafe; }
    .bg-blue-500 { background-color: #3b82f6; }
    .bg-blue-600 { background-color: #2563eb; }
    .bg-green-50 { background-color: #f0fdf4; }
    .bg-green-100 { background-color: #dcfce7; }
    .bg-green-400 { background-color: #4ade80; }
    .bg-green-500 { background-color: #22c55e; }
    .bg-red-500 { background-color: #ef4444; }
    .bg-yellow-500 { background-color: #eab308; }
    .bg-purple-500 { background-color: #a855f7; }
    .bg-pink-500 { background-color: #ec4899; }
    .bg-cyan-400 { background-color: #22d3ee; }
    .bg-cyan-500 { background-color: #06b6d4; }
    
    .text-black { color: black; }
    .text-white { color: white; }
    .text-gray-600 { color: #4b5563; }
    .text-gray-700 { color: #374151; }
    .text-gray-800 { color: #1f2937; }
    .text-blue-600 { color: #2563eb; }
    .text-green-400 { color: #4ade80; }
    .text-green-300 { color: #86efac; }
    .text-cyan-400 { color: #22d3ee; }
    .text-cyan-300 { color: #67e8f9; }
    .text-pink-400 { color: #f472b6; }
    .text-pink-300 { color: #f9a8d4; }
    .text-purple-400 { color: #c084fc; }
    .text-purple-300 { color: #d8b4fe; }
    .text-yellow-400 { color: #facc15; }
    .text-yellow-300 { color: #fde047; }
    
    .p-2 { padding: 0.5rem; }
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    .p-10 { padding: 2.5rem; }
    .p-12 { padding: 3rem; }
    .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
    .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
    .pt-4 { padding-top: 1rem; }
    .pb-4 { padding-bottom: 1rem; }
    .pl-4 { padding-left: 1rem; }
    
    .m-0 { margin: 0; }
    .mb-1 { margin-bottom: 0.25rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mr-2 { margin-right: 0.5rem; }
    .mr-3 { margin-right: 0.75rem; }
    .mt-2 { margin-top: 0.5rem; }
    .mt-4 { margin-top: 1rem; }
    .-mx-8 { margin-left: -2rem; margin-right: -2rem; }
    .-mt-8 { margin-top: -2rem; }
    
    .min-h-screen { min-height: 100vh; }
    .min-h-full { min-height: 100%; }
    .w-full { width: 100%; }
    .w-3 { width: 0.75rem; }
    .w-24 { width: 6rem; }
    .w-32 { width: 8rem; }
    .w-40 { width: 10rem; }
    .h-2 { height: 0.5rem; }
    .h-3 { height: 0.75rem; }
    .h-24 { height: 6rem; }
    .h-32 { height: 8rem; }
    .h-px { height: 1px; }
    .max-w-2xl { max-width: 42rem; }
    .max-w-3xl { max-width: 48rem; }
    
    .text-xs { font-size: 0.75rem; line-height: 1rem; }
    .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .text-base { font-size: 1rem; line-height: 1.5rem; }
    .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
    .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    .text-2xl { font-size: 1.5rem; line-height: 2rem; }
    .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
    .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
    .text-5xl { font-size: 3rem; line-height: 1; }
    
    .font-thin { font-weight: 100; }
    .font-light { font-weight: 300; }
    .font-normal { font-weight: 400; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .font-mono { font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace; }
    
    .italic { font-style: italic; }
    .uppercase { text-transform: uppercase; }
    .tracking-wide { letter-spacing: 0.025em; }
    .tracking-wider { letter-spacing: 0.05em; }
    .tracking-widest { letter-spacing: 0.1em; }
    .tracking-tight { letter-spacing: -0.025em; }
    
    .leading-relaxed { line-height: 1.625; }
    .leading-none { line-height: 1; }
    
    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .text-right { text-align: right; }
    
    .border { border-width: 1px; border-color: #e5e7eb; }
    .border-2 { border-width: 2px; }
    .border-4 { border-width: 4px; }
    .border-t-2 { border-top-width: 2px; }
    .border-t-4 { border-top-width: 4px; }
    .border-b { border-bottom-width: 1px; }
    .border-b-2 { border-bottom-width: 2px; }
    .border-b-4 { border-bottom-width: 4px; }
    .border-l-2 { border-left-width: 2px; }
    .border-l-4 { border-left-width: 4px; }
    .border-black { border-color: black; }
    .border-gray-300 { border-color: #d1d5db; }
    .border-green-400 { border-color: #4ade80; }
    .border-cyan-400 { border-color: #22d3ee; }
    .border-pink-400 { border-color: #f472b6; }
    .border-purple-400 { border-color: #c084fc; }
    .border-yellow-400 { border-color: #facc15; }
    .border-red-400 { border-color: #f87171; }
    .border-blue-400 { border-color: #60a5fa; }
    
    .rounded { border-radius: 0.25rem; }
    .rounded-lg { border-radius: 0.5rem; }
    .rounded-full { border-radius: 9999px; }
    
    .shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
    
    .flex { display: flex; }
    .grid { display: grid; }
    .hidden { display: none; }
    .block { display: block; }
    .inline-flex { display: inline-flex; }
    
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .grid-rows-16 { grid-template-rows: repeat(16, minmax(0, 1fr)); }
    
    .gap-2 { gap: 0.5rem; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .gap-12 { gap: 3rem; }
    
    .flex-1 { flex: 1 1 0%; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .items-start { align-items: flex-start; }
    .items-baseline { align-items: baseline; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.5rem; }
    .space-x-3 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.75rem; }
    .space-x-4 > :not([hidden]) ~ :not([hidden]) { margin-left: 1rem; }
    .space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.25rem; }
    .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
    .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem; }
    
    .absolute { position: absolute; }
    .relative { position: relative; }
    .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
    .top-10 { top: 2.5rem; }
    .left-10 { left: 2.5rem; }
    .right-10 { right: 2.5rem; }
    .bottom-10 { bottom: 2.5rem; }
    .top-1\\/2 { top: 50%; }
    .left-1\\/2 { left: 50%; }
    .z-10 { z-index: 10; }
    
    .transform { transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
    .-translate-x-1\\/2 { --tw-translate-x: -50%; }
    .-translate-y-1\\/2 { --tw-translate-y: -50%; }
    
    .blur-sm { filter: blur(4px); }
    .blur-lg { filter: blur(16px); }
    .blur-xl { filter: blur(24px); }
    
    .opacity-10 { opacity: 0.1; }
    .opacity-70 { opacity: 0.7; }
    
    .overflow-hidden { overflow: hidden; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    
    .last\\:border-b-0:last-child { border-bottom-width: 0; }
    
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
  `;
}
