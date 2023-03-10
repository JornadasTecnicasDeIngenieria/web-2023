import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import Image from "next/image";
import { StandList14, StandList15 } from "@components/StandList";
import { stands } from "data/stands";

const Stands = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <br />
          <br />
          <AlignedDiv>
            <Title>Stands</Title>
          </AlignedDiv>
          <AlignedDiv>
            <Circles>
              <CircleB>⬤</CircleB>
              <CircleO>⬤</CircleO>
              <CircleY>⬤</CircleY>
            </Circles>
          </AlignedDiv>
          <DescriptionText>
            Los Stands son el núcleo del evento. En estos puestos, las empresas
            podrán tener un contacto directo y estrecho con los alumnos de la
            ESIT, brindándoles la oportunidad de informar al estudiantado
            universitario de las ingenierías acerca de su actividad, perfiles
            profesionales que demandan, funcionamiento de la empresa...
          </DescriptionText>
          <DescriptionText>
            En estos stands, las empresas tendrán libertad de organización para
            exponer su trabajo y atraer a los visitantes del evento. Por
            ejemplo, se podrán traer folletos informativos sobre los
            departamentos de la empresa o sus programas de prácticas. Aquellas
            empresas centradas en el desarrollo podrán traer productos, para que
            los visitantes los descubran. También podrán contar con vídeos donde
            muestren sus proyectos más innovadores, por ejemplo. Cualquier
            iniciativa con fines formativos o de interés es bienvenida.
          </DescriptionText>
          <br />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ImageDiv>
                <Image
                  src="/images/stands/stand1.png"
                  alt="Forma del stand"
                  width={400}
                  height={300}
                  style= {{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </ImageDiv>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ImageDiv>
                <Image
                  src="/images/stands/stand2.png"
                  alt="Ejemplo del stand"
                  width={400}
                  height={300}
                  style= {{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </ImageDiv>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ImageDiv>
                <Image
                  src="/images/stands/stand3.png"
                  alt="Stand desde arriba"
                  width={400}
                  height={300}
                  style= {{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </ImageDiv>
            </Grid>
          </Grid>
          <br />
        </Container>
      </Section>
      <Section>
        <Container>
          <AlignedDiv>
            <Circles>
              <CircleB>⬤</CircleB>
              <CircleO>⬤</CircleO>
              <CircleY>⬤</CircleY>
            </Circles>
          </AlignedDiv>
          <br />
          <AlignedDiv>
            <Category>Distribución de los Stands</Category>
          </AlignedDiv>
          <br />
          <br />
          <ImageDiv>
            <Image
              src="/images/plano_2023.png"
              alt="Plano de los Stands"
              width={1200}
              height={600}
              style= {{
                width: "100%",
                height: "100%",
              }}
            />
          </ImageDiv>
          <br />
          <br />
          <br />
          <AlignedDiv>
            <StandList14 content={stands} />
          </AlignedDiv>
          <br />
          <br />
          <br />
          <br />
          <AlignedDiv>
            <StandList15 content={stands} />
          </AlignedDiv>          
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Section>
    </Layout>
  );
};

export default Stands;

const AlignedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  background-color: #3c3c54;
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  overflow: hidden;
  @media (max-width: 760px) {
    width: 93vw;
  }
`;

const Title = styled.h2`
  color: #ffffff;

  font-weight: 900;
`;

const Category = styled.h3`
  color: #ffffff;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
`;

const DescriptionText = styled.p`
  color: #ffffff;

  font-weight: 500;
  font-family: "Montserrat";
`;

const Circles = styled.h3`
  padding: 2rem;
  font-weight: 700;
`;

const CircleY = styled.span`
  color: #ffeb83;
  font-weight: 700;
`;

const CircleO = styled.span`
  color: #ff645f;
  padding-right: 2rem;
  font-weight: 700;
`;

const CircleB = styled.span`
  color: #83deff;
  padding-right: 2rem;
  font-weight: 700;
`;
