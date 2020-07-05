import React from 'react';
import iconSupportFull from "../../images/icon-support-full.svg";
import iconSupportMiddle from "../../images/icon-support-middle.svg";
import iconSupportUnlimited from "../../images/icon-support-unlimited.svg";
import iconSupportNone from "../../images/icon-support-none.svg";
import Footer from "./Footer/Footer";
import Cookies from "./Cookies/Cookies";
import './Main.css';
import Testimonial from "./Testimonial/Testimonial";
import Faq from "./Faq/Faq";
import Signup from "./Signup/Signup";

const Main = () => {
    return (
        <main>
            <div className="middlePricing">
                <div className="container containerPricing">
                    {/* START desktop */}
                    <div className="sectionPlans sectionPlansDesktop">
                        <div className="colPlan switchItem">

                            <div className="switchWrapper">
                                <div className="switcher">
                                    <label htmlFor="radio-e">
                                        <span className="labelA">Monthly</span>
                                        <span className="switch switch--vertical switch--no-label">
                                              <input id="radio-e" type="checkbox" name="fourth-switch"/>
                                              <span className="toggle-outside">
                                                 <span className="toggle-inside"></span>
                                              </span>
                                            </span>
                                        <span className="labelB">Annual   <br/>
                                                <span className="caption">(2 months free)</span>
                                            </span>
                                    </label>
                                </div>
                            </div>


                        </div>
                        <div className="colPlan freePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Free</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">0</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan paygPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Pay as you go</div>
                                <span className="priceFrom">from</span>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">18</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan microPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Micro</div>
                                <div className="contentItemPlan microPlanMountly">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">120</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan microPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">1200</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Small team, new business</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan smallPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Small</div>
                                <div className="contentItemPlan smallPlanMountly">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">480</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan smallPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">4800</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Online retailers, established agencies</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan mediumPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Medium</div>
                                <div className="contentItemPlan mediumPlanMountly">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">840</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan mediumPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">8400</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Medium team, established company</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan enterprisePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Enterprise</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                           <span className="amountPlan">
                              <img src="https://landing-assets.pics.io/img/newlanding/building.svg"
                                   alt="Enterprise plan"/>
                           </span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Get in touch with our Sales team to discuss specific
                                    needs
                                    of your organisation
                                </div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="enterprise"
                                    style={{color: 'black'}}>Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                            <span className="detailTitle basicFunctional rotate">
                                 Basic DAM functionality
                            </span>

                            <span>
                                <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                            </span>
                            <span>
                                <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                            </span>
                            <span>
                                <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                            </span>
                            <span>
                                <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                            </span>
                            <span>
                                <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                            </span>
                            <span>
                                <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                            </span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle"> Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            {/*&nbsp;*/}
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Version Control&nbsp;<img className="tooltipIcon"
                                                                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                            alt=""
                                                                                            data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                            <span className="detailTitle teamAndLibrary rotate">Your team and library</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Maximum size of the library, TB&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Total amount of space taken by all the assets in your library"/></span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Maximum number of assets in the library&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Number of assets in your library"/></span>
                                </div>

                                <span>50K</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span
                                        className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                             data-tippy-content="Number of user accounts on your plan"/></span>
                                </div>

                                <span>
                                        {<img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>}
                                    </span>
                                <span>1 included<br/> $18/mo each<br/> additional</span>
                                <span>10 included<br/> $18/mo each<br/> additional</span>
                                <span>50 included<br/> $15/mo each<br/> additional</span>
                                <span>100 included</span>
                                {<img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/>}

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Branded look and feel&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                            <span
                                className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration&nbsp;</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Commenting&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Number of public Websites&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>0 included<br/> $12/mo each<br/> additional</span>
                                <span>15 included<br/> $12/mo each<br/> additional</span>
                                <span>50 included<br/> $10/mo each<br/> additional</span>
                                <span>100 included</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Single asset<br/> sharing&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Share to non-Pics.io users  any single asset from your library"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>10</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Number of inboxes&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>1</span>
                                <span>5</span>
                                <span>10</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                            <span
                                className="detailTitle storageSyncronization rotate">Storage Syncronization&nbsp;</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Manual&nbsp;<img className="tooltipIcon"
                                                                                   src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                   alt=""
                                                                                   data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/></span>
                                </div>

                                <span>Accessible<br/> every 60 minutes</span>
                                <span>Accessible<br/> every 15 minutes</span>
                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Automatic&nbsp;<img className="tooltipIcon"
                                                                                      src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                      alt=""
                                                                                      data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Occurs every<br/> 30 minutes</span>
                                <span>Occurs every<br/> 15 minutes</span>
                                <span>Occurs every<br/> 5 minutes</span>
                                <span>Occurs in<br/> real-time</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting&nbsp;</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Activity Logs&nbsp;<img className="tooltipIcon"
                                                                                          src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                          alt=""
                                                                                          data-tippy-content="The time period for keeping the  data about your activity within the system"/></span>
                                </div>

                                <span>1 day</span>
                                <span>7 days</span>
                                <span>1 month</span>
                                <span>6 months</span>
                                <span>1 year</span>
                                <span>3 years</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Storage&nbsp;<img className="tooltipIcon"
                                                                                    src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                    alt=""
                                                                                    data-tippy-content="Statistics on your storage usage"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Library&nbsp;<img className="tooltipIcon"
                                                                                    src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                    alt=""
                                                                                    data-tippy-content="Statistics on how the library is transformed"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Websites&nbsp;<img className="tooltipIcon"
                                                                                     src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                     alt=""
                                                                                     data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Teammate&nbsp;<img className="tooltipIcon"
                                                                                     src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                     alt=""
                                                                                     data-tippy-content="Statistics on the user's  activity within the account"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Team&nbsp;<img className="tooltipIcon"
                                                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                 alt=""
                                                                                 data-tippy-content="Statistics on the team  activity within the library"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Asset&nbsp;<img className="tooltipIcon"
                                                                                  src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                  alt=""
                                                                                  data-tippy-content="Statistics on how the asset  was used within the system"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Visual comparison tool&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Metadata fields management &nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Change the default  metadata of your assets"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Custom fields schema&nbsp;<img className="tooltipIcon"
                                                                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                                 alt=""
                                                                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Automatic AI keywording for images&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                    </span>
                                </div>

                                <span>$20/1000<br/> images</span>
                                <span>$20/1000<br/> images</span>
                                <span>$18/1000<br/> images</span>
                                <span>$15/1000<br/> images</span>
                                <span>$10/1000<br/> images</span>
                                <span>The cheapest<br/> AI keywording</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Online knowledge base&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="24/7 online access  to HelpCenter articles"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Email&nbsp;<img className="tooltipIcon"
                                                                                  src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                  alt=""
                                                                                  data-tippy-content="Qualified customer support  through the email"/></span>
                                </div>

                                <span>72 hours<br/> turnaround</span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Online chat&nbsp;<img className="tooltipIcon"
                                                                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                        alt=""
                                                                                        data-tippy-content="Qualified customer support  through the online chat"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>4 hours<br/> turnaround</span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Customer success manager&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Individual support by  customer success manager"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Personal support engineer&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Individual technical support"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailDesktop">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Google Drive&nbsp;<img className="tooltipIcon"
                                                                                         src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                         alt=""
                                                                                         data-tippy-content="Integration with  Google Drive storage space"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Amazon S3&nbsp;<img className="tooltipIcon"
                                                                                      src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                      alt=""
                                                                                      data-tippy-content="Integration with Amazon storage space "/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Slack&nbsp;<img className="tooltipIcon"
                                                                                  src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                  alt=""
                                                                                  data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Zapier&nbsp;<img className="tooltipIcon"
                                                                                   src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                   alt=""
                                                                                   data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Webhooks&nbsp;<img className="tooltipIcon"
                                                                                     src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                     alt=""
                                                                                     data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Google Docs&nbsp;<img className="tooltipIcon"
                                                                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                        alt=""
                                                                                        data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Google Spreadsheets&nbsp;<img className="tooltipIcon"
                                                                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                                alt=""
                                                                                                data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Google Forms&nbsp;<img className="tooltipIcon"
                                                                                         src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                         alt=""
                                                                                         data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Google Slides&nbsp;<img className="tooltipIcon"
                                                                                          src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                          alt=""
                                                                                          data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Adobe Photoshop&nbsp;<img className="tooltipIcon"
                                                                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                            alt=""
                                                                                            data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Adobe Illustrator&nbsp;<img className="tooltipIcon"
                                                                                              src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                              alt=""
                                                                                              data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Adobe Premiere Pro&nbsp;<img className="tooltipIcon"
                                                                                               src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                               alt=""
                                                                                               data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Adobe After Effects&nbsp;<img className="tooltipIcon"
                                                                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                                alt=""
                                                                                                data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Zoho CRM&nbsp;<img className="tooltipIcon"
                                                                                     src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                     alt=""
                                                                                     data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/></span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* *** END Desktop  */}
                    {/* *** START tablet */}
                    <div className="sectionPlans sectionPlansTablet_firstPart">
                        <div className="colPlan switchItem">
                            <div className="switchWrapper">
                                <div className="switcher">
                                    <label htmlFor="radio-a">
                                        <span className="labelA">Monthly</span>
                                        <span className="switch switch--vertical switch--no-label">
                              <input id="radio-a" type="checkbox" name="fourth-switch"/>
                              <span className="toggle-outside">
                                 <span className="toggle-inside"></span>
                              </span>
                           </span>
                                        <span className="labelB">Annual   <br/><span
                                            className="caption">(2 months free)</span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="colPlan freePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Free</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">0</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan paygPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Pay as you go</div>
                                <span className="priceFrom">from</span>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">18</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan microPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Micro</div>
                                <div className="contentItemPlan microPlanMountly">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">120</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan microPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">1200</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Small team, new business</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                          <span className="detailTitle basicFunctional rotate">
                             Basic DAM functionality
                          </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Uploading&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="  Upload your assets into Pics.io library"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Searching&nbsp;<img className="tooltipIcon"
                                                                                      src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                      alt=""
                                                                                      data-tippy-content="Search for assets through your  library with keywords and other metadata"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Downloading&nbsp;<img className="tooltipIcon"
                                                                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                        alt=""
                                                                                        data-tippy-content="Download assets from your Pics.io library"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Version Control&nbsp;<img className="tooltipIcon"
                                                                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                                                            alt=""
                                                                                            data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle teamAndLibrary rotate">Your team and library</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Maximum size of the library, TB&nbsp;<img
                                        className="tooltipIcon"
                                        src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                        data-tippy-content="Total amount of space taken by all the assets in your library"/></span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Number of assets in your library"/></span>
                                </div>

                                <span>50K</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">
                                        Number of teammates in the team included in the plan&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                             data-tippy-content="Number of user accounts on your plan"/>
                                    </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>1 included<br/> $18/mo each<br/> additional</span>
                                <span>10 included<br/> $18/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">
                                            Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                                <span
                                    className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration</span>

                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>
                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>
                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>0 included<br/> $12/mo each<br/> additional</span>
                                <span>15 included<br/> $12/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>10</span>
                                <span>
                                        <img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/>
                                    </span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Number of inboxes&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                    </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>1</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle storageSyncronization rotate">Storage Syncronization</span>

                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>
                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>
                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> every 60 minutes</span>
                                <span>Accessible<br/> every 15 minutes</span>
                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>Occurs every<br/> 30 minutes</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>
                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>
                            <span>
                                    <img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/>
                                </span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 day</span>
                                <span>7 days</span>
                                <span>1 month</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportNone} className="icon icon-support-'none'" alt=""/>
                                    </span>
                                <span>
                                        <img src={iconSupportFull} className="icon icon-support-full" alt=""/>
                                    </span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle metadataManagement rotate">Metadata management</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                    </span>
                                </div>

                                <span>$20/1000<br/> images</span>
                                <span>$20/1000<br/> images</span>
                                <span>$18/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Email </span>
                                    <img className="tooltipIcon"
                                         src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                         data-tippy-content="Qualified customer support  through the email"/>
                                </div>

                                <span>72 hours<br/> turnaround</span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Online chat&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Qualified customer support  through the online chat"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>4 hours<br/> turnaround</span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Personal support engineer&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Individual technical support"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* *** secondpart */}
                    <div className="sectionPlans sectionPlansTablet_secondPart">
                        <div className="colPlan smallPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Small</div>
                                <div className="contentItemPlan smallPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">480</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan smallPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">4800</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Online retailers, established agencies</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan mediumPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Medium</div>
                                <div className="contentItemPlan mediumPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">840</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan mediumPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">8400</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Medium team, established company</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan enterprisePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Enterprise</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                           <span className="amountPlan">
                              <img src="https://landing-assets.pics.io/img/newlanding/building.svg"
                                   alt="Enterprise plan"/>
                           </span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Get in touch with our Sales team to discuss specific
                                    needs
                                    of your organisation
                                </div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="enterprise"
                                    style={{color: 'black'}}>Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                          <span className="detailTitle basicFunctional rotate">
                             Basic DAM functionality
                          </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle teamAndLibrary rotate">Your team and library</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;<img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span>50 included<br/> $15/mo each<br/> additional</span>
                                <span>100 included</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;<img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>50 included<br/> $10/mo each<br/> additional</span>
                                <span>100 included</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span>5</span>
                                <span>10</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle storageSyncronization rotate">Storage Syncronization</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs every<br/> 15 minutes</span>
                                <span>Occurs every<br/> 5 minutes</span>
                                <span>Occurs in<br/> real-time</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>6 months</span>
                                <span>1 year</span>
                                <span>3 years</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle metadataManagement rotate">Metadata management</span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$15/1000<br/> images</span>
                                <span>$10/1000<br/> images</span>
                                <span>The cheapest<br/> AI keywording</span>

                            </div>
                        </div>
                    </div>
                    {/* sabaka */}
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Email&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Qualified customer support  through the email"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailTablet">
                        <div className="detailItemSummary">
                            <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services</span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/**** END tablet */}
                    {/**** START mobileBig */}
                    <div className="sectionPlans sectionPlansMobileBig_firstPart">
                        <div className="colPlan switchItem">
                            <div className="switchWrapper">
                                <div className="switcher">
                                    <label htmlFor="radio-b">
                                        <span className="labelA">Monthly</span>
                                        <span className="switch switch--vertical switch--no-label">
                                              <input id="radio-b" type="checkbox" name="fourth-switch"/>
                                              <span className="toggle-outside">
                                                 <span className="toggle-inside"></span>
                                              </span>
                                           </span>
                                        <span className="labelB">Annual   <br/><span
                                            className="caption">(2 months free)</span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="colPlan freePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Free</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">0</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan paygPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Pay as you go</div>
                                <span className="priceFrom">from</span>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">18</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                              <span className="detailTitle basicFunctional rotate">
                                 Basic DAM functionality
                              </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle teamAndLibrary rotate">Your team and library</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span>50K</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>1 included<br/> $18/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboratio</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>0 included<br/> $12/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>10</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle storageSyncronization rotate">Storage Syncronization</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> every 60 minutes</span>
                                <span>Accessible<br/> every 15 minutes</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 day</span>
                                <span>7 days</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle metadataManagement rotate">Metadata management</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$20/1000<br/> images</span>
                                <span>$20/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span>72 hours<br/> turnaround</span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span>4 hours<br/> turnaround</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                    {/*          <img class="tooltipIcon" src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""*/}
                                    {/*data-tippy-content="Qualified customer support  through the email"/>*/}
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Google Docs&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                    </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    {/* *** second part mobileBig */}
                    <div className="sectionPlans sectionPlansMobileBig_secondPart">
                        <div className="colPlan microPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Micro</div>
                                <div className="contentItemPlan microPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">120</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan microPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">1200</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Small team, new business</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan smallPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Small</div>
                                <div className="contentItemPlan smallPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">480</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan smallPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">4800</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Online retailers, established agencies</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle basicFunctional rotate">Basic DAM functionality</span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle teamAndLibrary rotate">Your team and library</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span>10 included<br/> $18/mo each<br/> additional</span>
                                <span>50 included<br/> $15/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>15 included<br/> $12/mo each<br/> additional</span>
                                <span>50 included<br/> $10/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span>1</span>
                                <span>5</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle storageSyncronization rotate">Storage Syncronization</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs every<br/> 30 minutes</span>
                                <span>Occurs every<br/> 15 minutes</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 month</span>
                                <span>6 months</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Visual comparison tool&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle metadataManagement rotate">Metadata management</span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$18/1000<br/> images</span>
                                <span>$15/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services</span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Amazon S3&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                             alt=""
                                             data-tippy-content="Integration with Amazon storage space "/>
                                    </span>
                                    {/*          <img class="tooltipIcon" src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""*/}
                                    {/*data-tippy-content="Qualified customer support  through the email"/>*/}
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* *** third part mobileBig */}
                    <div className="sectionPlans sectionPlansTablet_thirdPart">
                        <div className="colPlan mediumPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Medium</div>
                                <div className="contentItemPlan mediumPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">840</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan mediumPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">8400</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Medium team, established company</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                        <div className="colPlan enterprisePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Enterprise</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                           <span className="amountPlan">
                                              <img src="https://landing-assets.pics.io/img/newlanding/building.svg"
                                                   alt="Enterprise plan"/>
                                           </span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Get in touch with our Sales team to discuss specific
                                    needs
                                    of your organisation
                                </div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="enterprise"
                                    style={{color: 'black'}}>Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle basicFunctional rotate">Basic DAM functionality</span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                  <span className="detailTitle teamAndLibrary rotate">Your team and library
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span>100 included</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                                <span
                                    className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>100 included</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span>10</span>
                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle storageSyncronization rotate">Storage Syncronization</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>
                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs every<br/> 5 minutes</span>
                                <span>Occurs in<br/> real-time</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 year</span>
                                <span>3 years</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/></span>
                                </div>

                                <span>$10/1000<br/> images</span>
                                <span>The cheapest<br/> AI keywording</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileBig">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>
                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>
                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* *** END mobileBig */}
                    {/* *** first part mobileLittle */}
                    <div className="sectionPlans sectionPlansMobileLittle_firstPart">
                        <div className="colPlan switchItem">
                            <div className="switchWrapper">
                                <div className="switcher">
                                    <label htmlFor="radio-g">
                                        <span className="labelA">Monthly</span>
                                        <span className="switch switch--vertical switch--no-label">
                                                <input id="radio-g" type="checkbox" name="fourth-switch"/>
                                                <span className="toggle-outside">
                                                    <span className="toggle-inside"></span>
                                                </span>
                                            </span>
                                        <span className="labelB">Annual   <br/>
                                                <span className="caption">(2 months free)</span>
                                            </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="colPlan freePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Free</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">0</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle basicFunctional rotate">
                     Basic DAM functionality
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle teamAndLibrary rotate">Your team and library
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span>50K</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span
                                        className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                             data-tippy-content="Number of user accounts on your plan"/>
                                    </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Branded look and feel&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle storageSyncronization rotate">Storage Syncronization
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> every 60 minutes</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 day</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$20/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span>72 hours<br/> turnaround</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                            </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    {/* second part mobileLittle */}
                    <div className="sectionPlans sectionPlansMobileLittle_noFirstPart">
                        <div className="colPlan paygPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Pay as you go</div>
                                <span className="priceFrom">from</span>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">18</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Individual users, freelancers</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                              <span className="detailTitle basicFunctional rotate">
                                 Basic DAM functionality
                              </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle teamAndLibrary rotate">Your team and library
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span
                                        className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                        <img className="tooltipIcon"
                                             src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                             data-tippy-content="Number of user accounts on your plan"/>
                                    </span>
                                </div>

                                <span>1 included<br/> $18/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>0 included<br/> $12/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span>10</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle storageSyncronization rotate">Storage Syncronization
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> every 15 minutes</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>7 days</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Visual comparison tool&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/></span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$20/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span>4 hours<br/> turnaround</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    {/* third part mobileLittle */}
                    <div className="sectionPlans sectionPlansMobileLittle_noFirstPart">
                        <div className="colPlan microPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Micro</div>
                                <div className="contentItemPlan microPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">120</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan microPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">1200</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Small team, new business</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle basicFunctional rotate">
                     Basic DAM functionality
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle teamAndLibrary rotate">Your team and library
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span>10 included<br/> $18/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>15 included<br/> $12/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span>1</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle storageSyncronization rotate">Storage Syncronization
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs every<br/> 30 minutes</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 month</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$18/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* fourth part mobileLittle */}
                    <div className="sectionPlans sectionPlansMobileLittle_noFirstPart">
                        <div className="colPlan smallPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Small</div>
                                <div className="contentItemPlan smallPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">480</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan smallPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">4800</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Online retailers, established agencies</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">
                                Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                              <span className="detailTitle basicFunctional rotate">
                                 Basic DAM functionality
                              </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle teamAndLibrary rotate">Your team and library</span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span>50 included<br/> $15/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>50 included<br/> $10/mo each<br/> additional</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span>5</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle storageSyncronization rotate">Storage Syncronization
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs every<br/> 15 minutes</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>6 months</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>$15/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* fifth part mobileLittle */}
                    <div className="sectionPlans sectionPlansMobileLittle_noFirstPart">
                        <div className="colPlan mediumPlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Medium</div>
                                <div className="contentItemPlan mediumPlanMountly" >
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">840</span>
                                        <span className="perPlan">/mo</span>
                                    </div>
                                </div>
                                <div className="contentItemPlan mediumPlanYearly" style={{display: 'none'}}>
                                    <div className="pricePlan">
                                        <span className="currencyPlan">$</span>
                                        <span className="amountPlan">8400</span>
                                        <span className="perPlan">/yr</span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Medium team, established company</div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="signup">Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle basicFunctional rotate">
                     Basic DAM functionality
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle teamAndLibrary rotate">Your team and library
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span>100 included</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span>100 included</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span>10</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle storageSyncronization rotate">Storage Syncronization
                  </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs every<br/> 5 minutes</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>1 year</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                        <img
                                            className="tooltipIcon"
                                            src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                            data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                    </span>
                                </div>

                                <span>$10/1000<br/> images</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportMiddle} className="icon icon-support-middle" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportNone} className="icon icon-support-'none'" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* sixth part mobileLittle */}
                    <div className="sectionPlans sectionPlansMobileLittle_noFirstPart">
                        <div className="colPlan enterprisePlan">
                            <div className="cardPlan">
                                <div className="titleItemPlan">Enterprise</div>
                                <div className="contentItemPlan">
                                    <div className="pricePlan">
                                           <span className="amountPlan">
                                              <img src="https://landing-assets.pics.io/img/newlanding/building.svg"
                                                   alt="Enterprise plan"/>
                                           </span>
                                    </div>
                                </div>
                                <div className="descItemPlan">Get in touch with our Sales team to discuss specific
                                    needs
                                    of your organisation
                                </div>
                            </div>
                            <button type="button" className="btn" data-popup-opener="enterprise"
                                    style={{color: 'black'}}>Try it for Free
                            </button>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle basicFunctional rotate">
                     Basic DAM functionality
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksFunctional" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Uploading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="  Upload your assets into Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Searching&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Search for assets through your  library with keywords and other metadata"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Downloading&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Download assets from your Pics.io library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Version Control&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Keep more than one revision of a file, switch between  the revisions and approve the final version"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle teamAndLibrary rotate">Your team and library
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksTeamAndLibrary" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum size of the library, TB&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Total amount of space taken by all the assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Maximum number of assets in the library&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Number of assets in your library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span
                                            className="detailTitle">Number of teammates in the team included in the plan&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                 data-tippy-content="Number of user accounts on your plan"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Branded look and feel&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Customize your Pics.io account with  your own colors, identities and connect  domain name for system pages like login"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle sharingAndCollaboration rotate">Sharing and collaboration
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksSharingAndCollaboration" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Commenting&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Your teammates can leave comments  and visual marks on your assets"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of public Websites&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Turn any collection from your  library into a website to share  with non-Pics.io users"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Single asset<br/> sharing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Share to non-Pics.io users  any single asset from your library "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Number of inboxes&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Allow non-Pics.io users to upload  new files into the separate  workspace within your library."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportUnlimited} className="icon icon-support-unlimited" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle storageSyncronization rotate">Storage Syncronization
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksStorageSyncronization" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Manual&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Manual synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Accessible<br/> at any time</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Automatic synchronization between  the connected storage and  your Pics.io library"/>
                                        </span>
                                </div>

                                <span>Occurs in<br/> real-time</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle analytics rotate">Analytics &amp; reporting </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerBlocksAnalytics" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Activity Logs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="The time period for keeping the  data about your activity within the system"/>
                                        </span>
                                </div>

                                <span>3 years</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Storage&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on your storage usage"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Library&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the library is transformed"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Websites&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Reports on the number of visitors  and assets downloaded on websites"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Teammate&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the user's  activity within the account"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Team&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on the team  activity within the library"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Asset&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Statistics on how the asset  was used within the system"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Visual comparison tool&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Visually compare various  revisions of the same asset in Pics.io"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle metadataManagement rotate">Metadata management
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerMetadataManagement" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Metadata fields management&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Change the default  metadata of your assets "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">EXIF/IPTC/XMP metadata reading &amp; writing&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Capture the EXIF/IPTC/XMP  metadata within the digital asset,  and in case of changes save updated  meta information back to the original file"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Custom fields schema&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create your own custom fields  depending on your team workflow."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Automatic AI keywording for images&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Automatically attach keywords for  images using the computer vision.  This function is free for the  first 1000 images."/>
                                        </span>
                                </div>

                                <span>The cheapest<br/> AI keywording</span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                            <span className="detailTitle support rotate">Support </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerSupport" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online knowledge base&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="24/7 online access  to HelpCenter articles "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Email&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the email"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Online chat&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Qualified customer support  through the online chat"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Customer success manager&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual support by  customer success manager "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Personal support engineer&nbsp;
                                            <img
                                                className="tooltipIcon"
                                                src="../landing-assets/img/picsio/pricing/icon-tooltip.svg" alt=""
                                                data-tippy-content="Individual technical support"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                        </div>
                    </div>
                    <div className="sectionPlansDetail sectionPlansDetailMobileLittle">
                        <div className="detailItemSummary">
                  <span className="detailTitle thirdPartyService rotate">Integration with 3rd party tools and services
                  </span>

                            <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                        </div>
                        <div className="innerBlocks innerThirdPartyService" style={{display: 'none'}}>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Drive&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with  Google Drive storage space "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Amazon S3&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integration with Amazon storage space "/>
                                        </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Slack&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Get notifications on your  account changes within  the Slack team messenger."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zapier&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your Pics.io account  with your other favorite apps (Dropbox, Hubspot CRM, Facebook, etc.)  using Zapier app"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Webhooks&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Configure webhook URLs for  particular events happening  in your digital library and get  notifications to the required app."/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Docs&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into your  Google Docs and illustrate the shared document "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Spreadsheets&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library right into  your Google Sheets and illustrate  the shared spreadsheet "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Forms&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your media library into Google Forms  and illustrate the shared survey "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Google Slides&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Embed visual content from  your Pics.io media library  right into your Google Slides"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Photoshop&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your shared library  and Photoshop workspace "/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Illustrator&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Create a convenient shortcut  between your digital library and  Adobe Illustrator design workspace"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe Premiere Pro&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Integrate your digital library  in Pics.io with the leading  video editing software  - Adobe Premiere Pro"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Adobe After Effects&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Find &amp; reuse your media  files without leaving Adobe CC  using Pics.io plug-in for  Adobe After Effects"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                        <span className="detailTitle">Zoho CRM&nbsp;
                                            <img className="tooltipIcon"
                                                 src="../landing-assets/img/picsio/pricing/icon-tooltip.svg"
                                                 alt=""
                                                 data-tippy-content="Easily attach digital assets from your Pics.io library to specific leads in Zoho CRM"/>
                                        </span>
                                </div>

                                <span><img src={iconSupportFull} className="icon icon-support-full" alt=""/></span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Wordpress </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                            <div className="detailItemInner">
                                <div className="detailTitleBlock">
                                    <span className="detailTitle">Shopify </span>
                                </div>

                                <span>Coming soon</span>

                            </div>
                        </div>
                    </div>
                    {/* Media blocks */}
                    <Testimonial />
                    <Faq />
                    <Signup />
                </div>
            </div>
            <Footer />
            <Cookies />
        </main>
    )
}

export default Main;
