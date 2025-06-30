import SectionHeader from "./sectionHeader";
import { FaStar , FaBookOpen , FaChevronRight  } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";


const coursesData = [
  {
    id: 1,
    img: '../assets/graphic_design.jpg',
    department: "Graphic Design",
    title: "UI & UX Design",
    rating: "4.7",
    description:
      "Unlock your creativity with our UI & UX course! Learn essential design principles, master industry-leading tools, and create stunning visuals to bring your ideas to life.",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 Lessons",
  },
  {
    id: 2,
    img: '../assets/web.jpg',
    department: "Software Development",
    title: "Project Design",
    rating: "4.6",
    description:
    "Transform ideas into actionable plans with our project design course! Learn to structure,organize, and execute projects effectively using professional tools and techniques.",
    sales: "160",
    price: "$15.99",
    discount: "$7.99",
    duration: "30hr 30min",
    lessons: "121 Lessons",
},
{
    id: 3,
    img: '../assets/project_design.png',
    department: "Web Development",
    title: "HTML & CSS",
    rating: "4.9",
    description:
      "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, responsive websites from scratch with hands-on projects and practical skills.",
    sales: "288",
    price: "$10.99",
    discount: "$8.99",
    duration: "16hr 40min",
    lessons: "107 Lessons",
  },
];



function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title="Make Online education acessible"
          description="Education is the most powerful tool to unlock potential, ignit curiosity,and shape a brighter future. At our plateform, we believe in making learning accessible, engaging, and transformative, empowering students to achieve their dreams and build the skills they need for success in an ever-changing world."
        />

        <div className="courses-container">
            {coursesData.map(({id , img , department , title , rating , description , sales , price , discount , duration , lessons }) => (
                    <div key={id} className="course">
                        <span className="sale">Sale</span>
                        <img src={img} alt={title} />
                        <div className="content">
                            <div className="course-field">
                                <p className="department">{department}</p>
                                <p className="rating"> <FaStar /> {rating}</p>
                            </div>

                            <h3>{title}</h3>
                            <p className="decription">{description}</p>
                            <p className="sales"> {sales} Sales </p>
                            <p className="price">
                                <del>{price}</del>
                                <span className="text-secondary">{discount}</span>
                            </p>
                            <div className="course-info">
                                <p> <IoMdAlarm /> {duration} </p>
                                <p> <FaBookOpen /> {lessons} </p>  
                            </div>
                            <a href="#" className="btn-learn">Learn More <FaChevronRight /></a>
                        </div>
                    </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
