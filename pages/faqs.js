import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Grid, Container } from "@mui/material"

const FAQs = () => {

    return (
        <Layout>
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>Preguntas Frecuentes</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <DescriptionText><Highlight>1. ¿Qué son las Jornadas Técnicas de Ingeniería (JTI)?</Highlight></DescriptionText>
                <DescriptionText>Son un evento anual y de libre acceso organizado por el alumnado de distintas ingenierías que tiene lugar en la Escuela Superior de Ingeniería y Tecnología. Las JTI proporcionan una gran oportunidad para conocer la realidad del mundo laboral gracias a los stands de las empresas que acuden al evento, por lo que resultan especialmente interesantes para los estudiantes de ingenierías y ciclos de informática o industriales. Además, cuentan con muchas actividades y premios. ¡No te las puedes perder!</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>2. ¿Serán online o presenciales?</Highlight></DescriptionText>
                <DescriptionText>Cómo sucedió el año pasado, las JTI 2023 serán totalmente presenciales y contarán con los stands de las empresas físicamente.</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>3. ¿Dónde tendrán lugar?</Highlight></DescriptionText>
                <DescriptionText>Tendrán lugar en la Escuela Superior de Ingeniería y Tecnología de la ULL. El evento se desarrollará en la planta baja del edificio, donde habrán varios puestos de información. el plano del evento se puede encontrar en la sección Stands.</DescriptionText>
                <br/>
                <AlignedDiv>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8843542963173!2d-16.324075784507027!3d28.483029197581732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cda3fa06883d%3A0x16fb5f572e86cb7f!2sEscuela%20Superior%20de%20Ingenier%C3%ADa%20y%20Tecnolog%C3%ADa!5e0!3m2!1ses!2ses!4v1644091084494!5m2!1ses!2ses"
                        width="500"
                        height="375"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </AlignedDiv>
                <br/><br/><br/>
                <DescriptionText><Highlight>4. ¿Cuándo serán?</Highlight></DescriptionText>
                <DescriptionText>La edición JTI 2023 se celebrará el martes 14 y el miércoles 15 de marzo de 2023. ¡Apúntalos en tu calendario!</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>5. ¿Necesito comprar entrada?</Highlight></DescriptionText>
                <DescriptionText>Las Jornadas Técnicas de Ingeniería son un evento gratuito y de libre acceso, por lo que cualquier persona puede asistir al evento, incluidas aquellas ajenas a la Universidad.</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>6. ¿Qué ingenierías participan?</Highlight></DescriptionText>
                <DescriptionText>Las Jornadas Técnicas de Ingeniería se organizan en torno a los cuatro grados de ingeniería que se imparten en la ESIT: Ingeniería Electrónica Industrial y Automática, Ingeniería Química Industrial, Ingeniería Mecánica e Ingeniería Informática.</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>7. ¿Quiénes pueden asistir?</Highlight></DescriptionText>
                <DescriptionText>Aunque estén destinadas principalmente al alumnado de las distintas ingenierías, las Jornadas Técnicas de Ingeniería son de libre acceso, por lo que cualquier persona interesada puede asistir aunque sea ajena a la Universidad.</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>8. ¿Qué son los stands?</Highlight></DescriptionText>
                <DescriptionText>Son espacios físicos en los que las empresas muestran información sobre su actividad y los productos o servicios que ofrecen. Son una oportunidad de oro para conocer de primera mano el estado del mundo laboral y hacer contactos. En la sección Stands podrás encontrar una lista de los stands del evento y su ubicación.</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>9. ¿Desde cuándo se han celebrado ls jornadas?</Highlight></DescriptionText>
                <DescriptionText>Las Jornadas Técnicas de Ingeniería llevan celebrándose desde el año 2019. A causa del coronavirus, la edición 2020 no se pudo celebrar y la 2021 fue completamente online. El año 2022 se logró que las JTI volvieran a ser presenciales y fueron todo un éxito. ¡Qué esperamos que se repita en esta cuarta edición 2023!</DescriptionText>
                <br/><br/>
                <DescriptionText><Highlight>10. ¿Cómo puedo hacer llegar mis sugerencias y dudas?</Highlight></DescriptionText>
                <DescriptionText>Nos puedes hacer llegar tus sugerencias a través de <DescriptionLink href="https://forms.gle/xXHuS8m2xrrz2vat8">este formulario</DescriptionLink> y estamos disponibles en nuestras redes sociales y nuestro correo jtiesit@ull.edu.es para cualquier duda que te pueda surgir.</DescriptionText>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                <br/>
                </Container></Section>
        </Layout>
    )
}

export default FAQs;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Section = styled.div`
background-color: #3c3c54;`

const ImageDiv = styled.div`
display: flex;
align-items: center;
border-radius: 1.5rem;
overflow: hidden;
`;

const Title = styled.h2`
color: #ffffff;
font-size: 6rem;
font-weight: 900;`

const DescriptionText = styled.p`
color: #ffffff;
font-weight: 500;
font-family: 'Montserrat'`

const DescriptionLink = styled.a`
color: #ffffff;
font-weight: 500;
font-family: 'Montserrat'`

const Highlight = styled.span`
color: #ffffff;
font-size: 1.5rem;
font-weight: 700;
font-family: 'Montserrat'`

const Circles = styled.h3`
padding: 2rem;
font-weight: 700;`;

const CircleY = styled.span`
color: #FFEB83;
font-weight: 700;`;

const CircleO = styled.span`
color: #FF645F;
padding-right: 2rem;
font-weight: 700;`;

const CircleB = styled.span`
color: #83DEFF;
padding-right: 2rem;
font-weight: 700;`;