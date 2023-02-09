import styled from "@emotion/styled";
import Image from 'next/image'
import { Container, Grid } from "@mui/material";

const Axis = () => {
    return (
        <IntroDiv>
            <Container>
                <AlignedDiv><Circles><CircleA>⬤</CircleA><CircleB>⬤</CircleB><CircleC>⬤</CircleC></Circles></AlignedDiv>
                <AlignedDiv>
                    <SectionTitle>Los 4 ejes principales del evento</SectionTitle>
                </AlignedDiv>

                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <AlignedDiv>
                            <Image src="/images/work.png" alt="Oportunidades laborales" width={100} height={100} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <AlignedDiv>
                            <JustTitle> Acercar el mercado laboral a los futuros/as ingenieros/as y mostrar sus diferentes realidades. </JustTitle>
                        </AlignedDiv>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <AlignedDiv>
                            <Image src="/images/hand.png" alt="Contactos" width={100} height={100} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <AlignedDiv>
                            <JustTitle> Ayudar a los estudiantes a formar contactos que les podrán ser muy útiles y enriquecedores. </JustTitle>
                        </AlignedDiv>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <AlignedDiv>
                            <Image src="/images/research.png" alt="Estudiantes" width={100} height={100} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <AlignedDiv>
                            <JustTitle> Mostrar la investigación y el emprendimiento como grandes oportunidades de futuro. </JustTitle>
                        </AlignedDiv>
                    </Grid>

                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <AlignedDiv>
                            <Image src="/images/info.png" alt="Información" width={100} height={100} />
                        </AlignedDiv>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <AlignedDiv>
                            <JustTitle> Ofrecer información y oportunidades de descubrir sectores e ideas que probablemente les fueran desconocidos. </JustTitle>
                        </AlignedDiv>
                    </Grid>
                </Grid>
            </Container>
        </IntroDiv>
    )
}

export default Axis;

const IntroDiv = styled.div`
overflow: hidden;
align-items: justify;
justify-content: center;
vertical-align: middle;
text-align: justify;
margin: 0;
padding: 1rem;
min-height: 100vh;
background-color: #83DEFF;
`;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
vertical-align: middle;
align-items: center;
`;

const SectionTitle = styled.h2`
color: #3c3c54;
font-size: 3rem;
padding-bottom: 2rem;
font-weight: 700;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`

const JustTitle = styled.h3`
color: #3c3c54;
font-size: 2rem;
padding: 1rem;
font-weight: 500;
font-family: "Montserrat"
align-items: center;
text-align: center;
;`

const Circles = styled.h2`
font-size: 3.5rem;
padding: 2rem;
font-weight: 700;
font-family: "Montserrat"
;`

const CircleA = styled.span`
color: #FF645F;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"

`;

const CircleB = styled.span`
color: #633CAE;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"

`;

const CircleC = styled.span`
color: #FFEB83;
font-size: 3.5rem;
padding-right: 2rem;
font-weight: 700;
font-family: "Montserrat"
`;