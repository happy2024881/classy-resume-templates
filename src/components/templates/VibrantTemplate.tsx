
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const VibrantTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 opacity-90">
              <div>{data.personalInfo.email}</div>
              <div>{data.personalInfo.phone}</div>
              <div>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                  <span className="text-sm bg-white/30 px-2 py-1 rounded">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="font-semibold mb-2">{exp.company} • {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed opacity-90">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-sm">{edu.school}</div>
                <div className="text-sm opacity-75">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm opacity-75">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm bg-white/30 px-2 py-1 rounded">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
