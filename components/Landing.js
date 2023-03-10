import Grid from "@mui/material/Grid";
import Image from "next/image";
import styled from "@emotion/styled"

const Landing = ({ imgSrc, imgAlt, title, subtitle }) => {
    return (
        <Wrapper className="hidden">
            <Grid
                component="section"
                container
                sx={{
                    position: `relative`,
                    height: "95vh",
                    width: `100vw`,
                    overflow: `hidden`,
                }}
            >
                <Image src={imgSrc} alt={imgAlt} width={1280} height={719} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                <Grid
                    container
                    item
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    zIndex="100"
                >
                    <ImageDiv>
                        <Image src="/images/eslogan.png" alt="JTI" width={940} height={155} style={{
                            width: '100%',
                            height: '100%',
                            alignSelf: 'center',
                        }} />
                    </ImageDiv>
                    <br/><br/>
                    <PaddingDiv>
                        <DateTitle>14 y 15 de Marzo de 2023</DateTitle>
                    </PaddingDiv>
                </Grid></Grid>
        </Wrapper>);
}

export default Landing;

const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    margin: 0;
`;

const ImageDiv = styled.div`
width: 52.2rem;
height: 8.6rem;
@media only screen and (max-width: 720px) {
    width: 20.88rem;
    height: 3.44rem;
}
`

const PaddingDiv = styled.div`
padding: 1rem;
justify-content: center;
text-align: center;
align-items: center;
text-size: 3rem;
`;

const DateTitle = styled.h3`
font-size: 3rem !important;
font-weight: 300;
color: #fff;
text-align: center;
justify-content: center;
align-items: center;
@media only screen and (max-width: 720px) {
    font-size: 1.5rem !important;
}
`;