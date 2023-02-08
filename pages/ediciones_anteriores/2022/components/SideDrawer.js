import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import StyledLink from "./StyledLink";
import { useState } from "react";
import Link from "next/link";

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path }, i) => (
        <Typography
          variannt="button"
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
            textTransform: `uppercase`,
          }}
        >
          <Link sx={{ color: "common.white" }} href={path} className="nav-link">
             {title}
          </Link>
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "primary.main",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
/*
<Link href="/"><a className="nav-link">Inicio</a></Link>
        <Link href="/"><a className="nav-link">Programa - Horario</a></Link>
        <Link href="/"><a className="nav-link">Programa - Talleres</a></Link>
        <Link href="/"><a className="nav-link">Programa - Actividades</a></Link>
        <Link href="/"><a className="nav-link">Programa - Challenge</a></Link>
        <Link href="/"><a className="nav-link">Evento - Organizadores</a></Link>
        <Link href="/"><a className="nav-link">Evento - Colaboradores</a></Link>
      <Link href="/"><a className="nav-link">FAQs</a></Link>
        <Link href="/"><a className="nav-link">Contacto</a></Link>*/
