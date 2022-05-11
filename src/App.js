import "./App.css";
import { blogList } from "./blog-list.js";
import { motion, Variants } from "framer-motion";

const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
 }

}

function Card({ image, h2, p,id }) {
  return (
    <motion.div className="card" id={id}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
    >
      <motion.div className="image-container"       
        variants={imageAnimate}
      >{image}</motion.div>
      <motion.h2 
        variants={textAnimate}
      >{h2}</motion.h2>
      <motion.p
         variants={textAnimate}     
      >{p}</motion.p>
    </motion.div>
  );
}

export default function App() {
  return blogList.map((item, index) => (
      <div className="card-wrapper" key={index}>
          <Card image={item.image} h2={item.h2} p={item.p}  />
      </div>
  ));
}

