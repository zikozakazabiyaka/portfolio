import React from "react";

import Container from "../../../components/Layout/Container";
import Summary from "../../../components/Pages/Summary";
import Section from "../../../components/Layout/Section";
import SectionInner from "../../../components/Layout/Container/SectionInner";
import SectionItem from "../../../components/Layout/Section/SectionItem";
import SectionTitle from "../../../components/Layout/Section/SectionTitle";
import SectionList from "../../../components/Layout/Section/SectionList";
import SectionListItem from "../../../components/Layout/Section/SectionListItem";
import SectionLink from "../../../components/Layout/Section/SectionLink";
import { PageTitle } from "../../../components/PageTitle";

const SummaryContainer = () => (
  <>
    <PageTitle>Summary</PageTitle>
    <Container>
      <Summary>
        <Section>
          <SectionInner>
            <SectionItem>
              <h2>Dmitriy Plieshakov</h2>
              <SectionTitle><h3>Fronted Developer</h3></SectionTitle>
            </SectionItem>
            <SectionItem align="right">
              <SectionList listStyle='none'>
                <SectionListItem>
                  <SectionLink
                    href="tel:380631147793"
                    decoration="none"
                    color="inherit"
                  >
                    +38 063 114 77 93
                  </SectionLink>
                  <SectionLink
                    href="https://t.me/Dmitriy_Pleshakov"
                    target="_blank"
                  >
                    telegram
                  </SectionLink>
                </SectionListItem>
                <SectionListItem>
                  <SectionLink
                    href="mailto: dmitriypleshakov1@gmail.com"
                    decoration="none"
                    color="inherit"
                  >
                    dmitriypleshakov1@gmail.com
                  </SectionLink>
                </SectionListItem>
                <SectionListItem>
                  <SectionLink
                    href="https://github.com/zikozakazabiyaka"
                    target="_blank"
                  >
                    GitHub
                  </SectionLink>
                  <SectionLink
                    href="https://www.linkedin.com/in/dmitriy-pleshakov-84468921a/"
                    target="_blank"
                  >
                    LinkedIn
                  </SectionLink>
                </SectionListItem>
                <SectionListItem>
                  <>Kyiv, Ukraine</>
                </SectionListItem>
              </SectionList>
            </SectionItem>
          </SectionInner>
        </Section>
        <Section>
        <SectionTitle color="brown"><h3>Summary</h3></SectionTitle>
          <p>
            Motivated and development-oriented person with experience in Frontend development. I am
            keen on writing clean and maintainable code and finding user-friendly solutions. My
            experience ranges from pure HTML5, CSS to JavaScript, TypeScript, React framework. I get on
            well with people at all levels, can easily make good working relationships.
          </p>
        </Section>
        <Section>
          <SectionTitle color="brown"><h3>Skills</h3></SectionTitle>
          <SectionList>
            <SectionListItem>
              <><b> Programming languages:</b> JavaScript, TypeScript</>
            </SectionListItem>
            <SectionListItem>
              <>
                <b className="section__list-item section__list-item--bold">Technologies:</b> HTML, CSS, Sass (SCSS), React, JSON
              </>
            </SectionListItem>
            <SectionListItem>
              <>
                <b className="section__list-item section__list-item--bold">IDE:</b> VSCode, Chrome DevTools
              </>
            </SectionListItem>
            <SectionListItem>
              <>
                <b className="section__list-item section__list-item--bold">Methodologies:</b> BEM
              </>
            </SectionListItem>
            <SectionListItem>
              <>
                <b className="section__list-item section__list-item--bold">Tools:</b> Git, Figma, NPM, Trello
              </>
            </SectionListItem>
          </SectionList>
        </Section>
        <Section>
          <SectionTitle color="brown"><h3>Education</h3></SectionTitle>
          <b className="section__item section__item--bold">Mate Academy</b>
          <SectionList>
            <SectionListItem>
              <>Full-time frontend course</>
            </SectionListItem>
          </SectionList>
        </Section>
        <Section>
          <SectionTitle color="brown"><h3>Experience</h3></SectionTitle>
          <b className="section__item section__item--bold">Game Observer at Starladder (2018-2020)</b>
          <SectionList>
            <SectionListItem>
              <>Observation of games</>
            </SectionListItem>
            <SectionListItem>
              <>
                Translations of games at streaming platform
                <SectionLink
                    href="https://www.twitch.tv/"
                    target="_blank"
                  >
                    twitch
                  </SectionLink>
              </>
            </SectionListItem>
          </SectionList>
        </Section>
        <Section>
          <b className="section__item--bold">Frontend Developer (2020 - present)</b>
        </Section>
        <Section>
          <b className="section__item--bold">JavaScript & Corezoid Developer at IdeaBank (2021 - 2022)</b>
          <SectionList>
            <SectionListItem>
              <>Creation of business processes</>
            </SectionListItem>
            <SectionListItem>
              <>Creation of a mobile application O.Bank 2.0</>
            </SectionListItem>
            <SectionListItem>
              <>working with SOAP & REST API</>
            </SectionListItem>
          </SectionList>
        </Section>
      </Summary>
    </Container>
  </>
);

export default SummaryContainer;
