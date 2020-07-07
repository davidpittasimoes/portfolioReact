import { useRouter } from 'next/router'
import { workItems } from '../../utils/works'
import Link from 'next/link'
import Post from '../../components/layout/post/Post'
import './style.scss';

const Project = () => {
  const router = useRouter()
  const { id } = router.query
  const techUsed = [];
  workItems.forEach((work) => {
    work.title == id && work.techUsed.forEach((tech) => {
      tech == 'sketch' && techUsed.push('https://img.icons8.com/plasticine/48/000000/sketch.png');
      tech == 'figma' && techUsed.push('https://img.icons8.com/windows/32/000000/figma.png');
      tech == 'photoshop' && techUsed.push('https://img.icons8.com/color/48/000000/adobe-photoshop.png');
      tech == 'illustrator' && techUsed.push('https://img.icons8.com/color/48/000000/adobe-illustrator.png');
      tech == 'XD' && techUsed.push('https://img.icons8.com/fluent/48/000000/adobe-xd.png');
      tech == 'after effects' && techUsed.push('https://img.icons8.com/fluent/48/000000/adobe-after-effects.png');
      tech == 'HTML' &&  techUsed.push('https://img.icons8.com/color/48/000000/html-5.png');
      tech == 'CSS' && techUsed.push('https://img.icons8.com/color/48/000000/css3.png');
      tech == 'SASS' && techUsed.push('https://img.icons8.com/color/48/000000/sass.png');
      tech == 'PHP' && techUsed.push('https://img.icons8.com/officel/48/000000/php-logo.png');
      tech == 'react' && techUsed.push('https://img.icons8.com/color/48/000000/react-native.png');
      tech == 'JS' && techUsed.push('https://img.icons8.com/color/48/000000/javascript.png');
      tech == 'jQuery' && techUsed.push('https://img.icons8.com/ios-filled/48/000000/jquery.png')
      tech == 'WP' && techUsed.push('https://img.icons8.com/color/48/000000/wordpress.png');
      tech == 'angular' && techUsed.push('https://img.icons8.com/color/48/000000/angularjs.png');
      tech == 'gitLab' && techUsed.push('https://img.icons8.com/color/48/000000/gitlab.png');
      tech == 'github' && techUsed.push('https://img.icons8.com/fluent/48/000000/github.png');
      tech == 'visual studio' && techUsed.push('https://img.icons8.com/color/48/000000/visual-studio-code-2019.png');
      tech == 'xcode' && techUsed.push('https://img.icons8.com/color/48/000000/xcode.png')
    })
  })
  return (
    <Post>
    <div className="projectPost">
      {workItems.map((work) => (
        work.title == id && 
        <div>
            <div className="container titleContainer">
              <Link href="/">
                <a className="back">
                  <img src="https://img.icons8.com/material-sharp/48/000000/left.png"/>
                   Home
                </a>
              </Link>
              <h2>{work.title}</h2>
              {work.text.map((paragraph) =>(
                <p>{paragraph.p}</p>
              ))}
            </div>
            <div className="container imageContainer">
              <img src={work.projectMock1} />
              {work.codeImg && <img src={work.codeImg}/>}
            </div>
            {work.problem && 
              <section className="container problem">
                <h3>Challenge</h3>
                {
                  work.problem.map((paragraph) => (
                    <p>{paragraph}</p>
                  ))
                }
                <h3>Solution</h3>
                {
                  work.solution.map((solution) => (
                    <>
                    <h4>{solution.title}</h4>
                    <p>{solution.text}</p>
                    <div className={`screensContainer solutions ${!solution.img2 && !solution.img3 && 'oneImg'} ${solution.img2 && !solution.img3 && 'twoImgs'}`}>
                      {solution.img1 && <img src={solution.img1} />} 
                      {solution.img2 && <img src={solution.img2} />} 
                      {solution.img3 && <img src={solution.img3} />} 
                    </div>
                    </>
                  ))
                }
              </section>
            }
            {work.myWork && 
              <div className="graySection">
              <section className="container contribution">
                <h3>My work</h3>
                <p>Here are some screens of pages that I designed and developped from scratch.</p>
                <div className="screensContainer">
                  {work.myWork.map((image) => (
                    <img src={image.img}/>
                  ))}
                </div>
              </section>
            </div>
            }
            <section className="container contribution">
              <h3>Techonologies used</h3>
              <p></p>
              <div className="container techUsed">
                {techUsed.map((tech) => (
                  <img src={tech}/>
                ))}
              </div>
            </section>
        </div>
      ))}
    </div>
    </Post>
  )
}

export default Project