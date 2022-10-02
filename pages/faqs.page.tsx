import type { NextPage } from "next";
import Head from "next/head";
import { faqsData } from "dh-marvel/components/faqs/faqsData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type FAQ = { id: number; question: string; answer: string };

const Faqs: NextPage = () => {
  let faqs: FAQ[] = faqsData;

  return (
    <>
      <Head>
        <title>Preguntas Frecuentes</title>
        <meta name="description" content="Preguntas frecuentes DH Marvel" />
      </Head>
      <BodySingle title={"Preguntas Frecuentes"}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map(({ id, question, answer }) => (
            <>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id={"panel-header" + id}
                  style={{ fontWeight: 600 }}
                >
                  <HelpOutlineIcon style={{ marginRight: 10 }} />
                  {question}
                </AccordionSummary>
                <AccordionDetails>{answer}</AccordionDetails>
              </Accordion>
            </>
          ))}
        </div>
      </BodySingle>
    </>
  );
};

export default Faqs;
