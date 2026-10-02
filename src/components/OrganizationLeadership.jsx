// Add or edit objects here to update the organization experience section.
const organizationExperiences = [
  {
    role: 'Academic & Scholarship Division Staff',
    organization: 'Himpunan Mahasiswa Teknik Informatika (HMIF) ITERA',
    duration: 'February 2024 - March 2025',
    responsibilities: [
      'Led the execution of academic development programs for students within the study program.',
      'Managed operations and logistics for major university-wide events and inauguration programs.',
    ],
  },
  {
    role: 'Head of Spiritual Affairs Division',
    organization: 'Keluarga Mahasiswa Buddhis Dhirasena (KMBD) ITERA',
    duration: 'February 2025 – February 2026',
    responsibilities: [
      'Coordinated and led spiritual activities and regular worship services for students on campus.',
      'Designed and delivered spiritual character development programs to strengthen solidarity and togetherness among community members.',
    ],
  },
];

export default function OrganizationLeadership() {
  return (
    <section
      className="organization-leadership"
      id="organization-leadership"
      aria-labelledby="organization-leadership-title"
    >
      <div className="organization-leadership__inner">
        <header className="organization-leadership__heading">
          <p className="organization-leadership__eyebrow">
            Organization &amp; Leadership
          </p>
          <h2 id="organization-leadership-title">
            Organization &amp; Leadership Experience
          </h2>
        </header>

        {/* Map the data into cards to keep content easy to maintain. */}
        <ol className="organization-leadership__list">
          {organizationExperiences.map((experience) => (
            <li
              className="organization-leadership__item"
              key={`${experience.organization}-${experience.role}`}
            >
              <article className="organization-leadership__card">
                <header className="organization-leadership__card-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="organization-leadership__organization">
                      {experience.organization}
                    </p>
                  </div>
                  <p className="organization-leadership__duration">
                    {experience.duration}
                  </p>
                </header>

                <ul className="organization-leadership__responsibilities">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
