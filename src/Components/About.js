import React from 'react'

function About() {
  return <>
    <section id="about" class="section mt-3">
        <div class="container mt-5">
            <div class="row text-center text-md-left">
                <div class="col-md-3">
                    <img src="assets/imgs/avatar.jpg" alt="" class="img-thumbnail mb-4"/>
                </div>
                <div class="pl-md-4 col-md-9">
                    <h6 class="title">Kathiravan Arjunan</h6>
                    <p class="subtitle">Full Stack Web Developer (MERN)</p>
                    <p>I am a highly motivated and enthusiastic individual with a strong passion for creating visually 
appealing and user-friendly websites. I possess a solid foundation in HTML, CSS, and 
JavaScript, along with a good understanding of modern frameworks such as ReactJS, NodeJS, 
MongoDB, ExpressJS</p>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p> */}
                    <button class="btn btn-primary rounded mt-3">DOWNLOAD CV</button>                   
                </div>
            </div>
        </div>
    </section>
  </>
}

export default About