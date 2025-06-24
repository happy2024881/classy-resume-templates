
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const MonochromeTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header with strong contrast */}
      <div className="bg-black text-white p-8 -mx-8 -mt-8 mb-8">
        <div className="text-center">
          <h1 className="text-5xl font-black mb-6 tracking-tight uppercase">{data.personalInfo.fullName}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-bold">
            <div>{data.personalInfo.email}</div>
            <div>{data.personalInfo.phone}</div>
            <div>{data.personalInfo.location}</div>
          </div>
          {(data.personalInfo.linkedIn || data.personalInfo.website) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold mt-2">
              {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <div className="bg-black text-white p-6">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-widest">About</h2>
            <p className="text-sm leading-relaxed font-medium">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-widest text-center border-t-4 border-b-4 border-black py-4">
            Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-8 border-2 border-black p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-black uppercase">{exp.jobTitle}</h3>
                <span className="text-sm font-black bg-black text-white px-4 py-2">
                  {exp.startDate} - {exp.current ? 'PRESENT' : exp.endDate}
                </span>
              </div>
              <div className="font-black text-lg mb-4 uppercase">{exp.company} • {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed font-medium border-l-4 border-black pl-4">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <div className="border-2 border-black p-6">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-widest text-center bg-black text-white py-2">
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 border-b border-black pb-4 last:border-b-0">
                <h3 className="font-black uppercase">{edu.degree}</h3>
                <div className="text-sm font-bold">{edu.school}</div>
                <div className="text-sm font-bold">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm font-bold">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="border-2 border-black p-6">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-widest text-center bg-black text-white py-2">
              Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center border-b border-black pb-2">
                  <span className="text-sm font-black uppercase">{skill.name}</span>
                  <span className="text-sm font-black bg-black text-white px-3 py-1">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
