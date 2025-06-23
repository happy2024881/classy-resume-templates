
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const MonochromeTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="border-4 border-black p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black mb-3 uppercase tracking-wider">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 font-bold">
              <div>EMAIL: {data.personalInfo.email}</div>
              <div>PHONE: {data.personalInfo.phone}</div>
              <div>LOCATION: {data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>LINKEDIN: {data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>WEBSITE: {data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-28 h-28 object-cover border-4 border-black filter grayscale"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-black mb-4 uppercase tracking-wide border-b-2 border-black pb-2">SUMMARY</h2>
          <div className="bg-black text-white p-4">
            <p className="text-sm leading-relaxed font-medium">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-wide border-b-2 border-black pb-2">EXPERIENCE</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6 border-2 border-black p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-lg uppercase">{exp.jobTitle}</h3>
                    <span className="text-sm bg-black text-white px-3 py-1 font-bold">
                      {exp.startDate} - {exp.current ? 'PRESENT' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-bold mb-2 uppercase">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-black mb-4 uppercase tracking-wide border-b-2 border-black pb-2">EDUCATION</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 border-2 border-black p-3">
                  <h3 className="font-black uppercase text-sm">{edu.degree}</h3>
                  <div className="text-sm font-bold">{edu.school}</div>
                  <div className="text-sm font-bold">{edu.location}</div>
                  <div className="text-sm font-bold">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm font-bold">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-black mb-4 uppercase tracking-wide border-b-2 border-black pb-2">SKILLS</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="border-2 border-black p-3">
                    <div className="flex justify-between">
                      <span className="font-black uppercase text-sm">{skill.name}</span>
                      <span className="text-sm bg-black text-white px-2 py-1 font-bold">{skill.level.toUpperCase()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
