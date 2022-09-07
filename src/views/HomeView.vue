<template>
  <header>
    <div class="header">
      <nav class="head-nav">
        <a href="#" class="logo">
          <img src="@/assets/img/light-logo.png" alt="moon innovation logo" />
        </a>
        <a href="index.html">Home</a>
        <a href="#">About Us</a>
        <router-link to="/blog" class="">Blog</router-link>
        <a href="#">Our Partners</a>
        <a href="#">Our Team</a>
        <a href="#">Contact Us </a>
        <a href="#" class="btn blue-btn">SUBSCRIBE</a>
      </nav>
      <div class="head-grid">
        <div>
          <h1 class="hanuman">Smart Inverters and Security</h1>
          <p class="head-intro">
            An innovation that leverages on artificial intelligence in providing
            smart inverters, security cameras and management services in the
            most affordable rate for everyone
          </p>
          <a class="btn blue-btn" href="#">VIEW PRODUCTS</a>
        </div>
        <div>
          <input type="search" class="search" placeholder="SEARCH" />

          <div class="picture-grid">
            <div class="black-picture-background">
              <img src="@/assets/img/card-pic1.jpg" alt="" />
            </div>

            <div class="blue-picture-background span2">
              <img src="@/assets/img/card-pic2.png" alt="" />
            </div>

            <div class="black-picture-background span2">
              <img src="@/assets/img/card-pic3.png" alt="" />
            </div>

            <div class="black-picture-background">
              <img src="@/assets/img/card-pic3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="main-grid">
      <div class="center-grid">
        <h2 class="center-description">HOW WE CAN HELP YOU</h2>
      </div>

      <div class="help-grid">
        <div class="help-display">
          <div class="cards">
            <div class="circle-grid">
              <div class="circle circle1">1</div>
            </div>
            <div>
              <h2 class="cards-header">Smart Inverter</h2>
              <p class="circle-paragraph">
                Our smart inverters provide sustainable energy management
                directly to Africa homes. using IoT technology to a connected
                world.
              </p>
              <a href="#" class="cards-btn">Get Inverter</a>
            </div>
          </div>
          <div>
            <img src="@/assets/img/inverter.png" alt="" />
          </div>
        </div>

        <div class="help-display">
          <div>
            <img src="@/assets/img/cam.png" alt="" />
          </div>
          <div class="cards">
            <div class="circle-grid">
              <div class="circle circle2">2</div>
            </div>
            <div>
              <h2 class="cards-header">Security Camera</h2>
              <p class="circle-paragraph">
                Our security camera provides security, and automation through
                Artificial Intelligence and edge computing adapted to run facial
                recognition & speech recognition.
              </p>
              <a href="#" class="cards-btn">Get Camera</a>
            </div>
          </div>
        </div>

        <div class="help-display">
          <div class="cards">
            <div class="circle-grid">
              <div class="circle circle3">3</div>
            </div>
            <div>
              <h2 class="cards-header">Consultation</h2>
              <p class="circle-paragraph">
                Our security camera provides security, and automation through
                Artificial Intelligence and edge computing adapted to run facial
              </p>
              <a href="#" class="cards-btn">Hire Us</a>
            </div>
          </div>
          <div class="two-picture">
            <div>
              <img src="@/assets/img/consultation.png" alt="" />
            </div>

            <img src="@/assets/img/consult.png" alt="" />
          </div>
        </div>
      </div>
      <!-- </div> -->

      <div class="center-grid">
        <h2 class="center-description">ABOUT US</h2>
        <div class="display about">
          <div class="cartoon">
            <img src="@/assets/img/group.svg" alt="group of male and female" />
          </div>
          <div class="list">
            <div class="list-card light-list">
              <div></div>
              <p class="list-p light-list-p">
                Moon Innovations is about accelerating smart and sustainable
                living using solar and AI.
              </p>
            </div>

            <div class="list-card green-list">
              <div></div>
              <p class="list-p">
                Moon Innovations is about accelerating smart and sustainable
                living using solar and AI.
              </p>
            </div>

            <div class="list-card blue-list">
              <div></div>
              <p class="list-p">
                Moon Innovations is about accelerating smart and sustainable
                living using solar and AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="center-grid">
        <h2 class="center-description">THE MOON APP</h2>
        <div class="display about">
          <div class="app-box box">
            <div class="screenshot">
              <img src="@/assets/img/card1.png" alt="screenshot 1" />
              <img src="@/assets/img/card2.png" alt="screenshot 1" />
              <img src="@/assets/img/card3.png" alt="screenshot 1" />
              <img src="@/assets/img/card4.png" alt="screenshot 1" />
              <img src="@/assets/img/card5.png" alt="screenshot 1" />
            </div>

            <div>
              <p class="cards-paragraph">
                The Moon app helps you monitor and control your smart inverter
                and security camera, through simplified interactions and overly
                best user experience integrated into the mobile app.
              </p>
            </div>
            <div>
              <a href="#" class="btn blue-btn">DOWNLOAD APP</a>
            </div>
          </div>
        </div>
      </div>

      <div class="center-grid">
        <h2 class="center-description">WHAT OUR CLIENTS SAY</h2>
        <div class="display about">
          <div class="center">
            <div>
              <h2 class="cards-header">
                “Long battery life, higher power capacity and durability”
              </h2>
            </div>
            <div>
              <p class="cards-paragraph">
                An innovation that leverages on artificial intelligence in
                providing smart inverters, security cameras and management
                services in the most affordable rate for everyone
              </p>
            </div>
            <div>
              <img
                src="@/assets/img/avatar.png"
                alt="avatar of CEO"
                class="avatar"
              />
              <p class="cards-header ceo-desc">CEO, ACME INC</p>
              <div class="pointer">
                <div class="active-pointer"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="center-grid">
        <h2 class="center-description">OUR PARTNERS</h2>

        <p class="partner-p">Meet our prestigious partners</p>

        <div class="partner-logo">
          <img src="@/assets/img/pt1.png" alt="partner one" />
          <img src="@/assets/img/pt2.png" alt="partner two" />
          <img src="@/assets/img/pt3.png" alt="partner three" />
          <img src="@/assets/img/pt4.png" alt="partner four" />
          <img src="@/assets/img/pt5.png" alt="partner five" />
          <img src="@/assets/img/pt6.png" alt="partner six" />
        </div>
      </div>

      <div class="centre-grid">
        <h2 class="center-description">OUR TEAM</h2>
        <div class="team-pics">
          <div class="team-member">
            <img src="@/assets/img/team1.png" alt="Team member 1" />
            <h2>OSUMUNE MICHAEL</h2>
            <h3>Founder/CEO</h3>
            <p>icons</p>
          </div>
          <div class="team-member">
            <img src="@/assets/img/team2.png" alt="Team member 2" />
            <h2>FUH-AUSTIN AMBE</h2>
            <h3>CTO</h3>
            <p>icons</p>
          </div>
          <div class="team-member">
            <img src="@/assets/img/team3.png" alt="Team member 3" />
            <h2>BANKOLE SAMUEL</h2>
            <h3>Front end Engineer</h3>
            <p>icons</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="floating-card">
      <div>
        <h2 class="floating-card-head">Want to consult with us?</h2>
        <p class="card-p floating-card-text">Send us a message</p>
      </div>
      <div class="link">
        <a href="#" class="btn blue-btn">CHAT WITH US</a>
      </div>
    </div>

    <div class="footer-flex">
      <div class="footer-logo">
        <img src="@/assets/img/light-logo.png" alt="Moon technology logo" />
        <h2>Moon Innovations</h2>
      </div>

      <div>
        <h6 class="footer-head">Company</h6>
        <a href="#">About us</a>
        <a href="#">Showcase</a>
        <a href="#">Resources</a>
      </div>

      <div>
        <h6 class="footer-head">Business</h6>
        <a href="#">Our Team</a>
        <a href="#">Clients</a>
      </div>

      <div>
        <h6 class="footer-head">Contact Us</h6>

        <div class="contact-us">
          <p class="contact">Freely get-in-touch with us.</p>
          <p>+234 (813) 765 6465</p>
          <a href="#">holla@mooninnovations.io</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
<style src="@/assets/css/home.css" scoped></style>
