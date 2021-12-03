

// export default function ImageSlider() {
//   const data = [
//     {
//       id: "1",
//       icon: img1,
//       title: "Web Design",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       img:
//         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
//     },
//     {
//       id: "2",
//       icon: img2,
//       title: "Mobile Application",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg"
//     },
//     {
//       id: "3",
//       icon: img3,
//       title: "Branding",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg"
//     }
//   ];
//   return (
//     <div style={{textAlign:"center", fontFamily:"sans-serif"}}>
//       <AwesomeSlider>
//         {data.map((d) => (
          
//           <AwesomeSlider>
//               <img src={d.icon}/>
//           </AwesomeSlider>
//         ))}
//       </AwesomeSlider>
//     </div>
//   );
// }




import img1 from "../../Assets/hpimg1.png";
import img2 from "../../Assets/hmimg2.png";
import img3 from "../../Assets/hmimg3.png";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export default ImageSlider;
