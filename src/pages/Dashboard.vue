<template>
  <div class="grid">
    <!-- {{ boardData }} -->
    <div v-for="members in boardData" :key="members.id" class="grid-card">
      <figure class="effect-zoe">
        <div class="top-img">
          <img :src="members.img" alt="img25" />
          <span class="badge"></span>
        </div>

        <figcaption>
          <div class="movie">
            <q-btn @click="viewMember(members)" class="view"
              >View Profile</q-btn
            >
            <!-- <h4>Creative <span>Zoe</span></h4> -->
            <!-- <p class="icon-links">
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-facebook"></i></span
              ></a>
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-twitter"></i></span
              ></a>
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-linkedin"></i></span
              ></a>
            </p> -->
          </div>
        </figcaption>
      </figure>

      <div class="holert">
        <div class="det">
          <strong>{{ members.name }}</strong>
          <small>{{ members.position }}</small>
        </div>

        <p class="lead">
          {{ members.desc }}
        </p>
        <span class="prev">Previously At</span>

        <img :src="members.previous" alt="" />
      </div>

      <q-btn @click="viewMember(members)" class="profile">View Profile</q-btn>
    </div>
    <!-- <div class="grid-card">
      <figure class="effect-zoe">
        <div class="top-img">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/26.jpg"
            alt="img26"
          />
          <span class="badge"></span>
        </div>

        <figcaption>
          <div class="movie">
            <button class="view">View Profile</button>
            <p class="icon-links">
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-facebook"></i></span
              ></a>
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-twitter"></i></span
              ></a>
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-linkedin"></i></span
              ></a>
            </p>
          </div>
        </figcaption>
      </figure>
      <div class="holert">
        <div class="det">
          <strong>Emmanuel Nwabuodafi</strong>
          <small>Javascript Developer</small>
        </div>

        <p class="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iste
          nostrum similique repellendus quos, iure nihil magni velit vitae
          expedita aliquam quia incidunt ad distinctio animi, eum nesciunt
          officiis nisi tempora maiores corporis, sit est. Aliquid eos id neque
          a nesciunt, culpa earum tempore, itaque exercitationem optio eum
          aperiam et!
        </p>
        <span class="prev">Previously At</span>

        <img
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157722/previous_company_logo-a2e4bba7a9d3357f6581c2ad6e72f0a1.svg"
          alt=""
        />
      </div>

      <button class="profile">View Emmanuel</button>
    </div>

    <div class="grid-card">
      <figure class="effect-zoe">
        <div class="top-img">
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/26.jpg"
            alt="img26"
          />
          <span class="badge"></span>
        </div>

        <figcaption>
          <div class="movie">
            <button class="view">View Profile</button>
            <p class="icon-links">
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-facebook"></i></span
              ></a>
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-twitter"></i></span
              ></a>
              <a href="#"
                ><span><i class="fa-brands fa-1.3x fa-linkedin"></i></span
              ></a>
            </p>
          </div>

          
        </figcaption>
      </figure>

      <div class="holert">
        <div class="det">
          <strong>Emmanuel Nwabuodafi</strong>
          <small>Javascript Developer</small>
        </div>

        <p class="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta iste
          nostrum similique repellendus quos, iure nihil magni velit vitae
          expedita aliquam quia incidunt ad distinctio animi, eum nesciunt
          officiis nisi tempora maiores corporis, sit est. Aliquid eos id neque
          a nesciunt, culpa earum tempore, itaque exercitationem optio eum
          aperiam et!
        </p>
        <span class="prev">Previously At</span>

        <img
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157686/previous_company_logo-a7152901e4945b193313d5a80f9ff0d0.svg"
          alt=""
        />
      </div>

      <button class="profile">View Emmanuel</button>
    </div> -->

    <q-dialog full-width v-model="fixed">
      <q-card style="height: 65%">
        <div class="delp">
          <q-card-section>
            <!-- <div class="text-h6">{{ profile.name }}</div> -->
            <img :src="profile.img" alt="" class="imgg" />
          </q-card-section>

          <!-- <q-separator /> -->

          <q-card-section class="scroll">
            <div class="detr">
              <h5>{{ profile.name }}</h5>
              <!-- <small>{{ profile.position }}</small> -->
            </div>
            <p class="mk-lead">
              {{ profile.longerDesc }}
            </p>
          </q-card-section>
        </div>

        <!-- <q-separator /> -->

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      //   basic: ref(false),
      fixed: ref(false),
    };
  },
  data() {
    return {
      profile: null,
      boardData: [
        {
          id: 1,
          name: "Nana Aisha Tijani",
          position: "position",
          desc: "Nana Aisha Tijani is the President of the National Horticultural Society and Member, All Farmers Association. She has multi-talented in various Agribusiness practices and has led a plethora of agro-based organizations and cooperatives. She holds a Post Graduate Diploma in Management from the University of Jos and a BSc.",
          longerDesc:
            "Nana Aisha Tijani is the President of the National Horticultural Society and Member, All Farmers Association. She has multi-talented in various Agribusiness practices and has led a plethora of agro-based organizations and cooperatives. She holds a Post Graduate Diploma in Management from the University of Jos and a BSc. (Building) from Ahmadu Bello University, Zaria, Kaduna. Her leadership prowess has accorded her the offices of Training Development Officer in the Industrial Training Fund (ITF) Jos, Director – IBTC and Association, Managing Director – FIFABS Company Limited and President – Abuya Multipurpose Society. She is married with children.",
          state: "Ile de France",
          img: "/images/madam.jpeg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157686/previous_company_logo-a7152901e4945b193313d5a80f9ff0d0.svg",
        },
        {
          id: 2,
          name: "Yomi Jemibewon",
          position: "position",
          desc: "Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. ",
          longerDesc: `Yomi Jemibewon is a Managing Director at CCA and brings to the role close to two decades of experience from a background in investing and management consulting. Prior to CCA, Yomi co-founded CardinalStone Partners, and led the Principal Investments Division. Before this, he was a Vice President at Avante Capital in Lagos, and a strategy consultant with Bain & Company in New York.
            Yomi holds an MBA from The Wharton School of the University of Pennsylvania, and a B.Sc. and M.Sc. in Electrical Engineering from Virginia Tech. 

            Yomi is also the author of the book, 'Risk and Retur'; a book which chronicles his return to Nigeria and the entrepreneurial and life journey that ensued thereafter.`,
          state: "Ile de France",
          img: "/images/yomi.jpg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157722/previous_company_logo-a2e4bba7a9d3357f6581c2ad6e72f0a1.svg",
        },
        {
          id: 3,
          name: "Felix Onwuchekwa NWABUKO FCA ACIT MBA MIoD",
          position: "position",
          desc: "Felix Onwuchekwa Nwabuko is a Chartered Accountant and award winning business leader with extensive multi sector global experience in consultancy, agriculture, manufacturing and education sectors.  He has special professional interest in strategy, corporate governance, and leadership. ",
          longerDesc: `Felix Onwuchekwa Nwabuko is a Chartered Accountant and award winning business leader with extensive multi sector global experience in consultancy, agriculture, manufacturing and education sectors.  He has special professional interest in strategy, corporate governance, and leadership.  He is a Fellow of Institute of Chartered Accountants of Nigeria, Associate of Chartered Institute of Taxation Nigeria, Alumni of both Manchester Business School, United Kingdom and University of Benin, Nigeria, and member of the Institute of Directors in the United Kingdom.  He is, among others, a key advisor for State and National strategic development in agriculture and other socio-economic priority areas, expert in management of large-scale industrial oil palm plantations and processing enterprises in the oil palm and vegetable oil industry within and outside Nigeria, member of the Executive Leadership Group of Nigeria Agribusiness Group (NABG) and member of the National Council of Manufacturers Association of Nigeria (MAN).  He is currently the Country Managing Director (Nigeria) of SIAT Group, functioning as Managing Director of Presco Plc and Siat Nigeria Limited.
Professional recognitions include “Pearl Outstanding CEO of The Year Award”, “Nigeria Agriculture Award Achiever in Agriculture Award”, and the prestigious “ICAN Merit Award” by the Institute of Chartered Accountants of Nigeria to Presco Plc under his leadership as Managing Director and CEO.`,
          state: "Ile de France",
          img: "/images/felix.jpg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },

        {
          id: 4,
          name: "Dr. Nteranya Emmanuel Sanginga",
          position: "position",
          desc: `Dr. Nteranya E. Sanginga assumed the leadership of International Institute for Tropical Agriculture (IITA) on 01 November 2011.
Before joining IITA, he was Director of the Nairobi-based CIAT-TBSF. Dr Sanginga has more than 30 years’ experience in the fields of applied microbial ecology.`,
          longerDesc: `Dr. Nteranya E. Sanginga assumed the leadership of International Institute for Tropical Agriculture (IITA) on 01 November 2011.
Before joining IITA, he was Director of the Nairobi-based CIAT-TBSF. Dr Sanginga has more than 30 years’ experience in the fields of applied microbial ecology, plant nutrition, and integrated natural resources management in Africa, Latin America, and Southeast Asia. He has worked with the University of Zimbabwe, IAEA in Austria, and CIAT-TSBF, in agricultural research and development. 
Prior to transferring to CIAT-TSBF late 2002, Dr. Sanginga spent 14 years at IITA in various capacities, including principal scientist and head of soil microbiology unit; project coordinator of Improvement of high intensity food and forage crop systems and Short fallow systems to arrest land degradation due to land use intensification; and leader of the multidisciplinary program Improving and intensifying cereal-legume systems in moist and dry savannas of WCA, collaborating with many scientists in national and international institutions. His career has also focused on building the capacity of young scientists in Africa. 
Born and bred in DRC, Dr Sanginga did most of his postgraduate training at IITA and his PhD in Agronomy/Soil Microbiology under a joint program and development partners in DRC, Burundi, and Rwanda.
In 2012, after being IITA DG for a year, Sanginga developed a new model that curbs youth unemployment but also aims to solve the problem of food insecurity in the coming years. This initiative was based on the premise that African youth will develop interest in agribusiness if the conditions are attractive. This model, now known as IITA Youth Agripreneurs (IYA) has transcended the walls of IITA to being adopted by various nations, governments, banks, and world development agencies. Today, the youth often refer to Sanginga as Father of youth-in-agribusiness.
`,
          state: "Ile de France",
          img: "/images/san.jpg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },

        {
          id: 5,
          name: "Dr. Basorun, Yakub Olajide",
          position: "position",
          desc: `Dr. Basorun, Yakub Olajide was born in Surulere, Lagos  on 17th May, 1958 into the Jiyabi Branch of the Eletu Odibo Chieftaincy Family of Isale Eko, Lagos State, Nigeria.
He had his Primary School Education at Government Demonstration School, Surulere, Lagos between 1964 and 1970. `,
          longerDesc: `Dr. Basorun, Yakub Olajide was born in Surulere, Lagos  on 17th May, 1958 into the Jiyabi Branch of the Eletu Odibo Chieftaincy Family of Isale Eko, Lagos State, Nigeria.
He had his Primary School Education at Government Demonstration School, Surulere, Lagos between 1964 and 1970. He attended Ansar-Ud-Deen College, Isolo for his Secondary School Education between 1971 and 1975 and thereafter proceeded to the Federal School of Arts and Science, Victoria Island, Lagos for Advance Level Studies.
 He had his University Education at Dokuchaev Agricultural University, Kharkov, Ukraine between 1979 to 1987 where he obtained his  Master of Science (M.Sc) Degree in Agro-Chemistry and Ph.D Degree in Agriculture. He has a Patent for the modification of I.V Turin’s method of Humus Determination in Soils  ( 1984).

Dr. Basorun started his working career in 1984 when he worked as Agricultural Extension Officer in the Institute Village Linkage Programme, as part of Industrial Experience Scheme. From 1985 to 1987, he was Assistant Lecturer, Department of Soil Science, Dokuachaev  Agricultural University, Kharkov, Ukraine after which he came to Nigeria to participate in National Youth Service Scheme from 1988 to 1989 at the University of Agriculture, Abeokuta. By sheer merit, he was retained as Lecturer II (1989-1992) as pioneering staff of Department of Soil Sciences, University of Agriculture, Abeokuta after which he was elevated as lecturer 1 in 1992.
Having had enough of academics, he transferred his service to Lagos State Public Service in February 1995 as Chief Agric Officer and rose through the ranks to the post of a Director in 2006.

He was the Head of Agricultural Extension Services at the Lagos State Agricultural Development Authority between 1995 and 1999, Deputy Director of Agricultural Services between 2000 and 2005 and Programme Manager/Chief Executive Officer, Lagos State Agricultural Development Authority between 2005 and 2010.

He reached the zenith of his career in the Civil Service when he was appointed Permanent Secretary, and was deployed to the then Ministry of Agriculture and Cooperatives  on December 7, 2010 where he served till February 2016 when he was redeployed to the Office of Overseas Affairs and Investment (LAGOS GLOBAL) and subsequently as Permanent Secretary, Ministry of Wealth Creation and Employment in March, 2017.
In the course of his career, he has contributed in so many ways to the development of Lagos State economy through his invaluable contributions to the growth of the state’s agricultural sector, Ease of Doing Business, Youth Employability and Entrepreneurial Skills Development cutting across the Formal and Informal sectors.
He retired from public service on the 17th of May, 2018 into active agricultural business.
In 2020, Dr. was awarded BEST FARMER OF THE YEAR in Lagos State and in January 2021 was installed as PATRON of Poultry Association of Nigeria (PAN) Ikorodu Zone in recognition of his contribution to the poultry industry.
He is a member of the Board of Trustees of the Nigerian Agric Business Group (NABG), Chairman of The Lagos Poultry Foundation and the President of the Ikorodu Broiler Hub CAMS
Dr. Yakub Olajide Basorun is a member of klub soyuz – an Alumni Association of graduates of Russian Academic Institutions, Ukranian Congress of Soil Scientists, World Association of Soil and Water Conservation, Soil Science Society of Nigeria, Life Member of Agricultural Extension Society of Nigeria, and a Fellow of the Society For Environmental Toxicology and Pollution Mitigation. He is also a member of Eko Foundation, The Rostrum Club and Isale-Eko Descendants Union among others.
 A successful fish/poultry farmer and also a strong promoter of sustainable and environmentally friendly agricultural practices.
 He is happily married with children.`,
          state: "Ile de France",
          img: "/images/olajide.jpg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157725/previous_company_logo-17438ec79d6a39372fb9f661b31a2322.svg",
        },

        {
          id: 6,
          name: "Rahul Savara",
          position: "position",
          desc: "He attended Ansar-Ud-Deen College, Isolo for his Secondary School Education between 1971 and 1975 and thereafter proceeded to the Federal School of Arts and Science, Victoria Island, Lagos for Advance Level Studies. ",
          longerDesc: `Rahul Savara is the Group Managing Director and Co-founder of various businesses  under Tropical General Investments (TGI) Group. TGI is a multinational  conglomerate which has business interests in Fast Moving Consumer Goods,  Agriculture, Oil Field Services, Healthcare, Chemicals and Real Estate  Development across various geographies especially in emerging markets. Mr  Savara has a strong passion for Business Development & Corporate Strategy,  Project Management, New Product Development, Innovation, Financial  Management, among many other things. 
Mr Savara started his professional career as a Chartered Accountant nearly 40  years ago and has successfully overseen the growth of businesses such as CHI  Limited - which was divested to the Coca-Cola Company in 2019 and the  establishment of WACOT Limited - a multi-billion Naira commodity powerhouse  which continues to be a leader in the Nigerian Agribusiness sector. 
Apart from the above companies, Mr Savara sits on the boards of West African  Soy Industries Limited (WASIL), WACOT Rice Limited, Cormart (Nigeria) Limited CHI Pharmaceuticals Limited, CHI Farms Limited, Kaizen Properties Limited,  West African Cubes Limited, Romson Oil Field Services Limited, ORC Fishing and  Food Processing Limited etc. 
Mr Savara is also a director in several companies in the West African region,  including Fludor Benin SA (Benin Republic), Fludor IVC SARL (Cote D’Ivoire),  Fludor Ghana Limited and Center Point Limited (Ghana) etc. 
Mr Savara has served on several Nigerian national committees, including the 12- member Steering Committee/Working Group of the National Industrial Policy and  Competitiveness Advisory Council. A council which was inaugurated by His  Excellency, the Acting President of Nigeria, Professor Yemi Osinbajo (SAN) in May  2017. He is also an active member of the Nigerian Agribusiness Group. 
Mr Savara is a Member of the Institute of Directors of Nigeria and a Fellow of the  Institute of Chartered Accountants of India.  
`,
          state: "Ile de France",
          img: "/images/rap.jpg",
          previous:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157722/previous_company_logo-a2e4bba7a9d3357f6581c2ad6e72f0a1.svg",
        },
      ],
    };
  },

  methods: {
    viewMember(member) {
      this.fixed = true;
      //   console.log("first", member);
      this.profile = member;
      console.log(this.profile);
    },
  },
};
</script>

<style scoped>
.delp {
  display: grid;
  gap: 1rem;
  background: #ffff;
  padding: 1rem;
  grid-template-columns: 1fr 3fr;
}

.delp img {
  width: 100%;
  /* height: 100%; */
}
.grid {
  position: relative;
  margin: 0 auto;
  padding: 7em 0 4em;
  max-width: 1000px;
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.grid-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #2f3238;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);
  width: 100%;
}

.grid-card p,
.mk-lead {
  text-align: left;
  color: #455065;
  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  /* padding-top: 14px; */
}

.imgg {
  width: 100%;
}

.top-img {
  -webkit-clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  clip-path: polygon(
    0 0,
    calc(100% + 1px) 0,
    calc(100% + 1px) 100%,
    24px 100%,
    0 calc(100% - 24px)
  );
  background-color: #fff;
  position: relative;
}
.grid-card .det {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.holert {
  display: flex;
  position: relative;
  flex: 1 0 auto;
  flex-direction: column;
  font-weight: 400;
  text-align: left;
  padding: 24px;
}

.holert img {
  height: 36px;
  width: 148px;
}

.holert .prev {
  color: #94989e;
  display: block;
  margin: 1rem 0;
  font-size: 12px;
  margin-bottom: 8px;
  white-space: nowrap;
}
.detr h5 {
  margin: 1rem 0;
  color: #262d3d;
  font-size: 28px;
  font-weight: 300;
  line-height: 1em;
}
/* .lead {
  color: #455065;
  flex: 1 0 auto;
  font-size: 14px;
  line-height: 21px;
  max-height: 400px;
  overflow: hidden;
  padding-top: 14px;
  text-align: left;
  white-space: pre-wrap;
} */

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  /* margin: 10px 1%; */
  margin: 0;
  min-width: 320px;
  max-width: 480px;
  max-height: 360px;
  width: 48%;
  /* background: #3085a3; */
  text-align: center;
  cursor: pointer;
}

.badge::before {
  content: "\f4d6";
  /* background: url("/c9f029bcf4d7f03d94f59c8d85d49168.svg") no-repeat center
    center/cover; */
  z-index: 2000;
  width: 15px;
  height: 15px;
  bottom: 0%;
  left: 0;

  position: absolute;
  bottom: 4%;
  left: 1%;
  padding: 1rem;
  font-family: "FontAwesome";
  background-color: #00cc83;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid figure img {
  position: relative;
  display: block;
  width: 100%;
  object-fit: cover;
  height: 300px;
  min-height: 100%;
  max-width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption i {
  margin: 1rem;
  color: #00cc83;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

/* Individual effects */

/*---------------*/
/***** Zoe *****/
/*---------------*/

figure.effect-zoe figcaption {
  top: auto;
  bottom: 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 3.75em; */
  height: 100%;
  opacity: 0.55;
  background: rgba(32, 78, 207, 0.55);
  color: #3c4a50;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

figure.effect-zoe .view {
  border: none;
  /* background-color: #051622; */
  padding: 1rem;
  color: #fff;
  border-radius: 8px;
  position: relative;
  z-index: 10000;
  cursor: pointer;
}
.profile {
  background-color: #3498db;
  border: none;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  background: #00cc83;
  border-color: #00cc83;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
}

.movie {
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.det strong {
  color: #204ecf;
}
.det small {
  color: #8f96a3;
  margin: 0.55rem 0;
}

.lead {
  color: #455065;
}
figure.effect-zoe h2 {
  float: left;
}

figure.effect-zoe p.icon-links a {
  float: right;
  color: #3c4a50;
  font-size: 1.4em;
}

figure.effect-zoe:hover p.icon-links a:hover,
figure.effect-zoe:hover p.icon-links a:focus {
  color: #252d31;
}

figure.effect-zoe p.description {
  position: absolute;
  bottom: 8em;
  padding: 2em;
  color: #fff;
  text-transform: none;
  font-size: 90%;
  opacity: 0;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
  -webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
}

figure.effect-zoe h2,
figure.effect-zoe p.icon-links a {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(0, 200%, 0);
  transform: translate3d(0, 200%, 0);
}

figure.effect-zoe p.icon-links a span::before {
  display: inline-block;
  padding: 8px 10px;
  font-family: "feathericons";
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
  content: "\e000";
}

.icon-paper-clip::before {
  content: "\e001";
}

.icon-heart::before {
  content: "\e024";
}

figure.effect-zoe h2 {
  display: inline-block;
}

figure.effect-zoe:hover p.description {
  opacity: 1;
}
figure.effect-zoe:hover figcaption .movie {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

figure.effect-zoe:hover figcaption,
figure.effect-zoe:hover h2,
figure.effect-zoe:hover p.icon-links a {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.mk {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-zoe:hover h2 {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(2) {
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

figure.effect-zoe:hover p.icon-links a:first-child {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

@media screen and (max-width: 50em) {
  .content {
    padding: 0 10px;
    text-align: center;
  }
  .grid figure {
    display: inline-block;
    float: none;
    margin: 10px auto;
    width: 100%;
  }
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

body {
  /* background: #2f3238; */
  color: #fff;
  font-weight: 400;
  font-size: 1em;
  font-family: "Raleway", Arial, sans-serif;
}

a {
  outline: none;
  color: #3498db;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #528cb3;
}

section {
  padding: 1em;
  text-align: center;
}

.content {
  margin: 0 auto;
  max-width: 1000px;
}

.content > h2 {
  clear: both;
  margin: 0;
  padding: 4em 1% 0;
  color: #484b54;
  font-weight: 800;
  font-size: 1.5em;
}

.content > h2:first-child {
  padding-top: 0em;
}

/* Header */
.codrops-header {
  margin: 0 auto;
  padding: 4em 1em;
  text-align: center;
}

.codrops-header h1 {
  margin: 0;
  font-weight: 800;
  font-size: 4em;
  line-height: 1.3;
}

.codrops-header h1 span {
  display: block;
  padding: 0 0 0.6em 0.1em;
  color: #74777b;
  font-weight: 300;
  font-size: 45%;
}

/* Demo links */
.codrops-demos {
  clear: both;
  padding: 1em 0 0;
  text-align: center;
}

.content + .codrops-demos {
  padding-top: 5em;
}

.codrops-demos a {
  display: inline-block;
  margin: 0 5px;
  padding: 1em 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}

.codrops-demos a:hover,
.codrops-demos a:focus,
.codrops-demos a.current-demo {
  background: #3c414a;
  color: #fff;
}

/* To Navigation Style */
.codrops-top {
  width: 100%;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.69em;
  line-height: 2.2;
}

.codrops-top a {
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  letter-spacing: 1px;
}

.codrops-top span.right {
  float: right;
}

.codrops-top span.right a {
  display: block;
  float: left;
}

.codrops-icon:before {
  margin: 0 4px;
  text-transform: none;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  font-family: "codropsicons";
  line-height: 1;
  speak: none;
  -webkit-font-smoothing: antialiased;
}

.codrops-icon-drop:before {
  content: "\e001";
}

.codrops-icon-prev:before {
  content: "\e004";
}

/* Related demos */
.related {
  clear: both;
  padding: 6em 1em;
  font-size: 120%;
}

.related > a {
  display: inline-block;
  margin: 20px 10px;
  padding: 25px;
  border: 1px solid #4f7f90;
  text-align: center;
}

.related a:hover {
  border-color: #39545e;
}

.related a img {
  max-width: 100%;
  opacity: 0.8;
}

.related a:hover img,
.related a:active img {
  opacity: 1;
}

.related a h3 {
  margin: 0;
  padding: 0.5em 0 0.3em;
  max-width: 300px;
  text-align: left;
}

/* Demo ad design */
body #cdawrap {
  background: none;
  top: 50px;
  border: none;
}

body #cdawrap a {
  color: #fff !important;
}

body #cda-remove {
  color: #fff;
}

@media screen and (max-width: 25em) {
  .codrops-header {
    font-size: 75%;
  }
  .codrops-icon span {
    display: none;
  }
}
</style>
