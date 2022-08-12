import { react } from 'react';

const Navigation = ({ className }) => {
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  const navigationLinks = navigation.map((item) => (
    <a key={item.name} href={item.href} className={className}>
      {item.name}
    </a>
  ));

  return navigationLinks;
};

export default Navigation;
