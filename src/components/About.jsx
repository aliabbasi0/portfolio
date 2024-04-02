import { createMarkup } from "../utilities/functions";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";

import { Box } from "@chakra-ui/layout";

//                 <img
//                   src={restMedia?.[2]?.guid?.rendered}
//                   alt={restMedia?.[2]?.alt_text}
//                 />

function About({ restData }) {
  return (
    <section id="about" className="site-about">
      <h1>About</h1>
      <Accordion defaultIndex={[0]} allowMultiple>
        {restData.acf?.accordion_item?.map((item, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    display="flex"
                    alignItems="center"
                  >
                    <span>{item.section_title || "Default Title"}</span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                dangerouslySetInnerHTML={createMarkup(item.section_content)}
              />
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

export default About;
