import SimpleImageSlider from "react-simple-image-slider";
import b1 from "../img/uban1.jpg"
import b2 from "../img/uban2.jpg"
import b3 from "../img/uban3.jpg"
import b4 from "../img/uban4.jpg"
const images = [
  { url: b1 },
  { url: b2 },
  { url: b3 },
  { url: b4 },
]
 

export default function Slider () {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"90vh"}
        images={images}
        showBullets={false}
        showNavs={true}
        slideDuration={2}
        loop="true"
        autoPlay={"true"}
        autoPlayDelay={1}
      />
    </div>
  );
}