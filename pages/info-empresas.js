import Layout from "@components/layouts/MainLayout";
import styled from "@emotion/styled"
import { Container } from "@mui/material"

const Info = () => {

    return (
        <Layout>
            <Section><Container>
                <br/><br/>
                <AlignedDiv><Title>Información para Empresas</Title></AlignedDiv>
                <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>

                <Infodiv>
                    <Category>
                        Objetivos
                    </Category>
                    <ul>
                        <DescriptionListElement>Acercar las empresas a los/as futuros/as ingenieros/as </DescriptionListElement>
                        <DescriptionListElement>Mostrar el emprendimiento como salida profesional </DescriptionListElement>
                        <DescriptionListElement>Mostrar la investigación como fuente de innovación hacia la sociedad</DescriptionListElement>
                    </ul>
                    <br/>
                    <Category>Fechas y ubicación</Category>
                    <DescriptionText>Las Jornadas Técnicas de Ingeniería tendrán lugar los días 14 y 15 de marzo de 2023 en la Escuela Superior de Ingeniería y Tecnología (ESIT) de la Universidad de La Laguna (ULL), Tenerife, Islas Canarias.</DescriptionText>
                    <br/>
                    <Category>Organización</Category>
                    <DescriptionText>Las Jornadas Técnicas de Ingeniería están organizadas por el propio estudiantado universitario de las cuatro ingenierías de la ESIT de la Universidad de La Laguna, con el apoyo y colaboración de la Escuela Superior de Ingeniería y Tecnología de la Universidad de La Laguna.</DescriptionText>
                    <br/>
                    <Category>Ingenierías</Category>
                    <DescriptionText>El evento se desarrolla sobre las cuatro ingenierías que se imparten en la Escuela Superior de Ingeniería y Tecnología de la ULL:</DescriptionText>
                    <br />
                    <ul>
                        <DescriptionListElement>Grado en Ingeniería Informática</DescriptionListElement>
                        <DescriptionListElement>Grado en Ingeniería Mecánica</DescriptionListElement>
                        <DescriptionListElement>Grado en Ingeniería Electrónica Industrial y Autómata</DescriptionListElement>
                        <DescriptionListElement>Grado en Ingeniería Química Industrial</DescriptionListElement>
                    </ul>
                    <br/>
                    <Category>Stands</Category>
                    <DescriptionText>La información más importante respecto a los stands es:</DescriptionText>
                    <ul>
                        <DescriptionListElement>Pueden encontrar los planos con la ubicación de los stands en la página Stands. </DescriptionListElement>
                        <DescriptionListElement>Antes de ocupar un Stand deberán acudir al Puesto Central de Información para recoger sus acreditaciones.</DescriptionListElement>
                        <DescriptionListElement>La Universidad desplegará una red wifi para el evento.</DescriptionListElement>
                        <DescriptionListElement>Dispondremos de un catering durante media mañana ambos días del evento con aperitivos para los representantes de empresas y entidades que se encuentren en los stands.</DescriptionListElement>
                        <DescriptionListElement>Tiene total libertad para entrar y salir de la JTI y podrán almorzar cuando estimen oportuno. La ESIT dispone de una Cafetería en la misma planta.</DescriptionListElement>
                        <DescriptionListElement>La hora en la que se estima máxima afluencia de estudiantes es a las 14:00, ya que finalizan las clases del turno de mañana, y comienzan las de tarde, por lo que coinciden ambos grupos. Les recomendamos por lo tanto que estén en el stand durante esas horas. </DescriptionListElement>
                        <DescriptionListElement>Lo ideal en este espacio es dar a conocer la empresa, así como sus proyectos, tecnologías y ofertas laborales o de prácticas en la actualidad.</DescriptionListElement>
                        <DescriptionListElement>En el stand se incluyen dos sillas, una mesa y un punto de corriente con regleta facilitada por la ESIT. Si no van a hacer uso de la mesa, se retirará.</DescriptionListElement>
                        <DescriptionListElement>Por parte de la organización realizaremos cada uno de los días un pequeño concurso entre los stands de las empresas participantes, premiando aquel que resulte más atractivo a los estudiantes con el objetivo de motivarles a que logren una presentación atractiva.</DescriptionListElement>
                        <DescriptionListElement>Tienen libertad de organización para exponer su trabajo y atraer a los visitantes del evento. Cualquier iniciativa con fines formativos o de interés es bienvenida.</DescriptionListElement>
                        <DescriptionListElement>El horario será de 10:30 a 18:30. Podrán acudir a preparar los stands desde las 10:00 si les es posible. </DescriptionListElement>
                    </ul>
                    <br/>
                    <Category>Actividades</Category>
                    <DescriptionText>Otro de los múltiples objetivos de las Jornadas Técnicas de Ingeniería es la unión entre estudiantes, para ello proponemos llevar a cabo una serie de dinámicas que favorezcan la integración de todos los universitarios de los grados de ingeniería de la ESIT.</DescriptionText>
                    <DescriptionText>El concurso del Mejor Stand que se llevará acabo ambos días del evento tiene como objetivo premiar el esfuerzo y favorecer una competitividad sana por parte de las empresas para ganar el interés de los asistentes. Cada día, los asistentes podrán votar a su stand favorito o el que más le ha gustado. A las 17:30 se hará un recuento de los votos, tras lo que se anunciará el stand ganador que será premiado con un diploma y una publicación especial en las redes sociales del evento.</DescriptionText>
                    <br/>
                    <Category>Empresas y entidades que han colaborado otros años</Category>
                    <DescriptionText>En años anteriores hemos contado con la colaboración de las siguientes empresas y entidades entre muchas otras:</DescriptionText>
                    <ul>
                        <DescriptionListElement>The Agile Monkeys</DescriptionListElement>
                        <DescriptionListElement>AcidTango</DescriptionListElement>
                        <DescriptionListElement>Open Canarias</DescriptionListElement>
                        <DescriptionListElement>Fonteide</DescriptionListElement>
                        <DescriptionListElement>FECAM</DescriptionListElement>
                        <DescriptionListElement>Mutua Tinerfeña</DescriptionListElement>
                        <DescriptionListElement>Leanmind</DescriptionListElement>
                        <DescriptionListElement>FIFEDE</DescriptionListElement>
                        <DescriptionListElement>Cabildo de Tenerife</DescriptionListElement>
                        <DescriptionListElement>COITIC</DescriptionListElement>
                        <DescriptionListElement>COITITF</DescriptionListElement>
                        <DescriptionListElement>Expero</DescriptionListElement>
                        <DescriptionListElement>Instituto Astrofísico de Canarias</DescriptionListElement>
                        <DescriptionListElement>Binter</DescriptionListElement>
                    </ul>
                    <br />
                    <Category>Agradecimientos</Category>
                    <DescriptionText>Desde el equipo organizador de las Jornadas Técnicas de Ingeniería 2023 agradecemos a todas aquellas entidades y empresas que colaboran, participan y/o aportan al evento apostando por el talento joven, profesional y cualificado.</DescriptionText>
                    <AlignedDiv><Circles><CircleB>⬤</CircleB><CircleO>⬤</CircleO><CircleY>⬤</CircleY></Circles></AlignedDiv>
                </Infodiv>
            </Container></Section>
        </Layout>
    )
}

export default Info;

const AlignedDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Section = styled.div`
background-color: #3c3c54;`

const Title = styled.h2`
color: #ffffff;
font-weight: 900;
text-align: center;`

const Category = styled.h3`
color: #ffffff;
font-weight: 700;
font-family: 'Montserrat', sans-serif;`

const DescriptionText = styled.p`
color: #ffffff;
font-size: 1.5rem;
font-weight: 500;
font-family: 'Montserrat'`

const DescriptionListElement = styled.li`
color: #ffffff;
font-weight: 500;
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

const Infodiv = styled.div`
align-items: justify;
align-text: justify;
text-justify: inter-word;
font-family: "Montserrat";
`