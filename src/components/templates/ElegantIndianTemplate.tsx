
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ElegantIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black font-serif">
      {/* Elegant Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-amber-600">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center space-x-6 text-sm text-gray-700">
          <span>📧 {data.personalInfo.email}</span>
          <span>📱 {data.personalInfo.phone}</span>
          <span>📍 {data.personalInfo.location}</span>
        </div>
        {(data.personalInfo.linkedIn || data.personalInfo.website) && (
          <div className="flex justify-center space-x-6 text-sm text-gray-700 mt-2">
            {data.personalInfo.linkedIn && <span>💼 {data.personalInfo.linkedIn}</span>}
            {data.personalInfo.website && <span>🌐 {data.personalInfo.website}</span>}
          </div>
        )}
        {data.personalInfo.photo && (
          <div className="mt-4">
            <img
              src={data.personalInfo.photo}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-400 mx-auto"
            />
          </div>
        )}
      </div>

      {/* Professional Profile */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 text-center">Professional Profile</h2>
          <div className="bg-amber-50 p-6 rounded border border-amber-200 italic">
            <p className="text-sm leading-relaxed text-center">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 text-center border-b border-amber-300 pb-2">Professional Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded border-l-4 border-amber-500">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-amber-800">{exp.jobTitle}</h3>
                  <div className="text-amber-600 font-semibold italic">{exp.company}, {exp.location}</div>
                </div>
                <span className="bg-amber-600 text-white px-3 py-1 rounded text-sm">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              {exp.description && (
                <p className="text-sm leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Academic Qualifications */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-amber-700 mb-4 text-center border-b border-amber-300 pb-2">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded border border-orange-200">
                <h3 className="font-bold text-amber-800">{edu.degree}</h3>
                <div className="text-sm text-orange-600 font-semibold italic">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600 font-medium">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Core Competencies */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-amber-700 mb-4 text-center border-b border-amber-300 pb-2">Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded border border-orange-200 text-center">
                  <div className="font-semibold text-amber-800">{skill.name}</div>
                  <div className="text-sm text-orange-600 italic">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative footer */}
      <div className="mt-8 pt-4 border-t-2 border-amber-600 text-center">
        <div className="text-amber-600 font-serif italic text-sm">Professional Resume</div>
      </div>
    </div>
  );
};
