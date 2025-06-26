
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ClassicIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-10 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black font-serif">
      {/* Traditional Header */}
      <div className="text-center mb-8 pb-6 border-b-4 border-double border-gray-800">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-wide">{data.personalInfo.fullName}</h1>
        <div className="text-sm text-gray-700 space-y-1">
          <div className="flex justify-center items-center space-x-8">
            <span>Email: {data.personalInfo.email}</span>
            <span>Mobile: {data.personalInfo.phone}</span>
          </div>
          <div>Address: {data.personalInfo.location}</div>
          {(data.personalInfo.linkedIn || data.personalInfo.website) && (
            <div className="flex justify-center items-center space-x-8">
              {data.personalInfo.linkedIn && <span>LinkedIn: {data.personalInfo.linkedIn}</span>}
              {data.personalInfo.website && <span>Website: {data.personalInfo.website}</span>}
            </div>
          )}
        </div>
        {data.personalInfo.photo && (
          <div className="mt-6">
            <img
              src={data.personalInfo.photo}
              alt="Profile"
              className="w-28 h-28 rounded object-cover border-4 border-gray-800 mx-auto"
            />
          </div>
        )}
      </div>

      {/* Career Objective */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center uppercase tracking-widest">Career Objective</h2>
          <div className="border-2 border-gray-300 p-6 bg-gray-50">
            <p className="text-sm leading-relaxed text-justify">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Professional Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center uppercase tracking-widest border-b-2 border-gray-400 pb-2">Work Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6 border-2 border-gray-300 p-5 bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 uppercase">{exp.jobTitle}</h3>
                  <div className="text-gray-700 font-semibold">{exp.company}</div>
                  <div className="text-gray-600 text-sm">{exp.location}</div>
                </div>
                <div className="text-right">
                  <div className="border-2 border-gray-400 px-3 py-1 bg-white">
                    <div className="text-sm font-bold text-gray-800">Duration</div>
                    <div className="text-xs text-gray-600">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                </div>
              </div>
              {exp.description && (
                <div className="mt-4 pt-3 border-t border-gray-300">
                  <h4 className="font-semibold text-sm text-gray-800 mb-2">Job Responsibilities:</h4>
                  <p className="text-sm leading-relaxed text-justify">{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Educational Qualifications */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center uppercase tracking-wide border-b-2 border-gray-400 pb-2">Educational Qualifications</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 border-2 border-gray-300 p-4 bg-gray-50">
                <h3 className="font-bold text-gray-900 uppercase">{edu.degree}</h3>
                <div className="text-sm text-gray-700 font-semibold">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">Year of Passing: {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600 font-medium">Percentage/CGPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Technical Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center uppercase tracking-wide border-b-2 border-gray-400 pb-2">Technical Skills</h2>
            <div className="border-2 border-gray-300 p-4 bg-gray-50">
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center border-b border-gray-300 pb-2 last:border-b-0">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600 font-bold">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t-4 border-double border-gray-800 text-center">
        <div className="text-gray-600 text-sm italic">Professional Resume</div>
      </div>
    </div>
  );
};
