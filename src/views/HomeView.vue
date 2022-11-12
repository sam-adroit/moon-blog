<template>
  <header>
    <div class="header">
      <div class="container">
        <nav>
          <router-link to="#" class="logo">
            <img src="@/assets/img/light-logo.png" alt="our logo" />
            &nbsp;&nbsp;
            <h3 class="white-head moon">MOON INNOVATIONS</h3>
          </router-link>

          <div class="links">
            <router-link to="#">Home</router-link>
            <router-link to="#">About Us</router-link>
            <router-link to="/blog">Blog</router-link>
            <router-link to="#">Our Partrners</router-link>
            <router-link to="#">Our Team</router-link>
            <router-link to="#">Contact Us</router-link>
          </div>

          <div>
            <router-link class="sub-btn white-head" to="#"
              >SUBSCRIBE</router-link
            >
          </div>
        </nav>

        <div class="header-body">
          <div>
            <h1 class="hanuman">Solar Smart Inverters and Security</h1>
            <p class="head-p">
              Our goal is to provide smart and sustainable solutions for
              Africa's growing energy demand using solar and artificial
              intelligence technology
            </p>
            <router-link to="#" class="head-btn">VIEW OUR PRODUCTS</router-link>
          </div>
          <div>
            <div class="certified">
              <div class="cert-icon">
                <img src="@/assets/img/cert.png" alt="certified icon" />
              </div>
              <p class="head-p">
                World class Engineering team sustaning the ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <h2 class="headings">WHAT WE DO</h2>

      <div class="col">
        <div class="left">
          <div>
            <div class="blue-list-circle"></div>
          </div>

          <div class="wordings">
            <h2 class="dark-head">Solar Smart Inverter</h2>
            <p class="prelude">Our smart inverters provides</p>
            <ul class="word-list">
              <li>Sustainable energy management</li>
              <li>Wireless internet accessibility direct to your home</li>
            </ul>
          </div>
        </div>

        <div class="image">
          <img src="@/assets/img/inverter.png" alt="our inverter" />
        </div>
      </div>

      <div class="col">
        <div class="left">
          <div>
            <div class="green-list-circle"></div>
          </div>

          <div class="wordings">
            <h2 class="dark-head">Security Surveillance</h2>
            <p class="prelude">
              Our Security Surveillance are specially built to:
            </p>
            <ul class="word-list">
              <li>
                Monitor your home and business 24 hours a day, seven days a
                week, using a cutting-edge facial and person recognition
                algorithm.
              </li>
              <li>
                Provide multiple-viewing option through our mobile application.
              </li>
            </ul>
          </div>
        </div>

        <div class="image">
          <img src="@/assets/img/cam.png" alt="our security camera" />
        </div>
      </div>

      <div class="col">
        <div class="left">
          <div>
            <div class="yellow-list-circle"></div>
          </div>

          <div class="wordings">
            <h2 class="dark-head">Artificial Intelligence</h2>
            <p class="prelude">
              Our products are built on Artificial Intelligence
            </p>
            <ul class="word-list">
              <li>
                We employ artificial intelligence through the Internet of Things
                (AIOT) via our edge-cloud technology
              </li>
              <li>
                We provide a wealth of applications for our customers' needs
                through a seamless deployment of architecture - energy
                management, retail, farming and health.
              </li>
            </ul>
          </div>
        </div>

        <div class="image">
          <img src="@/assets/img/intelligence.png" alt="our security camera" />
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="headings">About us</h2>

      <div class="about">
        <div style="position: relative">
          <div class="svg"><img src="@/assets/img/svg1.png" /></div>
          <img src="@/assets/img/ceo-inv.png" alt="the c.e.o" />
        </div>
        <div>
          <ul>
            <li>
              Moon Innovations is committed to providing a connected and
              sustainable future for Africa. We leverage cutting-edge
              technologies like solar, artificial intelligence, edge and cloud
              computing, leading the future of AIOT.
            </li>
          </ul>
          <ul>
            <li>
              Moon Innovations mission is to provide affordable, smart, and
              sustainable solutions, for low-mid income homes and businesses all
              around the world.
            </li>
          </ul>

          <ul>
            <li>
              Our solution is an all-in-one system providing sustainable
              electricity, internet access and security surveillance.<br /><br />Our
              system provides cloud storage capacity for security surveillance
              feeds
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="app">
      <h2 class="headings">Moon App</h2>

      <div class="app-showcase">
        <div class="container case">
          <div class="screenshots">
            <img src="@/assets/img/1.png" alt="screenshot of our app" />
            <img src="@/assets/img/2.png" alt="screenshot of our app" />
            <img src="@/assets/img/3.png" alt="screenshot of our app" />
            <img src="@/assets/img/4.png" alt="screenshot of our app" />
            <img src="@/assets/img/5.png" alt="screenshot of our app" />
          </div>
          <p class="app-text">
            Ever heard about smart houses? Moon app has been developed to help
            you monitor your Smart Inverters, Wi-Fi and Security Cameras.
          </p>
          <button class="get-app">
            <img src="@/assets/img/play.png" alt="get our app" />
          </button>
        </div>
      </div>
    </div>

    <div class="container testimony">
      <h2 class="headings">What our clients say</h2>

      <p class="dark-test-p">
        “Long battery life, higher power capacity and durability”
      </p>
      <p class="dim-test-p">
        An innovation that leverages on artificial intelligence in providing
        smart inverters, security cameras and management services in the most
        affordable rate for everyone
      </p>

      <div class="ceo">
        <img src="@/assets/img/avatar.png" alt="our client" />
        <p class="client-name">CEO, ACME INC</p>
      </div>

      <div class="indicator">
        <div class="indicator-active"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="partners">
      <h2 class="headings">Our partners</h2>
      <h3>Meet our prestigious partners</h3>

      <div class="sponsor">
        <div class="container sponsors">
          <img src="@/assets/img/pt1.png" alt="one of our partners" />
          <img src="@/assets/img/pt2.png" alt="one of our partners" />
          <img src="@/assets/img/pt3.png" alt="one of our partners" />
          <img src="@/assets/img/pt4.png" alt="one of our partners" />
          <img src="@/assets/img/pt5.png" alt="one of our partners" />
          <img src="@/assets/img/pt6.png" alt="one of our partners" />
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="headings">Our team</h2>
      <div class="teams">
        <div class="team-card">
          <img src="@/assets/img/ceo.png" alt="a team member" />
          <div class="desc">
            <h3>OSUMUNE MICHAEL</h3>
            <p>Founder/CEO</p>
            <router-link to="#" style="text-decoration: none">
              <img src="@/assets/img/tweet.png" alt="twitter icon" />
            </router-link>
            &nbsp; &nbsp;
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/link.png" alt="linkdIn icon"
            /></router-link>
          </div>
        </div>

        <div class="team-card">
          <img src="@/assets/img/team2.png" alt="a team member" />
          <div class="desc">
            <h3>FUH-AUSTIN AMBE</h3>
            <p>CTO</p>
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/tweet.png" alt="twitter icon"
            /></router-link>
            &nbsp; &nbsp;
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/link.png" alt="linkdIn icon"
            /></router-link>
          </div>
        </div>

        <div class="team-card">
          <img src="@/assets/img/team3.png" alt="a team member" />
          <div class="desc">
            <h3>LEO SAMMY</h3>
            <p>Project Manager</p>
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/tweet.png" alt="twitter icon"
            /></router-link>
            &nbsp; &nbsp;
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/link.png" alt="linkdIn icon"
            /></router-link>
          </div>
        </div>

        <div class="team-card">
          <img src="@/assets/img/team1.png" alt="a team member" />
          <div class="desc">
            <h3>BANKOLE SAMUEL</h3>
            <p>Front-end Engineer</p>
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/tweet.png" alt="twitter icon"
            /></router-link>
            &nbsp; &nbsp;
            <router-link to="#" style="text-decoration: none"
              ><img src="@/assets/img/link.png" alt="linkdIn icon"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="container chat-container">
      <div class="chatUs">
        <div class="question">
          <h3>Have questions?</h3>
          <p>Send us a message</p>
        </div>
        <div>
          <router-link to="#" class="chat-btn">CHAT WITH US</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-nav">
        <div>
          <router-link to="#" class="logo footer-logo">
            <img src="@/assets/img/light-logo.png" alt="our logo" />
            &nbsp;&nbsp;
            <h3 class="white-head moon">MOON INNOVATIONS</h3>
          </router-link>

          <p class="address">
            Workstationng, 7 Ibiyinka Olorunbe, Victoria Island 101241, Lagos,
            Nigeria.
          </p>
        </div>
        <div>
          <h3 class="nav-desc">Company</h3>
          <router-link to="#">About Us</router-link> <br />
          <br />
          <router-link to="#">Showcase</router-link> <br />
          <br />
          <router-link to="#">Resources</router-link>
        </div>
        <div>
          <h3 class="nav-desc">Business</h3>
          <router-link to="#">Our Team</router-link> <br />
          <br />
          <router-link to="#">Clients</router-link>
        </div>
        <div>
          <h3 class="nav-desc">Contact Us</h3>
          <span>Freely get-in-touch with us.</span> <br />
          <br />
          <router-link to="#" class="contact">+234 (813) 765 6465</router-link>
          <br />
          <router-link to="#" class="contact"
            >holla@mooninnovations.io</router-link
          >
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
