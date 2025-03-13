import Image from 'next/image';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import porfolioImage1 from '../../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../../images/portfolio/portfolio-4.jpg';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  // Hardcoded list of portfolio items
  const portfolioItems = [
    {
      title: 'Advanced Ray Tracer',
      description:
        'This project involved developing a high-performance 3D ray tracer engine in C, simulating realistic lighting and visual effects in computer-generated scenes.',
      details: {
        coreComponents: [
          {
            title: 'Ray Tracing Algorithm',
            description:
              'The ray tracer simulates rays originating from a camera, detecting intersections with 3D objects and recursively tracing them to simulate reflections, refractions, and shadows.',
          },
          {
            title: 'Lighting and Shading (Phong Reflection Model)',
            description:
              'The Phong reflection model was used to simulate ambient, diffuse, and specular lighting interactions, contributing to realistic shading and object appearance.',
          },
        ],
        advancedFeatures: [
          {
            title: 'Depth of Field',
            description:
              'Simulated camera focus effect, creating a blur in objects outside the focal plane for a more realistic, natural depth perception.',
          },
          {
            title: 'Anti-Aliasing',
            description:
              'Techniques to reduce aliasing artifacts, resulting in smoother and cleaner images by averaging the colors of multiple samples per pixel.',
          },
          {
            title: 'Texture and Normal Mapping',
            description:
              'Support for texture mapping to add surface details and normal mapping to simulate intricate surface features without increasing geometry complexity.',
          },
          {
            title: 'Area Light Sources',
            description:
              'Implementation of area lights to create soft shadows and realistic lighting, as opposed to point lights which produce harsh, unrealistic shadows.',
          },
        ],
        technologies: [
          {
            title: 'C Programming Language',
            description:
              'The project was developed in C to leverage its performance capabilities for efficient ray tracing and rendering.',
          },
          {
            title: 'Efficient Scene Management',
            description:
              'Data structures for rays, spheres, planes, and polygons, with optimized intersection tests for improved performance.',
          },
        ],
        resultsAndAchievements: [
          {
            title: 'Realistic Rendering',
            description:
              'The project successfully integrated advanced rendering techniques, producing high-quality images with accurate lighting and realistic effects.',
          },
          {
            title: 'Visual Fidelity Enhancements',
            description:
              'Features like depth of field, anti-aliasing, and advanced texture mapping significantly improved the realism and quality of rendered scenes.',
          },
        ],
        conclusion: {
          description:
            'The Advanced Ray Tracer project showcases the application of core computer graphics principles and the potential for creating high-quality 3D rendering engines. It serves as a foundation for further exploration of sophisticated rendering techniques.',
        },
      },
      image1: porfolioImage1,
      image2: porfolioImage2,
    },
    {
      title: 'Decentralized Ticket Master',
      description:
        'The decentralized ticket master project is a Web3-based ticketing platform that provides a purely decentralized alternative to traditional event ticketing systems. By leveraging blockchain technology, this platform allows event organizer to create and manage NFT-based tickets, ensuring secure, transparent, and tamper-proof ticket sale and transfers. Furthermore this platform ensures that a portion of ticket resales go toward the event organizer unlike traditional centralized platforms. The platform offers allows both event organizers and ticket holders to interact directly with the blockchain without for the need of intermediaries.',
      details: {
        coreComponents: [
          {
            title: 'NFT-Based Tickets (ERC-721)',
            description:
              'Event organizers create collections and are given the ability to manage ticket access. The ticket NFTs are minted upon ticket sale.',
          },
          {
            title: 'Ticket Purchasing & Reselling',
            description:
              'Users can buy tickets directly from the platform and resell them on the secondary market, ensuring decentralized ticket ownership.',
          },
          {
            title: 'Smart Contract Integration',
            description:
              'The platform utilizes smart contracts to automate the transactions without the need for a centralized backend, reducing the risk of fraud and ensuring transparency.',
          },
        ],
        technologies: [
          {
            title: 'NextJS & Node.js',
            description: 'Next and Node was used for building the frontend and and interacting with blockchain api.',
          },
          {
            title: 'Solidity',
            description:
              'Solidity for developing smart contracts that manage NFT-based tickets on an ethereum based blockchain.',
          },
          {
            title: 'EtherJS & Wagmi',
            description: 'EtherJS and Wagmi for wallet connect integration with Metamask and Web3 interactions.',
          },
          {
            title: 'Hardhat',
            description: 'Hardhat was used for smart contract deployment and testing',
          },
        ],
        conclusion: {
          description:
            'The Decentralized Ticket Master project showcases the application of EVM smart contracts and the potential of decentralized applications. It serves as a foundation for further exploration of sophisticated financial smart contracts',
        },
      },
      image1: porfolioImage3,
      image2: porfolioImage4,
    },
    // Add more projects as needed
  ];

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h3 className="self-center text-3xl font-bold text-white">Projects</h3>
        <div className="w-full space-y-8">
          {portfolioItems.map((item, index) => {
            const {title, description, details, image1} = item;
            const {coreComponents, advancedFeatures, technologies, resultsAndAchievements, conclusion} = details;

            return (
              <div className="bg-neutral-700 p-6 rounded-lg shadow-lg" key={`${title}-${index}`}>
                {/* Title and Description */}
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-200">{description}</p>

                {/* Core Components Section */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Core Components</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-200">
                    {coreComponents?.map((component, index) => (
                      <li key={`core-${index}`}>
                        <strong>{component.title}:</strong> {component.description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advanced Features Section */}
                {advancedFeatures && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">Advanced Features</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-200">
                      {advancedFeatures?.map((feature, index) => (
                        <li key={`feature-${index}`}>
                          <strong>{feature.title}:</strong> {feature.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Section */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white">Technologies</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-200">
                    {technologies?.map((tech, index) => (
                      <li key={`tech-${index}`}>
                        <strong>{tech.title}:</strong> {tech.description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results and Achievements Section */}
                {resultsAndAchievements && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">Results and Achievements</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-200">
                      {resultsAndAchievements?.map((achievement, index) => (
                        <li key={`achievement-${index}`}>
                          <strong>{achievement.title}:</strong> {achievement.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Conclusion Section */}
                {conclusion?.description && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">Conclusion</h4>
                    <p className="text-sm text-gray-200">{conclusion.description}</p>
                  </div>
                )}

                {/* Image if available */}
                {/* Images: Horizontally aligned on larger screens */}
                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                  {' '}
                  {/* flex-col for small screens, flex-row for large */}
                  <div className="flex-1 p-4">
                    <Image
                      alt={title}
                      className="w-full h-auto object-contain rounded-lg"
                      placeholder="blur"
                      src={image1}
                    />
                  </div>
                  {item.image2 && (
                    <div className="flex-1 p-4">
                      <Image
                        alt={title}
                        className="w-full h-auto object-contain rounded-lg"
                        placeholder="blur"
                        src={item.image2}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
