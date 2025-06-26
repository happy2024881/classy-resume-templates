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
      root.render(React.createElement(TemplateComponent, { data }));
      
      // Wait a bit for React to render and images to load
      setTimeout(() => {
        let resumeHTML = tempDiv.innerHTML;
        
        // Handle image data URLs - ensure they're properly embedded
        if (data.personalInfo.photo) {
          // If it's a file object, convert to data URL
          if (data.personalInfo.photo instanceof File) {
            const reader = new FileReader();
            reader.onload = function(e) {
              const imageDataUrl = e.target?.result as string;
              resumeHTML = resumeHTML.replace(
                /src="[^"]*"/g, 
                (match) => match.includes('data:') ? match : `src="${imageDataUrl}"`
              );
              writeToWindow();
            };
            reader.readAsDataURL(data.personalInfo.photo);
            return;
          } else {
            // Replace any relative image sources with the actual data
            resumeHTML = resumeHTML.replace(
              new RegExp(`src="${data.personalInfo.photo}"`, 'g'),
              `src="${data.personalInfo.photo}"`
            );
          }
        }
        
        writeToWindow();
        
        function writeToWindow() {
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
                  
                  img {
                    max-width: 100% !important;
                    height: auto !important;
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
          
          // Wait for images to load before printing
          const images = printWindow.document.querySelectorAll('img');
          const imagePromises = Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve; // Resolve even on error to prevent hanging
              // Set a timeout to prevent hanging on slow images
              setTimeout(resolve, 3000);
            });
          });
          
          Promise.all(imagePromises).then(() => {
            // Trigger print after images are loaded
            setTimeout(() => {
              printWindow.focus();
              printWindow.print();
              printWindow.close();
            }, 500);
          });
        }
      }, 300);
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
      root.render(React.createElement(TemplateComponent, { data }));
      
      setTimeout(() => {
        let resumeHTML = tempDiv.innerHTML;
        
        // Handle image data URLs for preview
        if (data.personalInfo.photo) {
          if (data.personalInfo.photo instanceof File) {
            const reader = new FileReader();
            reader.onload = function(e) {
              const imageDataUrl = e.target?.result as string;
              resumeHTML = resumeHTML.replace(
                /src="[^"]*"/g, 
                (match) => match.includes('data:') ? match : `src="${imageDataUrl}"`
              );
              writeToPreviewWindow();
            };
            reader.readAsDataURL(data.personalInfo.photo);
            return;
          }
        }
        
        writeToPreviewWindow();
        
        function writeToPreviewWindow() {
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
                  
                  img {
                    max-width: 100% !important;
                    height: auto !important;
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
        }
      }, 300);
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
    .bg-blue-400 { background-color: #60a5fa; }
    .bg-blue-500 { background-color: #3b82f6; }
    .bg-blue-600 { background-color: #2563eb; }
    .bg-green-50 { background-color: #f0fdf4; }
    .bg-green-100 { background-color: #dcfce7; }
    .bg-green-400 { background-color: #4ade80; }
    .bg-green-500 { background-color: #22c55e; }
    .bg-red-500 { background-color: #ef4444; }
    .bg-yellow-50 { background-color: #fefce8; }
    .bg-yellow-500 { background-color: #eab308; }
    .bg-purple-500 { background-color: #a855f7; }
    .bg-purple-600 { background-color: #9333ea; }
    .bg-pink-500 { background-color: #ec4899; }
    .bg-pink-600 { background-color: #db2777; }
    .bg-cyan-400 { background-color: #22d3ee; }
    .bg-cyan-500 { background-color: #06b6d4; }
    .bg-indigo-100 { background-color: #e0e7ff; }
    .bg-indigo-500 { background-color: #6366f1; }
    .bg-orange-50 { background-color: #fff7ed; }
    .bg-orange-500 { background-color: #f97316; }
    .bg-orange-600 { background-color: #ea580c; }
    .bg-amber-50 { background-color: #fffbeb; }
    .bg-amber-600 { background-color: #d97706; }
    .bg-amber-700 { background-color: #b45309; }
    
    /* Gradient backgrounds */
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
    .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
    .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
    .from-blue-400 { --tw-gradient-from: #60a5fa; --tw-gradient-to: rgba(96, 165, 250, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-to: rgba(37, 99, 235, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-purple-500 { --tw-gradient-from: #a855f7; --tw-gradient-to: rgba(168, 85, 247, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-purple-600 { --tw-gradient-from: #9333ea; --tw-gradient-to: rgba(147, 51, 234, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-indigo-500 { --tw-gradient-from: #6366f1; --tw-gradient-to: rgba(99, 102, 241, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-amber-50 { --tw-gradient-from: #fffbeb; --tw-gradient-to: rgba(255, 251, 235, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-amber-700 { --tw-gradient-from: #b45309; --tw-gradient-to: rgba(180, 83, 9, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-orange-50 { --tw-gradient-from: #fff7ed; --tw-gradient-to: rgba(255, 247, 237, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .from-green-400 { --tw-gradient-from: #4ade80; --tw-gradient-to: rgba(74, 222, 128, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .via-purple-500 { --tw-gradient-to: rgba(168, 85, 247, 0); --tw-gradient-stops: var(--tw-gradient-from), #a855f7, var(--tw-gradient-to); }
    .via-purple-600 { --tw-gradient-to: rgba(147, 51, 234, 0); --tw-gradient-stops: var(--tw-gradient-from), #9333ea, var(--tw-gradient-to); }
    .to-pink-500 { --tw-gradient-to: #ec4899; }
    .to-pink-600 { --tw-gradient-to: #db2777; }
    .to-yellow-50 { --tw-gradient-to: #fefce8; }
    .to-yellow-600 { --tw-gradient-to: #ca8a04; }
    .to-yellow-700 { --tw-gradient-to: #a16207; }
    .to-blue-500 { --tw-gradient-to: #3b82f6; }
    
    .text-black { color: black; }
    .text-white { color: white; }
    .text-gray-100 { color: #f3f4f6; }
    .text-gray-200 { color: #e5e7eb; }
    .text-gray-600 { color: #4b5563; }
    .text-gray-700 { color: #374151; }
    .text-gray-800 { color: #1f2937; }
    .text-gray-900 { color: #111827; }
    .text-blue-600 { color: #2563eb; }
    .text-blue-800 { color: #1e40af; }
    .text-green-400 { color: #4ade80; }
    .text-green-300 { color: #86efac; }
    .text-green-600 { color: #16a34a; }
    .text-green-700 { color: #15803d; }
    .text-green-800 { color: #166534; }
    .text-cyan-400 { color: #22d3ee; }
    .text-cyan-300 { color: #67e8f9; }
    .text-pink-400 { color: #f472b6; }
    .text-pink-300 { color: #f9a8d4; }
    .text-purple-400 { color: #c084fc; }
    .text-purple-300 { color: #d8b4fe; }
    .text-purple-600 { color: #9333ea; }
    .text-purple-700 { color: #7c3aed; }
    .text-purple-800 { color: #6b21a8; }
    .text-yellow-400 { color: #facc15; }
    .text-yellow-300 { color: #fde047; }
    .text-orange-600 { color: #ea580c; }
    .text-orange-700 { color: #c2410c; }
    .text-orange-800 { color: #9a3412; }
    .text-amber-100 { color: #fef3c7; }
    .text-amber-600 { color: #d97706; }
    .text-amber-700 { color: #b45309; }
    .text-amber-800 { color: #92400e; }
    .text-amber-900 { color: #78350f; }
    
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
    .min-h-\\[11in\\] { min-height: 11in; }
    .w-full { width: 100%; }
    .w-3 { width: 0.75rem; }
    .w-24 { width: 6rem; }
    .w-32 { width: 8rem; }
    .w-40 { width: 10rem; }
    .w-\\[8\\.5in\\] { width: 8.5in; }
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
    .font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
    
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
    .border-l-8 { border-left-width: 8px; }
    .border-black { border-color: black; }
    .border-gray-300 { border-color: #d1d5db; }
    .border-white\\/30 { border-color: rgba(255, 255, 255, 0.3); }
    .border-white\\/50 { border-color: rgba(255, 255, 255, 0.5); }
    .border-green-400 { border-color: #4ade80; }
    .border-cyan-400 { border-color: #22d3ee; }
    .border-pink-400 { border-color: #f472b6; }
    .border-purple-400 { border-color: #c084fc; }
    .border-yellow-400 { border-color: #facc15; }
    .border-red-400 { border-color: #f87171; }
    .border-blue-400 { border-color: #60a5fa; }
    .border-blue-500 { border-color: #3b82f6; }
    .border-orange-500 { border-color: #f97316; }
    .border-purple-500 { border-color: #a855f7; }
    .border-amber-300 { border-color: #fcd34d; }
    .border-amber-600 { border-color: #d97706; }
    .border-double { border-style: double; }
    
    .rounded { border-radius: 0.25rem; }
    .rounded-lg { border-radius: 0.5rem; }
    .rounded-xl { border-radius: 0.75rem; }
    .rounded-2xl { border-radius: 1rem; }
    .rounded-3xl { border-radius: 1.5rem; }
    .rounded-full { border-radius: 9999px; }
    .rounded-tl-none { border-top-left-radius: 0; }
    
    .shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
    .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
    .drop-shadow-lg { filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1)); }
    
    .flex { display: flex; }
    .grid { display: grid; }
    .hidden { display: none; }
    .block { display: block; }
    .inline-flex { display: inline-flex; }
    
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .grid-rows-16 { grid-template-rows: repeat(16, minmax(0, 1fr)); }
    .col-span-2 { grid-column: span 2 / span 2; }
    .col-span-3 { grid-column: span 3 / span 3; }
    
    .gap-1 { gap: 0.25rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .gap-12 { gap: 3rem; }
    
    .flex-1 { flex: 1 1 0%; }
    .flex-col { flex-direction: column; }
    .flex-wrap { flex-wrap: wrap; }
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
    .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
    .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }
    .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem; }
    
    .absolute { position: absolute; }
    .relative { position: relative; }
    .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
    .inset-4 { top: 1rem; right: 1rem; bottom: 1rem; left: 1rem; }
    .top-0 { top: 0; }
    .top-4 { top: 1rem; }
    .top-8 { top: 2rem; }
    .top-10 { top: 2.5rem; }
    .top-12 { top: 3rem; }
    .left-2 { left: 0.5rem; }
    .left-8 { left: 2rem; }
    .left-10 { left: 2.5rem; }
    .left-12 { left: 3rem; }
    .right-8 { right: 2rem; }
    .right-10 { right: 2.5rem; }
    .right-12 { right: 3rem; }
    .bottom-10 { bottom: 2.5rem; }
    .bottom-16 { bottom: 4rem; }
    .top-1\\/2 { top: 50%; }
    .left-1\\/2 { left: 50%; }
    .z-10 { z-index: 10; }
    .-mr-12 { margin-right: -3rem; }
    .-mr-16 { margin-right: -4rem; }
    .-ml-12 { margin-left: -3rem; }
    .-mb-12 { margin-bottom: -3rem; }
    .-mt-16 { margin-top: -4rem; }
    .-z-10 { z-index: -10; }
    
    .transform { transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
    .-translate-x-1\\/2 { --tw-translate-x: -50%; }
    .-translate-y-1\\/2 { --tw-translate-y: -50%; }
    .rotate-12 { --tw-rotate: 12deg; }
    .-rotate-45 { --tw-rotate: -45deg; }
    
    .backdrop-blur-sm { backdrop-filter: blur(4px); }
    .backdrop-blur-md { backdrop-filter: blur(12px); }
    .backdrop-blur-lg { backdrop-filter: blur(16px); }
    .blur-sm { filter: blur(4px); }
    .blur-lg { filter: blur(16px); }
    .blur-xl { filter: blur(24px); }
    .grayscale { filter: grayscale(100%); }
    .contrast-125 { filter: contrast(1.25); }
    
    .opacity-10 { opacity: 0.1; }
    .opacity-15 { opacity: 0.15; }
    .opacity-20 { opacity: 0.2; }
    .opacity-70 { opacity: 0.7; }
    .opacity-75 { opacity: 0.75; }
    .opacity-80 { opacity: 0.8; }
    .opacity-90 { opacity: 0.9; }
    
    .bg-white\\/10 { background-color: rgba(255, 255, 255, 0.1); }
    .bg-white\\/20 { background-color: rgba(255, 255, 255, 0.2); }
    .bg-white\\/30 { background-color: rgba(255, 255, 255, 0.3); }
    .bg-black\\/10 { background-color: rgba(0, 0, 0, 0.1); }
    
    .overflow-hidden { overflow: hidden; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    
    .last\\:border-b-0:last-child { border-bottom-width: 0; }
    
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
  `;
}
