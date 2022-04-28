<template>
  <!-- Footer -->
  <mdb-footer color="#131C2C" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title"><img src="/images/Logo2.svg" alt="" /></h5>
          <p>Increasing access to careers in tech.</p>

          <div class="social-links">
            <!-- <a href="https://twitter.com/ReskillAmerica" target="_blank">
    <img alt="Twitter" rel="noreferrer" src="../../public/images/twitter.svg">
  </a>
  <a href="https://www.instagram.com/reskillamericans/" target="_blank">
    <img alt="Instagram" rel="noreferrer" src="../../public/images/instagram.svg">
  </a>
  <a href="https://www.linkedin.com/company/reskill-americans" target="_blank">
    <img alt="LinkedIn" rel="noreferrer" src="../../public/images/linkedin-in.svg">
  </a>
  <a href="https://www.youtube.com/c/ReskillAmericans" target="_blank">
    <img alt="YouTube" rel="noreferrer" src="../../public/images/youtube.svg">
  </a>
  <a href="https://github.com/reskillamericans" target="_blank">
    <img alt="GitHub" rel="noreferrer" src="../../public/images/github.svg">
  </a>
  <a href="https://www.facebook.com/reskillamericans" target="_blank">
    <img alt="Facebook" rel="noreferrer" src="../../public/images/facebook-f.svg">
  </a> -->
          </div>
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Learn More</a></li>
            <li class="list-unstyled"><a href="#!">Partner</a></li>
            <li class="list-unstyled"><a href="#!">Donate</a></li>
            <li class="list-unstyled"><a href="#!">About Us</a></li>
          </ul>
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Contact Us</a></li>
            <li class="list-unstyled"><a href="#!">Privacy Policy</a></li>
            <li class="list-unstyled"><a href="#!">News and Blog</a></li>
            <li class="list-unstyled"><a href="#!">FAQ</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
