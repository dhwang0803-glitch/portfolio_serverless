export function ContactInfo({ email, github }: { email: string; github?: string }) {
  return (
    <div className="contact">
      <a className="contact__link" href={`mailto:${email}`}>
        ✉ {email}
      </a>
      {github && (
        <a className="contact__link" href={github} target="_blank" rel="noopener noreferrer">
          ↗ GitHub
        </a>
      )}
    </div>
  );
}
