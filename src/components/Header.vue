<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#"
      ><img src="/images/Logo.svg" alt=""
    /></MDBNavbarBrand>
    <MDBNavbarToggler target="#navbarText"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarText">
      <template v-slot:contentRight>
        <MDBNavbarItem class="navbar-text" href="#"> Learn more </MDBNavbarItem>
        <MDBNavbarItem class="navbar-text" href="#"> Partner </MDBNavbarItem>
        <MDBNavbarItem class="navbar-text" href="#"> Donate </MDBNavbarItem>
        <MDBNavbarItem class="navbar-text" href="#"> About us </MDBNavbarItem>
        <MDBNavbarItem class="navbar-text" href="#"> News </MDBNavbarItem>
        <MDBNavbarItem class="navbar-text" href="#"> FAQS </MDBNavbarItem>
      </template>
    </MDBNavbarNav>
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdbvue";
export default {
  components: {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
  },
};
</script>
