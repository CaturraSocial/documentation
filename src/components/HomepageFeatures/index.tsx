import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer API',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    description: (
      <>
        Explore the developer API endpoints. From user data and post creation to real-time WebSockets, find specifications to interface with Caturra Social.
      </>
    ),
  },
  {
    title: 'Secure OAuth v1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    description: (
      <>
        Authenticate client applications with standard OAuth v1. Configure custom scopes and exchange secure refresh and access tokens.
      </>
    ),
  },
  {
    title: 'Client Guidelines',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    description: (
      <>
        Build software that aligns with Caturra Social standards. Implement standard report flows, code designs, and safety guidelines.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="feature-card">
        <div className="feature-icon-wrapper">
          {icon}
        </div>
        <Heading as="h3" className="margin-bottom--md">{title}</Heading>
        <p className="margin-bottom--none">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
