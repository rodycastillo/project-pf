import Image from "next/image";
import bg from '../../../../public/background/home-background.png'
import { ProjectList } from "../../components/projects";
import { projectsData } from "../../data";
import { RenderModel } from "../../components/RenderModel";
import StaffModel from "../../components/models/Staff";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="w-full fixed top-0 left-0 h-full object-cover object-center opacity-25" />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 -left-24 z-10 h-screen">
        <RenderModel>
          <StaffModel />
        </RenderModel>
      </div>
    </>
  );
}
