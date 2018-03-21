import React, { Component } from 'react';
import { DequeDeck, TitleSlide, Slide, ChapterSlide } from 'deque-slide-deck';
import Offscreen from 'react-offscreen';
// slide images
import marcy from './img/marcy.jpg';
// import axeTeam from './img/paddington-cat.jpg';
import axeLogo from './img/axe-logo.png';
import axeA11yWins from './img/axeA11yWins.jpg';
import attestLogo from './img/web_attest_light_bg.png';
import axeGithub from './img/axe-github.png';
import axeExtensions from './img/axe-extensions.png';
import axeWebdriverDemo from './img/axe-webdriverjs-demo.png';
import npmLogo from './img/npm-logo.svg';
import attest from './img/attest-overview.png';
import projects from './img/supported-projects.png';
import mitsue from './img/mitsue.png';
import chrome from './img/chrome-logo.png';
import firefox from './img/firefox-logo.png';
import shadowPeople from './img/shadow-people.jpg';
import shadowDOMSpec from './img/shadow-dom-w3c.png';
import userAgentShadowDOM from './img/video-shadow-dom.png';
import skiTripOrganizer from './img/ski-trip-organizer-shadowdom.jpg';
import skiTripOrganizerAxe from './img/ski-trip-organizer-axe-coconut.jpg';
import axeDeveloperGuide from './img/axe-developer-guide.png';
import axeChrome from './img/npm-axe-chrome.png';
import axeFirefox from './img/npm-axe-firefox.png';
import coconut from './img/axe-coconut.png';
import designbg from './img/design-bg.png';
import testingbg from './img/testing-bg.png';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <DequeDeck animation='fade'>
        <TitleSlide
          profiles={[
            { name: 'Marcy Sutton', image: marcy }
          ]}
        >
          <h1 className='title medium'>What’s New in aXe</h1>
          <h2 className='title small'>Update from the Deque Labs team</h2>
        </TitleSlide>

        <Slide>
          <h2 className='text-centered title large'>{'Today:'}</h2>
          <img src={axeLogo} width="200px" style={{position:"absolute", top:"100px"}} alt="axe" />
          <ul className='list-right'>
            <li>What is aXe?</li>
            <li>Our 3.0 Release</li>
            <li>New Extensions</li>
            <li>Roadmap</li>
            <li>Hackathon</li>
          </ul>
        </Slide>
        <ChapterSlide>
          <h2 className='title large chapter-heading'>What is aXe?</h2>
          <img className='chapter-image' src={designbg} alt=""/>
        </ChapterSlide>

        <Slide>
          <h2 className="title medium chapter-heading" style={{marginTop: '0.25em'}}>
            My first impression
            <span aria-label="hand pointing down" role="img">👇</span>
          </h2>
          <img className='chapter-image' src={axeA11yWins} alt="Accessibility Wins post from 2 years ago"/>
        </Slide>

        <Slide>
          <Offscreen tag="h2">aXe is&hellip;</Offscreen>
          <img src={axeLogo} width="120px" style={{margin: '0 auto'}} alt="axe" />
          <ul className="list-center">
            <li className="fragment">Open Source JavaScript Engine (axe-core)</li>
            <li className="fragment">Browser DevTools Extensions</li>
            <li className="fragment">Automated Test Integrations</li>
            <li className="fragment">Foundation of the WorldSpace suite</li>
          </ul>
        </Slide>

        <Slide>
          <Offscreen tag="h2">axe-core</Offscreen>
          <img className="chapter-image" src={axeGithub} alt="axe-core repository on Github" />
        </Slide>

        <Slide>
          <Offscreen tag="h2">axe extensions</Offscreen>
          <img className="chapter-image" src={axeExtensions} alt="axe Chrome and Firefox extensions open in Developer tools" />
        </Slide>

        <Slide>
          <Offscreen tag="h2">axe-webdriverjs demo</Offscreen>
          <img className="chapter-image" src={axeWebdriverDemo} alt="axe Webdriver demo in Sublime Text" />
        </Slide>

        <Slide>
          <h2 className="title small">Relevant session</h2>
          <h3 className="title large">Writing Automated Tests <br />for Accessibility</h3>
          <p>Friday, March 23<sup>rd</sup> - 9:00am-9:50am<br />Deque Showcase</p>
          <div className="centered-logos">
            <img src={axeLogo} alt="axe" width="100px" />
            <img src={attestLogo} alt="Attest" width="100px" style={{marginLeft: '2em'}} />
          </div>
        </Slide>

        <Slide>
          <Offscreen tag="h2">WorldSpace Attest</Offscreen>
          <img className="chapter-image" src={attest} alt="Attest overview" />
        </Slide>

        <Slide className='central'>
          <div className='text-centered'>
            <div className='centered-logos'>
              <img src={axeLogo} width="80px" alt="axe" />
              <span>
                <img id="npm" src={npmLogo} width="80px" alt="npm" />
              </span>
            </div>
            <h2 className='title large'>
              <span style={{fontSize: '72px'}}>
                <strong>2 MILLION</strong>+
              </span><br />
              DOWNLOADS<br />
              <span aria-hidden="true">🎉</span>
            </h2>
          </div>
        </Slide>

        <Slide>
          <h2 className="title medium chapter-heading">Community Projects</h2>
          <img className="chapter-image" src={projects} alt="" width="100%" style={{marginTop: '2.5em'}} />
          <Offscreen tag="div">
          <ul>
            <li>Lighthouse</li>
            <li>Sonarwhal</li>
            <li>Ace by DAISY</li>
            <li>Ember A11y Testing</li>
            <li>Protractor</li>
            <li>Jest-axe</li>
            <li>Intern/Storybook</li>
            <li>Rocket Validator?</li>
          </ul>
          </Offscreen>
        </Slide>

        <Slide>
          <h2 className="title large">aXe Support Agreements</h2>
          <h3 className="title small" style={{marginTop:'0.5em'}}>Features:</h3>
          <ul className="list-center" style={{marginTop:'0.5em'}}>
            <li>Prioritized issues</li>
            <li>Insider communication channel</li>
            <li>Roadmap preview</li>
            <li>Sustainable axe-core</li>
          </ul>
          <p>Contact <a href="mailto:axe@deque.com">axe@deque.com</a> for more information</p>
        </Slide>

        <ChapterSlide>
          <h2 className='title large chapter-heading'>What’s new in aXe 3.0?</h2>
          <img className='chapter-image' src={testingbg} alt=""/>
        </ChapterSlide>

        <Slide>
          <h2 className="title large">axe-core@3.0.0</h2>
          <ul className="list-center">
            <li>Shadow DOM support <span role="img" aria-label="sparkle">✨</span></li>
            <li>API improvements &amp; bug fixes</li>
            <li>New rules</li>
            <li>Performance improvements</li>
            <li>Localization</li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title large">Shadow DOM</h2>
          <img src={shadowPeople} width="500px" alt="Shadow people" />
        </Slide>

        <Slide>
          <Offscreen tag="h2">Shadow DOM</Offscreen>
          <img src={shadowDOMSpec} className='chapter-image' alt="W3C Shadow DOM Specification" />
        </Slide>

        <Slide>
          <h2 className="title medium">User-Agent Shadow DOM</h2>
          <img src={userAgentShadowDOM} style={{marginTop: '10px'}} alt="Shadow DOM on video tag" width="500px" />
        </Slide>

        <Slide>
          <Offscreen tag="h2">Shadow DOM example</Offscreen>
          <img src={skiTripOrganizer} className='chapter-image' alt="Ski Trip Organizer open in Chrome developer tools" />
        </Slide>

        <Slide>
          <Offscreen tag="h2">Shadow DOM example in axe Coconut</Offscreen>
          <img src={skiTripOrganizerAxe} className='chapter-image' alt="Ski Trip Organizer open in axe developer tools" />
        </Slide>

        <Slide>
          <h2 className="title large">
            <img src={axeLogo} width="100px" style={{verticalAlign:'middle'}} alt="axe" />
            3.0 in a nutshell:
          </h2>
          <ul className="list-center">
            <li>Work around DOM APIs</li>
            <li>Construct our own Virtual DOM tree</li>
            <li>Create test APIs for ease of use</li>
            <li>Document, document, document</li>
            <li>Test, test, test</li>
          </ul>
        </Slide>

        <Slide>
          <Offscreen tag="h2">axe on Github</Offscreen>
          <img src={axeDeveloperGuide} className='chapter-image' alt="Developer Guide" />
        </Slide>

        <Slide>
          <h2 className="title large">New rules in 3.0</h2>
          <ul>
            <li>aria-hidden-body</li>
            <li>landmark-main-is-top-level</li>
            <li>landmark-banner-is-top-level</li>
            <li>landmark-contentinfo-is-top-level</li>
            <li>landmark-no-more-than-one-main</li>
            <li>landmark-no-more-than-one-banner</li>
            <li>landmark-no-more-than-one-contentinfo</li>
            <li>page-has-heading-one</li>
            <li>focus-order-semantics</li>
            <li>aria-dpub-role-fallback </li>
            <li>hidden-content <em>(review)</em></li>
            <li>frame-tested <em>(review)</em></li>
          </ul>
        </Slide>

        <Slide>
          <p className="title large"><span aria-label="tree" role="img">🌳</span></p>
          <h2 className="title medium">axe-core &amp; <br/>Accessibility Conformance Testing,<br/>sitting in a tree&hellip;</h2>
          <h3 className="title small" style={{marginTop: '1em'}}>Standards-based rule development</h3>
          <p style={{marginTop: '2em'}}>Documentation on Github:<br />
            <a href="https://github.com/dequelabs/axe-core/blob/develop/doc/rule-development.md">
              https://github.com/dequelabs/axe-core/blob/develop/doc/rule-development.md</a>
          </p>
        </Slide>

        <Slide>
          <h2 className="title large">Performance Improvements</h2>
          <h3 className="title medium">Thanks to our contributors <span aria-hidden="true">💯</span></h3>
          <ul className="list-center smaller">
            <li>Improve getSelector performance (<a href="https://github.com/dequelabs/axe-core/commit/737c81c">737c81c</a>)</li>
            <li>Memoize axe.utils.select (<a href="https://github.com/dequelabs/axe-core/commit/c9cd122">c9cd122</a>)</li>
            <li>Significantly improve performance of dom.findUp (<a href="https://github.com/dequelabs/axe-core/commit/9197e03">9197e03</a>)</li>
            <li>Use virtual methods where applicable (<a href="https://github.com/dequelabs/axe-core/commit/6ddc4e5">6ddc4e5</a>)</li>
            <li>Add performance metrics in Rule.runChecks (<a href="https://github.com/dequelabs/axe-core/commit/27fdc2f">27fdc2f</a>)</li>
            <li>Add option to limit result types to be reported (<a href="https://github.com/dequelabs/axe-core/commit/42b46d9">42b46d9</a>)</li>
            <li>&hellip; and more I’m sure</li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title large">Breaking Changes</h2>
          <ul className="list-center">
            <li>No more <code>axe.a11yCheck</code>; <br />
            use <code>axe.run</code> instead
            </li>
            <li>Incorrect use of <code>runOnly</code> now throws errors</li>
            <li>Skip-link rule no longer requires links with a focusable target</li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title large">Translations</h2>
          <h3 className="title medium">Thanks to our partner</h3>
          <img src={mitsue} alt="Mitsue Links" width="300px" style={{margin: '0'}} />
          <p>Contribute additional translations! <a href="mailto:axe@deque.com">axe@deque.com</a></p>
        </Slide>

        <ChapterSlide>
          <h2 className='title large chapter-heading'>aXe Web Extensions</h2>
          <img className='chapter-image' src={testingbg} alt=""/>
        </ChapterSlide>

        <Slide>
          <h2 className="title large">Chrome &amp; Firefox Extensions</h2>
          <ul className="logos">
            <li>
              <img src={chrome} alt="chrome" width="100px" />
              <a href="https://bit.ly/axe-chrome">https://bit.ly/axe-chrome</a></li>
            <li>
              <img src={firefox} alt="firefox" width="100px" />
              <a href="https://bit.ly/axe-firefox">https://bit.ly/axe-firefox</a></li>
          </ul>
          <div style={{display: 'none'}}>
          New WebExtensions that use the same codebase <br />
          Not going to be open sourced at this time as our products build on the same codebase<br />
            FireEyes is deprecated with this change
          </div>
        </Slide>

        <Slide>
          <Offscreen tag="h2">aXe Chrome</Offscreen>
          <img className='chapter-image' src={axeChrome} alt="axe Chrome extension running on npmjs.com"/>
        </Slide>

        <Slide>
          <Offscreen tag="h2">aXe Firefox</Offscreen>
          <img className='chapter-image' src={axeFirefox} alt="axe Firefox extension running on npmjs.com"/>
        </Slide>

        <Slide>
          <h2 className="title large">aXe Coconut</h2>
          <h3 className="title medium">Prerelease Chrome Extension</h3>
          <figure>
            <img src={coconut} alt="" width="520px" style={{ marginTop: '20px' }} />
            <figcaption><a href="https://bit.ly/axe-coconut">https://bit.ly/axe-coconut</a></figcaption>
          </figure>
        </Slide>

        <Slide>
          <h2 className="title large">aXe Roadmap</h2>
          <ul className="list-center">
            <li>New Rules</li>
            <li>Expanded localization</li>
            <li>API improvements</li>
            <li>&hellip;</li>
          </ul>
        </Slide>

        <Slide>
          <h2 className="title large">Resources</h2>
          <ul className="list-center">
            <li><a href="https://axe-core.org">https://axe-core.org</a></li>
            <li><a href="https://www.npmjs.com/package/axe-core">https://www.npmjs.com/package/axe-core</a></li>
            <li><a href="http://www.deque.com/axe/">http://www.deque.com/axe</a></li>
          </ul>
        </Slide>

        <Slide className="central">
          <h2 className="title large">3<sup>rd</sup> Annual aXe Hackathon!</h2>
          <h3 className="title medium">Saturday, March 24 - 10am-3pm</h3>
          <p>Downtown Works<br />
            550 West B Street, 4th Floor<br />
            San Diego, CA</p>
          <img src={axeLogo} alt="axe" width="120px" />
        </Slide>
        
        <Slide>
          <div className='text-centered'>
            <h2 className='title large'>Questions?</h2>
            <div className='row space-evenly'>
              <div>
                <img className='large-profile' src={marcy} width="150px" alt="Marcy Sutton" />
                <h3 className='profile-text text-centered'>Marcy Sutton</h3>
                <p className='profile-text text-centered'>marcy.sutton@deque.com</p>
                <p className='profile-text text-centered'><a href="https://twitter.com/marcysutton">@marcysutton</a></p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className='rest-centered'>
            <h2 className='rest-centered medium'>Sign up to receive presentation slides:</h2>
            <p className='title medium'><a href="http://www.deque.com/csun18">{'http://www.deque.com/csun18'}</a></p>
          </div>
        </Slide>
      </DequeDeck>
    );
  }
}

export default App;
