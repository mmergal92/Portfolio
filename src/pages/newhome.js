import React, {useState, useEffect} from 'react';
import { loremText } from '../components/loremtext';
import { loremTextEs } from '../components/loremtextes';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"

const colorOptions = [
    { primary: "#FFE3F1", secondary: "#DD0051" },
    { primary: "#EFF2AC", secondary: "#175B32" },
    { primary: "#FFFEE3", secondary: "#EA6200" },
    { primary: "#BDCCCF", secondary: "#00283C" },
    { primary: "#211B47", secondary: "#D3E1E7" }
  ];
function getRandomColors() {
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];

}

const newhome = () => {
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [numberOfParagraphs, setNumberOfParagraphs] = useState('');
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('english');
    const [lang, setLang] = useState('english');
    const [primaryColor, setPrimaryColor] = useState('');
    const [secondaryColor, setSecondaryColor] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [buttonColor, setButtonColor] = useState('primary');
    const [hoveredButton, setHoveredButton] = useState(null);
    const [hoveredPButton, setHoveredPButton] = useState(null);
    const [hoveredSButton, setHoveredSButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);
    const [hoveredEButton, setHoveredEButton] = useState(null);
    const [buttonText, setButtonText] = useState("copy");
    const [isMobile, setIsMobile] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [displayText, setDisplayText] = useState("Riddims");
    const [displayTextTwo, setDisplayTextTwo] = useState("How many paragraphs?");
    const [displayTextThree, setDisplayTextThree] = useState("Enter");
    const [displayTextFour, setDisplayTextFour] = useState("Made by");
    const [displayTextFive, setDisplayTextFive] = useState("and");


    // const [oHovered, setOHovered] = useState(null);




    useEffect(() => {
        const { primary, secondary } = getRandomColors();
        setPrimaryColor(primary);
        setSecondaryColor(secondary);

        const checkMobile = () => setIsMobile(window.innerWidth <= 940);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);
  
  
      const handleButtonClick = (button, lang) => {
        setClickedButton(button);
        setLanguage(lang);

        // Change display text based on language selection
        setDisplayText(lang === 'spanish' ? "Ritmo" : "Riddims");
        setDisplayTextTwo(lang === 'spanish' ? "¿Cuantos párrafos?" : "How many paragraphs?");
        setDisplayTextThree(lang === 'spanish' ? "ingresar" : "Enter");
        setDisplayTextFour(lang === 'spanish' ? "Hecho por" : "Made by");
        setDisplayTextFive(lang === 'spanish' ? "y" : "and");
        setButtonText(lang === "spanish" ? "copiar" : "copy");
        // If text has already been generated, update it immediately
        if (text) {
          const selectedText = lang === 'english' 
          ? loremText.getAllParagraphs(parseFloat(numberOfParagraphs)) 
          : loremTextEs.getAllParagraphs(parseFloat(numberOfParagraphs));
          setText(selectedText);
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsActive(true);
      const number = parseFloat(numberOfParagraphs);
      const selectedText = language === 'english' ? loremText : loremTextEs;
      const HTMLParagraphs = selectedText.getAllParagraphs(number);
      setText(HTMLParagraphs);
      // If no button was clicked before, default to "plantain" (English)
      if (!clickedButton) {
        setClickedButton('plantain');
        setLanguage('english'); 
      }
    };

    const generateWaveSvg = (color) => {
      return `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="5">
          <path d="M0,3 Q2,6 4,3 T8,3 T12,3" stroke="${color}" stroke-width="1" fill="transparent"/>
        </svg>
      `)}`;
    };
    
    const waveBackground = generateWaveSvg(hovered ? primaryColor : secondaryColor); // Change color on hover
    // const waveBackgroundand = generateWaveSvg(secondaryColor); // 
    // const waveBackgroundme = generateWaveSvg( oHovered ? primaryColor : secondaryColor); // Change color on hover
  
    const handleCopy = () => {
      const el = document.createElement('textarea'); // Create a <textarea> element
  
      // Convert HTML string to text to remove the <p></p> elements
      const tmp = document.createElement('DIV');
      tmp.innerHTML = text;
      el.value = tmp.innerHTML.replace(/<p>/g, '\n\n').replace(/<\/p>/g, ''); // Preserve paragraph breaks
  
    //   el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
      el.style.position = 'absolute';
      el.style.left = '-9999px'; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
  
      if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
      }
  
      setShowCopyModal(true);
      setButtonText(clickedButton === "platano" ? "¡copiado!" : "copied!");// Change button text

      setTimeout(() => {
        setShowCopyModal(false);
        setButtonText(clickedButton === "platano" ? "copiar" : "copy"); // Revert button text after a delay
      }, 1000);
    };



      return (
        <div className ={`loremsite ${isActive ? 'active' : ''}`} style={{ backgroundColor: primaryColor }}>
          <div className="main-content ">
            <div className="left-lorem-container" style={{ backgroundColor: primaryColor, color: secondaryColor}}>
                <div className ="language-button">
                <button 
                className={`plaintain-button ${language === 'english' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('plantain', 'english')}
                onMouseEnter={() => setHoveredPButton('plantain')}
                onMouseLeave={() => setHoveredPButton(null)}
                style={{ 
                  backgroundColor: hoveredPButton ? secondaryColor  // When hovered
                          : clickedButton === 'plantain' ? secondaryColor  // When clicked
                            : primaryColor,  // Default
                        color: hoveredPButton 
                          ? primaryColor  // When hovered
                          : clickedButton === 'plantain'  
                            ? primaryColor  // When clicked
                            : secondaryColor,  // Default
                        borderColor: secondaryColor }}>
                      plantain
                  </button>
                  <button 
                  className={`platano-button ${language === 'spanish' ? 'active' : ''}`} 
                  onClick={() => handleButtonClick('platano', 'spanish')}
                  onMouseEnter={() => setHoveredSButton('platano')}
                  onMouseLeave={() => setHoveredSButton(null)}
                  style={{ 
                    backgroundColor: hoveredSButton 
                        ? secondaryColor  // When hovered
                        : clickedButton === 'platano'  
                          ? secondaryColor  // When clicked
                          : primaryColor,  // Default
                      color: hoveredSButton 
                        ? primaryColor  // When hovered
                        : clickedButton === 'platano'  
                          ? primaryColor  // When clicked
                          : secondaryColor,  // Default
                      borderColor: secondaryColor}}>
                                        plátano
                  </button>
                </div>
                <div className="riddims" style={{ color: secondaryColor}}>
                    <h1 className="title">{displayText}
                    </h1>
                    <form className="form" action="/" method="POST" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        className="paragraph-number"
                        name="numberOfParagraphs"
                        onChange={(e) => setNumberOfParagraphs(e.target.value)}
                        placeholder={displayTextTwo}
                        value={numberOfParagraphs}
                        style={{borderColor: secondaryColor, color: secondaryColor, "--placeholder-color": secondaryColor}}
                    />
                    <input 
                    type="submit" 
                    value={displayTextThree} 
                    className="generate-button"  
                    onMouseEnter={!isMobile ? () => setHoveredEButton("enter") : undefined}
                    onMouseLeave={!isMobile ? () => setHoveredEButton(null) : undefined}
                    style={{ 
                      backgroundColor:  hoveredEButton ? primaryColor: secondaryColor, 
                      color: hoveredEButton ? secondaryColor :primaryColor, 
                      borderColor: secondaryColor  }}/>
                    </form>
                </div>
                <div className="made-by">
                <p className="credit">
                      {displayTextFour}&nbsp;<span className ="linkwave" 
                        onMouseEnter={() => setHovered("made")} 
                        onMouseLeave={() => setHovered(null)} 
                        style={{ backgroundImage: `url(${waveBackground})`, 
                                  backgroundRepeat: "repeat-x", 
                                  backgroundPosition: "bottom", 
                                  backgroundSize: "8px 3px" }}>
                          <a href="https://www.itsproof.co/" target="_blank" style={{color: secondaryColor}} >
                         Segacy {displayTextFive} Maria</a></span><br/>
                    </p>
                </div>
            </div>
            <div className="right-lorem-container" style={{ backgroundColor: primaryColor, color: secondaryColor}}>
                {text && (
                <>
                    <button 
                    className="copy-button" 
                    onClick={handleCopy} 
                    onMouseEnter={!isMobile ? () => setHoveredButton("copy") : undefined}
                    onMouseLeave={!isMobile ? () => setHoveredButton(null) : undefined}
                    style={{ 
                      backgroundColor:  hoveredButton ? primaryColor :  secondaryColor, 
                      color: hoveredButton ? secondaryColor :primaryColor , 
                      borderColor: secondaryColor}} >
                    {buttonText}
                    </button>
                
                
                    <div
                    id="targetText"
                    className="generated-text"
                    dangerouslySetInnerHTML={{ __html: text }}
                    />
                
                </>
                
                )}
                    
                {/* <div id="copyOverlay" className={`${showCopyModal ? 'modal--show' : 'modal--hidden'}`}>

                    <div id="copyText">
                    <p>Copied!</p>
                    </div>
                </div> */}
            </div>
        </div>
  
          
    </div>
      );

}

  
  export default newhome;
