import Image from 'next/image';

export default function Portfolio() {
  // Define an array of project titles
  const titles = [
    'Bose 700 Headphones',
    'Bit Bargain',
    'Coming Soon',
    'Coming Soon',
    'Coming Soon',
    'Coming Soon',
  ];

  // Define a function to add a hover effect to the project images
  function addHoverEffect(e) {
    // Get the image element
    const img = e.target;
    // Create a div element for the overlay
    const overlay = document.createElement('div');
    // Set the overlay style
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease-in-out';
    // Create a p element for the text
    const text = document.createElement('p');
    // Set the text style
    text.style.fontSize = '1.5rem';
    text.style.color = 'white';
    text.style.fontWeight = 'bold';
    // Get the index of the image
    const index = img.getAttribute('data-index');
    // Set the text content to the corresponding title
    text.textContent = titles[index];
    // Append the text to the overlay
    overlay.appendChild(text);
    // Append the overlay to the image parent
    img.parentNode.appendChild(overlay);
    // Add a mouseenter event listener to the image
    img.addEventListener('mouseenter', () => {
      // Set the overlay opacity to 1
      overlay.style.opacity = '1';
    });
    // Add a mouseleave event listener to the image
    img.addEventListener('mouseleave', () => {
      // Set the overlay opacity to 0
      overlay.style.opacity = '0';
    });
  }

  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          {/* Add a data-index attribute to each image */}
          <a href="https://boose700headphones.vercel.app" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/bose.png"
              alt="Upcoming project"
              data-index="0"
              onLoad={addHoverEffect}
            />
          </a>
          <a href="https://bit-bargain-8m2k96vpu-waris-95s-projects.vercel.app" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/bit-bargain.png"
              alt="Upcoming project"
              data-index="1"
              onLoad={addHoverEffect}
            />
          </a>
          <a href="https://github.com/Waris-95/API-project" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developers.giphy.com/branch/master/static/api-c99e353f761d318322c853c03ebcf21b.gif"
              alt="REST API project"
              data-index="2"
              onLoad={addHoverEffect}
            />
          </a>
          <a href="#">
            <img
              src="/img/soon.jpg"
              alt="Upcoming project"
              data-index="3"
              onLoad={addHoverEffect}
            />
          </a>
          <a href="#">
            <img
              src="/img/soon.jpg"
              alt="Upcoming project"
              data-index="4"
              onLoad={addHoverEffect}
            />
          </a>
          <a href="#">
            <img
              src="/img/soon.jpg"
              alt="Upcoming project"
              data-index="5"
              onLoad={addHoverEffect}
            />
          </a>
        </div>
      </div>
      {/* Add some CSS style to the section and the images */}
      <style jsx>{`
      
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(0.9);
          transition: transform 0.8s ease-in-out;
        }

        img:hover {
          transform: scale(1.5);

          
        }
      `}</style>
    </section>
  );
}
