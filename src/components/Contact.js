import emailIcon from '../images/linkIcons/email.svg'
import whatsappIcon from '../images/linkIcons/whatsapp.svg'
import facebookIcon from '../images/linkIcons/facebook.svg'
import linkedinIcon from '../images/linkIcons/linkedin.svg'
import githubIcon from '../images/linkIcons/github.svg'


const Contact = () => {
   
   const handleWhatsAppButton  = (e) =>{
       e.preventDefault()
       var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = '+918985168886';
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert('number copied to clipboard')
      
    }
   
    return ( 
        <section className="contact" id="contact">
            <div className="wrapper">
                <div className="">
                 <p>Contact{'/>'}</p>
                <h2 >Let's start a project</h2>
                <h3>you can find me here:</h3>
                <div className="links">
                    <a href="mailto:ghantasaladinesh@gmail.com">
                        <img src={emailIcon} alt=""/>
                    </a>
                    <a href="/" onClick = {(e) => handleWhatsAppButton(e)}>
                     
                        <img src={whatsappIcon} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/dinesh.ghantasala.1/">
                        <img src={facebookIcon} alt=""  />
                    </a>
                    <a href="https://www.linkedin.com/in/dinesh-ghantasala-3b49121ab/">
                        <img src={linkedinIcon} alt=""/>
                    </a>
                    <a href="https://github.com/Dinesh485">
                        <img src={githubIcon} alt=""/>
                    </a>
                    
                </div>
                </div>
            </div>

            <div className="bg-title">Contact</div>
        </section>
     );
}
 
export default Contact;