import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const About: React.FunctionComponent = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-md-10 col-lg-8">
          <h1 className="text-center">About the Project</h1>
          <p className="justify-content-md-center">
          Spotify is one of the newest innovations to have come to audio listening and experience with over 125 million subscribers. 
          Though the service has recently begun it dominates Apple Music and Amazon music in the audio streaming market. 
          From music, they have extended the audio service to Podcasts, Audiobooks, and so on. Spotify Trends helps any content creator/musician in order to understand what listeners prefer and how to compete in this immensely growing market.
          </p>
          
          <p>
            This  Recommendify project aims to provide users with the best version of music playlists and 
            songs based their pre-assigned variables in sort page that sorts musics and artists
            based on degree of valence to energy level.
          </p>
          <h4>
            FUTURE AIM:
          </h4>
          <p>
            Create a web application that allows users to create playlists based on their emotional preferences since
            this is not 100% accurate in predictionsof users emotions. This is due to the fact that emotions and 
            behaviours are highly opinion based and the values used to sort songs are averages over the whole song. This tool however does give insight on
            how well a computer can plot an emotional gradient with a list of songs.
          </p>
          
          

          
          <h5 className="text-center">What are spotify audio features involved?</h5>
          <p>
            Here are some summaries from{" "}
            <a href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/">
              Spotify
            </a>
            :
          </p>
          <ul>
            <li>
              <code>Acousticness</code>: A confidence measure from 0 to 1 of whether the track is
              acoustic. 1 represents high confidence the track is acoustic.
            </li>
            <li>
              <code>Danceability</code>: Danceability describes how suitable a track is for dancing
              based on a combination of musical elements. A value of 0 is least danceable and 1 is
              most danceable.
            </li>
            <li>
              <code>Duration</code>: The duration of the track in milliseconds.
            </li>
            <li>
              <code>Energy</code>: Energy is a measure from 0 to 1 and represents a perceptual
              measure of intensity and activity. Typically, energetic tracks feel fast, loud, and
              noisy. For example, death metal has high energy, while a Bach prelude scores low on
              the scale.
            </li>
            <li>
              <code>Instrumentalness</code>: Predicts whether a track contains no vocals. The closer
              the instrumentalness value is to 1, the greater likelihood the track contains no vocal
              content. Values above 0.5 are intended to represent instrumental tracks, but
              confidence is higher as the value approaches 1.
            </li>
            <li>
              <code>Key</code>: The estimated overall key of the track. (-1 if no key is detected)
            </li>
            <li>
              <code>Liveness</code>: Detects the presence of an audience in the recording. Higher
              liveness values represent an increased probability that the track was performed live.
              A value above 0.8 provides strong likelihood that the track is live.
            </li>
            <li>
              <code>Loudness</code>: The overall loudness of a track in decibels (dB). Loudness
              values are averaged across the entire track and are useful for comparing relative
              loudness of tracks. Values typical range between -60 and 0 db.
            </li>
            <li>
              <code>Mode</code>: Mode indicates the modality (major or minor) of a track, the type
              of scale from which its melodic content is derived. Major is represented by 1 and
              minor is 0.
            </li>
            <li>
              <code>Speechiness</code>: Speechiness detects the presence of spoken words in a track.
              Talk shows and audio books are closer to 1, songs made entirely of spoken words are
              above 0.66, songs that contain both music and speech are typically around 0.33 - 0.66
              and values below 0.33 represent music and other non-speech-like tracks.
            </li>
            <li>
              <code>Tempo</code>: The overall estimated tempo of a track in beats per minute (BPM).
            </li>
            <li>
              <code>Time Signature</code>: An estimated overall time signature of a track. The time
              signature (meter) is a notational convention to specify how many beats are in each bar
              (or measure).
            </li>
            <li>
              <code>Valence</code>: A measure from 0 to 1 describing the musical positiveness
              conveyed by a track. Tracks with high valence sound more positive, while tracks with
              low valence sound more negative.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
