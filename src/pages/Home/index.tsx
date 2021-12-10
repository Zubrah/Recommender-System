import React from "react";
import { navigate } from "hookrouter";
import { Button, Container } from "react-bootstrap";
import BannerImage from "../../img/banner.png";
import SortPageDemoImage from "../../img/sort-page-demo.png";
import ComparePageDemoImage from "../../img/compare-page-demo.png";
import ToolsPageDemoImage from "../../img/tools-page-demo.png";

const Home: React.FunctionComponent = () => {
  const goTo = (location: string) => () => navigate(location);

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <Container>
          <h1 className="sr-only">Recommendfy</h1>
          <img
            src={BannerImage}
            className="mb-2 mw-100"
            style={{ width: 800 }}
            alt="Emotionify banner Logo"
          />
          <p className="lead col-md-7 mt-2 mx-auto">
            One Stop platform to Create and analyze you Spotify playlists tailored to 
            your needs and attributes.
            
          </p>
        </Container>
      </section>

      <section>
        <Container className="text-center" style={{ marginBottom: 40 }}>
          <h2>Sort Your Playlist</h2>
          <img
            src={SortPageDemoImage}
            alt="Recommendfy Sort Comparison"
            className="mw-100"
            style={{ width: 900 }}
          />
          <div style={{ maxWidth: 800, margin: "30px auto" }}>
            <p className="lead">
              Using features calculated by Spotify for each song, sort your playlist on an emotional
              gradient.
            </p>
            <p className="lead">
              You can also change how and what your songs are sorted by to explore different methods
              of sorting playlists and discover new ways to listen to your playlists.
            </p>
          </div>
          <Button variant="outline-secondary" onClick={goTo("/sort")}>
            Sort My Playlist &rarr;
          </Button>
        </Container>
      </section>

      <section>
        <Container className="text-center" style={{ marginBottom: 40 }}>
          <h2>Compare Playlists</h2>
          <img
            src={ComparePageDemoImage}
            alt="Playlist Box Plot Comparison"
            className="mw-100"
            style={{ width: 810 }}
          />
          <div style={{ maxWidth: 800, margin: "30px auto" }}>
            <p className="lead">
              Compare your playlists based off audio features calculated by Spotify.
            </p>
            <p className="lead">
              Select any number of playlists and compare them in one or two dimensions for any audio
              feature or seven dimensions for specific audio features.
            </p>
          </div>
          <Button variant="outline-secondary" onClick={goTo("/compare")}>
            Compare My Playlists &rarr;
          </Button>
        </Container>
      </section>

      <section>
        <Container className="text-center" style={{ marginBottom: 40 }}>
          <h2>Playlist Tools</h2>
          <img
            src={ToolsPageDemoImage}
            alt="Playlist Tools"
            className="mw-100"
            style={{ width: 680 }}
          />
          <div style={{ maxWidth: 800, margin: "30px auto" }}>
            <p className="lead">
              Merge, filter and sort your playlists to make a more focused playlist.
            </p>
            <p className="lead">
              Select playlists, filter and sort by audio features and even randomise your playlists
              to make a playlist focused for any occasion.
            </p>
          </div>
          <Button variant="outline-secondary" onClick={goTo("/tools")}>
            Create My New Playlist &rarr;
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
