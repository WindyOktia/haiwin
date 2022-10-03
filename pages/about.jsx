const AboutPage = () => {
  return (
    <>
      <img src="https://avatars.githubusercontent.com/u/49028329?v=4"
        style={{"borderRadius":"10px", "width":"20%"}}
        alt="" 
        srcset="" 
      />
      <h3 style={{"marginTop":"30px"}}>A Little Bit About Me</h3>
      <p style={{"marginTop":"30px"}}>
        i'am a web developer enthusiast. Always seeking for a new experience through a case study to solve a problem. <br /> Also, learning a new thing like latest popular framework is fun for me
      </p>

      <h3 style={{"marginTop":"50px",}}> Stack</h3>
      <div 
        style={{
          "marginTop":"20px",
          "display":"grid"
        }}
        >
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Laravel
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          React JS
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Next JS
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Axios
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Google Firebase
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Ajax
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Jquery
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Bootstrap
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          CSS
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          HTML
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Version Control
        </div>
        <div style={{
          "width":"300px",
          "background":"#00000059",
          "padding":"10px 20px",
          "margin":"2px"
        }}>
          Wordpress
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
