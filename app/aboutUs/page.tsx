import { ContactIcon, LinkedinIcon,Folder } from 'lucide-react';
import './about.css'
function AboutSection() {
  return (
    <section className="about section mt-10" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me.</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <img
              src="/aboutusimg.jpeg"
              alt="image"
              className="about__img"
            />

            <div className="about__shadow"></div>

            <div className="geometric-box"></div>

            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
          I'm Jazib, a React and Next.js developer with a passion for crafting captivating digital experiences. My expertise lies in mobile and web development, where I seamlessly blend my artistic flair with technical prowess. As a self-taught developer, I've honed my skills to specialize in front-end development, focusing on creating interactive and visually stunning interfaces.    </p>

          <ul className="about__list">
            <li className="about__item">
              <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, React Native ,Three.js,Next Js & Figma.
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#" className="button">
              <ContactIcon /> Let's connect
            </a>

            <a href="https://www.linkedin.com/in/jazib-zaidi-671975259/" target="_blank" rel="noopener noreferrer" className="button__ghost">
              <LinkedinIcon />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
