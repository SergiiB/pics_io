import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-cols">
                    <div className="footer-col col1">
                        <div className="footer-h">Company</div>
                        <ul>
                            <li>
                                <a href="./about-us">About us</a>
                            </li>

                            <li>
                                <a href="#">Status page</a>
                            </li>
                            <li>
                                <a href="#" rel="noopener" target="_blank">Blog</a>
                            </li>
                            <li>
                                <a href="#" rel="noopener" target="_blank">Help Center</a>
                            </li>
                            <li>
                                <a href="./g-suite-maximizer">G Suite Maximizer</a>
                            </li>
                            <li>
                                <a href="./smart-file-organizer">Smart File Organizer</a>
                            </li>
                            <li>
                                <a href="./dam-quick-start">DAM Quick Start Guide</a>
                            </li>
                            <li>
                                <a href="./metadata-playbook">Metadata Playbook</a>
                            </li>
                            <li>
                                <a href="./book-a-demo">Book a Demo</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col1">
                        <div className="footer-h">Features</div>
                        <ul>
                            <li>
                                <a href="./unrestricted-digital-library">Unrestricted Digital Library</a>
                            </li>
                            <li>
                                <a href="./collections">Collections</a>
                            </li>
                            <li>
                                <a href="./version-control">Version Control</a>
                            </li>
                            <li>
                                <a href="./assets-sharing">Assets Sharing</a>
                            </li>
                            <li>
                                <a href="./view-sketch-online">View Sketch online</a>
                            </li>
                            <li>
                                <a href="./file-comparison">File comparison</a>
                            </li>
                            <li>
                                <a href="./branding">Branding</a>
                            </li>
                            <li>
                                <a href="./analytics">Analytics &amp; reporting</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col1">
                        <div className="footer-h">Integrations</div>
                        <ul>
                            <li>
                                <a href="./google-drive-integration">Integration with Google Drive</a>
                            </li>
                            <li>
                                <a href="./slack-integration">Integration with Slack</a>
                            </li>
                            <li>
                                <a href="./zapier-integration">Integration with Zapier</a>
                            </li>
                            <li>
                                <a href="./gsuite-integration">Add-ons for G Suite</a>
                            </li>
                            <li>
                                <a href="./adobe-photoshop-integration">Integration with Adobe Photoshop</a>
                            </li>
                            <li>
                                <a href="./adobe-illustrator-integration">Integration with Adobe Illustrator</a>
                            </li>
                            <li>
                                <a href="./adobe-premiere-pro-integration">Integration with Adobe Premiere Pro</a>
                            </li>
                            <li>
                                <a href="./adobe-after-effects-integration">Integration with Adobe After Effects</a>
                            </li>
                            <li>
                                <a href="./zoho-integration">Integration with Zoho CRM</a>
                            </li>
                            <li>
                                <a href="./google-docs">Integration with Google Docs</a>
                            </li>
                            <li>
                                <a href="./google-sheets">Integration with Google Sheets</a>
                            </li>
                            <li>
                                <a href="./google-forms">Integration with Google Forms</a>
                            </li>
                            <li>
                                <a href="./google-slides">Integration with Google Slides</a>
                            </li>
                            <li>
                                <a href="./easy-projects" rel="nofollow">Integration with Easy Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col col1 col-socials">
                        <ul className="footer-social">
                            <li>
                                <a href="#" title="Facebook" aria-label="Facebook" rel="noopener" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                         viewBox="0 0 32 32">
                                        <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                                        <title>Facebook</title>
                                    </svg>
                                </a>
                            </li>
                            <li><a href="#" title="Twitter" aria-label="Twitter"
                                   rel="noopener" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 32 32">
                                    <path
                                        d="M32 7.075a12.941 12.941 0 0 1-3.769 1.031 6.601 6.601 0 0 0 2.887-3.631 13.21 13.21 0 0 1-4.169 1.594A6.565 6.565 0 0 0 22.155 4a6.563 6.563 0 0 0-6.563 6.563c0 .512.056 1.012.169 1.494A18.635 18.635 0 0 1 2.23 5.195a6.56 6.56 0 0 0-.887 3.3 6.557 6.557 0 0 0 2.919 5.463 6.565 6.565 0 0 1-2.975-.819v.081a6.565 6.565 0 0 0 5.269 6.437 6.574 6.574 0 0 1-2.968.112 6.588 6.588 0 0 0 6.131 4.563 13.17 13.17 0 0 1-9.725 2.719 18.568 18.568 0 0 0 10.069 2.95c12.075 0 18.681-10.006 18.681-18.681 0-.287-.006-.569-.019-.85A13.216 13.216 0 0 0 32 7.076z"></path>
                                    <title>Twitter</title>
                                </svg>
                            </a></li>
                            <li><a href="#" title="LinkedIn"
                                   aria-label="LinkedIn" rel="noopener" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 32 32">
                                    <path
                                        d="M12 12h5.535v2.837h.079c.77-1.381 2.655-2.837 5.464-2.837C28.92 12 30 15.637 30 20.367V30h-5.769v-8.54c0-2.037-.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509V30H12V12zM2 12h6v18H2V12zM8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                    <title>LinkedIn</title>
                                </svg>
                            </a></li>
                        </ul>
                    </div>
                    <div className="footer-col col2">
                        <div className="footer-h">Solutions</div>
                        <div className="footer-navs">
                            <ul>
                                <li className="footer-nav-title">By Use Cases</li>
                                <li><a href="./digital-asset-management">Digital Asset Management</a></li>
                                <li><a href="./creative-project-management">Creative Project Management</a></li>
                                <li><a href="./brand-asset-management">Brand Asset Management</a></li>
                            </ul>

                            <ul>
                                <li className="footer-nav-title">By Industry</li>
                                <li><a href="./business">Business</a></li>
                                <li><a href="./design-management-for-designers">Designers</a></li>
                                <li><a href="./design-management-software-for-developers">Software Developers</a></li>
                                <li><a href="./dam-for-education">Schools, colleges, universities</a></li>
                                <li><a href="./dam-for-nonprofits">Non-profits</a></li>
                                <li><a href="./marketing-teams">Marketing teams</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-col col2 col-products">
                        <div className="footer-h">Other products</div>
                        <div className="footer-navs">
                            <ul>
                                <li className="footer-nav-title"><a href="#" rel="nofollow">Edit.pics.io</a></li>
                                <li><a href="#" rel="nofollow">Online photo editor</a></li>
                                <li><a href="#" rel="nofollow">Description &amp; features</a></li>
                                <li><a href="#" rel="nofollow">About Edit</a></li>
                            </ul>

                            <ul>
                                <li className="footer-nav-title"><a href="#" rel="nofollow">Raw.pics.io</a></li>
                                <li><a href="#">Converts RAW to JPEG</a></li>
                                <li><a href="#">Supported cameras and formats</a></li>
                                <li><a href="#">Converts CR2 images</a></li>
                                <li><a href="#">Converts NEF images</a></li>
                                <li><a href="#">How to convert</a></li>
                                <li><a href="#">Convert PDF to JPG</a></li>
                                <li><a href="#">Convert JPG to PDF</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-col col2 footer-bottom">
                        <div className="footer-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 75" width="146"
                                 height="39">
                                <title>Pics.io</title>
                                <path fill="#fff"
                                      d="M26.2 18.9H.4V74h11.7V54.4h14c11.9 0 18.5-8.2 18.5-17.8.1-9.6-6.4-17.7-18.4-17.7zm-1.6 25.2H12.2V29.3h12.5c4.6 0 8.1 2.8 8.1 7.4-.1 4.5-3.5 7.4-8.2 7.4zM52 18.9h11.7V74H52zM101.2 28.4c5.7 0 10.7 3.6 13 8l10.1-5c-3.9-6.9-10.9-13.5-23-13.5C84.8 17.9 72 29.5 72 46.4s12.8 28.5 29.3 28.5c12.1 0 19.1-6.7 23-13.5l-10.1-4.9c-2.3 4.5-7.3 8-13 8-10 0-17.3-7.7-17.3-18.1.1-10.3 7.4-18 17.3-18zM141.3 33.9c0-3.3 2.8-5.5 7.8-5.5 5.6 0 11.6 1.9 16 6l6.5-8.6c-5.4-5-12.7-7.7-21.5-7.7-13 0-20.9 7.6-20.9 16.8 0 20.7 31.7 14 31.7 23.8 0 3.1-3.1 6.1-9.6 6.1-7.6 0-13.6-3.4-17.5-7.4l-6.4 8.9c5.1 5.2 12.7 8.8 23.3 8.8 14.9 0 22-7.6 22-17.7.2-20.6-31.4-14.8-31.4-23.5zM185.9 61.5c-3.6 0-6.7 3.1-6.7 6.7s3.1 6.7 6.7 6.7 6.7-3.1 6.7-6.7-3-6.7-6.7-6.7zM202 18.9h11.7V74H202zM250.7 18C234.1 18 222 29.9 222 46.5S234.1 75 250.7 75c16.7 0 28.8-11.9 28.8-28.5S267.4 18 250.7 18zm0 46.6c-10.2 0-16.7-7.8-16.7-18.1s6.5-18.1 16.7-18.1 16.8 7.8 16.8 18.1c-.1 10.3-6.7 18.1-16.8 18.1zM271.2 7.2L260.8 0h-23l-10.4 7.2H202v7.4h27.4l10.4-7.2h19.1l10.4 7.2h13.3V7.2z"></path>
                            </svg>
                        </div>
                        <div className="copyright">Copyright © 2009-2020 TopTechPhoto. All rights reserved.
                        </div>
                        <div className="footer-tools">
                            <a href="#" rel="nofollow">Terms of Service</a> |
                            <a href="#" rel="nofollow">Privacy Policy</a> |
                            <a href="#" rel="nofollow">Cookies Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
