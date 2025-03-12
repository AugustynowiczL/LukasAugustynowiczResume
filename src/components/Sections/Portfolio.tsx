import { FC, memo, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import porfolioImage1 from '../../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../../images/portfolio/portfolio-2.jpg';
import Section from '../Layout/Section';
import Image from 'next/image';

const Portfolio: FC = memo(() => {
  // Hardcoded list of portfolio items
  const portfolioItems = [
      {
        title: 'Advanced Ray Tracer',
        description: 'This project involved developing a high-performance 3D ray tracer engine in C, simulating realistic lighting and visual effects in computer-generated scenes.',
        details: {
          coreComponents: [
            {
              title: 'Ray Tracing Algorithm',
              description: 'The ray tracer simulates rays originating from a camera, detecting intersections with 3D objects and recursively tracing them to simulate reflections, refractions, and shadows.'
            },
            {
              title: 'Lighting and Shading (Phong Reflection Model)',
              description: 'The Phong reflection model was used to simulate ambient, diffuse, and specular lighting interactions, contributing to realistic shading and object appearance.'
            }
          ],
          advancedFeatures: [
            {
              title: 'Depth of Field',
              description: 'Simulated camera focus effect, creating a blur in objects outside the focal plane for a more realistic, natural depth perception.'
            },
            {
              title: 'Anti-Aliasing',
              description: 'Techniques to reduce aliasing artifacts, resulting in smoother and cleaner images by averaging the colors of multiple samples per pixel.'
            },
            {
              title: 'Texture and Normal Mapping',
              description: 'Support for texture mapping to add surface details and normal mapping to simulate intricate surface features without increasing geometry complexity.'
            },
            {
              title: 'Area Light Sources',
              description: 'Implementation of area lights to create soft shadows and realistic lighting, as opposed to point lights which produce harsh, unrealistic shadows.'
            }
          ],
          technologies: [
            {
              title: 'C Programming Language',
              description: 'The project was developed in C to leverage its performance capabilities for efficient ray tracing and rendering.'
            },
            {
              title: 'Efficient Scene Management',
              description: 'Data structures for rays, spheres, planes, and polygons, with optimized intersection tests for improved performance.'
            }
          ],
          resultsAndAchievements: [
            {
              title: 'Realistic Rendering',
              description: 'The project successfully integrated advanced rendering techniques, producing high-quality images with accurate lighting and realistic effects.'
            },
            {
              title: 'Visual Fidelity Enhancements',
              description: 'Features like depth of field, anti-aliasing, and advanced texture mapping significantly improved the realism and quality of rendered scenes.'
            }
          ],
          conclusion: {
            description: 'The Advanced Ray Tracer project showcases the application of core computer graphics principles and the potential for creating high-quality 3D rendering engines. It serves as a foundation for further exploration of sophisticated rendering techniques.'
          }
        },
        image1: porfolioImage1,
        image2: porfolioImage2
      },
    // Add more projects as needed
  ];

  return (
    <Section className="bg-neutral-800" sectionId="portfolio">
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Projects</h2>
        <div className="w-full space-y-8">
        {portfolioItems.map((item, index) => {
        const { title, description, details, image1 } = item;
        const { coreComponents, advancedFeatures, technologies, resultsAndAchievements, conclusion } = details;

    return (
    <div className="flex flex-col lg:flex-row gap-6" key={`${title}-${index}`}>
      <div className="flex-1">
        {/* Image if available */}
        <Image alt={title} className="w-full" placeholder="blur" src={image1}/>
        <Image alt={title} className="w-full" placeholder="blur" src={item.image2}/>
      </div>

      <div className="flex-1 flex flex-col justify-between">
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

        {/* Conclusion Section */}
        {conclusion?.description && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white">Conclusion</h4>
            <p className="text-sm text-gray-200">{conclusion.description}</p>
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
