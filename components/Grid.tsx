import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import React from 'react'

const Grid = () => {
  return (
    <section id="about">
    <BentoGrid>
        {gridItems.map(({title,description,id,className,img,imgClassName,titleClassName,spareImg,aboutsection}) => (
            <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            aboutsection={aboutsection}
            />
        ))
        }
        
    </BentoGrid>

</section>
  )
}

export default Grid

