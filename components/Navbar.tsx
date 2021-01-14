import { Box, Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <Box
      as="nav"
      background="#040F16"
      color="white"
      p={10}
      display="flex"
      justifyContent="flex-end"
      width="100%"
      position={{ base: "initial", lg: "fixed" }}
    >
      <Stack direction="row" spacing={10}>
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/projects" name="Projects" />
      </Stack>
    </Box>
  );
}
