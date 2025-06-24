
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GridBWTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header Grid */}
      <div className="grid grid-cols-4 gap-1 mb-6">
        <div className="col-span-3 bg-black text-white p-4">
          <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <div className="text-sm space-y-1">
            <div>{data.personalInfo.email}</div>
            <div>{data.personalInfo.phone}</div>
            <div>{data.personalInfo.location}</div>
          </div>
        </div>
        <div className="bg-gray-200 p-4 text-center">
          {data.personalInfo.photo ? (
            <img
              src={data.personalInfo.photo}
              alt="Profile"
              className="w-full h-20 object-cover border border-black"
            />
          ) : (
            <div className="w-full h-20 bg-white border border-black flex items-center justify-center text-xs">
              PHOTO
            </div>
          )}
        </div>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-2 gap-1 mb-6">
        {data.personalInfo.linkedIn && (
          <div className="bg-gray-100 border border-black p-2 text-center text-xs">
            <strong>LinkedIn:</strong> {data.personalInfo.linkedIn}
          </div>
        )}
        {data.personalInfo.website && (
          <div className="bg-gray-100 border border-black p-2 text-center text-xs">
            <strong>Website:</strong> {data.personalInfo.website}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <div className="bg-black text-white p-2 text-center font-bold uppercase">Summary</div>
          <div className="border border-black p-4">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <div className="bg-black text-white p-2 text-center font-bold uppercase">Experience</div>
          <div className="border border-black">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className={`p-4 ${index > 0 ? 'border-t border-black' : ''}`}>
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div className="col-span-2">
                    <h3 className="font-bold">{exp.jobTitle}</h3>
                    <div className="text-sm">{exp.company} • {exp.location}</div>
                  </div>
                  <div className="text-right text-sm">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <div className="bg-black text-white p-2 text-center font-bold uppercase text-sm">Education</div>
            <div className="border border-black">
              {data.education.map((edu, index) => (
                <div key={edu.id} className={`p-3 ${index > 0 ? 'border-t border-black' : ''}`}>
                  <h3 className="font-bold text-sm">{edu.degree}</h3>
                  <div className="text-xs">{edu.school}</div>
                  <div className="text-xs">{edu.location}</div>
                  <div className="text-xs">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-xs">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <div className="bg-black text-white p-2 text-center font-bold uppercase text-sm">Skills</div>
            <div className="border border-black p-3">
              <div className="grid grid-cols-2 gap-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-100 border border-black p-2 text-center">
                    <div className="text-xs font-bold">{skill.name}</div>
                    <div className="text-xs">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
